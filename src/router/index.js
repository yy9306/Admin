import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/common/home'
import DashBoard from '../components/page/DashBoard'
import EditorPage from '../components/page/EditorPage'
import MarkDownpage from '../components/page/MarkDownpage'
import TodoListpage from '../components/page/TodoListpage'
import BasicTables from '../components/page/BasicTables'
import FormInput from '../components/page/FormInput'
import FormLayouts from '../components/page/FormLayouts'
import BasicCharts from '../components/page/BasicCharts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: "",
          component: DashBoard
        },
        {
          path: 'DashBoard',
          component: DashBoard
        },
        {
          path: 'EditorPage',
          component: EditorPage
        },
        {
          path: 'MarkDownpage',
          component: MarkDownpage
        },
        {
          path: 'TodoListpage',
          component: TodoListpage
        },
        {
          path: 'BasicTables',
          component: BasicTables
        },
        {
          path: 'FormInput',
          component: FormInput
        },
        {
          path: 'FormLayouts',
          component: FormLayouts
        },
        {
          path: 'BasicCharts',
          component: BasicCharts
        }
      ]
    }
  ]
})
