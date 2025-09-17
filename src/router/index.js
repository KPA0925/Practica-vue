import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    {
      path: '/contador',
      name: 'contador',
      component: () => import('../modules/contador/components/Contador.vue'),
    },
    {
      path: '/tareas',
      name: 'tareas',
      component: () => import('../modules/listaDeTareas/components/ListaDeTareas.vue'),
    },
    {
      path: '/registro',
      name: 'registro',
      component: () => import('../modules/registro/views/RegistroView.vue'),
    },
  ],
})

export default router
