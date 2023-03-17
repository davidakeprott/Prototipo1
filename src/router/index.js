import { createRouter, createWebHistory } from 'vue-router'
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
      path:'/homeview',
      name:'homeview',
      component: ()=>import('../views/Homeview.vue')
    }
  ]
})

export default router


