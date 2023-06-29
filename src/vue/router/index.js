import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            {
                path: `/home`,
                name: 'home',
                component: () => import(/* webpackChunkName: "home" */ '../pages/Home'),
            },
            {
                path: `/about`,
                name: 'about',
                component: () => import(/* webpackChunkName: "home" */ '../pages/About'),
            }
        ]
    })
}