import Vue from 'vue'
import Router from 'vue-router'
import SideMenuBlack from '@/components/SideMenuBlack'
import Pdv from '@/components/Pdv'
import Cardapio from '@/components/Cardapio'
import Mesa from '@/components/Mesa'
import Pagamento from '@/components/Pagamento'
import Teste from '@/components/Teste'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SideMenuBlack',
      component: SideMenuBlack
    },
    {
      path: '/pdv',
      name: 'Pdv',
      component: Pdv
    },
    {
      path: '/cadastro/cardapio',
      name: 'Cardapio',
      component: Cardapio
    },
    {
      path: '/pdv/mesa',
      name: 'Mesa',
      component: Mesa,
      props: true
    },
    {
      path: '/pagamento',
      name: 'Pagamento',
      component: Pagamento,
      props: true
    },
    {
      path: '/teste',
      name: 'Teste',
      component: Teste
    },
  ]
})
