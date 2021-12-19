import axios from "axios";
import { AESDecrypt, AESEncrypt} from "@/helper/Encryption";
const baseUrl = process.env.VUE_APP_BASE_URL;
const ProduksiBarang = {
  state: {
    loading:{
      produksilist:false
    },
    barang_produksi_baru: {
      nomorProduksi: "005",
      dataBarangId: 7,
      quantity: 1,
      tanggalProduksi: "2021-12-06",
      remarks: "wow",
      details: [
        {
          dataBarangId: 8,
          kodeBarang: "ALM-009",
          deskripsi: "Emas",
          quantity: 1,
          jumlah: 10,
        },
      ],
    },
    reports: {
      data: [
        {
          nomorProduksi: "001",
          dataBarangId: 1,
          quantity: 1,
          tanggalProduksi: "2021-12-06",
          remarks: "wow",
          details: [
            {
              dataBarangId: 1,
              kodeBarang: "ALM-009",
              deskripsi: "Emas",
              quantity: 1,
              jumlah: 10,
            },
            {
              dataBarangId: 2,
              kodeBarang: "ALM-009",
              deskripsi: "Perak",
              quantity: 2,
              jumlah: 10,
            },
          ],
        },
        {
          nomorProduksi: "002",
          dataBarangId: 2,
          quantity: 2,
          tanggalProduksi: "2021-12-06",
          remarks: "wow",
          details: [
            {
              dataBarangId: 2,
              kodeBarang: "ALM-009",
              deskripsi: "Perak",
              quantity: 2,
              jumlah: 10,
            },
            {
              dataBarangId: 2,
              kodeBarang: "ALM-009",
              deskripsi: "Perak",
              quantity: 2,
              jumlah: 10,
            },
            {
              dataBarangId: 2,
              kodeBarang: "ALM-009",
              deskripsi: "Perak",
              quantity: 2,
              jumlah: 10,
            },
          ],
        },
        {
          nomorProduksi: "003",
          dataBarangId: 3,
          quantity: 3,
          tanggalProduksi: "2021-12-06",
          remarks: "wow",
          details: [
            {
              dataBarangId: 3,
              kodeBarang: "ALM-009",
              deskripsi: "Perunggu",
              quantity: 3,
              jumlah: 10,
            },
          ],
        },
        {
          nomorProduksi: "004",
          dataBarangId: 1,
          quantity: 1,
          tanggalProduksi: "2021-12-06",
          remarks: "wow",
          details: [
            {
              dataBarangId: 1,
              kodeBarang: "ALM-009",
              deskripsi: "Emas",
              quantity: 1,
              jumlah: 10,
            },
            {
              dataBarangId: 2,
              kodeBarang: "ALM-009",
              deskripsi: "Perak",
              quantity: 2,
              jumlah: 10,
            },
          ],
        },
        {
          nomorProduksi: "005",
          dataBarangId: 2,
          quantity: 2,
          tanggalProduksi: "2021-12-06",
          remarks: "wow",
          details: [
            {
              dataBarangId: 2,
              kodeBarang: "ALM-009",
              deskripsi: "Perak",
              quantity: 2,
              jumlah: 10,
            },
            {
              dataBarangId: 2,
              kodeBarang: "ALM-009",
              deskripsi: "Perak",
              quantity: 2,
              jumlah: 10,
            },
            {
              dataBarangId: 2,
              kodeBarang: "ALM-009",
              deskripsi: "Perak",
              quantity: 2,
              jumlah: 10,
            },
          ],
        },
        {
          nomorProduksi: "006",
          dataBarangId: 3,
          quantity: 3,
          tanggalProduksi: "2021-12-06",
          remarks: "wow",
          details: [
            {
              dataBarangId: 3,
              kodeBarang: "ALM-009",
              deskripsi: "Perunggu",
              quantity: 3,
              jumlah: 10,
            },
          ],
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
    SET_LOADING_PRODUKSI(state, payload) {
      state.loading[payload.key] = payload.value;
    },
    SET_REPORT_PRODUKSI(state, payload) {
      state.reports[payload.key] = payload.value;
    },
    SET_PO_BARU_(state, payload) {
      state.barang_produksi_baru = payload;
    },
    SET_OPTIONS_TABLE_REPORTS(state, payload) {
      state.optionsTableReports = Object.assign({}, payload);
    },
  },
  actions: {
    async getallProduksiBarang(context){
      try{
        context.commit("SET_LOADING_PRODUKSI", {key:"produksilist", value:true});
        const result = await axios({
          url: baseUrl + "/produksi",
          method: "GET",
          headers: {
            authorization:
              "Bearer " + localStorage.getItem("token_it_inventory"),
          },
        });
        const data = result.data.data
        console.log(data,"PRODUKSI")
        if (result.data.success) {
          context.commit("SET_REPORT_PRODUKSI", {key:'data',value:data});
        }
      }
     catch (error) {
      console.log(error.response.data);
    } finally {
      context.commit("SET_LOADING_PRODUKSI", {key:"produksilist", value:false});
    }
    },



    async SubmitProduksiBarang(context,payload){
      try{
        context.commit("SET_LOADING_PRODUKSI", {key:"produksilist", value:true});
        const result = await axios({
          url: baseUrl + "/produksi/create",
          method: "POST",
          headers: {
            authorization:
              "Bearer " + localStorage.getItem("token_it_inventory"),
          },
          data:payload
        });
        const data = result.data.data
        // console.log(data,"PRODUKSI CREATE")
        if (result.data.success) {
          // context.commit("SET_REPORT_PRODUKSI", {key:'data',value:data});
        }
      }
     catch (error) {
      console.log(error.response.data);
    } finally {
      context.commit("SET_LOADING_PRODUKSI", {key:"produksilist", value:false});
    }
    }
  },
};

export default ProduksiBarang;
