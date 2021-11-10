const report = {
  state: {
    reportId: "",
    loading: {
      loadingListKapal: false,
      loadingEditInformasiPerusahaan: false,
      loadingInformasiPerusahaan: false,
    },
    list_kapal: [],
    jumlah_kapal: "",
    optionsTableListKapal: {
      page: 1,
      itemsPerPage: 10,
      search: "",
    },
    informasi_perusahaan: {
      nama_perusahaan: "",
      npwp: "",
      alamat: "",
      nomor_telepon: "",
      fax: "",
      bidang_usaha: "",
      nama_pemilik: "",
      alamat_pemilik: "",
    },
  },
  mutations: {
    SET_REPORT_ID(state, payload) {
      state.reportId = payload;
    },
    SET_LOADING(state, payload) {
      state.loading[payload.key] = payload.value;
    },
    SET_LIST_KAPAL(state, payload) {
      state.list_kapal = payload;
    },
    SET_INFORMASI_PERUSAHAAN(state, payload) {
      state.informasi_perusahaan[payload.key] = payload.value;
    },
  },
  actions: {},
};

export default report;
