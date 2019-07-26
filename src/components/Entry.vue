<template>
<div
	:style="{ backgroundImage: `url(${fields.image.fields.file.url})` }"
	class="wh-64 bg-contain group"
>
	<div class="hidden group-hover:flex wh-full cursor-help p-2 text-center  flex-col justify-center" style="background-color: rgba(0,0,0,0.5)">
		<div class="text-5xl text-gray-500">?</div>
		<div class="text-white font-medium">Find the QR code near the location in the photo. Scan it with the camera to unlock this spot.</div>
	</div>
	<!-- {{ fields.name }} -->
	<!-- {{ fields.url }} -->
	<!-- <img :alt="'Undiscovered location' || fields.image.fields.title" :src=""> -->
</div>
</template>

<script lang="ts">
import Vue from 'vue'

import { QRItem } from '@/scripts/contentful'

export default Vue.extend({
	props: {
		fields: {
			type: Object as () => QRItem,
			required: true,
		},
	},
})
</script>

<style lang="postcss" scoped>
.cursor-help {
	cursor: help;
}
</style>
