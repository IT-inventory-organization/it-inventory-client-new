import axios from "axios";
import { AESDecrypt, AESEncrypt } from "../helper/Encryption";

const baseUrl = process.env.BASE_URL;

const report = {
  state: {
    reportId: "",
    report: {
      pengajuanSebagai: "Test 1",
      diajukanDikantor: "Test 2",
      jenisPemberitahuan: "Test 1",
      BCDocumentType: "Test 2",
    },
    reports: [],
    dataPengajuan: {
      kantorPabeanAsal: "",
      kategoryPemberitahuan: "",
      kategoryPengeluaran: "",
      asalBarang: "",
      caraPembayaran: "",
      reportId: "",
    },
    identitasPengirim: {
      jenisIdentitasPengirim: "",
      nomorIdentitasPengirim: "",
      namaPengirim: "",
      alamatPengirim: "",
      nomorIjinBpkPengirim: "",
      tanggalIjinbpkPengirim: "",
      reportId: "",
    },
    identitasPenerima: {
      jenisIdentitasPenerima: "",
      nomorIdentitasPenerima: "",
      namaPenerima: "",
      alamatPenerima: "",
      reportId: "",
    },
    transaksiPerdagangan: {
      transaksi: "",
      transaksiLainnya: "",
      valute: "",
      kursNDPBM: "",
      cif: "",
      voluntaryDeclaration: "",
      freight: "",
      reportId: "",
    },
    dataPengangkutan: {
      caraAngkut: "",
      namaPengangkut: "",
      bendera: "",
      nomorVoyFlightPol: "",
      reportId: "",
    },
    dataPelabuhanMuatBongkar: {
      pelabuhanMuat: "",
      pelabuhanTujuan: "",
      pelabuhanTransit: "",
      reportId: "",
    },
    dataBeratDanVolume: {
      beratBersih: "",
      beratKotor: "",
      volume: "",
      reportId: "",
    },
    dataPetiKemasDanPengemas: {
      jumlahJenisKemasan: "",
      jumlahPetiKemas: "",
      jumlahJenisBarang: "",
      reportId: "",
    },
    dataTempatPenimbunan: {
      tempatPenimbunan: "",
      reportId: "",
    },
    dataPerkiraanTanggalPengeluaran: {
      perkiraanTanggalPengeluaran: "",
      reportId: "",
    },
  },
  mutations: {
    SET_DATA_REPORT(state, payload) {
      state.report[payload.key] = payload.value;
    },
    SET_REPORT(state, payload) {
      state.report = payload;
    },
    SET_REPORTS(state, payload) {
      state.reports = payload;
    },
    SET_DATA_PENGAJUAN(state, payload) {
      state.dataPengajuan[payload.key] = payload.value;
    },
    SET_IDENTITAS_PENGIRIM(state, payload) {
      state.identitasPengirim[payload.key] = payload.value;
    },
    SET_IDENTITAS_PENERIMA(state, payload) {
      state.identitasPengirim[payload.key] = payload.value;
    },
    SET_TRANSAKSI_PERDAGANGAN(state, payload) {
      state.identitasPengirim[payload.key] = payload.value;
    },
    SET_DATA_PENGANGKUTAN(state, payload) {
      state.identitasPengirim[payload.key] = payload.value;
    },
    SET_DATA_PELABUHAN_MUAT_BONGKAR(state, payload) {
      state.identitasPengirim[payload.key] = payload.value;
    },
    SET_DATA_BERAT_DAN_VOLUME(state, payload) {
      state.identitasPengirim[payload.key] = payload.value;
    },
    SET_DATA_PETI_KEMAS_DAN_PENGEMAS(state, payload) {
      state.identitasPengirim[payload.key] = payload.value;
    },
    SET_DATA_TEMPAT_PENIMBUNAN(state, payload) {
      state.identitasPengirim[payload.key] = payload.value;
    },
    SET_DATA_PERKIRAAN_TANGGAL_PENGELUARAN(state, payload) {
      state.identitasPengirim[payload.key] = payload.value;
    },
  },
  actions: {
    async createReport(context) {
      let result = await axios({
        url: baseUrl + "/report",
        method: "POST",
        headers: {
          authorization: "Bearer " + localStorage.getItem("token_it_inventory"),
        },
        data: AESEncrypt(context.state.report),
      });
      if (result.success) {
        context.commit("SET_REPORT", AESDecrypt(result.data));
      }
    },
    async fetchData(context) {
      let result = await axios({
        url: baseUrl + "/report",
        method: "GET",
        headers: {
          authorization: "Bearer " + localStorage.getItem("token_it_inventory"),
        },
      });
      if (result.success) {
        context.commit("SET_REPORTS", AESDecrypt(result.data));
      }
    },
    async getOneReport(context, payload) {
      let result = await axios({
        url: baseUrl + "/report/oneReport/" + payload.id,
        method: "GET",
        headers: {
          authorization: "Bearer " + localStorage.getItem("token_it_inventory"),
        },
      });
      if (result.success) {
        context.commit("SET_REPORT", AESDecrypt(result.data));
      }
    },
  },
};

export default report;
