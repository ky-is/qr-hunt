<template>
<div>
	<button v-if="showTutorial" class="inset  mt-2 p-2 border border-brand-100 rounded-full text-center" @click="onDismiss">
		<h2 class="text-lg font-medium">Welcome to the hunt!</h2>
		<p class="px-4 my-2">Somewhere near each photo below, a QR code is posted for you to find. As you scan each one, its photo will be checked off. Complete all {{ totalCount }} to win a prize!</p>
		<button class="block w-24 h-8 mx-auto bg-brand-100 rounded-full">Dismiss</button>
	</button>
	<div>
		<h2 class="inset  my-2">Unlocked <b class="text-brand-500">{{ unlockCount }}</b> of <b class="text-brand-500">{{ totalCount }}</b></h2>
		<div class="flex flex-wrap justify-around">
			<Entry v-for="{ fields, sys } in qrEntries" :id="sys.id" :key="fields.name" :fields="fields" />
		</div>
	</div>
</div>
</template>

<script lang="ts">
import contentful from 'contentful'
import Vue from 'vue'

import api, { QRSpot } from '@/scripts/contentful'
import store from '@/scripts/store'

import Entry from '@/components/Entry.vue'

export default Vue.extend({
	components: {
		Entry,
	},

	data () {
		return {
			qrEntries: [] as contentful.Entry<QRSpot>[],
		}
	},

	computed: {
		showTutorial () {
			return !store.state.tutorial
		},

		unlockCount (): number {
			return this.qrEntries.filter(({ sys }) => store.isUnlocked(sys.id)).length
		},

		totalCount (): number {
			return this.qrEntries.length
		},
	},

	async created () {
		const { items } = await api.getEntries<QRSpot>({
			content_type: 'qr_spot',
		})
		this.qrEntries = items
	},

	methods: {
		onDismiss () {
			store.advanceTutorial()
		},
	},
})
</script>

<style lang="postcss" scoped>
.entry {
	width: 33.333vmin;
	height: 33.333vmin;
	max-width: 256px;
	max-height: 256px;
}
</style>
