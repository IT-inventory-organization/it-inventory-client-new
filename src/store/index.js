import Vue from "vue";
import Vuex from "vuex";
import plb from "@/store/plb";
import user from "@/store/user";
import po from "@/store/po";
import inventory from "@/store/inventory";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    plb,
    user,
    po,
    inventory
  },
});
