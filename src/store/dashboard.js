import axios from "axios";
import { AESDecrypt} from "@/helper/Encryption";
const baseUrl = process.env.VUE_APP_BASE_URL;

const dashboard = {
  state: {
    loading: {
      loadingListKapal: false,
    },
    listKapal: [],
    jumlahKapal: "-",
    optionsTableListKapal: {
      page: 1,
      itemsPerPage: 10,
      search: "",
    },
  },
  mutations: {
    SET_LOADING_DASHBOARD(state, payload) {
      state.loading[payload.key] = payload.value;
    },
    SET_LIST_KAPAL(state, payload) {
      state.listKapal = payload;
    },
    SET_JUMLAH_KAPAL(state, payload) {
      state.jumlahKapal = payload;
    },
    SET_OPTIONS_TABLE_LIST_KAPAL(state, payload) {
      state.optionsTableListKapal = Object.assign({}, payload);
    },
  },
  actions: {
    async getDashboardData(context){
      try{
        context.commit("SET_LOADING_DASHBOARD", {key:"loadingListKapal", value:true});
        const result = await axios({
          url: baseUrl + "/report/dashboard/",
          method: "GET",
          headers: {
            authorization:
              "Bearer " + localStorage.getItem("token_it_inventory"),
          },
        });
        const data = AESDecrypt(result.data.data);
        console.log(data,"KAPAL KARAM")
        if (result.data.success) {
          context.commit("SET_LIST_KAPAL", data);
          context.commit("SET_JUMLAH_KAPAL", data.length);
        }
      }
     catch (error) {
      console.log(error.response.data);
    } finally {
      context.commit("SET_LOADING_DASHBOARD", {key:"loadingListKapal", value:false});
    }
    }
  },
};

export default dashboard;
