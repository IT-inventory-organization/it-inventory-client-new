import Vue from "vue";
import Vuex from "vuex";
import user from "./user";
import report from "./report";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user: user,
    report: report,
  },
});
