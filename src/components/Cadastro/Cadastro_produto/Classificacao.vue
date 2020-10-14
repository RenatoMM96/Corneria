<template lang="html">
  <div class="component-wrapper">
    <Tabs v-bind:sel_classificacao="true"></Tabs>

    <form class="" action="index.html" method="post">
      <label for="grupo">Grupo</label>
      <input type="text" name="grupo" v-model="grupo">
      <label for="sub_grupo">sub_grupo</label>
      <input type="text" name="sub_grupo" v-model="sub_grupo">
      <div class="nome">

        <select class="nome2" name="sub_grupo2">
            <option value="teste1">teste1</option>
            <option value="teste2">teste2</option>
            <option value="teste3">teste3</option>

        </select>
      <span class="material-icons">add</span>
      </div>
      <label for="sub_grupo">Marca</label>
      <input type="text" name="sub_grupo" v-model="Marca">
      <button type="button" name="button" @click="salvar_prato">Salvar</button>
    </form>
  </div>
</template>

<script>
import Tabs from '@/components/Cadastro/Cadastro_produto/Tabs'
  export default {
    name:'Classificacao',
    components:{
      Tabs
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
.nome{
  position: relative;
  display: inline-flex;
  height: 24px;
  width: 100px;
  overflow: hidden;
  border-radius: 4px;
  padding-left: 6px;
  margin-right: 0px;
  background-color: blue;
}
select{
  background-color: #f1f1f1;
  margin-right: 0px;
  width: 100%;
  border-width: 0;
  cursor: pointer;
  outline: 0;
  background-image: none;
  -webkit-appearance: none;
  -moz-appearance:    none;
  -ms-appearance: none;
  appearance:         none;
}
/* Parte onde fica a ceta */
.nome::after{
  /* codigo universal da ceta */
  content: '\25Bc';
  position: absolute;
  pointer-events:none;
  top: 0px;
  right: 0px;
  padding: 2.5px;
  bottom: 0px;
}
select::-ms-expand{
  display: none;
}

span{
  padding: 0px;
  margin: 0px;
  position: relative;
  display: inline-flex;
  vertical-align: middle;
  background-color: #f1f1f1;
}
</style>
