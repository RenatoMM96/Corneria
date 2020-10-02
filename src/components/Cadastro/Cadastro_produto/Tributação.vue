<template lang="html">
  <div class="component-wrapper">
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
  export default {
    data(){

    }
    return{
      ncm:null,
      cest:null,
      origem:null,
      cst:null,
    }
    mounted() {
      console.log('New component mounted.')
    }
  }
</script>

<style lang="css">
</style>
