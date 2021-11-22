import axios from "axios";
import { AESDecrypt } from "@/helper/Encryption";

const baseUrl = process.env.VUE_APP_BASE_URL;

const MasterData = {
  state: {
    loading: {
      loadingEditInformasiPerusahaan: false,
      loadingInformasiPerusahaan: false,
    },
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
  },
  actions: {
    async getInformasiPerusahaan(context) {
      try {
        context.commit("SET_ISLOADING", {
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
          context.commit("SET_INFORMASI_PERUSAHAAN", {
            key: "namaPerusahaan",
            value: data.namaPerusahaan,
          });
          context.commit("SET_INFORMASI_PERUSAHAAN", {
            key: "npwp",
            value: data.npwp,
          });
          context.commit("SET_INFORMASI_PERUSAHAAN", {
            key: "alamat",
            value: data.alamat,
          });
          context.commit("SET_INFORMASI_PERUSAHAAN", {
            key: "nomorTelepon",
            value: data.nomorTelepon,
          });
          context.commit("SET_INFORMASI_PERUSAHAAN", {
            key: "fax",
            value: data.fax,
          });
          context.commit("SET_INFORMASI_PERUSAHAAN", {
            key: "bidangUsaha",
            value: data.bidangUsaha,
          });
          context.commit("SET_INFORMASI_PERUSAHAAN", {
            key: "namaPemilik",
            value: data.namaPemilik,
          });
          context.commit("SET_INFORMASI_PERUSAHAAN", {
            key: "alamatPemilik",
            value: data.alamatPemilik,
          });
        }
      } catch (error) {
        console.log(error);
      } finally {
        context.commit("SET_ISLOADING", {
          key: "loadingInformasiPerusahaan",
          value: false,
        });
      }
    },
  },
};

export default MasterData;
