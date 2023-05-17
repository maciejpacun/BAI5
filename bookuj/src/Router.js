import { createRouter, createWebHistory } from 'vue-router'
import Cennik from './views/Cennik.vue'
import Kontakt from './views/Kontakt.vue'
import Nasilekarze from './views/Nasilekarze.vue'
import Zakresuslug from './views/Zakresuslug.vue'
import Zalogujsie from './views/Zalogujsie.vue'
import Zarezerwujwizyte from './views/Zarezerwujwizyte.vue'
import Home from './views/Home.vue'


export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: () => import('./views/Home.vue')
    },
    {
        path: '/Cennik',
        name: 'Cennik',
        component: () => import('./views/Cennik.vue')
      },
      {
        path: '/Kontakt',
        name: 'Kontakt',
        component: () => import('./views/Kontakt.vue')
      },
      {
        path: '/Nasilekarze',
        name: 'Nasilekarze',
        component: () => import('./views/Nasilekarze.vue')
      },
      {
        path: '/Zakresuslug',
        name: 'Zakresuslug',
        component: () => import('./views/Zakresuslug.vue')
      },
      {
        path: '/Nasilekarze',
        name: 'Nasilekarze',
        component: () => import('./views/Nasilekarze.vue')
      },
      {
        path: '/Zalogujsie',
        name: 'Zalogujsie',
        component: () => import('./views/Zalogujsie.vue')
      },
      {
        path: '/Zarezerwujwizyte',
        name: 'Zarezerwujwizyte',
        component: () => import('./views/Zarezerwujwizyte.vue')
      }


  ]
})
