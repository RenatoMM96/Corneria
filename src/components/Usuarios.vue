<template lang="html">
  <div class="container">
    <h1>Usuario:{{nome}}</h1>
    <h3>Email:{{email}}</h3>
    <router-link :to="{ name: 'CriarUsuario', params: {} }">
    Criar novo Usuário
    </router-link>
    <h4 @click="sairfuncao">sair</h4>
  </div>
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase'
  export default {
    name:'Usuarios',
    data(){

      return{
        email:null,
        nome:null,

      }
    },
      mounted(){
        db.collection('users').doc(firebase.auth().currentUser.uid).get().then(doc => {
          if(doc.exists){
            let nome = doc.data();
            this.nome = nome.nome;
          } else {
            console.log('algo estranho aconteceu')
          }
        })
      this.email = firebase.auth().currentUser.email

    },
    methods:{
      sairfuncao(){
        firebase.auth().signOut().then(()=> {
        this.$router.push({name:'Logar'})
        })
      }
    }
    }
</script>

<style scoped>
.container{
  text-align: center;
}
h1{
  text-align: center;

}
</style>
