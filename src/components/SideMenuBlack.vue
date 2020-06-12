<template>
  <div class="">
    <sidebar-menu :menu="menu">
        <span slot="toggle-icon"class= "material-icons">more_horiz</span>
        <span slot="dropdown-icon" class= "material-icons">keyboard_arrow_down</span>
    </sidebar-menu>
    <span>{{nome}}</span>
  </div>

</template>

<script>
import firebase from 'firebase'
import db from '@/firebase/init'
    export default {
      name:'SideMenuBlack',
        data() {
            return {
              nome:'renato',
                menu: [
                    {
                        header: true,
                        title: 'renato',
                        hiddenOnCollapse: true
                    },
// home
                    {
                        href: '/',
                        title: 'Dashboard',
                        icon:{
                          element: 'span',
                          class: 'material-icons',
                          text: 'home'
                             }
                    },
// PDV
                    {
                        href: '/pdv',
                        title: 'PDV',
                        icon: {
                          element: 'span',
                          class: 'material-icons',
                          text: 'storefront'
                        }
                      },
  // cadatro
                      {
                          href: '/cadastro',
                          title: 'Cadastro',
                          icon: {
                            element: 'span',
                            class: 'material-icons',
                            text: 'assignment'
                          },
                          child: [
                              {
                                  href: '/cadastro/produto',
                                  title: 'Cadastro Produto'
                              },
                              {
                                  href: '/cadastro/cardapio',
                                  title: 'Cardapio'
                              },
                          ]
                      },
// relatorio
                    {
                        href: '/relatorio',
                        title: 'Relatorios',
                        icon: {
                          element: 'span',
                          class: 'material-icons',
                          text: 'bar_chart'
                        },
                        child: [
                            {
                                href: '/relatorio/estoque',
                                title: 'Estoque'
                            }
                        ]
                    },
          // configurações
                    {
                            href: '/configuracoes',
                            title: 'Configurações',
                            icon: {
                            element: 'span',
                            class: 'material-icons',
                            text: 'build'
                          },
                          child: [
                              {
                                  href: '/configuracoes/usuarios',
                                  title: 'Usuários'
                              }
                          ]
                    },
                    {
                        footer: true,
                        onclick:'sairfuncao',
                        title: 'Sair',
                        hiddenOnCollapse: true
                    },

                ]

            }
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
