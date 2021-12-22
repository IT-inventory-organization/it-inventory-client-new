import axios from "axios";
import { AESDecrypt, AESEncrypt } from "@/helper/Encryption";
const baseUrl = process.env.VUE_APP_BASE_URL;

const bcf = {
  state: {
    loading: false,
    reports: [],
    reportId: [],
    optionsTableReports: {
      page: 1,
      itemsPerPage: 10,
      search: "",
    },
  },
  mutations: {
    SET_LOADING_BCF(state, payload) {
      state.loading = payload;
    },
    SET_REPORT(state, payload) {
      state.reports = payload;
    },
    SET_OPTIONS_TABLE_REPORTS(state, payload) {
      state.optionsTableReports = Object.assign({}, payload);
    },
    SET_REPORT_ID(state, payload) {
      state.reportId = payload;
    },
  },
  actions: {
    async getAllBcf(context) {
      try {
        context.commit("SET_LOADING_BCF", true);
        const result = await axios({
          url: `${baseUrl}/bcf3315/getNomorPo/list/`,
          method: "GET",
          headers: {
            authorization:
              "Bearer " + localStorage.getItem("token_it_inventory"),
          },
        });
        const data = AESDecrypt(result.data.data);
        if (result.data.success) {
          context.commit("SET_REPORT", data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        context.commit("SET_LOADING_BCF", false);
      }
    },
  }, // action end
};

export default bcf;
