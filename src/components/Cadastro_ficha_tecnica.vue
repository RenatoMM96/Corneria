<template lang="html">
  <div class="component-wrapper">
      <form class="cria_prato" method="post">
        <label for="cod" >Codigo</label>
        <input type="text" name="cod" v-model="id" >
        <label for="titulo" >Título</label>
        <input type="text" name="titulo" v-model="titulo">
        <label for="descricao_prato">Descrição Prato</label>
        <input type="textarea" name="descricao_prato" v-model="descricao_prato">
        <label for="valor_de_venda">Valor de venda</label>
        <input type="text" name="valor_de_venda" v-model="valor_de_venda">
        <label for="tempo_de_preparo">Tempo</label>
        <input type="text" name="tempo_de_preparo" v-model="tempo_de_preparo">
        <button type="button" name="button" class="botao_verde" @click="salvar_prato">Salvar</button>
      </form>
      <form class="cria_ficha"  method="post">
        <h3>Acrescentar ou modificar etapa</h3>
      <!-- Adicionar linha de instrução -->
      <label for="ordem">Ordem</label>
      <input type="text" name="ordem" v-model="ordem">
      <label for="">Grupo</label>
      <input type="text" name="grupo"  v-model="grupo">
      <label for="">Sub-grupo</label>
      <input type="text" name="sub_grupo" v-model="sub_grupo">
      <label for="">Item</label>
      <input type="text" name="item" v-model="item">
      <label for="">Unidade</label>
      <input type="text" name="" v-model="unidade_padrao">
      <label for="tempo">Tempo</label>
      <input type="text" name="tempo" v-model="tempo">
      <label for="">Peso Líquido</label>
      <input type="text" name="peso_liquido" v-model="peso_liquido">
      <label for="">Peso Líquido Operacional</label>
      <input type="text" name="peso_liquido_operacional" v-model="peso_liquido_operacional">
      <label for="">Peso Pronto</label>
      <input type="text" name="peso_pronto" v-model="peso_pronto">
      <label for="">Descrição</label>
      <input type="text" name="descricao" v-model="descricao">
      <label for="item_alternativo">Item alternativo</label>
      <input type="text" name="" v-model="item_alternativo">
      <label for="item_alternativo2">Item alternativo 2</label>
      <input type="text" name="item_alternativo2" v-model="item_alternativo2">
      <label for="aparece_cliente">Aparece para o cliente</label>
      <input type="checkbox" name="aparece_cliente" v-model="aparece_cliente">
      <div class="botao_bola" id="ajuste1">
      <i class="material-icons md-36" @click="salvar_ficha">add</i>
      </div>
      <!-- <button type="button" name="button" @click="salvar_ficha">Salvar</button> -->
      <!-- acrescentar tempo -->
    </form>


        <table class="table">
      <thead class="table">
        <tr>
          <th>Ordem</th>
          <th>Sub-Grupo</th>
          <th>Item</th>
          <th>Un</th>
          <th>Tempo</th>
          <th>Peso Líq</th>
          <th>Peso Líq Op</th>
          <th>Peso Pronto</th>
          <th>Custo</th>
          <th>Descrição</th>
        </tr>
      </thead>
      <tbody>
   <tr v-for="(detalhe,index) in ficha_tecnica " :key="index" >
    <td>{{detalhe.ordem}}</td>
    <td>{{detalhe.sub_grupo}}</td>
    <td>{{detalhe.item}}</td>
    <td>{{detalhe.unidade_padrao}}</td>
    <td>{{detalhe.tempo}}</td>
    <td>{{detalhe.peso_liquido}}</td>
    <td>{{detalhe.peso_liquido_operacional}}</td>
    <td>{{detalhe.peso_pronto}}</td>
    <!-- puxar preço de outra banco -->
    <td>{{detalhe.preco}}</td>
    <td>{{detalhe.descricao}}</td>
    </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import db from '@/firebase/init'
  export default {
    nome:'Cadastro_ficha_tecnica',
    props: {
    cod: {
    default: null,
    type: String,
  }
},
    data(){
    return{
      //cadastro prato
      id:null,
      titulo:null,
      descricao_prato:null,
      valor_de_venda:null,
      tempo_de_preparo:null,
      // cadastro ficha tecnica
      ficha_tecnica:[],
      ordem:null,
      grupo:null,
      sub_grupo:null,
      item:null,
      unidade_padrao:null,
      tempo:null,
      peso_liquido:null,
      peso_liquido_operacional:null,
      peso_pronto:null,
      descricao:null,
      item_alternativo:null,
      item_alternativo2:null,
      aparece_cliente:null,
      ordenamento:[],
    }

  },
  mounted(){
  db.collection('ficha').doc(this.id).get().then(doc =>{
    let dados = doc.data()
    dados.ficha_tecnica.forEach((item, i) => {
    this.ficha_tecnica.push(item)
    });

  })
  },
  methods:{
    salvar_prato(){
     db.collection('cardapio').doc(this.id).set({
       cod: this.id,
       titulo: this.titulo,
       descricao:this.descricao_prato,
       valor:this.valor_de_venda,

     })

  },

  salvar_ficha(){
    if (this.id) {
    this.ficha_tecnica.push({
    cod: this.id,
    ordem:this.ordem,
    grupo:this.grupo,
    sub_grupo:this.sub_grupo,
    item:this.item,
    unidade_padrao:this.unidade_padrao,
    tempo:this.tempo,
    peso_liquido:this.peso_liquido,
    peso_liquido_operacional:this.peso_liquido_operacional,
    peso_pronto:this.peso_pronto,
    descricao:this.descricao,
    item_alternativo:this.item_alternativo,
    item_alternativo2:this.item_alternativo2,
    aparece_cliente:this.aparece_cliente,
  })
   db.collection('ficha').doc(this.id).set({
     ficha_tecnica:this.ficha_tecnica,

   })
   if (this.aparece_cliente) {
     this.ordenamento.push({ordem:this.ordem, item:this.item})
     alert(this.ordenamento.ordem)
     db.collection('cardapio').doc(this.id).set({
       ingredientes:this.ordenamento,
   }, { merge: true })

 }else {
   alert("algo deu errado")
 }
}else {
   alert("Erro ao recuperar o codigo do prato")
 }
      },
  }
}
</script>
<style scoped>
.cria_prato{
  color: #FFFFFF;
  margin: 10px 250px 0px 50px;
  background-color: #212121;
}
.cria_ficha{
  margin-top: 0px;
  color: #FFFFFF;
  margin: 0px 250px 0px 50px;
  background-color: #303F9F;
}
.cria_ficha h3{
  margin-top: 0px;
  padding-top: 5px;
}
.table{
  border-collapse: collapse;
  margin-left: 50px;
  width: 90%;
  height: 70px;
  text-align:center;
}
#ajuste1{
  margin-left: auto;
  margin-right: 5%;

}
td{
    border-bottom: 0.4px solid #ddd;
    /* top right bottom left */
    /* padding: 0px,5px,0px,15px; */
}
th{
  padding: 5px;
}

</style>
