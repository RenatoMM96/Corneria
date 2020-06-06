<template >
  <div class="container">

    <div class="card">
<h1>Pagamento   Mesa :{{this.mesa}}</h1>

<form class="" action="index.html" method="post">
<div class="valor">
<input type="text" v-if="nao_checado" :value="this.total"  placeholder="Valor" :disabled="nao_checado">
<input type="text"v-else="valor_pago">
<input type="checkbox"  v-model="nao_checado" ><label >Pagar total<br /></label>
<label><br/>Gorjeta<br /></label>
<input type="text" :value="gorjeta" placeholder="Valor Proporcional" :disabled="!checar">
<input type="checkbox"  v-model="checar"><label >Alterar Valor<br /></label>
</div>
<label>Forma:</label>
<select>
  <option v-for="(metados,index) in ingredientes" :key="index+1">{{metados}}</option>
</select>
<br>
<label>Observação</label>
<input type="areatext">

</form>
<button type="button" class="botao"@click="cancelar">Cancelar</button>
<button type="button" class="botao" @click="confirmar">Finalizar</button>
    </div>

  </div>
</template>

<script>
import db from '@/firebase/init'
  export default {
        name:'Pagamento',
        props:['mesa','total'],
    data() {

      return{
        nao_checado:false,
        valor_pago:null,
        desconto:null,
        checar:false,
        gorjeta:null,
        ingredientes:["Crédito", "Débito", "Dinheiro","Vale Refeição", "Outros"],
      }
    },
    methods:{
      calcular_gorjeta(valor_pago){
        if (valor_pago) {
          gorjeta = valor_pago*0.1;

        } else {
          gorjeta = this.total;

        }
      },

      confirmar(){
        alert('Falta progamar pagamento')
      },

      cancelar(){
        alert('Pagamento cancelado com sucesso')
        this.$router.push({name:'Pdv'})
      }

  },

 }
</script>

<style scoped>
.container{
  text-align: center;
}
.card{
  width: 400px;
  height: 500px;
  margin: auto;
  text-align: center;
  border: 0px;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}


</style>
