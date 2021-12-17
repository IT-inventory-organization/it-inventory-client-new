import axios from "axios";
import { AESDecrypt, AESEncrypt} from "@/helper/Encryption";
const baseUrl = process.env.VUE_APP_BASE_URL;



const inventory = {
    state: {
      loading:{
        MainInventory:false,
      },
        newInventory: {
            voyage: "",
            nama_kapal: "",
            jenis_dokumen: "",
            bendera: ""
        },
      reports: {
        data: [
        //   {
        //     id: 1,
        //     voyage: "VOYAGE",
        //     nama_kapal: "Bechtelar and Sons",
        //     jenis_dokumen: "Pemasukan",
        //     bendera: "INA",
        //     details: [
        //         {
        //             kode_barang: "41539",
        //             nama_barang: "BARANG A",
        //             item_deskripsi: "Descriptions",
        //             satuan_kemasan: "PKG",          
        //             quantity: 123
        //         },{
        //             kode_barang: "98756",
        //             nama_barang: "BARANG B",
        //             item_deskripsi: "Descriptions",
        //             satuan_kemasan: "PKG",          
        //             quantity: 123
        //         },{
        //             kode_barang: "87452",
        //             nama_barang: "BARANG C",
        //             item_deskripsi: "Descriptions",
        //             satuan_kemasan: "PKG",          
        //             quantity: 123
        //         },
        //     ]
        // },
        //   {
        //     id: 2,
        //     voyage: "VOYAGE1",
        //     nama_kapal: "Bechtelar and Sons",
        //     jenis_dokumen: "Pemasukan",
        //     bendera: "INA",
        //     details: [
        //         {
        //             kode_barang: "41539",
        //             nama_barang: "BARANG A",
        //             item_deskripsi: "Descriptions",
        //             satuan_kemasan: "PKG",          
        //             quantity: 123
        //         },{
        //             kode_barang: "98756",
        //             nama_barang: "BARANG B",
        //             item_deskripsi: "Descriptions",
        //             satuan_kemasan: "PKG",          
        //             quantity: 123
        //         },{
        //             kode_barang: "87452",
        //             nama_barang: "BARANG C",
        //             item_deskripsi: "Descriptions",
        //             satuan_kemasan: "PKG",          
        //             quantity: 123
        //         },
        //     ]
        //   },
        //   {
        //     id: 3,
        //     voyage: "VOYAGE2",
        //     nama_kapal: "Bechtelar and Sons",
        //     jenis_dokumen: "Pemasukan",
        //     bendera: "INA",
        //     details: [
        //         {
        //             kode_barang: "41539",
        //             nama_barang: "BARANG A",
        //             item_deskripsi: "Descriptions",
        //             satuan_kemasan: "PKG",          
        //             quantity: 123
        //         },{
        //             kode_barang: "98756",
        //             nama_barang: "BARANG B",
        //             item_deskripsi: "Descriptions",
        //             satuan_kemasan: "PKG",          
        //             quantity: 123
        //         },{
        //             kode_barang: "87452",
        //             nama_barang: "BARANG C",
        //             item_deskripsi: "Descriptions",
        //             satuan_kemasan: "PKG",          
        //             quantity: 123
        //         },
        //     ]
        //   },
        //   {
        //     id: 4,
        //     voyage: "VOYAGE3",
        //     nama_kapal: "Bechtelar and Sons",
        //     jenis_dokumen: "Pemasukan",
        //     bendera: "INA",
        //     details: [
        //         {
        //             kode_barang: "41539",
        //             nama_barang: "BARANG A",
        //             item_deskripsi: "Descriptions",
        //             satuan_kemasan: "PKG",          
        //             quantity: 123
        //         },{
        //             kode_barang: "98756",
        //             nama_barang: "BARANG B",
        //             item_deskripsi: "Descriptions",
        //             satuan_kemasan: "PKG",          
        //             quantity: 123
        //         },{
        //             kode_barang: "87452",
        //             nama_barang: "BARANG C",
        //             item_deskripsi: "Descriptions",
        //             satuan_kemasan: "PKG",          
        //             quantity: 123
        //         },
        //     ]
        //   },
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
      SET_LOADING_INVENTORY(state, payload) {
        state.loading[payload.key] = payload.value;
      },
      SET_REPORT_INVENTORY(state, payload) {
        state.reports[payload.key] = payload.value;
      },
      SET_PO_BARU_INVENTORY(state, payload) {
        state.po_baru[payload.key] = payload.value;
      },
      SET_OPTIONS_TABLE_REPORTS(state, payload) {
        state.optionsTableReports = Object.assign({}, payload);
      },
    },
    actions: {

      async getAllReport(context){
        try{
          context.commit("SET_LOADING_INVENTORY", {key:"MainInventory", value:true});
          const result = await axios({
            url: baseUrl + "/report/getall/",
            method: "GET",
            headers: {
              authorization:
                "Bearer " + localStorage.getItem("token_it_inventory"),
            },
          });
          const data = AESDecrypt(result.data.data);
          // console.log(data,"KAPAL KARAM")
          if (result.data.success) {
            context.commit("SET_REPORT_INVENTORY", {key:'data',value:data});
          }
        }
       catch (error) {
        console.log(error.response.data);
      } finally {
        context.commit("SET_LOADING_INVENTORY", {key:"MainInventory", value:false});
      }
      }


    },
  };
  
  export default inventory;
  