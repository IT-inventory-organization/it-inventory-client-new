import axios from "axios";
import Swal from "sweetalert2";
import router from "@/router/";
import { AESEncrypt } from "@/helper/Encryption";

const baseUrl = process.env.VUE_APP_BASE_URL;

const user = {
  state: {
    registerData: {
      namaPerusahaan: "",
      npwp: "",
      alamat: "",
      nomorTelepon: "",
      bidangUsaha: "",
      namaPemilik: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    user: {
      email: "",
      password: "",
    },
    token: "",
    isLoading: false,
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
    SET_ISLOADING_USER(state, payload) {
      state.isLoading = payload;
    },
    SET_DATA_USER(state, payload) {
      state.dataUser = payload;
    },
  },
  actions: {
    async registerActionUser(context) {
      try {
        context.commit("SET_ISLOADING_USER", true);
        const result = await axios({
          url: `${baseUrl}/register`,
          method: "POST",
          data: {
            dataRegister: AESEncrypt(context.state.registerData),
          },
        });
        console.log(result);
      } catch (error) {
        if (error.message === "Network Error") {
          Swal.fire("Tidak ada jaringan!", "", "error");
        }
        const response = error.response.data;
        if (!response.success) {
          Swal.fire("Gagal!", response.message, "error");
        }
      } finally {
        context.commit("SET_ISLOADING_USER", false);
      }
    },
    async loginActionUser(context) {
      try {
        context.commit("SET_ISLOADING_USER", true);
        const result = await axios({
          url: `${baseUrl}/login`,
          method: "POST",
          data: {
            dataLogin: AESEncrypt(context.state.user),
          },
        });
        context.commit("SET_TOKEN", result.data.data);
        localStorage.setItem("token_it_inventory", result.data.data);
        context.commit("SET_USER", {
          key: "email",
          value: "",
        });
        context.commit("SET_USER", {
          key: "password",
          value: "",
        });
        router.push("/dashboard");
      } catch (error) {
        if (error.message === "Network Error") {
          Swal.fire("Tidak ada jaringan!", "", "error");
        }
        const response = error.response.data;
        if (!response.success) {
          Swal.fire("Gagal!", response.message, "error");
        }
      } finally {
        context.commit("SET_ISLOADING_USER", false);
      }
    },
  },
};

export default user;
