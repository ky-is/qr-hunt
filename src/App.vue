<template>
<div id="app">
	<header>
		<nav class="content  h-12">
			<router-link to="/" class="flex items-center">
				<img :alt="title" :src="logoURL" class="inline w-12">
				<h1 class="pl-1 font-bold text-xl text-brand-500">{{ title }}</h1>
			</router-link>
		</nav>
	</header>
	<main>
		<router-view class="content" />
	</main>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
// import contentful from 'contentful'

import api, { Metadata } from '@/scripts/contentful'

import store from '@/scripts/store'

export default Vue.extend({
	data () {
		return {
			logoURL: '',
		}
	},

	computed: {
		title () {
			return store.state.title
		},
	},

	async mounted () {
		const { items: [ metadata ] } = await api.getEntries<Metadata>({
			content_type: 'metadata',
		})
		if (metadata) {
			const { fields: { title, logo } } = metadata
			const logoURL = (logo.fields as any).file.url //TODO not contentful.Asset
			store.setTitle(title)
			this.logoURL = logoURL
			document.title = title

			const link = document.createElement('link')
			link.rel = 'shortcut icon'
			link.href = logoURL
			document.getElementsByTagName('head')[0].appendChild(link)
		} else {
			console.error('No custom site metadata found. Please add a `metadata` entry on Contentful.')
		}
	},
})
</script>

<style lang="postcss">
@import 'assets/styles/tailwind.postcss';

#app {
	@apply font-sans antialiased text-gray-900;
}

nav a {
	@apply text-brand-900;
	&.router-link-exact-active {
		@apply text-gray-900;
	}
}

.content {
	@apply mx-auto;
	width: 768px;
	max-width: 100%;
}

.inset {
	@apply mx-4;
}
</style>
