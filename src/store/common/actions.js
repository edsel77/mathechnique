export default {
	onLogout ({ commit }) {
		commit('ON_LOGOUT')
	},

	updateLoginInfo ({ commit }, payload) {
		commit('UPDATE_LOGIN_INFO', payload)
	},

	updateIOTInfo ({ commit }, payload) {
		commit('UPDATE_IOT_INFO', payload)
	},

	updateSelectedProduct ({ commit }, payload) {
		commit('UPDATE_SELECTED_PRODUCT', payload)
	},

	updateUserRole ({ commit }, payload) {
		commit('UPDATE_USER_ROLE', payload)
	},

	updateUserInfo ({commit}, payload) {
		commit('UPDATE_USER_INFO', payload)
	},

	updatePaymentDuesInfo ({commit}, payload) {
		commit('UPDATE_PAYMENT_DUES_INFO', payload)
	},

	clearPaymentState ({commit}) {
		commit('CLEAR_PAYMENT_STATE')
	},

	updateUpperLeftLogo ({commit}, payload) {
		commit('UPDATE_UPPER_LEFT_LOGO', payload)
	},

	updateDarkTheme ({commit}, payload) {
		commit('UPDATE_THEME', payload)
	},

	updateRememberLogin ({commit}, payload) {
		commit('UPDATE_REMEMBER_LOGIN', payload)
	}
}
