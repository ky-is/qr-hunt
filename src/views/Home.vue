<template>
<div>
	<Component :is="isCollectingEmail ? 'div' : 'button'" v-if="showTutorial" class="inset  mt-2 p-2 border border-brand-100 rounded text-center" @click="isCollectingEmail ? null : onDismiss()">
		<template v-if="tutorialLevel === 0">
			<h2 class="title">{{ tutorialTitle }}</h2>
			<p>{{ tutorialDescription }}</p>
			<button class="button primary">Next</button>
		</template>
		<form v-else-if="isCollectingEmail" :action="emailCollectionURL" method="post" name="mc-embedded-subscribe-form" target="_blank" @submit="onEmailSubmit">
			<h2 class="title">{{ signupTitle }}</h2>
			<p>{{ signupDescription }}</p>
			<input v-model="enteredEmail" type="email" placeholder="example@email.com" name="EMAIL" class="email-form-input">
			<input v-model="enteredName" type="text" placeholder="Name (optional)" value="" name="FNAME" class="email-form-input">
			<div class="clear">
				<div class="response" style="display:none" />
				<div class="response" style="display:none" />
			</div>
			<div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_a5c3d5b0181ed14b49bcb74cf_8c675d6b14" tabindex="-1" value=""></div>
			<div class="clear">
				<button id="mc-embedded-subscribe" type="submit" name="subscribe" class="button primary">Subscribe</button>
				<button type="button" class="button secondary" @click="onEmailCancel">Skip</button>
			</div>
		</form>
		<template v-else>
			<h2 class="title">Welcome<span v-if="displayName"> {{ displayName }}</span>!</h2>
			<p>Somewhere near each photo below, a QR code is posted for you to find. As you scan each one, its photo will be checked off. Complete all {{ totalCount }} to win a prize!</p>
			<button class="button primary">Done</button>
		</template>
	</Component>
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
			emailCollectionURL: process.env.VUE_APP_MAILCHIMP_LIST_URL,
			enteredEmail: store.state.email,
			enteredName: store.state.name,
			qrEntries: [] as contentful.Entry<QRSpot>[],
		}
	},

	computed: {
		email (): string | undefined {
			return store.state.email
		},
		name () {
			return store.state.name
		},
		promptedForEmail () {
			return store.state.promptedForEmail
		},

		displayName (): string | undefined {
			return this.enteredName || this.email
		},

		tutorialLevel () {
			return store.state.tutorial
		},
		showTutorial (): boolean {
			if (!this.promptedForEmail) {
				return true
			}
			return this.tutorialLevel <= 1
		},

		isCollectingEmail (): boolean {
			return this.tutorialLevel > 0 && !this.promptedForEmail
		},

		unlockCount (): number {
			return this.qrEntries.filter(({ sys }) => store.isUnlocked(sys.id)).length
		},
		totalCount (): number {
			return this.qrEntries.length
		},

		tutorialTitle (): string {
			return store.state.metadata.tutorialTitle || `Welcome to the hunt!`
		},
		tutorialDescription (): string {
			return store.state.metadata.tutorialDescription || `Somewhere near each photo below, a QR code is posted for you to find. As you scan each one, its photo will be checked off. Complete them all to win a prize!`
		},
		signupTitle (): string {
			return this.email ? `Update your email address` : store.state.metadata.signupTitle || `Sign up for prizes!`
		},
		signupDescription (): string {
			return store.state.metadata.signupDescription || `Enter your email to recieve a special discount. This will also be used to deliver prizes for completing the hunt.`
		},
	},

	async created () {
		const { items } = await api.getEntries<QRSpot>({
			content_type: 'qrSpot',
		})
		this.qrEntries = items
	},

	methods: {
		onDismiss () {
			store.advanceTutorial()
		},

		onEmailSubmit () {
			if (this.enteredEmail) {
				store.setNameAndEmail(this.enteredName, this.enteredEmail)
				store.togglePromptedForEmailSaving(true)
			}
		},

		onEmailCancel () {
			store.togglePromptedForEmailSaving(true)
		},
	},
})
</script>

<style lang="postcss" scoped>
.title {
	@apply -mb-1 text-lg font-medium;
}

.entry {
	width: 33.333vmin;
	height: 33.333vmin;
	max-width: 256px;
	max-height: 256px;
}

.email-form-input {
	@apply block w-full h-10 px-3 my-1 rounded text-lg bg-gray-100;
}
</style>
