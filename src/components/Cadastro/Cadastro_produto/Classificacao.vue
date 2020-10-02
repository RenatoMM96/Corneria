<template lang="html">
  <div class="component-wrapper">
    <form class="" action="index.html" method="post">
      <label for="grupo">Grupo</label>
      <input type="text" name="grupo" v-model="grupo">
      <label for="sub_grupo">sub_grupo</label>
      <input type="text" name="sub_grupo" v-model="sub_grupo">
      <label for="sub_grupo">Marca</label>
      <input type="text" name="sub_grupo" v-model="Marca">
      <button type="button" name="button" @click="salvar_prato">Salvar</button>


    </form>
    <p>I'm a new vue component.</p>
  </div>
</template>

<script>
  export default {
    data(){

    }
    return{
      marca:null,
      grupo:null,
      sub_grupo:null,
    }
    mounted() {
      console.log('New component mounted.')
    }
  }
</script>

<style lang="css">
</style>
