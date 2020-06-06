<template >
  <div class="Container">
    <h1>Tesggte</h1>
    <li v-for="(item,index) in array" :key="index">
      {{item.nome}} {{item.idade}} {{item.sexo}} {{index}} {{item.id}}
    </li>
  <h1 v-model:"x">Total somatorio de idade :{{x}} </h1>
    <button type="button" @click="mudar_idade(x)">Vitoria idade</button>
    <button type="button" name="button"></button>
    <h1>{{y}}</h1>
  </div>


</template>

<script>
export default {
  name:'Teste',
  y:null,
  data(){

    return{
      x:null,
array:[
  {nome:'Iaggo', idade:23, sexo:'masculino', id:'1'},
  {nome:'Leandro', idade:22, sexo:'masculino', id:'2'},
  {nome:'Vitoria', idade:21, sexo:'feminino', id:'3'},
]
    }
  },
  methods:{
    mudar_idade(){
      var x=0;
      this.array.pop();
this.array.forEach((item, i) => {
  x = x + item.idade


});
alert(x)
return x


  }
}
}
</script>

<style  scoped>
h1{
  text-align: center;
}
li{
  text-align: center;

}
button{
  margin: 70px;
  text-align: center;
}
</style>
