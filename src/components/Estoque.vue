<template lang="html">
  <div class="component-wrapper">

    <GChart
 type="ColumnChart"
 :data="chartData"
 :options="chartOptions"
/>
<div class="dados" v-for="dado in batata" :key='dado.id'>

  <h4>Dados Para calculos</h4>
  <h5>Item Batata</h5>
  <h5>Estoque Atual = {{estoque}}</h5>
  <h5>Consumo = {{dado.Consumo}}</h5>
  <h5>Fator de segurança k = {{dado.K}}</h5>
  <h5>Quantidade comprada Q = {{q}}</h5>
  <h5>Custo C  = {{c}}</h5>
  <h5>Tempo de reposição TR = {{tr}}</h5>
  <h5>Consumo = {{consumo}}</h5>
</div>

  <div class="dados">
    <h4>Dados Calculados</h4>
    <h5>Item Batata</h5>
    <h5> Estoque Mínimo = {{estoque_minimo}}</h5>
    <h5> Estoque Médio = {{estoque_medio}}</h5>
    <h5> Ponto de resuprimento = {{ponto_resuprimento}}</h5>
    <h5>Lote Econômico de Compra = {{lote_economico_compra}} </h5>
    <h5>Estoque Máximo = {{estoque_maximo}} </h5>

  </div>

  </div>
</template>

<script>
import { GChart } from 'vue-google-charts'
import db from '@/firebase/init'
  export default {
    name:'Estoque',
    components: {
      GChart
},
    data(){

      return{
        batata:[],
        estoque:null,
        consumo:500,
        k: 1,
        q:100,
        c:5, // custo do produto
        tr:2,
        a:0.001, // custo da aquisição do pedido, deixarei baixo, pois não considero que exista custo relevantes por pedido.
        d:10, // demanda, medida atraves da compra do periodo imediatamente anterior, sendo o periodo a frequencia de compra
        e:0.001, // custo da de estocagem  do produto, para secos, deixarei baixo, pois não conseidero ter custos relevantes
        // porem para congelados é importante considerar o gasto eletrico, que será proporcional, ao volume que ocupa no congelador
        // pelo consumo eletrico para esse refrigerador
        estoque_minimo:null,
        estoque_medio:null,
        ponto_resuprimento:null,
        lote_economico_compra:null,
        estoque_maximo:null,

        /*
        PR → Ponto de resuprimento.  PR = C x TR + Emn
        Consumo → Consumo médio mensal.
        TR → Tempo de reposição.
        Emn →  estoque mínimo. Emn = Cm *	K
        Emx → Estoque máximo.  Emx = Emn + Lote de compra
        LEC  → Lote econômico de compras.
        D → Demanda Anual
        A → Custo de aquisição do pedido.
        E → Custo de estocagem anual.
        C → Custo do produto.
        Eme → Estoque médio.
        Q → Quantidade de comprada.
        */

        chartData: [
        ['Produto','Estoque Mínimo', 'Estoque de operação', 'Potencial estocagem ideal'],
        ['Batata', 500, 500, 1200],
        ['File mignon', 1170, 460, 250],
        ['Arroz', 660, 1120, 300],
      ],
      chartOptions: {
        width: 600,
        height: 400,
        legend: { position: 'top', maxLines: 3 },
        bar: { groupWidth: '15%' },
        isStacked: true,
        chart: {
          title: 'Estoques',
          subtitle: 'Estoque atual',
        }
      }
    }
  },
  methods:{
    // estoque minimo
     emn(consumo,k){
        return consumo * k
      },

    // estoque medio
    eme(q,emn){
      let eme = q/2 + emn;
      return eme;
    },
    //ponto resuprimento
    //PR = C x TR + Emn
    pr(c,tr,emn){
      var pr = c * tr + emn // pelo que eu entendo, esse c e o tr, eles garantem que meu ponto do pedido sempre superior ao estoque mínimo.
      // e acaba funcionando como balança, caso o produto, tenha um preço muito elevado, ou o tempo de reposição seja muito alto, então ele
      // aumenta o valor para o ponto do pedido. No meu ver, a formula deveria ser diferente, deveria ser interpretado, de quantos dias de antecedencia
      // eu devo ter, antes de atingir o estoque mínimo,e deveria ser calculada como demanda para os proximos x dias e ser calculada assim
      // tr+ qtde_dias_de_segurança * demanda_diaria_dos_dias_segurados+ emn
      return pr
    },
    // Lote economico de compras
    lec(d,a,e,c){

      var lec = Math.sqrt((2*d*a)/(e*c))
      return lec
    },
    //estoque maximo
    emx(emn,lec){
    var  emx = emn + lec;
    return emx
    },

  },
    mounted(){
      var estoque_atual = 500;
      var info =[];
      db.collection('estoque').get().then(snapshot=> {
        snapshot.forEach(doc => {
          let dados = doc.data();
          dados.id = doc.id;
          estoque_atual = estoque_atual - dados.Consumo
          this.estoque = estoque_atual;
         this.batata.push(dados)



        });

      })
for (var i = 0; i <= this.batata.length; i++) {

   info = this.batata;
  console.log(info);
  var emn = this.emn(this.consumo,this.k);
  var eme = this.eme(this.q,emn);
  var pr = this.pr(this.c,this.tr,emn);
  var lec = this.lec(this.d,this.a,this.e,this.c);
  var emx = this.emx(emn,lec);
}




    this.estoque_minimo = emn;
    this.estoque_medio = eme;
    this.ponto_resuprimento = pr;
    this.lote_economico_compra = lec;
    this.estoque_maximo = emx;
  }
}

</script>
<style lang="css">
.dados{
  display: block;
  width: 500px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
}
</style>
