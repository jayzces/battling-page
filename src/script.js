import Vue from 'vue'
import App from './components/app.vue'
import router from './router'
import { VLazyImagePlugin } from 'v-lazy-image'

Vue.config.productionTip = false
Vue.use(VLazyImagePlugin)

new Vue({
    router: router,
    render: function (createElement) {
        return createElement(App);
    }
}).$mount('#app')
