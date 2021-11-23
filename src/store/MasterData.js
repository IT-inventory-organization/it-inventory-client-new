import axios from "axios";
import Swal from "sweetalert2";
import Toast from "@/helper/Toast";
import { AESDecrypt, AESEncrypt } from "@/helper/Encryption";

const baseUrl = process.env.VUE_APP_BASE_URL;

const MasterData = {
  state: {
    loading: {
      loadingEditInformasiPerusahaan: false,
      loadingInformasiPerusahaan: false,
    },
    dataInformasiPerusahaan: {},
    informasiPerusahaan: {
      namaPerusahaan: "",
      npwp: "",
      alamat: "",
      nomorTelepon: "",
      fax: "",
      bidangUsaha: "",
      namaPemilik: "",
      alamatPemilik: "",
    },
  },
  mutations: {
    SET_LOADING(state, payload) {
      state.loading[payload.key] = payload.value;
    },
    SET_INFORMASI_PERUSAHAAN(state, payload) {
      state.informasiPerusahaan[payload.key] = payload.value;
    },
    SET_DATA_INFORMASI_PERUSAHAAN(state, payload) {
      state.dataInformasiPerusahaan = payload;
    },
  },
  actions: {
    async getInformasiPerusahaan(context) {
      try {
        context.commit("SET_LOADING", {
          key: "loadingInformasiPerusahaan",
          value: true,
        });
        const result = await axios({
          url: baseUrl + "/user/getInfoPengguna",
          method: "GET",
          headers: {
            authorization:
              "Bearer " + localStorage.getItem("token_it_inventory"),
          },
        });
        const data = AESDecrypt(result.data.data);
        if (result.data.success) {
          context.commit("SET_DATA_INFORMASI_PERUSAHAAN", data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        context.commit("SET_LOADING", {
          key: "loadingInformasiPerusahaan",
          value: false,
        });
      }
    },

    async updateInformasiPerusahaan(context) {
      try {
        context.commit("SET_LOADING", {
          key: "loadingEditInformasiPerusahaan",
          value: true,
        });
        const result = await axios({
          url: baseUrl + "/user/update_info_pengguna2",
          method: "PUT",
          headers: {
            authorization:
              "Bearer " + localStorage.getItem("token_it_inventory"),
          },
          data: {
            InfoPengguna: AESEncrypt(context.state.informasiPerusahaan),
          },
        });
        context.dispatch("getInformasiPerusahaan");
        Toast.fire({
          icon: "success",
          title: "Data berhasil diubah!",
        });
        return result.data.success;
      } catch (error) {
        if (error.message === "Network Error") {
          Swal.fire("Tidak ada jaringan!", "", "error");
        }
        const response = error.response.data;
        if (!response.success) {
          Swal.fire("Gagal!", response.message, "error");
        }
        return error.response.data.success;
      } finally {
        context.commit("SET_LOADING", {
          key: "loadingEditInformasiPerusahaan",
          value: false,
        });
      }
    },
  },
};

export default MasterData;
