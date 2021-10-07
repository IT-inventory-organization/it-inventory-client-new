import axios from "axios";
import { AESDecrypt, AESEncrypt } from "../helper/Encryption";
// import router from "../router/";
const baseUrl = process.env.BASE_URL;

const report = {
  state: {
    reportId: "",
    report: {
      pengajuanSebagai: "",
      diajukanDikantor: "",
      jenisPemberitahuan: "",
      BCDocumentType: "",
    },
    reports: [],
    // Data Header
    dataPengajuan: {
      kantorPabeanAsal: "",
      kategoryPemberitahuan: "",
      kategoryPengeluaran: "",
      tujuanPengeluaran: "",
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
      tanggalIjinBpkPengirim: "",
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
      valuta: "",
      kursNDPBM: "",
      cif: "",
      voluntaryDeclaration: "",
      freight: "",
      hargaPenyerahan: "",
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
    dataLartas: {
      dataLartasBarang: "",
      reportId: "",
    },
    // End Data Header

    // Data Lanjutan
    /*
      dataDokumen:[
        {
          kodeDokumen: "55154-2415",
          nomorDokumen: "08-239-6154",
          tanggalDokumen: "10-04-2016"
        }
      ]
    */
    dataDokumen: [],
  },
  mutations: {
    // Data Header
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
      state.identitasPenerima[payload.key] = payload.value;
    },
    SET_TRANSAKSI_PERDAGANGAN(state, payload) {
      state.transaksiPerdagangan[payload.key] = payload.value;
    },
    SET_DATA_PENGANGKUTAN(state, payload) {
      state.dataPengangkutan[payload.key] = payload.value;
    },
    SET_DATA_PELABUHAN_MUAT_BONGKAR(state, payload) {
      state.dataPelabuhanMuatBongkar[payload.key] = payload.value;
    },
    SET_DATA_BERAT_DAN_VOLUME(state, payload) {
      state.dataBeratDanVolume[payload.key] = payload.value;
    },
    SET_DATA_PETI_KEMAS_DAN_PENGEMAS(state, payload) {
      state.dataPetiKemasDanPengemas[payload.key] = payload.value;
    },
    SET_DATA_TEMPAT_PENIMBUNAN(state, payload) {
      state.dataTempatPenimbunan[payload.key] = payload.value;
    },
    SET_DATA_PERKIRAAN_TANGGAL_PENGELUARAN(state, payload) {
      state.dataPerkiraanTanggalPengeluaran[payload.key] = payload.value;
    },
    SET_DATA_LARTAS(state, payload) {
      state.dataLartas[payload.key] = payload.value;
    },

    // Data Lanjutan
    SET_DATA_DOKUMEN(state, payload) {
      state.dataDokumen = [...state.dataDokumen, payload];
    },
    UPDATE_DATA_DOKUMENT(state, payload) {
      const temp = [...state.dataDokumen]
      state.dataDokumen = []
      state.dataDokumen = temp.map((ele, ind) => {
        console.log(ind, payload.index)
        if(ind === payload.index) {
          ele = Object.assign({}, payload.payload)
        }
        return ele
      })
    },

    DELETE_DATA_DOKUMEN(state, payload) {
      if (state.dataDokumen.length < 2) {
        state.dataDokumen = [];
      } else {
        // const index = state.dataDokumen.indexOf(payload);
        // if (index !== -1)
        state.dataDokumen = state.dataDokumen.filter((value) => {
          return value.kodeDokumen !== payload.kodeDokumen;
        });
      }
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
