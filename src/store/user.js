import axios from "axios";
import Swal from "sweetalert2";
import router from "@/router/";
import Encryption from "../helper/Encryption";

const baseUrl = "http://192.168.100.32:3000/";

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
  },
  actions: {
    async loginActionUser(context) {
      try {
        context.commit("SET_ISLOADING", true);
        const result = await axios({
          url: `${baseUrl}login`,
          method: "POST",
          data: {
            dataLogin: Encryption.AESEncrypt(context.state.user),
          },
        });
        // const result = await axios.post(
        //   `${baseUrl}login`,
        //   Encryption.AESEncrypt()
        // );
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
  },
};

export default user;
