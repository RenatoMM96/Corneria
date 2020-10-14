<template lang="html">
  <div class="component-wrapper">
    <h1>Jogo da cobra</h1>
    <canvas id="stage" width="500" height="500"></canvas>
  </div>
</template>

<script>
  export default {
    name:'Cobrinha',
    data(){
      return{

      }
    },
    mounted() {
      var stage = document.getElementById('stage');
      var ctx = stage.getContext("2d");
      document.addEventListener("keydown", keyPush);
      setInterval(game,70);

    const vel = 1;
    // velocidade da cobra
    var vx = 0;
    var vy = 0;
    // cabeça da cobra
    var px = 10;
    var py = 10;
    // tamanho do quadrado
    var tp = 25;
    // qtde peça
    var qp = 20;
    //maça
    var ax = 15;
    var ay = 15;
    var trail = [];
    var tail = 5;

    function game(){
      // criando movimento da cobra
      px += vx;
      py += vy;

      // regras para atravesar parede
      if (px < 0) {
        px = qp -1;

      }
      if (px > qp - 1) {
        px = 0;

      }
      if (py < 0) {
        py = qp - 1;

      }
      if (py > qp - 1) {
        py = 0;

      }
      ctx.fillStyle = '#000';
      ctx.fillRect(0,0, stage.width, stage.height)

      // colocando a maça
      ctx.fillStyle = 'red';
      ctx.fillRect(ax*tp,ay*tp,tp,tp);

      // TODA VEZ PRECISA ZERAR NOVAMENTE


// pintando a calda
      ctx.fillStyle = 'gray';

      for (var i = 0; i < trail.length; i++) {
          ctx.fillRect(trail[i].x*tp,trail[i].y*tp,tp,tp);
        ctx.fillRect(trail[i].x*tp,trail[i].y*tp,tp,tp);
        // criando o game over
        if (trail[i].x == px && trail[i].y == py) {
          vx = vy = 0;
        }
      }
        trail.push({x:px,y:py})
        while (trail.length > tail) {
          trail.shift();

        }

        // fazendo a cobrar crescer qnd comer a maça
        if (ax == px && ay == py) {
          tail++;
          ax = Math.floor(Math.random()*qp);
          ay = Math.floor(Math.random()*qp);

        }

}
function keyPush() {
  switch (event.keyCode) {
    // botao para esquerda
    case 37:
    vx = -vel;
    vy = 0

    break;

  //botao p/ cima
    case 38:
    vx = 0;
    vy = -vel;

    break;
    //botao p/ direita
    case 39:
    vx = vel;
    vy = 0;

    break;
    //botao p/ cima
    case 40:
    vx = 0;
    vy = vel

    break;
    default:
  }
}
 }
 }
</script>

<style lang="css">
canvas{
}
.component-wrapper{
  text-align: center;
}
</style>
