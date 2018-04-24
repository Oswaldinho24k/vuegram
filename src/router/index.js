import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NotFound from '@/components/NotFound'
import Profile from '@/components/users/Profile'
import Login from '@/components/users/Login'
import Registration from '@/components/users/Registration'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'LogIn',
      component: Login
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: Registration
    },
    {
      path: '/profile/:uid',
      name: 'profile',
      component: Profile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path:'*',
      component:NotFound
    }
  ]
})
