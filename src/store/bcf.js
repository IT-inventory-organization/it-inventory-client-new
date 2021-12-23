import axios from "axios";
import { AESDecrypt } from "@/helper/Encryption";
const baseUrl = process.env.VUE_APP_BASE_URL;

const bcf = {
  namespaced: true,
  state: {
    loading: {
      loadingViewList: false,
      loadingAddNewBCF: false,
      loadingGetPO: false,
      loadingGetBarang: false,
      loadingDeleteBCF: false,
    },
    listBCF: [],
    optionsTableListBCF: {
      page: 1,
      itemsPerPage: 10,
      search: "",
    },
    addNewBCF: {
      tanggal: "",
      penanggungJawab: "",
      jabatan: "",
      nomorFormBcf3315: "",
      lampiran: "",
      npwp: "",
      alamat: "",
      nama: "",
      lokasiPLB: "",
      caraPengangkutan: "Laut",
      pelabuhanMuat: "",
      tanggalPerkiraan: "",
      namaPengangkutKeLuar: "",
      voyage: "",
      callSign: "",
      poId: "",
      status: "MENUNGGU",
    },
    listNomorPO: [],
    listBarang: [],
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
    SET_ADD_NEW_BCF(state, payload) {
      state.addNewBCF[payload.key] = payload.value;
    },
    SET_LIST_NOMOR_PO(state, payload) {
      state.listNomorPO = payload;
    },
    SET_LIST_BARANG(state, payload) {
      state.listBarang = payload;
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
    async fetchGetPO(context) {
      try {
        context.commit("SET_LOADING_BCF", {
          key: "loadingGetPO",
          value: true,
        });

        const res = await axios.get(`${baseUrl}/bcf3315/getNomorPo/list`, {
          headers: {
            authorization:
              "Bearer " + localStorage.getItem("token_it_inventory"),
          },
        });
        const dataDecrypted = AESDecrypt(res.data.data);
        context.commit("SET_LIST_NOMOR_PO", dataDecrypted);
      } catch (error) {
        console.log(error.response.data);
      } finally {
        context.commit("SET_LOADING_BCF", {
          key: "loadingGetPO",
          value: false,
        });
      }
    },
    async fetchGetBarang(context, id) {
      try {
        context.commit("SET_LOADING_BCF", {
          key: "loadingGetBarang",
          value: true,
        });

        const res = await axios.get(
          `${baseUrl}/bcf3315/getNomorPo/items/${id}`,
          {
            headers: {
              authorization:
                "Bearer " + localStorage.getItem("token_it_inventory"),
            },
          }
        );
        const dataDecrypted = AESDecrypt(res.data.data);
        context.commit("SET_LIST_BARANG", dataDecrypted);
      } catch (error) {
        console.log(error.response.data);
      } finally {
        context.commit("SET_LOADING_BCF", {
          key: "loadingGetBarang",
          value: false,
        });
      }
    },
    async addNewBCF(context) {
      try {
        context.commit("SET_LOADING_BCF", {
          key: "loadingAddNewBCF",
          value: true,
        });

        const res = await axios.post(
          `${baseUrl}/bcf3315/create`,
          context.state.addNewBCF,
          {
            headers: {
              authorization:
                "Bearer " + localStorage.getItem("token_it_inventory"),
            },
          }
        );
        return res.data;
      } catch (error) {
        return error.response.data;
      } finally {
        context.commit("SET_LOADING_BCF", {
          key: "loadingAddNewBCF",
          value: false,
        });
      }
    },
    async deleteListBCF(context, id) {
      try {
        context.commit("SET_LOADING_BCF", {
          key: "loadingDeleteBCF",
          value: true,
        });

        const res = await axios.delete(`${baseUrl}/bcf3315/delete/${id}`, {
          headers: {
            authorization:
              "Bearer " + localStorage.getItem("token_it_inventory"),
          },
        });
        return res.data;
      } catch (error) {
        return error.response.data;
      } finally {
        context.commit("SET_LOADING_BCF", {
          key: "loadingDeleteBCF",
          value: false,
        });
      }
    },
  },
};

export default bcf;
