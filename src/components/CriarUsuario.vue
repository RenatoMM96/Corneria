<template lang="html">
  <div class="">


  <title>Login</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Orbitron&display=swap">
  <div class="main-div">
    <h3>Criar Usuário</h3>
    <input type="email" name="" v-model="email" value="" placeholder="Email....">
    <input type="password" name="" value="" v-model="password"placeholder="Senha....">
    <p v-if="feedback"class="red-text">{{feedback}}</p>
    <button type="button" name="button"v-on:click="signup">Logar</button>
  </div>
  </div>
</template>

<script>
import db from '@/components/firebase/init'
import firebase from 'firebase'

export default {
  name:'CriarUsuario',
  data(){
    return{
      email: null,
      password: null,
      feedback: null,
    }

  },

methods:{
  signup(){
    if (this.email && this.password) {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      .then(cred=>{
        db.collection('users').doc().set({
          geolocation:null,
          user_id:cred.user.uid,
          senha:this.password,
          email:this.email,
        })

      }).then(()=>{
        this.$router.push({name:'Demostracao'})
      })  .catch(err=>{
        console.console.log(err)
        this.feedback = err.message;
      })

    }else{

      this.feedback='Você tem que preencher todos os campos'
    }

  }

}
}
</script>

<style lang="css" scoped>
body{
background: #fff;
padding: 0px;
margin: 0px;
font-family: 'Orbitron',sans-serif;
}
input,button{
  font-family: 'Orbitron',sans-serif;
}
.main-div{
  width: 20%;
  margin: 0px auto;
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 20px;
  font-size: 10px;
}
.main-div h3{
  text-align: center;
  font-size: 15pt;
}
.main-div input{

  display: block;
  border: 1px solid #ccc;
  border-radius: 5px;
  background:#fff;
  margin-bottom: 20px;
  padding: 10px;
  outline: none;
  width: 100%
}
.main-div input:focus{
  border: 1px solid #5d8ffc;
  transition: 0.3s;
  -webkit-transition:0.3s;
  -moz-transition:0.3s;
}
.main-div button{
  background: #5d8ffc;
  color: #fff;
  border: 1px solid #5d8ffc;
  border-radius: 5px;
  padding: 10px;
  display: block;
  width: 100%;
  transition: 0.3s;
  -webkit-transition:0.3s;
  -moz-transition:0.3s;

}
.main-div button:hover{
  background: #fff;
  color: #5d8ffc;
  border: 1px solid #5d8ffc;
}
</style>
