<template>
<div
	:style="{ backgroundImage: `url(${fields.image.fields.file.url})` }"
	class="entry bg-contain group" :class="isUnlocked && 'border'"
>
	<div :class="isUnlocked ? 'flex' : 'hidden group-hover:flex cursor-help'" class="wh-full p-2 text-center leading-tight  flex-col justify-center" style="background-color: rgba(0,0,0,0.5)">
		<template v-if="isUnlocked">
			<div class="text-5xl text-gray-400">✓</div>
			<a :href="fields.url" target="_blank" class="text-white font-medium">{{ fields.name }}</a>
		</template>
		<template v-else>
			<div class="hidden sm:block text-5xl text-gray-400">?</div>
			<div class="text-white font-medium text-xs sm:text-base">Find the QR code near this photo. Scan it in the Camera app to unlock.</div>
		</template>
	</div>
</div>
</template>

<script lang="ts">
import Vue from 'vue'

import { QRSpot } from '@/scripts/contentful'
import store from '@/scripts/store'

export default Vue.extend({
	props: {
		id: {
			type: String,
			required: true,
		},
		fields: {
			type: Object as () => QRSpot,
			required: true,
		},
	},

	computed: {
		isUnlocked (): boolean {
			return store.isUnlocked(this.id)
		},
	},
})
</script>

<style lang="postcss" scoped>
.cursor-help {
	cursor: help;
}
</style>
