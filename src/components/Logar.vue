<template lang="html">
  <div>
  <title>Login</title>
  <div class="card">


  <div class="main-div">
    <h3>Login</h3>
    <input type="email" name="" v-model="email" value="" placeholder="Email....">
    <input type="password" name="" value="" v-model="password"placeholder="Senha....">
    <b-alert v-if="feedback" variant="info" show>{{feedback}}</b-alert>
    <button type="button" name="button"v-on:click="signup">Logar</button>
    <router-link :to="{ name: 'CriarUsuario', params: {} }">
    Criar novo Usuário
    </router-link>
  </div>
  </div>

  </div>
</template>

<script>
import db from '@/components/firebase/init'
import firebase from 'firebase'

export default {
  name:'Logar',
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
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then(cred=>{
        db.collection('users').doc().set({
          geolocation:null,
          user_id:cred.user.uid,
          senha:this.password,
          email:this.email,
        })

      }).then(()=>{
        this.$router.push({name:'Demostracao'})
      })  .catch(error=>{
      //  console.console.log(error)
        this.feedback = error.message
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
}
.card{
  display: flex;
  align-items: center;
  width: 300px;
  height: 250px;
  margin:auto;
  margin-top: 10%;
  background-color: none;
  opacity: 0.75;
  border: 0.1px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px; /* 5px rounded corners */
  color: #292929;

}

.main-div{
  width: 100%;
  margin: 0px auto;
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 20px;
  font-size: 10px;
}
.main-div a{
  color: #292929;
  text-align: center;
  text-decoration: none;
}
.main-div a :hover{
  text-align: center;
  text-decoration: none;
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
