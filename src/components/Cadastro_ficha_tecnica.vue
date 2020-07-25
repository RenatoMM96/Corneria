<template lang="html">
  <div class="component-wrapper">
      <form class="cria_prato" action="index.html" method="post">
        <label for="cod" >Codigo</label>
        <span>{{this.cod}}</span>
        <input type="text" name="cod" :value="id">
        <label for="titulo" >Título</label>
        <input type="text" name="titulo" v-model="titulo">
        <label for="descricao_prato">Descrição Prato</label>
        <input type="textarea" name="descricao_prato" v-model="descricao_prato">
        <label for="valor_de_venda">Valor de venda</label>
        <input type="text" name="valor_de_venda" v-model="valor_de_venda">
        <button type="button" name="button" class="botao" @click="salvar_prato">Salvar</button>
      </form>

      <form class="ajuste" action="index.html" method="post">
      <!-- Adicionar linha de instrução -->
      <label for="">Grupo</label>
      <input type="text" name=""  v-model="grupo">
      <label for="">Sub-grupo</label>
      <input type="text" name="" v-model="sub_grupo">
      <label for="">Item</label>
      <input type="text" name="" v-model="item">
      <label for="">Unidade</label>
      <input type="text" name="" v-model="unidade_padrao">
      <label for="">Peso Líquido</label>
      <input type="text" name="" v-model="peso_liquido">
      <label for="">Peso Líquido Operacional</label>
      <input type="text" name="" v-model="peso_liquido_operacional">
      <label for="">Peso Pronto</label>
      <input type="text" name="" v-model="peso_pronto">
      <label for="">Descrição</label>
      <input type="text" name="" v-model="descricao">
      <!-- <button type="button" name="button" @click="salvar_ficha">Salvar</button> -->
      <!-- acrescentar tempo -->
    </form>
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
      id:null,
      titulo:null,
      descricao_prato:null,
      valor_de_venda:null,

      grupo:null,
      sub_grupo:null,
      item:null,
      unidade_padrao:null,
      peso_liquido:null,
      peso_liquido_operacional:null,
      peso_pronto:null,
      descricao:null,

    }

  },
  methods:{
    salvar_prato(){
     db.collection('cardapio').doc(this.titulo).set({
       cod: this.id,
       titulo: this.titulo,
       descricao:this.descricao_prato,
       valor:this.valor_de_venda,

     })


}
  }
  }
</script>

<style lang="css">
.cria_prato{
  margin: 10px 250px 15px 50px;
  background-color: #3F51B5;
}
</style>
