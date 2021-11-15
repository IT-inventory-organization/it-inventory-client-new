import Vue from "vue";
import Vuex from "vuex";
import dashboard from "@/store/dashboard";
import MasterData from "@/store/MasterData";
import plb from "@/store/plb";
import user from "@/store/user";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    dashboard,
    MasterData,
    plb,
    user,
  },
});
