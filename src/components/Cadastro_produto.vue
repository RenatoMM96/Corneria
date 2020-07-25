<template lang="html">
  <div class="Geral">
    <form class="ajuste" action="index.html" method="post">
      <label for="">Nome</label>
      <input type="text" name="" v-model="nome">
      <label for="" >Codigo</label>
      <input type="text" name="" v-model="cod">
      <label for="">Unidade Padrão</label>
      <input type="text" name=""  v-model="unidade_padrao">
      <label for="">Ncm</label>
      <input type="text" name="" v-model="ncm">
      <label for="">Cest</label>
      <input type="text" name="" v-model="cest">
      <label for="">Origem</label>
      <input type="text" name="" v-model="origem">
      <label for="">Cst</label>
      <input type="text" name="cst" v-model="cst">
      <label for="grupo">Grupo</label>
      <input type="text" name="grupo" v-model="grupo">
      <label for="sub_grupo">sub_grupo</label>
      <input type="text" name="sub_grupo" v-model="sub_grupo">
      <button type="button" name="button" @click="salvar_prato">Salvar</button>
    </form>
  </div>
</template>

<script>
import db from '@/firebase/init'
  export default {
    name:'Cadastro_produto',
    data(){
      return{
        cod:'2',
        nome:null,
        unidade_padrao:null,
        ncm:null,
        cest:null,
        origem:null,
        cst:null,
        grupo:null,
        sub_grupo:null,
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
</style>
