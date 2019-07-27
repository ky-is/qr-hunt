import storage from '@/scripts/storage'

const KEY_UNLOCKED = 'UNLOCKED'

const state = {
	unlocked: storage.getArray(KEY_UNLOCKED),
}

export default {
	state,
}
