import axios from "axios";
import Swal from "sweetalert2";
import router from "@/router/";
import { AESEncrypt } from "@/helper/Encryption";

const baseUrl = process.env.VUE_APP_BASE_URL;

const user = {
  state: {
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
        context.commit("SET_ISLOADING", false);
      }
    },
  },
};

export default user;
