import { createRouter, createWebHistory } from 'vue-router'
import VisitorManagement from '../components/VisitorManagement.vue'
import AttractionManagement from '../components/AttractionManagement.vue'
import TicketManagement from '../components/TicketManagement.vue'

const routes = [
  {
    path: 'src/router/shouye.html',
    name: 'shouye',
    component: { template: '<div>欢迎来到游乐园管理系统</div>' }
  },
  {
    path: 'src/route/piaowuguanli.html',
    name: 'piaowuguanli',
    component: VisitorManagement
  },
  {
    path: 'src/routersheshiguanli.html',
    name: 'sheshigaunli',
    component: AttractionManagement
  },
  {
    path: 'src/router/youkeguanli.html',
    name: 'youkeguanli',
    component: TicketManagement
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router