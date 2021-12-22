import axios from "axios";
import { AESDecrypt, AESEncrypt } from "@/helper/Encryption";
import Swal from "sweetalert2";
const baseUrl = process.env.VUE_APP_BASE_URL;

const po = {
  state: {
    loading: false,
    PurchaseOrder: {
      reportId: "1",
      kapalPenjual: "",
      nomorPO: "",
      tanggalPurchaseOrder: "",
      remarks: "",
      jumlahTotal: "",
    },
    ListPurchaseOrderItem: [
      {
        kodeBarang: "",
        itemDeskripsi: "",
        satuanKemasan: "",
        quantity: "",
        hargaSatuan: "",
        jumlah: "",
      },
    ],

    reports: [],
    reportId: [],
    optionsTableReports: {
      page: 1,
      itemsPerPage: 10,
      search: "",
    },
    kapalPenjual: [],
    dataBarang: [],
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
    SET_OPTIONS_TABLE_REPORTS(state, payload) {
      state.optionsTableReports = Object.assign({}, payload);
    },
    SET_KAPAL_PENJUAL(state, payload) {
      state.kapalPenjual = payload;
    },
    SET_DATA_BARANG(state, payload) {
      state.dataBarang = payload;
    },
    SET_PURCHASE_ORDER(state, payload) {
      state.PurchaseOrder[payload.key] = payload.value;
    },
    SET_PURCHASE_ORDER_ITEM(state, payload) {
      state.PurchaseOrder[payload.key] = payload.value;
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

    async addPo(context) {
      const { PurchaseOrder, ListPurchaseOrderItem } = context.state;
      try {
        context.commit("SET_LOADING_PO", true);
        const payload = {
          PurchaseOrder,
          ListPurchaseOrderItem,
        };
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
        if (result.data.success) {
          Swal.fire("Berhasil", "Berhasil Menambahkan PO", "success");
        }
      } catch (error) {
        console.log(error.response.data);
      } finally {
        context.commit("SET_LOADING_PO", false);
      }
    },

    async deletePo(context, id) {
      try {
        context.commit("SET_LOADING_PO", true);
        const result = await axios({
          url: `${baseUrl}/po/deletePurchaseOrder/${id}`,
          method: "DELETE",
          headers: {
            authorization:
              "Bearer " + localStorage.getItem("token_it_inventory"),
          },
        });
        if (result.data.success) {
          Swal.fire("Berhasil!", "Berhasil Menghapus po.", "success");
          context.dispatch("getAllPo");
        }
      } catch (error) {
        console.log(error);
      } finally {
        context.commit("SET_LOADING_PO", false);
      }
    },

    async fetchKapalPenjual(context) {
      try {
        context.commit("SET_LOADING_PO", true);
        const result = await axios({
          url: `${baseUrl}/po/fetchDataForKapalPenjual/list`,
          method: "GET",
          headers: {
            authorization:
              "Bearer " + localStorage.getItem("token_it_inventory"),
          },
        });
        const data = AESDecrypt(result.data.data);
        if (result.data.success) {
          context.commit("SET_KAPAL_PENJUAL", data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        context.commit("SET_LOADING_PO", false);
      }
    },

    async getBarangAfterChoosingKapalPenjual(context, id) {
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
        const data = AESDecrypt(result.data.data);
        console.log(data);
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
