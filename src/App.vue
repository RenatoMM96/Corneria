<template>
  <div id="app">
    <SideMenuBlack/>
    <router-view/>
  </div>
</template>

<script>
import SideMenuBlack from "@/components/SideMenuBlack"
export default {
  name: 'App',
  components:{
    SideMenuBlack,
  }
}
</script>

<style>
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
.botao:hover {
  box-shadow: 0 8px 16px 0 #000000;
}
.erro{
  color: red;
  text-align: center;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;

}
</style>
