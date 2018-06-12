import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import StudentCamps from '@/components/StudentCamps'
import TrainingCamp from '@/components/TrainingCamp'
import Register from '@/components/Register'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/camps',
      name: 'StudentCamps',
      component: StudentCamps
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/trainingCamp',
      name: 'TrainingCamp',
      component: TrainingCamp
    }
  ]
})
