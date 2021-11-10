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
    reports: {
      data: [
        {
          id: "1",
          tanggal: "20-02-2020",
          jenis_pemberitahuan: "pemasukan",
          jenis_dokumen: "BC",
          nomor_dokumen: "17783",
          voyage_kapal: "17783",
          nama_kapal: "Ziemann - Grant",
          bendera: "INA",
        },
        {
          id: "2",
          tanggal: "20-02-2020",
          jenis_pemberitahuan: "pemasukan",
          jenis_dokumen: "BC",
          nomor_dokumen: "17783",
          voyage_kapal: "17783",
          nama_kapal: "Ziemann - Grant",
          bendera: "INA",
        },
      ],
    },
    optionsTableReports: {
      page: 1,
      itemsPerPage: 10,
      search: "",
    },
    report: {
      diajukan_dikantor: "",
      jenis_pemberitahuan: "",
      jenis_dokumen_bc: "",
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
    SET_OPTIONS_TABLE_LIST_KAPAL(state, payload) {
      state.optionsTableListKapal = Object.assign({}, payload);
    },
    SET_OPTIONS_TABLE_REPORTS(state, payload) {
      state.optionsTableReports = Object.assign({}, payload);
    },
  },
  actions: {},
};

export default report;
