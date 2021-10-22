import axios from "axios";
import Swal from "sweetalert2";
import router from "@/router/";
import { AESDecrypt, AESEncrypt } from "../helper/Encryption";
import config from "../config.json";

const baseUrl = config.baseURL;

const user = {
  state: {
    user: {
      email: "",
      password: "",
    },
    token: "",
    isLoading: false,
    dataUser: {
      name: "",
      npwp: "",
      address: "",
    },
  },
  mutations: {
    SET_USER(state, payload) {
      state.user[payload.key] = payload.value;
    },
    RESET_USER(state) {
      state.user = { email: "", password: "" };
    },
    SET_TOKEN(state, payload) {
      state.token = payload;
    },
    SET_ISLOADING(state, payload) {
      state.isLoading = payload;
    },
    SET_DATA_USER(state, payload) {
      state.dataUser = payload;
    },
  },
  actions: {
    async loginActionUser(context) {
      try {
        context.commit("SET_ISLOADING", true);
        const result = await axios({
          url: `${baseUrl}/login`,
          method: "POST",
          data: {
            dataLogin: AESEncrypt(context.state.user),
          },
        });
        context.commit("SET_ISLOADING", false);
        context.commit("SET_TOKEN", result.data.data);
        localStorage.setItem("token_it_inventory", result.data.data);
        router.push("/dashboard");
      } catch (error) {
        if (error.message === "Network Error") {
          Swal.fire("Tidak ada jaringan!", "", "error");
        }
        const response = error.response.data;
        if (!response.success) {
          Swal.fire("Gagal!", response.message, "error");
        }
      }
    },

    async getDataUser(context) {
      const result = await axios({
        url: baseUrl + "/report/get/user",
        method: "GET",
        headers: {
          authorization: "Bearer " + localStorage.getItem("token_it_inventory"),
        },
      });

      if (result.data.success) {
        console.log("trigger");
        context.commit("SET_DATA_USER", AESDecrypt(result.data.data));
      }
    },
  },
};

export default user;
