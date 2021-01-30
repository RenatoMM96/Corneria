<template lang="html">
  <div class="component-wrapper">
    <div class="ajuste">
    <div class="select_div">
      <select class="select_div_plus" name="sub_grupo2">
          <option value="teste1">teste1</option>
          <option value="teste2">teste2</option>
          <option value="teste3">teste3</option>
      </select>
    </div>
    <span class="material-icons" @click="teste">add</span>
    </div>
  </div>
</template>

<script>
  export default {
    name:'SelectPlus',
    data(){

      return{

      }
    },
    methods:{
      teste(){
        alert('Ta funcionado')
        }
    },
    mounted() {
    }
  }
</script>

<style scoped>
.ajuste{
  margin-right:2.3%;
  margin-left: 1%;
  vertical-align: middle;
  align-items: center;
}
.select_div{
position: relative;
display: inline-flex;
flex-direction: row;
justify-content: center;
height: 24.5px;
vertical-align: middle;
width: 126px;
overflow: hidden;
border-radius: 4px 0px 0px 4px;
padding-left: 6px;
margin-right: 0px;
background-color: #f1f1f1;
}
.select_div_plus{
  background-color: #f1f1f1;
  margin-right: 0px;
  width: 100%;
  border-width: 0;
  cursor: pointer;
  outline: 0;
  z-index: 0;
  background-image: none;
  -webkit-appearance: none;
  -moz-appearance:    none;
  -ms-appearance: none;
  appearance:         none;
}
/* Parte onde fica a ceta */
.select_div::after{
/* codigo universal da ceta */
background-color: #f1f1f1;
content: '\25Bc';
position: absolute;
pointer-events:none;
top: 0px;
right: 0px;
padding:2.5px;
bottom: 0px;
z-index: 2;
}
select::-ms-expand{
display: none;
}
span{
align-items: center;
height: 24.5px;
border-radius: 0px 4px 4px  0px;
padding: 0px;
margin-left: -5px;
position: relative;
display: inline-flex;
vertical-align: middle;
background-color: #f1f1f1;
}
span:hover{
  cursor: pointer;
}

</style>
