export default {
	ON_LOGOUT (state) {
		state.loginInfo = ''

		state.iotInfo = ''
	
		state.userRole = 'User'
	
		state.userInfo = ''
	
		state.upperLeftLogo = ''
	
		state.activeRoom = ''
	
		state.storedLightness = []
	
		state.activePreset = ''
	
		state.selectedProduct = ''
	
		state.paymentDuesInfo = ''
	
		state.dynamicStyleFetched = ''
	},

	UPDATE_LOGIN_INFO (state, payload) {
		state.loginInfo = payload
	},

	UPDATE_IOT_INFO (state, payload) {
		state.iotInfo = payload
	},

	UPDATE_SELECTED_PRODUCT (state, payload) {
		state.selectedProduct = payload
	},

	UPDATE_USER_ROLE (state, payload) {
		state.userRole = payload
	},

	UPDATE_USER_INFO (state, payload) {
		state.userInfo = payload
	},

	UPDATE_PAYMENT_DUES_INFO (state, payload) {
		state.paymentDuesInfo = payload
	},

	CLEAR_PAYMENT_STATE (state) {
		state.paymentDuesInfo = {}
	},

	UPDATE_UPPER_LEFT_LOGO (state, payload) {
		state.upperLeftLogo = payload
	},

	UPDATE_ACTIVE_ROOM (state, payload) {
		state.activeRoom = payload
	},

	UPDATE_STORED_LIGHTNESS (state, payload) {
		state.storedLightness = payload
	},

	SET_ACTIVE_PRESET (state, payload) {
		state.activePreset = payload
	},

	UPDATE_DYNAMIC_STYLE (state, payload) {
		state.dynamicStyleFetched = payload
	},

	UPDATE_SELECTED_COLOR (state, payload) {
		state.selectedColor = payload
	},

	UPDATE_THEME (state, payload) {
		state.darkTheme = payload
	},

	UPDATE_REMEMBER_LOGIN (state, payload) {
		state.rememberLogin = payload
	}
}
