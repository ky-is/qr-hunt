import Vue from 'vue'
import App from './App.vue'

import router from '@/scripts/router'
import store from '@/scripts/store'

Vue.config.productionTip = false

new Vue({
	data: store,
	render: h => h(App),
	router,
}).$mount('#app')
