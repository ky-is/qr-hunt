import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import QR from '@/views/QR.vue'
import Unlock from '@/views/Unlock.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home,
		},

		{
			path: '/unlock/:id',
			name: 'Unlock',
			component: Unlock,
			props: true,
		},
		{
			path: '/QR/:id',
			name: 'QR',
			component: QR,
			props: true,
		},
	],
})
