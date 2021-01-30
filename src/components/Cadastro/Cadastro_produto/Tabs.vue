<template lang="html">
  <div class="component-wrapper">
    <div class="tab" >
      <h2>{{titulo}}</h2>
      <div v-for="aba in abas" :index="index" >
        <router-link :to="{ name: aba.rota,}">
          <div v-bind:class="{ativo: aba.classe}">{{aba.nome}}</div>
        </router-link>
      </div>
    </div>
    <hr>
      <br />
  </div>
</template>

<script>
  export default {
    name:'Tabs',
    props:['sel_geral','sel_tributacao','sel_classificacao','sel_fornecedores'],
    data(){
      return{
        titulo: "Cadastro de Produto",
        sel_geral: null,
        sel_tributacao:null,
        sel_classificacao:null,
        sel_fornecedores:null,
        inativo: false,
        abas:[
          {rota:'Geral', nome:'Geral', classe:this.sel_geral},
          {rota:'Tributacao', nome:'Tributação', classe:this.sel_tributacao},
          {rota:'Classificacao', nome:'Classificação', classe:this.sel_classificacao},
          {rota:'Fornecedores', nome:'Fornecedores', classe:this.sel_fornecedores},
        ],
      }
      },
  methods:{
  abrir_subpagina(){

    botao_tab = document.getElementsByClassName("botao_tab");
    for (i = 0; i < botao_tab.length; i++) {
      botao_tab[i].className = botao_tab[i].className.replace(" text-danger", "");
}
  document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
  }

  }
</script>

<style lang="css">
div{
  display: inline;
}
 .ativo{
   position: relative;
   border-radius: 5px;
   padding:15px;
   background-color: #BDBDBD;
}

a{
    margin-left: 2%;
    text-decoration: none;
    color: #212121;

}
a:hover{

  color: #3b3b3b;
}
hr{
  color: #BDBDBD;
}
</style>
