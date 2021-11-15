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
      state.informasi_perusahaan[payload.key] = payload.value;
    },
  },
  actions: {},
};

export default MasterData;
