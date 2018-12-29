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
            meta: {
                upload: false
            }
        }, {
            path: '/open/',
            name: '', // to immediately render the default child route
            component: require('@/components/openDetail').default,
            children: [
                {
                    path: '',
                    name: 'CommentsTab',
                    component: require('@/components/commentsTab').default,
                    meta: {
                        upload: true
                    },
                }, {
                    path: 'rules/',
                    name: 'RulesTab',
                    component: require('@/components/rulesTab').default,
                    meta: {
                        upload: true
                    },
                }, {
                    path: 'voting-mechanics/',
                    name: 'MechanicsTab',
                    component: require('@/components/mechanicsTab').default,
                    meta: {
                        upload: true
                    },
                }
            ]
        }
    ]
})
