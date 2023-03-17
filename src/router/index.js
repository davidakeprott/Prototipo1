import { createRouter, createWebHistory } from 'vue-router'
import Listar from '../components/ListarUsuario.vue'
import Crear from '../components/CrearUsuario.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  
    {
      path: '/dashboard',
      name: 'dashboard',
      component: ()=>import('../components/Dashboard.vue')
    },
    {
      path:'/get',
      name:'Get',
      component: ()=>import('../components/Get.vue')
    },
    {
      path:'/insert',
      name:'insert',
      component: ()=>import('../components/Insert.vue')
    },
    {
      path:'/update',
      name:'update',
      component: ()=>import('../components/Update.vue')
    },
    {
      path:'/delete',
      name:'delete',
      component: ()=>import('../components/Delete.vue')
    },
    {
      path:'/listar',
      name:'listar',
      component: Listar
    },
    {
      path: '/crear',
      name: 'crear',
      component: Crear
    }
  ]
})

export default router


