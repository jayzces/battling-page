import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Browsing',
            component: require('@/components/browsing').default
        }, {
            path: '/open/',
            name: 'OpenDetail',
            component: require('@/components/openDetail').default
        }
    ]
})
