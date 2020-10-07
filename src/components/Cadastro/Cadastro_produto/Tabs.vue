<template lang="html">
  <div class="component-wrapper">
    <div class="tab">
      <a href="javascript:void(0)" onclick="">Geral</a>
      <a href="javascript:void(0)" onclick="">Tributação</a>
      <a href="javascript:void(0)" onclick="">Classificação</a>
      <a href="javascript:void(0)" onclick="">Fornecedores</a>
    </div>
    <hr>
      <br />
  </div>
</template>

<script>
  export default {
    name:'Tabs',
    data(){
      return{

      }
    }

  }
</script>

<style lang="css">
.tab{
  margin-left: 60px;
}
a{
    margin-left: 2%;
    text-decoration: none;
    color: #212121;

}
a:hover{

  color: #3F51B5;
  border-bottom: 10px;
  border-color: green;

}
a:active{
  color: #FFFFFF;
}
hr{
  color: #BDBDBD;
}
</style>
