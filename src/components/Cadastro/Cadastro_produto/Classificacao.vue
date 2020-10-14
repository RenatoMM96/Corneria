<template lang="html">
  <div class="component-wrapper">
    <Tabs v-bind:sel_classificacao="true"></Tabs>

    <form class="" action="index.html" method="post">
      <label for="grupo">Grupo</label>
      <SelectPlus></SelectPlus>
      <label for="sub_grupo">sub_grupo</label>
      <SelectPlus></SelectPlus>
      <label for="sub_grupo">Marca</label>
      <SelectPlus></SelectPlus>
      <button type="button" name="button" @click="salvar_prato">Salvar</button>
    </form>
  </div>
</template>

<script>
  import Tabs from '@/components/Cadastro/Cadastro_produto/Tabs'
  import SelectPlus from "@/components/Select_plus"

  export default {
    name:'Classificacao',
    components:{
      Tabs,
      SelectPlus,
    },
    data(){
      return{
        marca:null,
        grupo:null,
        sub_grupo:null,
      }
    },
  }
</script>

<style scoped>

</style>
