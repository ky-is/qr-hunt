<template>
<div
	:style="{ backgroundImage: `url(${fields.image.fields.file.url})` }"
	class="wh-64 bg-contain group" :class="isUnlocked && 'border'"
>
	<div :class="isUnlocked ? 'flex' : 'hidden group-hover:flex cursor-help'" class="wh-full p-2 text-center  flex-col justify-center" style="background-color: rgba(0,0,0,0.5)">
		<template v-if="isUnlocked">
			<div class="text-6xl text-gray-400">✓</div>
			<a :href="fields.url" class="text-white font-medium">{{ fields.name }}</a>
		</template>
		<template v-else>
			<div class="text-5xl text-gray-500">?</div>
			<div class="text-white font-medium">Find the QR code near the location in the photo. Scan it with the camera to unlock this spot.</div>
		</template>
	</div>
</div>
</template>

<script lang="ts">
import Vue from 'vue'

import { QRItem } from '@/scripts/contentful'
import store from '@/scripts/store'

export default Vue.extend({
	props: {
		id: {
			type: String,
			required: true,
		},
		fields: {
			type: Object as () => QRItem,
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
