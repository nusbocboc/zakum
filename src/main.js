import Vue from "vue";
import App from "./App";
import router from "./router";
import ShardsVue from "shards-vue";

import "bootstrap/dist/css/bootstrap.css";
import "shards-ui/dist/css/shards.css";
import "@/assets/app.css";

import { EmbedPlugin } from "bootstrap-vue";
Vue.use(EmbedPlugin);

Vue.use(ShardsVue);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});