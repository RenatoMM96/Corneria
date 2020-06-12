<template lang="html">
  <div class="container">
    <h1>Usuario:{{nome}}</h1>
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
        nome:null,

      }
    },
      mounted(){
      this.nome = firebase.auth().currentUser.email

    },
    methods:{
      sairfuncao(){
        alert("funçao executada")
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
