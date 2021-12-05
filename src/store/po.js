import axios from "axios";
// import Swal from "sweetalert2";
// import router from "@/router/";
// import { AESEncrypt } from "@/helper/Encryption";
import { AESDecrypt } from "../helper/Encryption";

const baseUrl = process.env.VUE_APP_BASE_URL;
const token = `Bearer ${localStorage.getItem('token_it_inventory')}`

const po = {
    state: {
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
      SET_LOADING(state, payload) {
        state.loading[payload.key] = payload.value;
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
      async getAllPoData (context) {
        try {
          const result = await axios({
            url: `${baseUrl}po/getAllPO`,
            method: "GET",
            Authorization: `${token}`
          });
          
          const returns = AESDecrypt(result.data.data)
          context.commit(returns)

        } catch (err) {
          console.log("err", err)
          console.log(token)
        }
      }
    },
  };
  
  export default po;