import Vue from 'vue'
import Router from 'vue-router'
import Pdv from '@/components/Pdv'
import Cardapio from '@/components/Cardapio'
import Mesa from '@/components/Mesa'
import Pagamento from '@/components/Pagamento'
import Teste from '@/components/Teste'
import CriarUsuario from '@/components/autenticacao/CriarUsuario'
import Logar from '@/components/autenticacao/Logar'
import Usuarios from '@/components/Usuarios'
import firebase from 'firebase'
import Cobrinha from '@/components/Cobrinha'
import Caixa from '@/components/Caixa'
import Estoque from '@/components/Estoque'
import Geral from '@/components/Cadastro/Cadastro_produto/Geral'
import Tributacao from '@/components/Cadastro/Cadastro_produto/Tributacao'
import Classificacao from '@/components/Cadastro/Cadastro_produto/Classificacao'
import Tabs from '@/components/Cadastro/Cadastro_produto/Tabs'
import Cadastro_ficha_tecnica from '@/components/Cadastro_ficha_tecnica'



Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Pdv',
      component: Pdv,
      meta:{requiresAuth:true},

    },
    {
      path: '/pdv',
      name: 'Pdv',
      component: Pdv,
      meta:{requiresAuth:true},
    },
    {
      path: '/cadastro/cardapio',
      name: 'Cardapio',
      component: Cardapio,
      meta:{requiresAuth:true},
    },
    {
      path: '/pdv/mesa',
      name: 'Mesa',
      component: Mesa,
      props: true,
      meta:{requiresAuth:true},
    },
    {
      path: '/pagamento',
      name: 'Pagamento',
      component: Pagamento,
      props: true,
      meta:{requiresAuth:true},
    },
    {
      path: '/teste',
      name: 'Teste',
      component: Teste,
    },
    {
      path: '/criarusuario',
      name: 'CriarUsuario',
      component: CriarUsuario,
      meta:{requiresAuth:true},
    },
    {
      path: '/logar',
      name: 'Logar',
      component: Logar,
    },
    {
      path: '/configuracoes/usuarios',
      name: 'Usuarios',
      component: Usuarios,
      meta:{requiresAuth:true},
    },
    {
      path: '/caixa',
      name: 'Caixa',
      component: Caixa,
      meta:{requiresAuth:true},
    },
    {
      path: '/relatorio/estoque',
      name: 'Estoque',
      component: Estoque,
      meta:{requiresAuth:true},
    },
    {
      path: '/cobrinha',
      name: 'Cobrinha',
      component: Cobrinha,
    },
    {
      path: '/cadastro/cadastro_produto',
      name: 'Geral',
      component: Geral,
      meta:{requiresAuth:true},
    },
    {
      path: '/cadastro/cadastro_produto/Tributacao',
      name: 'Tributacao',
      component: Tributacao,
      meta:{requiresAuth:true},
    },
    {
      path: '/cadastro/cadastro_produto/Classificacao',
      name: 'Classificacao',
      component: Classificacao,
      meta:{requiresAuth:true},
    },
    {
      path: '/cadastro/Cadastro_ficha_tecnica',
      name: 'Cadastro_ficha_tecnica',
      component: Cadastro_ficha_tecnica,
      props: true,
      meta:{requiresAuth:true},
    },

  ]
})

// fazendo a guarda
router.beforeEach((to,from,next)=>{
//checar se o router requer o routerAuth
if(to.matched.some(rec => rec.meta.requiresAuth)){
let user = firebase.auth().currentUser
if (user) {
  // o processo de login foi feito
  next()

}  else {
  // não feito login
  next({ name: 'Logar' })
}

// checar estado de usuario
} else {
  next()
}
})

export default router
