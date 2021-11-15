const plb = {
  state: {
    reportId: "",
    loading: {
      loadingListKapal: false,
      loadingEditInformasiPerusahaan: false,
      loadingInformasiPerusahaan: false,
    },
    listKapal: [],
    jumlahKapal: "",
    optionsTableListKapal: {
      page: 1,
      itemsPerPage: 10,
      search: "",
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
    report: {
      jenisPemberitahuan: "",
      diAjukanDiKantor: "Tanjungpinang",
      jenisDokumenBC: "",
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
    itemJenisPemberitahuan: ["Pemasukan", "Pengeluaran"],
    itemJenisDokumenBC: [
      "BC 1.6 (LDP)",
      "BC 4.0 (TLDPP)",
      "BC 2.7 (PLB, KB, TBB, TLB, TPPB, KDUB)",
      "PPB PLB Lokasi Lain (Satu Izin)",
      "PP-FTZ 02 (FTZ)",
    ],
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
    SET_REPORT(state, payload) {
      state.report[payload.key] = payload.value;
    },
    SET_OPTIONS_TABLE_REPORTS(state, payload) {
      state.optionsTableReports = Object.assign({}, payload);
    },
  },
  actions: {},
};

export default plb;
