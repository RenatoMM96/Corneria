<template >
  <div>
    <div class="second_nav">
      <div >
        <input type="text" class="input1" v-model="t1" placeholder="Pesquisar uma mesa">
        <button name="button" @click="adicionar_identificador2(t1)"class="material-icons botao">search </button>
      </div>
      <ul>
        <li >
          <button class="botao" type="button" name="button">
            <span class="material-icons md-40-light">add</span>
            <span>Adicionar</span>
            </button>
        </li>
        <li >
          <button class="botao" type="button" name="button">
            <span class="material-icons md-40-light">sync_alt</span>
            <span>Trocar</span>
            </button>
        </li>
        <li >
          <button class="botao" type="button" name="button">
            <span class="material-icons md-40-light">merge_type</span>
            <span>Juntar</span>
            </button>
        </li>

        <li >

          <button class="botao" type="button" name="button">
            <span class="material-icons md-40-light">clear</span>
            <span>Excluir</span>
            </button>

        </li>
      </ul>
</div>
 <div class="container">
        <input type="text" class="input1" v-model="t1" placeholder="Coloque um número para a mesa">
        <button name="button" @click="adicionar_identificador2(t1)"class="material-icons botao">navigate_next </button>
    </div>
      <!-- <div class="container">
        <input type="text" class="input1" v-model="t1" placeholder="Coloque a primeira mesa">
        <h4>Juntar com :</h4>
          <input type="text" class="input1" v-model="t2" placeholder="Coloque a segunda mesa ">
        <button name="button" @click="juntar_identificador(t1,t2)"class="material-icons botao">navigate_next </button>

       -->






    <h1>Abertas</h1>
    <ul  v-for="(atributo,index) in mesa">
      <li>
        <div class="card" @dblclick="comanda(atributo.identificador)" >
            <h4 >{{atributo.identificador}}</h4>
          </div>
      </li>
    </ul>
    <!-- <ul  v-for="(atributo,index) in mesa">
      <li>
            <span>{{atributo.id}} <br /></span>
      </li>
    </ul> -->


  </div>

</template>

<script>
import db from '@/firebase/init'
export default {
  name:'Pdv',
  data()
  {


return{
  t1:null,
  t2:null,
  mesa:[],
  t3:'1',
}
},
methods:{
  //Criando metado adicionar_identificador

  adicionar_identificador(t){
  db.collection('mesa').add({
    identificador: this.t,
  }).then(()=>{
    alert('Mesa criada com sucesso')
    location.reload();
  }
).catch(err=>{
  console.log(err)
})
},

adicionar_identificador2(t1){
db.collection('mesa').doc(this.t1).set({
  identificador: this.t1,
}).then(()=>{
  alert('Mesa criada com sucesso')
  location.reload();
}
).catch(err=>{
console.log(err)
})
},
comanda(identificador){
  this.$router.push({ name: 'Mesa', params:{mesa:identificador}})
},

// criando metado juntar_identificador

juntar_identificador(t1,t2){

db.collection('mesa').doc(this.t2).set({
  identificador: this.t1,
});
alert('Mesa '+ this.t1 +' trocada por '+ this.t2)
},
excluir_identificador2(t1){
// selecionando o documento e excluindo
//---------------------------- aperfeiçoar, para não ter q fazer reload-----------------------------------------
    let excluir = db.collection('mesa').doc(this.t1).delete().then(()=>{
      location.reload();


    // this.mesa = this.mesa.filter(curso=>{
    // return curso.id != id
  }).catch(err=>
  console.log(err))

  }
  },
  // recuperando dados do firebase
created(){
  db.collection('mesa').get().then(snapshot=>{
    snapshot.forEach(doc => {
      let identificador = doc.data()
      identificador.id = doc.id
      this.mesa.push(identificador)
      console.log(identificador);

    });

  })
}


}

</script>

<style scoped>
.card {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #009688;
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;




}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 #000000;
}


/* Add some padding inside the card container */

.material-icons.md-40-light {
  text-align: center;
  vertical-align: middle;
  z-index: 2;
  color: rgba(255, 255, 255, 1);
  font-size: 40px;
}
li{
  text-align: center;
  display: inline-block;
  }
ul{
  display:inline-block;
  max-width: 100%;

}
.botao{
  background-color:  #3F51B5;
  border: 0px;
  border-radius: 7px;
  color: white;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  z-index: 1;
  outline: none;
}
.second_nav{
  text-align: center;
  width: 100%;
  height: 25%;
  z-index: 0;
}
.container{
  position:relative;
  display:grid;
  grid-template-columns: 25% 7%;
  grid-column-gap: 5%;
  justify-content: center;
  vertical-align: middle;
}
h1{
  text-align: center;
}

.input1{

  border:none;
  border-radius: 3%;
  background-color: inherit;
  border-bottom: 1.5px solid  #3F51B5;
  outline: none;
}
</style>
