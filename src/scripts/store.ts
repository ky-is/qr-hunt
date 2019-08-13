import { Metadata } from '@/scripts/contentful'
import storage from '@/scripts/storage'

const KEY_UNLOCKED = 'UNLOCKED'
const KEY_TUTORIAL = 'TUTORIAL'
const KEY_EMAIL = 'EMAIL'

const state = {
	metadata: {
		title: 'QR Hunt',
		tutorialTitle: 'QR Hunt',
		tutorialDescription: 'QR Hunt',
		signupTitle: 'QR Hunt',
		signupDescription: 'QR Hunt',
	},
	tutorial: storage.getInt(KEY_TUTORIAL) || 0,
	unlocked: storage.getArray(KEY_UNLOCKED),
	email: storage.get(KEY_EMAIL),
}

export default {
	state,

	setMetadata ({ title, tutorialTitle, tutorialDescription, signupTitle, signupDescription }: Metadata) {
		state.metadata.title = title
		state.metadata.tutorialTitle = tutorialTitle
		state.metadata.tutorialDescription = tutorialDescription
		state.metadata.signupTitle = signupTitle
		state.metadata.signupDescription = signupDescription
	},

	isUnlocked (id: string) {
		return state.unlocked.includes(id)
	},

	setUnlocked (id: string) {
		state.unlocked.push(id)
		storage.setArray(KEY_UNLOCKED, state.unlocked)
	},

	advanceTutorial () {
		state.tutorial += 1
		storage.set(KEY_TUTORIAL, state.tutorial)
	},

	setEmail (email: string) {
		state.email = email
		storage.set(KEY_EMAIL, state.email)
	},
}
