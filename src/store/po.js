import axios from "axios";
import { AESDecrypt } from "@/helper/Encryption";
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
          {
            kode_barang: "",
            kapal_pemilik: "",
            kapal_pembeli: "",
          },
          {
            kode_barang: "",
            kapal_pemilik: "",
            kapal_pembeli: "",
          },
        ],
        remarks: "",
        jumlah_total: ""
      },
      reports: {
        data: [
          {
            id: "1",
            nomor_po: "PO-00001",
            tanggal: "20-02-2020",
            kapal_pemilik: "MEDELIN WEST, GENERAL PURPOSE (BO)",
            kapal_pembeli: "JOHN CHAINE 2, GENERAL PURPOSE (CO)",
          },
          {
            id: "2",
            nomor_po: "PO-00002",
            tanggal: "20-02-2020",
            kapal_pemilik: "MEDELIN WEST, GENERAL PURPOSE (BO)",
            kapal_pembeli: "JOHN CHAINE 2, GENERAL PURPOSE (CO)",
          },
        ],
      },
      optionsTableReports: {
        page: 1,
        itemsPerPage: 10,
        search: "",
      },
      
    },
    mutations: {
      SET_REPORT_ID(state, payload) {
        state.reportId = payload;
      },
      SET_LOADING_PO(state, payload) {
        state.loading = payload;
      },
      SET_REPORT(state, payload) {
        state.report[payload.key] = payload.value;
      },
      SET_PO_BARU(state, payload) {
        state.po_baru[payload.key] = payload.value;
      },
      SET_OPTIONS_TABLE_REPORTS(state, payload) {
        state.optionsTableReports = Object.assign({}, payload);
      },
    },
    actions: {
      async getAllPo(context){
        try{

          context.commit("SET_LOADING_PO", true);
          const result = await axios({
            url: baseUrl + "/po",
            method: "GET",
            headers: {
              authorization:
                "Bearer " + localStorage.getItem("token_it_inventory"),
            },
          });
          const data = AESDecrypt(result.data.data);
          if (result.data.success) {
            context.commit("SET_DATA_INFORMASI_PERUSAHAAN", {data: data});
          }
        }
       catch (error) {
        console.log(error);
      } finally {
        context.commit("SET_LOADING_PO", false);
      }
    },


  
  }// action end
  };
  
  export default po;
  