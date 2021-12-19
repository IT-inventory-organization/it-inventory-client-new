import axios from "axios";
import { AESDecrypt, AESEncrypt } from "@/helper/Encryption";
const baseUrl = process.env.VUE_APP_BASE_URL;

const po = {
  state: {
    loading: false,
    po_baru: {
      kapal_pemilik: "",
      kapal_pembeli: "",
      no_purchase_order: "",
      tanggal: "",
      purchases: [
        // {
        //   kode_barang: "",
        //   kapal_pemilik: "",
        //   kapal_pembeli: "",
        // },
        // {
        //   kode_barang: "",
        //   kapal_pemilik: "",
        //   kapal_pembeli: "",
        // },
      ],
      remarks: "",
      jumlah_total: "",
    },
    reports: [],
    reportId: [],
    optionsTableReports: {
      page: 1,
      itemsPerPage: 10,
      search: "",
    },
    data_barang:[]
  },
  mutations: {
    SET_REPORT_ID(state, payload) {
      state.reportId = payload;
    },
    SET_LOADING_PO(state, payload) {
      state.loading = payload;
    },
    SET_REPORT(state, payload) {
      state.reports = payload;
    },
    SET_PO_BARU(state, payload) {
      state.po_baru[payload.key] = payload.value;
    },
    SET_OPTIONS_TABLE_REPORTS(state, payload) {
      state.optionsTableReports = Object.assign({}, payload);
    },
    SET_DATA_BARANG(state, payload) {
      state.data_barang = payload;
    },
  },
  actions: {
    async getAllPo(context) {
      try {
        context.commit("SET_LOADING_PO", true);
        const result = await axios({
          url: baseUrl + "/po/getAllPO",
          method: "GET",
          headers: {
            authorization:
              "Bearer " + localStorage.getItem("token_it_inventory"),
          },
        });
        const data = AESDecrypt(result.data.data);
        if (result.data.success) {
        // console.log(data);

          context.commit("SET_REPORT", data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        context.commit("SET_LOADING_PO", false);
      }
    },

    async getOnePo(context, id) {
      try {
        context.commit("SET_LOADING_PO", true);
        const result = await axios({
          url: `${baseUrl}/po/viewPerPo/${id}`,
          method: "GET",
          headers: {
            authorization:
              "Bearer " + localStorage.getItem("token_it_inventory"),
          },
        });
        const data = AESDecrypt(result.data.data);

        if (result.data.success) {
          context.commit("SET_REPORT_ID", data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        context.commit("SET_LOADING_PO", false);
      }
    },

    async addPo(context, payload) {
      try {
        context.commit("SET_LOADING_PO", true);
        let eData = AESEncrypt(payload);
        const result = await axios({
          url: baseUrl + "/po/createPO/",
          method: "POST",
          headers: {
            authorization:
              "Bearer " + localStorage.getItem("token_it_inventory"),
          },
          data: {
            dataPO: eData,
          },
        });
        const data = AESDecrypt(result.data.data);
        if (result.data.success) {
          context.commit("SET_PO_BARU", data);
        }
      } catch (error) {
        console.log(error.response.data);
      } finally {
        context.commit("SET_LOADING_PO", false);
      }
    },
    async getItemKapal(context, id) {
      try {
        context.commit("SET_LOADING_PO", true);
        const result = await axios({
          url: `${baseUrl}/po/fetchDataForKapalPenjual/items/${id}`,
          method: "GET",
          headers: {
            authorization:
              "Bearer " + localStorage.getItem("token_it_inventory"),
          },
        });
        const data =  AESDecrypt(result.data.data);
        console.log(data)
        if (result.data.success) {
          context.commit("SET_DATA_BARANG", data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        context.commit("SET_LOADING_PO", false);
      }
    },
  }, // action end
};

export default po;
