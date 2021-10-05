import axios from "axios";

const baseUrl = "http://localhost:3000/";

const user = {
  state: {
    dataPengajuan: {
      name: "",
    },
  },
  mutations: {
    SET_NAME(state, value) {
      state.dataPengajuan.name = value;
    },
    SET_DATA(state, value) {
      state.dataPengajuan = value;
    },
  },
  actions: {
    async fetchData(context) {
      let result = await axios.get(baseUrl);
      result = {
        success: true,
        message: "",
        data: {
          name: "ayam",
          tanggal: Date.now(),
        },
      };
      context.commit("SET_DATA", result.data);
    },
  },
};

export default user;
