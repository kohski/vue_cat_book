import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import Product from '@/views/Product.vue'
import Access from '@/views/Access.vue'
import ProductList from '@/views/ProductList.vue'

import ProductHome from '@/views/Product/Home.vue'
import ProductReview from '@/views/Product/Review.vue'
import ProductReviewDetail from '@/views/Product/ReviewDetail.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/timtim', redirect: 'access'},
    { path: '/access', component: Access },
    { path: '/product', component: ProductList },
    { path: '/product/:id(\\d+)',
      component: Product,
      props: route => ({id: Number(route.params.id)}),
      children:[
        {
          name:'product-home',
          path:'',
          component: ProductHome
        },
        {
          name: 'product-review',
          path: 'review',
          component: ProductReview
        },
        {
          name:'review-detail',
          path: 'review/:rid',
          component:ProductReviewDetail
        }
      ]
    }
  ]
})
export default router