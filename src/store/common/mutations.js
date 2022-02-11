export default {
	UPDATE_MY_PROFILE (state, payload) {
		state.myProfile = payload
	},
	UPDATE_GAME_HISTORY (state, payload) {
		// state.gameHistory = []
		if (state.gameHistory) {
			state.gameHistory.push(payload)
		} else {
			state.gameHistory = [payload]
		}
	}
}
