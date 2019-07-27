<template>
<div class="flex flex-wrap">
	<Entry v-for="{ fields, sys } in qrEntries" :id="sys.id" :key="fields.name" :fields="fields" />
</div>
</template>

<script lang="ts">
import contentful from 'contentful'
import Vue from 'vue'

import api, { QRItem } from '@/scripts/contentful'

import Entry from '@/components/Entry.vue'

export default Vue.extend({
	components: {
		Entry,
	},

	data () {
		return {
			qrEntries: [] as contentful.Entry<QRItem>[],
		}
	},

	async created () {
		const { items } = await api.getEntries<QRItem>()
		this.qrEntries = items
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

