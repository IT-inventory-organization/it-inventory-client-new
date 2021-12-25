import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueApexCharts from "vue-apexcharts";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import VueHtmlToPaper from "vue-html-to-paper";

const options = {
  name: "_blank",
  specs: ["fullscreen=yes", "scrollbars=yes"],
  styles: [
    "https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css",
    "https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js",
  ],
};

Vue.use(VueHtmlToPaper, options);
Vue.use(VueSweetalert2);
Vue.use(VueApexCharts);

Vue.component("apexchart", VueApexCharts);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
