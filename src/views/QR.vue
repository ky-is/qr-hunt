<template>
<div>
	<a :href="image" :download="`${id}.png`" class="inline-block border rounded-lg p-1 text-center">
		<canvas ref="canvas" />
		<div>Download</div>
	</a>
</div>
</template>

<script lang="ts">
import contentful from 'contentful'
import Vue from 'vue'
import QRCode from 'qrcode'

export default Vue.extend({
	props: {
		id: {
			type: String,
			required: true,
		},
	},

	data () {
		return {
			image: null,
		}
	},

	computed: {
		url (): string | null {
			const id = this.id
			return id ? `https://presidioneighborhood.netlify.com/unlock/${id}` : null
		},
	},

	watch: {
		url () {
			this.render()
		},
	},

	mounted () {
		this.render()
	},

	methods: {
		async render () {
			const url = this.url
			if (!url) {
				return
			}
			const canvas = this.$refs.canvas as any //TODO any
			if (!canvas) {
				return
			}
			await QRCode.toCanvas(canvas, url)
			this.image = canvas.toDataURL("image/png").replace(/^data:image\/[^;]/, 'data:application/octet-stream')
		},
	},
})
</script>
