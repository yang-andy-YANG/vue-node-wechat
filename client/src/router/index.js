import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Payment from '@/pages/Payment'
import Login from '@/pages/Login'
import _404 from '@/pages/404'
import store from '@/store'

Vue.use(Router)

let router = new Router({
    scrollBehavior: () => ({
        y: 0
    }),
    routes: [
        {
            path: '*',
            redirect: '/404'
        },
        {
            path: '/',
            redirect: '/Home'
        },
        {
            path: '/Home',
            name: 'Home',
            component: Home,
            meta: {
                requireAuth: true
            },
        },
        {
            path: '/Payment',
            name: 'Payment',
            component: Payment,
            meta: {
                requireAuth: true
            },
        },
        {
            path: '/Login',
            name: 'Login',
            component: Login
        },
        {
            path: '/404',
            name: 'NotFound',
            component: _404,
            meta: {
                hideFooter: true
            }
        }
    ]
})

router.beforeEach((to, from, next) => {
    let state = store.state

    // 设置默认的浏览器标签标题
    if (to.name) {
        document.title = to.name + ' - WeChat'
    } 
    else {
        document.title = 'WeChat'
    }
    
    if (to.meta.requireAuth) {  
        if (state.userInfo && state.userInfo.token) { 
            next();
        }
        else {
            next({
                name: 'Login',
                query: {redirect: to.fullPath} 
            })
        }
    }
    else {
        next();
    }
})

export default router
