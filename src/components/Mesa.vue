<template >
  <div class="container">
    <div class="card">
<div class="item">
  <h3>Mesa número {{this.mesa}}</h3>
<form class="" action="index.html" method="post">
  <input class="input1"
   type="number" v-model="cod" placeholder="Codigo" value="cod"
   @keydown.tab.space.enter="prenche_produto">
 </input>
  <input type="search" v-model="produto" placeholder="Nome do Produto" value='produto'></input>
  <!-- <input type="number" v-model="qtde" placeholder="Quantidade" value={{qtde}}></input>  teste -->
  <br>
  <!-- coloquei array dentro de outro array -->
  <div v-for="propriedade in preenchimento">
  <label  v-for="ingrediente in propriedade.ingredientes">
  <input type="checkbox" checked="checked"></input>
  {{ingrediente}}
  </label>
  </div>
  <br>
  <input type="number" v-model="qtde"placeholder="Qtde">
  <input type="text" v-model="obs"placeholder="Observação">
  <button type="button" class="botao" @click="salvar_prato">Adicionar</button>
  <!-- <button type="button" class="botao" @click="listar_produtos">ver</button> -->
</form>
</div>
<table>
  <tr>
    <th>Cod</th>
    <th>Qtde</th>
    <th>Produto</th>
    <th>Observação</th>
    <th>Valor</th>
  </tr>
<tr v-for="carrinho in item_carrinho" :key="carrinho.id" @dblclick="editar_item">
<td>{{carrinho.cod}}</td>
<td>{{carrinho.qtde}}</td>
<td>{{carrinho.produto}}</td>
<td>{{carrinho.obs}}</td>
<td>R$ {{carrinho.valor}}</td>
</tr>
  </table>
<h3 class="total">Total: R$ {{total}}</h3>
</div>

  <button type="button" class="botao" @click="pagar">Pagar</button>
  <button type="button" class="botao">Imprimir</button>
  <button type="button" class="botao" @click="finalizar">Finalizar</button>


  </div>
</template>

<script>
import db from '@/firebase/init'
  export default {
        name:'Mesa',
        props:['mesa'],
    data() {

      return{
        // referente aos dados colocados
        preenchimento:[],

        //junção dos dados digitados com pratos existentes
        item_carrinho:[],

        cod:null,
        qtde:null,
        produto:null,
        obs:null,
        valor:null,
        total:null,
        ingredientes:[],
      }

    },
    created(){
        db.collection('mesa').doc(this.mesa).collection('laçamentos').get().then(snapshot =>{
        snapshot.forEach(doc => {
        let item_carrinho = doc.data();
        item_carrinho.id = doc.id
       //this.produto = preenchimento.titulo
          this.total = this.total + item_carrinho.valor
       this.item_carrinho.push(item_carrinho)

         })
       })
     },
    methods:{
      // Responsavel pela leitura inicial dos itens já lançados

      // prenche dados de acordo com a ficha tecnica
      prenche_produto(){
        if (this.cod) {
          db.collection('cardapio').where('cod','==',this.cod).get().then(snapshot=>{
             if (snapshot.empty) {
              alert('Codigo inválido');
              return;
            }snapshot.forEach(doc => {

              let preenchimento = doc.data();
              this.produto = preenchimento.titulo
              this.valor = preenchimento.valor
             this.preenchimento.push(preenchimento)
       });
     })
     .catch(err => {
       console.log('Error getting documents', err);
     });
        }
 },

 // grava os dados gravados no banco de dados
      salvar_prato(){
       db.collection('mesa').doc(this.mesa).collection('laçamentos').doc().set({
         identificador: this.mesa,
         cod: this.cod,
         qtde:this.qtde,
         produto:this.produto,
         obs:this.obs ,
         valor:this.valor*this.qtde,
       })
       alert('prato salvo com sucesso')
       created();
},

// vai para a tela das mesa
pagar(){
  this.$router.push({ name: 'Pagamento', params:{mesa:this.mesa, total:this.total}})
},
    // vai para a tela das mesa
    finalizar(){
  this.$router.push({name:"Pdv"})
},
// recupera os pedidos daquela mesa

   editar_item(){
     alert(this.item_carrinho[1].valor)
   },
 },

     }

</script>

<style scoped>
.container{
  text-align: center;

}
h3{
  color: white;
}
.card{
  width: 400px;
  height: 550px;
  margin: auto;
  text-align: center;
  border: 0px;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);


}
.item{
  background-color: #303F9F;
  border-radius: 5px;
  width:100%;
  height: 150px;
}
.total{
  color: black;
  margin-bottom:10px;
  text-align: right;
  margin-bottom: 1px;

}
.input1{

  border:none;
  color: white;
  border-radius: 3%;
  background-color: inherit;
  border-bottom: 1.5px solid  #009688;
  outline: none;
}
table{
  width:100%;
  background-color: #f7f7f7;
  border-spacing: 0;

}
th{
  border-bottom: 1.5px solid black;
}
td, tr{
  border: 0.5px;
  border-color: #fff;
}
tr:hover {background-color: #3F51B5;}
tr:nth-child(even) {
  background-color: #C5CAE9;
}
.botao{
  margin-top: 6px;
 padding: 10px 24px;
}

</style>
