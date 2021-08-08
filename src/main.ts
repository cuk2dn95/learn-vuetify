import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = true;
Vue.config.silent = false;

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
