<template lang="html">
  <div class="component-wrapper">
    <Tabs v-bind:sel_tributacao="true"></Tabs>
    <form>
          <label for="">Ncm</label>
          <input type="text" name="" v-model="ncm">
          <label for="">Cest</label>
          <input type="text" name="" v-model="cest">
          <label for="">Origem</label>
          <input type="text" name="" v-model="origem">
          <label for="">Cst</label>
          <input type="text" name="cst" v-model="cst">
    </form>
  </div>
</template>

<script>
import Tabs from "@/components/Cadastro/Cadastro_produto/Tabs"

  export default {
    name:'Tributacao',
    components:{
      Tabs,
    },
    data(){
    return{
      ncm:null,
      cest:null,
      origem:null,
      cst:null,
    }
  }

  }
</script>

<style lang="css">
</style>
