import Vue from 'vue'
import App from './App.vue'

import VnScroll from './vn-scroll'
Vue.use(VnScroll)

new Vue({
    el: '#app',
    render: h => h(App)
})
