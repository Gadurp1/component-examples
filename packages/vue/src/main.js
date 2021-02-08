import Vue from "vue";
import App from "./App.vue";
import { PageComponents } from '@newmont/components'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Object.keys(PageComponents).forEach((block) => {
  Vue.component(block, PageComponents[block])
})

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
