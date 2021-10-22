import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueApexCharts from "vue-apexcharts";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import VueHtmlToPaper from "vue-html-to-paper";

Vue.use(VueHtmlToPaper);
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
