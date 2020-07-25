<template lang="html">
  <div class="container">
    <p>Saldo: R${{saldo}} </p>
<button type="button" name="button">Retirada</button>
<button type="button" name="button">Aporte</button>
<div class="movimentacao">
  <form class="" >
  <input type="number" name="valor" v-model="valor" placeholder="Valor">
  <input type="text" name="" value="usuario" disabled>
  <input type="text" name="" value="Data e hora" disabled>
  <br />
  <input type="text" name="" v-model="motivo" placeholder="Motivo">
  <button type="button" name="salvar" class="botao"@click="salvar(valor)">salvar</button>
  </form>
</div>

    <h3>Histórico</h3>
  </div>
</template>

<script>

  export default {
name:'Caixa',
data(){

  return{
    saldo:0,
    valor:null,
    motivo:null,
  }
},
methods:{
  salvar(valor){
this.saldo = this.saldo - valor
  }
},

    mounted() {

    }
  }
</script>

<style lang="css">
.container{
  text-align: center;
}
</style>
