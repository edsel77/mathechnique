import Vue from 'nativescript-vue'
import Vuex from 'vuex'
import localStorage from 'nativescript-localstorage'
import getters from './common/getters'
import mutations from './common/mutations'
import actions from './common/actions'
import state from './common/state'

const NSVuexPersistent = store => {
  let storageStr = localStorage.getItem('ns-vuex-persistent');
  if (storageStr) {
    store.replaceState(JSON.parse(storageStr))
  }
  store.subscribe((mutation, state) => {
    localStorage.setItem('ns-vuex-persistent', JSON.stringify(state));
  })
};

Vue.use(Vuex)
const store = new Vuex.Store({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
  plugins: [NSVuexPersistent]
})
export default store
