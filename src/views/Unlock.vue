<template>
<div />
</template>

<script lang="ts">
import contentful from 'contentful'
import Vue from 'vue'

export default Vue.extend({
	props: {
		id: {
			type: String,
			required: true,
		},
	},

	beforeRouteEnter (to, from, next) {
		const id = to.params.id
		if (id) {
			console.log(id)
		}
		next({ name: 'Home', replace: true })
	},
})
</script>
