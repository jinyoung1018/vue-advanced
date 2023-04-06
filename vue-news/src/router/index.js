import { createRouter, createWebHistory } from 'vue-router'
import NewsView from '../views/NewsView.vue';
import JobsView from '../views/JobsView.vue';
import AskView from '../views/AskView.vue';


const routes = [
    {
        path:'/',
        redirect: '/news'
    },
  {
    path: '/news',
    component: NewsView 
  },
  {
    path: '/jobs',
    component: JobsView   
  },
  {
    path: '/ask',
    component: AskView   
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
