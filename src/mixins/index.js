import Vue from 'vue';
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex';
import moment from 'moment';

export const Mixin = {
  data() {
    return {
      themeColor: '#652cb3'
    };
  },

  computed: {
    ...mapState([

    ])
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
  }
};
