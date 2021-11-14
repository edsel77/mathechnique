export default {
  getActiveRoom: state => {
		return state.activeRoom
	},

	storedLightness: state => {
		return state.storedLightness
	},

	GET_SELECTED_COLOR: (state) => state.selectedColor
};
