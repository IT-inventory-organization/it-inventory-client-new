import axios from "axios";
import { AESDecrypt } from "../helper/Encryption";

const baseUrl = process.env.BASE_URL;

const report = {
  state: {
    reportId: "",
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
      tanggalIjinbpkPengirim:"",
      reportId: ""
    },
    identitasPenerima: {
      jenisIdentitasPenerima: "",
      nomorIdentitasPenerima: "",
      namaPenerima: "",
      alamatPenerima: "",
      reportId: ""
    },
    transaksiPerdagangan: {
      transaksi: "",
      transaksiLainnya: "",
      valute: "",
      kursNDPBM: "",
      cif: "",
      voluntaryDeclaration: "",
      freight: "",
      reportId: ""
    },
    dataPengangkutan: {
      caraAngkut: "",
      namaPengangkut: "",
      bendera: "",
      nomorVoyFlightPol: "",
      reportId:"",
    },
    dataPelabuhanMuatBongkar: {
      pelabuhanMuat: "",
      pelabuhanTujuan: "",
      pelabuhanTransit: "",
      reportId: ""
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
      reportId: ""
    }
  },
  mutations: {
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
    async fetchData(context) {
      let result = await axios.get({
        url: baseUrl + "/report",
        method: "GET",
        headers: {
          authorization: "Bearer " + localStorage.getItem("token_it_inventory")
        },
      });
      if(result.success) {
        context.commit("SET_DATA", AESDecrypt(result.data));
      }
    },
    async getOneReport(context, payload) {
      let result = await axios.get({
        url: baseUrl + "/report/oneReport/" + payload.id,
        method: "GET",
        headers: {
          authorization: "Bearer " + localStorage.getItem("token_it_inventory")
        },
      });
      if(result.success) {
        context.commit("SET_DATA", AESDecrypt(result.data));
      }
    }
  },
};

export default report;
