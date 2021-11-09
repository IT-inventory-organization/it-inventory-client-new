import Vue from "vue";
import Vuex from "vuex";
import report from "@/store/report";
import user from "@/store/user";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    report,
    user,
  },
});
