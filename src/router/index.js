import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Browsing',
            component: require('@/components/browsing').default,
            meta: { upload: false }
        }, {
            path: '/open/',
            name: '', // to immediately render the default child route
            component: require('@/components/detailPage').default,
            props: { battling: false },
            children: [
                {
                    path: '',
                    name: 'OpenCommentsTab',
                    component: require('@/components/commentsTab').default,
                    meta: { upload: true }
                }, {
                    path: 'rules/',
                    name: 'OpenRulesTab',
                    component: require('@/components/rulesTab').default,
                    meta: { upload: true }
                }, {
                    path: 'voting-mechanics/',
                    name: 'OpenMechanicsTab',
                    component: require('@/components/mechanicsTab').default,
                    meta: { upload: true }
                }
            ]
        }, {
            path: '/battling/',
            name: '',
            component: require('@/components/detailPage').default,
            props: { battling: true },
            children: [
                {
                    path: '',
                    name: 'BattlingCommentsTab',
                    component: require('@/components/commentsTab').default,
                    meta: { upload: false },
                }, {
                    path: 'rules/',
                    name: 'BattlingRulesTab',
                    component: require('@/components/rulesTab').default,
                    meta: { upload: false }
                }, {
                    path: 'voting-mechanics/',
                    name: 'BattlingMechanicsTab',
                    component: require('@/components/mechanicsTab').default,
                    meta: { upload: false }
                }
            ]
        }
    ]
})
