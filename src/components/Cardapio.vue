<template lang="html">
  <div class="component-wrapper">
    <div class="card" v-for="card in cards">
      <h1> {{card.titulo}}</h1>
      <h6>Codigo: {{card.cod}}</h6>
      <h3>Ingredientes:</h3>
      <ul>
        <li class="chip" v-for="ingredientes in card.ingredientes">{{ingredientes}}</li>
      </ul>
      <h5>Descrição:</h5>
      <p>{{card.descricao}}</p>
      <h5>Valor: {{card.valor}}</h5>
    </div>
  </div>
</template>

<script>
import db from '@/firebase/init'
  export default {
    name:'Cardapio',
    data(){

      return{
        cards:[]
  }
    },
    created(){
      db.collection('cardapio').get()
      .then(snapshot => {
        snapshot.forEach(doc => {

          let prato = doc.data()
          // prato.cod = mentira que irado doc.cod teste teletype 2
            console.log(prato.cod)
          this.cards.push(prato)
        })
      })
    },
}
</script>

<style scoped>
.card{
  margin-left: 50px;
  width: 500px;
  height: 400px;
  border: 0px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
}
.chip {
  display: inline-block;
  padding: 0 15px;
  margin: 5px;
  height: 40px;
  font-size: 16px;
  line-height: 40px;
  border-radius: 25px;
  background-color: #C5CAE9;
}
</style>
