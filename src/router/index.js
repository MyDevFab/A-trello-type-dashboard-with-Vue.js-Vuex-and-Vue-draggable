import { createRouter, createWebHistory } from 'vue-router'
//import Main from '../views/Main.vue'
import AboutView from '../AboutView.vue'
// import KanbanEx from '../KanbanEx.vue'
// import HomeView from '../views/HomeView.vue'
import BoardView from '../views/BoardView.vue'
import CardsDetails from '../views/CardsDetails.vue'
import CardsDetailsBase from '../views/CardsDetailsBase.vue'

const routes = [

   /* {
      path: '/',
      name: 'Main',
      component: Main,
      props: true,
    },*/

      {
        path: '/about',
        name: 'about',
        component: AboutView
      },

      {
        path: '/test',
        name: 'CardsDetailsBase',
        component: CardsDetailsBase 
      },
      
      // {
      //   path: '/',
      //   name: 'HomeView',
      //   component: HomeView 
      // },

      {
        path: '/',
        name: 'board',
        component: BoardView
      },

      {
        path: '/details/:id',
        name: 'CardsDetails',
        component: CardsDetails,
        props: true
      }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router