import storage from '@/scripts/storage'

const KEY_UNLOCKED = 'UNLOCKED'

const state = {
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
}
