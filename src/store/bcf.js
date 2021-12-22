import axios from "axios";
import { AESDecrypt } from "@/helper/Encryption";
const baseUrl = process.env.VUE_APP_BASE_URL;

const bcf = {
  state: {
    loading: {
      loadingViewList: false,
    },
    listBCF: [],
    optionsTableListBCF: {
      page: 1,
      itemsPerPage: 5,
      search: "",
    },
  },
  mutations: {
    SET_LOADING_BCF(state, payload) {
      state.loading[payload.key] = payload.value;
    },
    SET_LIST_BCF(state, payload) {
      state.listBCF = payload;
    },
    SET_OPTIONS_TABLE_LIST_BCF(state, payload) {
      state.optionsTableListBCF = Object.assign({}, payload);
    },
  },
  actions: {
    async fetchGetAllBCF(context) {
      try {
        context.commit("SET_LOADING_BCF", {
          key: "loadingViewList",
          value: true,
        });
        const res = await axios.get(`${baseUrl}/bcf3315/list`, {
          headers: {
            authorization:
              "Bearer " + localStorage.getItem("token_it_inventory"),
          },
        });
        const dataDecrypted = AESDecrypt(res.data.data);
        context.commit("SET_LIST_BCF", dataDecrypted);
      } catch (error) {
        console.log(error.response.data);
      } finally {
        context.commit("SET_LOADING_BCF", {
          key: "loadingViewList",
          value: false,
        });
      }
    },
  },
};

export default bcf;
