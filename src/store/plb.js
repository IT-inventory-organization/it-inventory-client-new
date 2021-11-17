import router from "@/router/";

const plb = {
  state: {
    reportId: "",
    stepper: 1,
    loading: {
      loadingReports: false,
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
      ],
    },
    optionsTableReports: {
      page: 1,
      itemsPerPage: 10,
      search: "",
    },
    constant: {
      pemasukan: "Pemasukan",
      pengeluaran: "Pengeluaran",
    },
    itemJenisPemberitahuan: ["Pemasukan", "Pengeluaran"],
    itemJenisDokumenBCPemasukan: [
      "BC 1.6 (LDP)",
      "BC 4.0 (TLDPP)",
      "BC 2.7 (PLB, KB, TBB, TLB, TPPB, KDUB)",
      "PPB PLB Lokasi Lain (Satu Izin)",
      "PP-FTZ 02 (FTZ)",
    ],
    itemJenisDokumenBCPengeluaran: [
      "BC 2.8 TLDDP (Ex. Impor)",
      "BC 3.3+P3BET (LDP)",
      "BC 4.1 TLDDP (Ex. Lokal)",
      "BC 2.7 (PLB, KB, TBB, TLB, TPPB, KDUB)",
      "PPB PLB Lokasi Lain (Satu Izin)",
      "BC 2.8 & PP-FTZ 02 (FTZ)",
    ],
    itemCaraPembayaran: [
      "EXW",
      "FCA",
      "CPT",
      "CIP",
      "DAP",
      "DPU",
      "DDP",
      "CFR",
      "FOB",
      "FAS",
      "CIF",
    ],
    itemJenisIdentitasPenjual: ["NPWP", "KTP"],
    dokumenPemasukan: {
      nomorDokumenPemasukan: "",
      tanggalDokumenPemasukan: "",
    },
    dokumenTambahan: {
      nomorBC10: "",
      nomorBC11: "",
      nomorBL: "",
      tanggalBC10: "",
      tanggalBC11: "",
      tanggalBL: "",
    },
    dataPelabuhan: {
      pelabuhan: "",
      status: "",
    },
    dataKapal: {
      voyageKapal: "",
      benderaKapal: "",
      namaKapal: "",
      tanggalKedatangan: "",
      tanggalKeberangkatan: "",
    },
    identitasBarang: {
      negaraAsal: "",
      jenisBarang: 0,
      nilaiBarang: 0,
      caraPembayaran: "",
      asalBarang: "",
      jumlahBarang: 0,
      jumlahKemasan: 0,
      nomorPO: "",
    },
    penjualBarang: {
      jenisIdentitasPenjual: "",
      namaPenjual: "",
      nomorIdentitasPenjual: "",
      alamatPenjual: "",
    },
    pengirimBarang: {
      jenisIdentitasPengirim: "",
      namaPengirim: "",
      nomorIdentitasPengirim: "",
      alamatPengirim: "",
    },
    pengusahaPLB: {
      jenisIdentitasPengusahaPLB: "",
      namaPengusahaPLB: "",
      nomorIdentitasPengusahaPLB: "",
      alamatPengusahaPLB: "",
    },
    pembeliBarang: {
      jenisIdentitasPembeli: "",
      namaPembeli: "",
      nomorIdentitasPembeli: "",
      alamatPembeli: "",
    },
    ppjk: {
      jenisIdentitasPpjk: "",
      namaPpjk: "",
      nomorIdentitasPpjk: "",
      alamatPpjk: "",
    },
    mataUang: {
      valuta: "",
      freight: 0,
      NDPBMKurs: 0,
      cif: 0,
      transaksiLainnya: "",
      hargaPenyerahan: "",
    },
    dataPengangkutan: {
      caraAngkut: "",
      bendera: "",
      namaPengangkut: "",
      nomorVoyFlightPol: "",
    },
    beratDanVolume: {
      beratMuatan: 0,
      beratKapalDanMuatan: 0,
      volume: 0,
    },
    tempatPenimbunan: {
      tempatPenimbunan: "",
      perkiraanTanggalPengeluaran: "",
      isTempatPenimbunan: false,
    },
    dataBarang: {
      kodeBarang: "",
      namaBarang: "",
      uraian: "",
      nettoBruttoVolume: "",
      satuanKemasan: "",
      stock: "",
      posTarif: "",
      bm: "",
      ppn: "",
      ppmbm: "",
      cukai: "",
      reportId: "",
    },
  },
  mutations: {
    SET_REPORT_ID(state, payload) {
      state.reportId = payload;
    },
    SET_LOADING(state, payload) {
      state.loading[payload.key] = payload.value;
    },
    SET_REPORT(state, payload) {
      state.report[payload.key] = payload.value;
    },
    SET_OPTIONS_TABLE_REPORTS(state, payload) {
      state.optionsTableReports = Object.assign({}, payload);
    },
    SET_STEPPER(state, payload) {
      state.stepper = payload;
      localStorage.setItem("stepper", payload);
    },
    SET_DOKUMEN_PEMASUKAN(state, payload) {
      state.dokumenPemasukan[payload.key] = payload.value;
    },
    SET_DOKUMEN_TAMBAHAN(state, payload) {
      state.dokumenTambahan[payload.key] = payload.value;
    },
    SET_DATA_PELABUHAN(state, payload) {
      state.dataPelabuhan[payload.key] = payload.value;
    },
    SET_DATA_KAPAL(state, payload) {
      state.dataKapal[payload.key] = payload.value;
    },
    SET_IDENTITAS_BARANG(state, payload) {
      state.identitasBarang[payload.key] = payload.value;
    },
    SET_PENJUAL_BARANG(state, payload) {
      state.penjualBarang[payload.key] = payload.value;
    },
    SET_PENGIRIM_BARANG(state, payload) {
      state.pengirimBarang[payload.key] = payload.value;
    },
    SET_PENGUSAHA_PLB(state, payload) {
      state.pengusahaPLB[payload.key] = payload.value;
    },
    SET_PEMBELI_BARANG(state, payload) {
      state.pembeliBarang[payload.key] = payload.value;
    },
    SET_PPJK(state, payload) {
      state.ppjk[payload.key] = payload.value;
    },
    SET_MATA_UANG(state, payload) {
      state.dokumenTambahan[payload.key] = payload.value;
    },
    SET_DATA_PENGANGKUTAN(state, payload) {
      state.dataPengangkutan[payload.key] = payload.value;
    },
    SET_BERAT_DAN_VOLUME(state, payload) {
      state.beratDanVolume[payload.key] = payload.value;
    },
    SET_TEMPAT_PENIMBUNAN(state, payload) {
      state.tempatPenimbunan[payload.key] = payload.value;
    },
  },
  actions: {
    handleSubmitReport(context) {
      localStorage.setItem(
        "NotificationType",
        context.state.report.jenisPemberitahuan
      );

      router.push("/plb/add");
    },
  },
};

export default plb;
