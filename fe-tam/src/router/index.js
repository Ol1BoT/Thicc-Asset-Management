import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Project from '../views/Project.vue'
import DispatchAdd from '../views/dispatch/AddDispatch.vue'
import DispatchView from '../views/dispatch/ViewDispatch.vue'
import AssetView from '../views/asset_items/ViewAssets.vue'
import AssetTypeView from '../views/asset_types/ViewAssetTypes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/project/:project_id',
    name: 'Project',
    component: Project
  },
  {
    path: '/project/:project_id/dispatch_add',
    name: 'DispatchAdd',
    component: DispatchAdd
  },
  {
    path: '/project/:project_id/dispatch_view',
    name: 'DispatchView',
    component: DispatchView
  },
  {
    path: '/project/:project_id/asset_view',
    name: 'AssetView',
    component: AssetView
  },
  {
    path: '/project/:project_id/asset_type_view',
    name: 'AssetTypeView',
    component: AssetTypeView
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
