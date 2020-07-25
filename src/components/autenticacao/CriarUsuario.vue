<template lang="html">
  <div class="">


  <title>Login</title>
  <div class="card">
    <div class="main-div">
      <h3>Criar Usuário</h3>
      <input type="email"  v-model="nome"  placeholder="Nome">
      <label for="select">Perfil</label>
      <select class="" v-model="perfil">
        <option value="gerente">Gerente</option>
        <option value="garcom">Garçom</option>
        <option value="cozinha">Cozinha</option>

      </select>
      <input type="email"  v-model="email" placeholder="Email....">
      <input type="password"  v-model="password"placeholder="Senha....">
      <p v-if="feedback"class="erro">{{feedback}}</p>
      <button type="button" name="button" @click="signup">Criar Usuario</button>
    </div>
    </div>
  </div>

</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase'

export default {
  name:'CriarUsuario',
  data(){
    return{
      email: null,
      password: null,
      feedback: null,
      perfil:null,
      nome:null,
    }

  },

methods:{
  signup(){
    if (this.email && this.password) {
      // sugyfy
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      .then(cred=>{
        db.collection('users').doc(cred.user.uid).set({
          nome:this.nome,
          email:this.email,
          senha:this.password,
          perfil:this.perfil,
          user_id:cred.user.uid,
        })

      }).then(()=>{
        this.$router.push({name:'Pdv'})
      })  .catch(err=>{
        console.log(err)
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
}
.main-div{
  width: 100%;
  margin: 5px;
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
  padding-top: 10px;
  padding-bottom: 10px;
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
.card{
  display: flex;
  align-items: center;
  width: 300px;
  max-height: 5000px;
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
</style>
