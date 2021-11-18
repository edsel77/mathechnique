import Vue from 'nativescript-vue';
import Navigator from 'nativescript-vue-navigator';
import axios from 'axios/dist/axios';
import store from './store';
import routes from './router';
import { Mixin } from './mixins';
const Storage = require('tns-core-modules/application-settings');
import _ from 'lodash';
import { CheckBox } from '@nstudio/nativescript-checkbox';

Vue.prototype._ = _;

import VueDevtools from 'nativescript-vue-devtools';
Vue.use(VueDevtools);

var application = require('tns-core-modules/application');
application.setCssFileName('~/assets/css/app.css');

Vue.mixin({ mixins: [Mixin] });
Vue.use(Navigator, { routes });
Vue.use(axios);
Vue.prototype.$Storage = Storage;
Vue.prototype.$axios = axios;
import './prototypes';

Vue.registerElement('CheckBox', () => CheckBox, {
  model: {
    prop: 'checked',
    event: 'checkedChange'
  }
});

Vue.registerElement(
  'DropDown',
  () => require('nativescript-drop-down/drop-down').DropDown
);

import { Gif } from 'nativescript-gif';
Vue.registerElement('Gif', () => Gif);

Vue.registerElement(
  'VideoPlayer',
  () => require('@nstudio/nativescript-exoplayer').Video
);

new Vue({
  store,
  render: (h) =>
    h('Navigator', {
      attrs: {
        // defaultRoute: '/no-internet'
        defaultRoute: '/home'
        // defaultRoute: '/quiz'
      }
    })
}).$start();
