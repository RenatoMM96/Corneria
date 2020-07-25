<template >
  <div class="container">
    <h1>{{nome}}</h1>
    <li v-for="(item,index) in array" :key="index">
      {{item.nome}} {{item.idade}} {{item.sexo}} {{index}} {{item.id}}
    </li>
  <h1 v-model:"x">Total somatorio de idade :{{x}} </h1>
    <button type="button" @click="mudar_idade(x)">Vitoria idade</button>
    <button type="button" @click="calcular()">Favor manda alerta</button>

    <button type="button" name="button"></button>
    <h1>{{y}}</h1>
    <div class="container">
      <input type="number" name="" v-model="ss">
      <button type="button" name="button" @click="first.calcular()">calcular</button>
      <button type="button" name="button" @click="funcao1()">1</button>
      <button type="button" name="button" @click="funcao2()">2</button>


    </div>

  </div>


</template>
<script src="./first.js"></script>
<script>
import first from './first'
import firebase from 'firebase'
import db from '@/firebase/init'
export default {
  name:'Teste',



  data(){

    return{
      nome:null,
      x:null,
      ss:null,
      y:null,
array:[
  {nome:'Iaggo', idade:23, sexo:'masculino', id:'1'},
  {nome:'Leandro', idade:22, sexo:'masculino', id:'2'},
  {nome:'Vitoria', idade:21, sexo:'feminino', id:'3'},
]
    }
  },
  mounted(){


    // Recuperando todas as informações do usuario autenticado
    // poré so interessa descobrir o id do usuarios (uid)
    let user = firebase.auth().currentUser

    // Procurando as informções auxiliares do Usuário
    db.collection("users").where("user_id", "==",user.uid).get()
    .then(snapshot => {
      snapshot.forEach((doc) => {
        let usuario = doc.data();
        this.nome = usuario.nome

      });
    })



  },
  methods:{
    funcao1(){
      var res;
      var numb1 = 1;
      var numb2 = 1;
      res = numb1-numb2;
      alert('função 1 funcionando');
      alert(res)
      return res;
    },
    funcao2(){
      this.funcao1();
      alert(funcao.res)

      alert('função 2 funcionando');
    },


        calcular2(ss){
    // var resultado = null;
    // if (ss <= 3) {
    //   resultado = "bebe"
    // }else if(ss <= 12){
    //     resultado = "criança"
    // }else if (ss < 18){
    //   resultado = "adolescente"
    // }else {
    //   resultado = "adulto"
    // }
        switch(resultado) {
      case "bebe":
      alert("sou um bebe")
        // code block
        break;
      case "criança":
      alert("sou uma criança")
        // code block
        break;
        case "adolescente":
        alert("sou um adolescente")
          // code block
          break;
          case "adulto":
          alert("sou um adulto")
            // code block
            break;

      default:
      alert("campo com valores invalidos")
        // code block
    }
  },
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
.container{
text-align: center;
}
form{
  text-align: center;
}
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
