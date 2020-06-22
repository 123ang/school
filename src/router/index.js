import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import CreateHome from '../views/CreateHome.vue'
import CreateClass from '../views/CreateClass.vue'
import CreateExam from '../views/CreateExam.vue'
import Visualization from '../views/Visualization.vue'
import UploadHome from '../views/UploadHome.vue'
import UploadMarks from '../views/UploadMarks.vue'
import UploadExam from '../views/UploadExam.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/create-home',
    name: 'CreateHome',
    component: CreateHome
  },
  {
    path: '/upload-home',
    name: 'UploadHome',
    component: UploadHome
  },
  {
    path: '/upload-exam',
    name: 'UploadExam',
    component: UploadExam,
  },
  {
    path: '/upload-marks',
    name: 'UploadMarks',
    component: UploadMarks
  },
  {
    path: '/create-class',
    name: 'CreateClass',
    component: CreateClass
  },
  {
    path: '/create-exam',
    name: 'CreateExam',
    component: CreateExam
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/visualization',
    name: 'Visualization',
    component: Visualization
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
