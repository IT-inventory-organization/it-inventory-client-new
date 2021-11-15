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
      jenisBarang: "",
      nilaiBarang: "",
      caraPembayaran: "",
      asalBarang: "",
      jumlahBarang: "",
      jumlahKemasan: "",
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
      freight: "",
      NDPBMKurs: "",
      cif: "",
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
      beratMuatan: "",
      beratKapalDanMuatan: "",
      volume: "",
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
