import storage from '@/scripts/storage'

const KEY_UNLOCKED = 'UNLOCKED'
const KEY_TUTORIAL = 'TUTORIAL'

const state = {
	tutorial: storage.getInt(KEY_TUTORIAL) || 0,
	unlocked: storage.getArray(KEY_UNLOCKED),
}

export default {
	state,

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
}
