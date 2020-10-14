<template lang="html">
  <div class="Geral">
    <form class="ajuste" action="index.html" method="post">
      <!-- geral -->
      <!-- Chama a tab e passa como parametro uma variavel para poder definir qual tab está acionada
     ideal seria poder alterar no array a tab que está selecionada -->
        <Tabs v-bind:sel_geral="true"></Tabs>
      <label for="">Descrição</label>
      <input type="text" class="descricao" v-model="nome">
      <br>
      <label for="" >Sku</label>
      <input type="text" name="" v-model="sku">
      <label for="">Unidade*</label>
      <input type="text" name=""  v-model="unidade_padrao">
      <label for="">Situação*</label>
      <select class="custom-select"v-model="selected">
      <option v-for="option in options">
        {{ option }}
      </option>
    </select>
    <br>
    <label for="">Preço De venda</label>
    <input type="number" name=""  v-model="preco_venda">
    <label for="">Peso líquido</label>
    <input type="number" name=""  v-model="peso_liquido">
    <label for="">Peso Bruto</label>
    <input type="number" name=""  v-model="peso_bruto">
      <!-- fim geral -->
    </form>

  </div>
</template>

<script>
import db from '@/firebase/init'
import Tabs from "@/components/Cadastro/Cadastro_produto/Tabs"
  export default {
    name:'Geral',
    components:{
      Tabs,
    },
    data(){
      return{
        sku:null,
        nome:null,
        unidade_padrao:null,
        options:["Ativo","Inativo"],
      }
    },
methods:{


    salvar_prato(){
     db.collection('produto').doc(this.cod).set({
       nome: this.nome,
       cod: this.cod,
       unidade_padrao:this.unidade_padrao,
       ncm:this.ncm,
       cest:this.cest ,
       cst:this.cst,
       origem:this.origem,
       grupo:this.grupo,
       sub_grupo:this.sub_grupo,
     })


}
  }
}
</script>

<style lang="css">
.ajuste{
  margin-left: 60px;
}
.tab{
  display: inline;
}
input{
  border-width: thin;
  height: 20px;
  border-radius: 5px;
  margin-top: 1%;
  margin-left: 1%;
  margin-right: 2%;
}
select{
  height: 20px;
  border-radius: 5px;

}
.descricao{
  width: 80%;
}
.custom-select {
    background-color: red;
}
</style>
