<template>
  <div class="">
    <sidebar-menu :menu="menu">
        <span slot="toggle-icon"class= "material-icons">more_horiz</span>
        <span slot="dropdown-icon" class= "material-icons">keyboard_arrow_down</span>
    </sidebar-menu>
  </div>

</template>

<script>
    export default {
      name:'SideMenuBlack',
        data() {
            return {
                menu: [
                    {
                        header: true,
                        title: 'Main Navigation',
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
                        href: '/charts',
                        title: 'Relatorios',
                        icon: {
                          element: 'span',
                          class: 'material-icons',
                          text: 'bar_chart'
                        },
                        child: [
                            {
                                href: '/charts/sublink',
                                title: 'Sub Link'
                            }
                        ]
                    },

                ]

            }
        }

  }
</script>
