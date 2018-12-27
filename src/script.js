import Vue from 'vue'
import App from './components/app.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
    router: router,
    render: function (createElement) {
        return createElement(App);
    }
}).$mount('#app')
