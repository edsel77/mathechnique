import Vue from 'vue';
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex';
import moment from 'moment';

export const Mixin = {
  data() {
    return {
      themeColor: 'orange'
    };
  },

  computed: {
    ...mapGetters({
      GET_MY_PROFILE: 'GET_MY_PROFILE'
    })
  },

  methods: {
    route(route, props = '', cache = false) {
      if (route === '') return;
      this.$navigator.navigate(route, {
        props,
        clearHistory: cache,
        transition: {
          name: 'slide',
          duration: 300
        }
      });
    },

    back() {
      this.$navigator.back();
    },

    leadingZero(num, size) {
      num = num.toString();
      while (num.length < size) num = '0' + num;
      return num;
    }
  }
};
