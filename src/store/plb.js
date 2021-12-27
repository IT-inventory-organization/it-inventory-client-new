import router from "@/router/";
import countriesMock from "@/_mocks_/countries";
import currencyMock from "@/_mocks_/currency";
import axios from "axios";
import { AESDecrypt, AESEncrypt } from "@/helper/Encryption";
import Swal from "sweetalert2";
const baseUrl = process.env.VUE_APP_BASE_URL;

const plb = {
  state: {
    dokumenSaveSucceded: false,
    reportId: "",
    reports: [],
    stepper: 1,

    // Preview PLB
    previewDokumenPLB: [],

    loading: {
      loadingReports: false,
      loadingReport: false,
      loadingDokumen: false,
      loadingBarang: false,
      loadingData: false,
      loadingPreviewXML: false,
    },
    report: {
      jenisPemberitahuan: "",
      diAjukanDiKantor: "Tanjungpinang",
      jenisDokumenBC: "",
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

    NotificationType: "",
    XMLdocument: "",
    itemDokumenPemasukan: [],
    itemJenisIdentitasPenjual: ["NPWP", "KTP"],
    itemJenisIdentitasPengirim: ["NPWP", "KTP"],
    itemJenisIdentitasPengusahaPLB: ["NPWP", "KTP"],
    itemJenisIdentitasPembeli: ["NPWP", "KTP"],
    itemJenisIdentitasPpjk: ["NPWP", "KTP"],
    itemValuta: currencyMock.codes,
    itemCaraAngkut: ["Laut", "Udara", "Darat"],
    itemBendera: countriesMock,
    itemTempatPenimbunan: [],

    // Dokumen BCF

    itemDokumenBCF: [],
    selectedDokumenBCF: [],

    // payload save

    dokumenPengeluaran: {
      reportId: "",
      nomorDokumen: "",
      tanggalDokumen: "",
      dokumenPemasukanId: "",
    },
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
      ndbpmKurs: 0,
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
      beratKapalDenganMuatan: 0,
      volume: 0,
    },

    // Penimbunan
    tempatPenimbunan: {
      tempatPenimbunan: "",
      perkiraanTanggalPengeluaran: "",
      isTempatPenimbunan: false,
    },

    // end payload
    dataBarang: {
      kodeBarang: "",
      namaBarang: "",
      uraian: "",
      nettoBruttoVolume: "",
      satuanKemasan: "",
      stock: "",
      posTarif: "",
      nilaiPabeanHargaPenyerahan: "",
      bm: "",
      ppn: "",
      ppnbm: "",
      cukai: "",
    },
    listBarang: [],
  },
  mutations: {
    SET_NOTIFICATION_TYPE(state, payload) {
      state.NotificationType = payload;
    },
    SET_XML_DOCUMENT(state, payload) {
      state.XMLdocument = payload;
    },
    SET_DOCUMENT_PEMASUKAN_ITEM(state, payload) {
      state.itemDokumenPemasukan = payload;
    },
    SET_DOCUMENT_SAVED(state, payload) {
      state.dokumenSaveSucceded = payload;
    },
    SET_REPORT_ID(state, payload) {
      state.reportId = payload;
    },
    SET_LOADING_PLB(state, payload) {
      state.loading[payload.key] = payload.value;
    },
    SET_REPORT_PLB(state, payload) {
      state.report[payload.key] = payload.value;
    },

    // Get All PLB
    SET_REPORTS_PLB(state, payload) {
      state.reports = payload;
    },
    SET_OPTIONS_TABLE_REPORTS(state, payload) {
      state.optionsTableReports = Object.assign({}, payload);
    },

    // Preview PLB

    SET_PREVIEW_PLB(state, payload) {
      state.previewDokumenPLB = payload;
    },

    // Stepper

    SET_STEPPER(state, payload) {
      state.stepper = payload;
      localStorage.setItem("stepper", payload);
    },

    // Dokumen BCF

    SET_DOKUMEN_BCF(state, payload) {
      state.itemDokumenBCF = payload;
    },

    SET_SELECTED_DOKUMEN_BCF(state, payload) {
      state.selectedDokumenBCF = payload;
    },
    DELETE_SELECTED_DOKUMEN_BCF(state, payload) {
      const index = state.selectedDokumenBCF.indexOf(payload);
      if (index != -1) {
        state.selectedDokumenBCF.splice(index, 1);
      }
    },

    //

    SET_DOKUMEN_PEMASUKAN(state, payload) {
      state.dokumenPemasukan[payload.key] = payload.value;
    },
    SET_DOKUMEN_PENGELUARAN(state, payload) {
      state.dokumenPengeluaran[payload.key] = payload.value;
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
      state.mataUang[payload.key] = payload.value;
    },
    SET_DATA_PENGANGKUTAN(state, payload) {
      state.dataPengangkutan[payload.key] = payload.value;
    },
    SET_BERAT_DAN_VOLUME(state, payload) {
      state.beratDanVolume[payload.key] = payload.value;
    },
    SET_ITEM_TEMPAT_PENIMBUNAN(state, payload) {
      state.itemTempatPenimbunan = payload;
    },
    SET_TEMPAT_PENIMBUNAN(state, payload) {
      state.tempatPenimbunan[payload.key] = payload.value;
    },
    SET_LIST_BARANG(state, payload) {
      state.listBarang = [...state.listBarang, payload];
    },
    DELETE_LIST_BARANG(state, payload) {
      const index = state.listBarang.indexOf(payload);
      if (index != -1) {
        state.listBarang.splice(index, 1);
      }
    },
    UPDATE_LIST_BARANG(state, payload) {
      // console.log(payload);
      const temp = [...state.listBarang];
      state.listBarang = [];
      state.listBarang = temp.map((ele, ind) => {
        if (ind === payload.index) {
          ele = Object.assign({}, payload.data);
        }
        return ele;
      });
    },
    SET_DATA_BARANG(state, payload) {
      state.dataBarang[payload.key] = payload.value;
    },
  },
  actions: {
    // report

    async generateReportId(context, payload) {
      try {
        context.commit("SET_LOADING_PLB", {
          key: "loadingReports",
          value: true,
        });

        const result = await axios({
          url: baseUrl + "/report/save",
          method: "POST",
          headers: {
            authorization:
              "Bearer " + localStorage.getItem("token_it_inventory"),
          },
          data: { dataReport: AESEncrypt(payload) },
        });
        const data = result.data.message;
        if (result.data.success) {
          context.commit("SET_REPORT_ID", data.id);
        }
        return;
      } catch (error) {
        console.log(error.response.data);
      } finally {
        context.commit("SET_LOADING_PLB", {
          key: "loadingReports",
          value: false,
        });
      }
    },

    handleSubmitReport(context) {
      localStorage.setItem(
        "NotificationType",
        context.state.report.jenisPemberitahuan
      );
      if (context.state.reportId) {
        localStorage.setItem("reportId", context.state.reportId);
      }
      router.push("/plb/add");
    },

    // dokumen

    // DOKUMEN PEMASUKAN ACTION
    async saveDocumentPemasukan(context, payload) {
      let formatted_payload = {};
      let payload_requeired = new Set([
        "dokumenPemasukan",
        "dokumenTambahan",
        "dataPelabuhan",
        "dataKapal",
        "identitasBarang",
        "penjualBarang",
        "pengirimBarang",
        "pengusahaPLB",
        "pembeliBarang",
        "ppjk",
        "mataUang",
        "dataPengangkutan",
        "beratDanVolume",
        "tempatPenimbunan",
      ]);
      Object.keys(payload).forEach(function(key) {
        if (payload_requeired.has(key)) {
          formatted_payload[key] = payload[key];
          // formatted_payload[key].reportId=localStorage.getItem("reportId");
        }
      });
      formatted_payload.reportId = parseInt(localStorage.getItem("reportId"));

      // console.log(formatted_payload);

      try {
        context.commit("SET_LOADING_PLB", {
          key: "loadingDokumen",
          value: true,
        });
        // console.log(payload)
        const result = await axios({
          url: baseUrl + "/report/dokumen/save/pemasukan",
          method: "POST",
          headers: {
            authorization:
              "Bearer " + localStorage.getItem("token_it_inventory"),
          },
          data: { dataDokumen: AESEncrypt(formatted_payload) },
        });
        const data = AESDecrypt(result.data.data);
        if (result.data.success) {
          context.commit("SET_PO_BARU", data);
          // console.log("response",data)
          context.commit("SET_DOCUMENT_SAVED", true);
        }
      } catch (error) {
        console.log(error.response.data);
      } finally {
        context.commit("SET_LOADING_PLB", {
          key: "loadingDokumen",
          value: false,
        });
      }
    },

    //DOKUMEN PENGELUARAN ACTION
    async saveDocumentPengeluaran(context, payload) {
      let formatted_payload = {};
      let payload_requeired = new Set([
        "dokumenPengeluaran",
        "dokumenTambahan",
        "dataPelabuhan",
        "dataKapal",
        "identitasBarang",
        "penjualBarang",
        "pengirimBarang",
        "pengusahaPLB",
        "pembeliBarang",
        "ppjk",
        "mataUang",
        "dataPengangkutan",
        "beratDanVolume",
        "tempatPenimbunan",
      ]);
      Object.keys(payload).forEach(function(key) {
        if (payload_requeired.has(key)) {
          formatted_payload[key] = payload[key];
          formatted_payload[key].reportId = +localStorage.getItem("reportId");
        }
      });
      formatted_payload.reportId = parseInt(localStorage.getItem("reportId"));
      // formatted_payload.dokumenPengeluaran.reportId=parseInt(localStorage.getItem("reportId"));

      console.log(formatted_payload);

      try {
        context.commit("SET_LOADING_PLB", {
          key: "loadingDokumen",
          value: true,
        });
        // console.log(payload)
        const result = await axios({
          url: baseUrl + "/report/dokumen/save/pengeluaran",
          method: "POST",
          headers: {
            authorization:
              "Bearer " + localStorage.getItem("token_it_inventory"),
          },
          data: { ref: formatted_payload },
        });
        // const data = AESDecrypt(result.data.data);
        if (result.data.success) {
          // context.commit("SET_PO_BARU", data);
          // console.log("response",data)
          context.commit("SET_DOCUMENT_SAVED", true);
        }
      } catch (error) {
        console.log(error.response.data);
      } finally {
        context.commit("SET_LOADING_PLB", {
          key: "loadingDokumen",
          value: false,
        });
      }
    },

    // barang

    async saveDataBarang(context, listBarang) {
      try {
        context.commit("SET_LOADING_PLB", {
          key: "loadingBarang",
          value: true,
        });
        // console.log(listBarang)
        let formatted_payload = {
          listDataBarang: listBarang,
          reportId: parseInt(localStorage.getItem("reportId")),
        };
        const result = await axios({
          url: baseUrl + "/report/barang/save",
          method: "POST",
          headers: {
            authorization:
              "Bearer " + localStorage.getItem("token_it_inventory"),
          },
          data: { dataBarang: AESEncrypt(formatted_payload) },
        });
        const data = AESDecrypt(result.data.data);
        if (result.data.success) {
          // ga tau nyimpen nya di mana, masih di console
          console.log(data);
        }
      } catch (error) {
        console.log(error.response.data);
      } finally {
        context.commit("SET_LOADING_PLB", {
          key: "loadingBarang",
          value: false,
        });
      }
    },

    async getPemasukanByuser(context) {
      try {
        const result = await axios({
          url: baseUrl + "/report/dokumen/list/pemasukan",
          method: "GET",
          headers: {
            authorization:
              "Bearer " + localStorage.getItem("token_it_inventory"),
          },
        });
        // const data = AESDecrypt(result.data.data);
        if (result.data.success) {
          // ga tau nyimpen nya di mana, masih di console
          console.log(result.data.data);
          context.commit("SET_DOCUMENT_PEMASUKAN_ITEM", result.data.data);
        }
      } catch (error) {
        console.log(error.response.data);
      } finally {
        // context.commit("SET_LOADING_PLB", {key: "loadingBarang", value: false});
        console.log("final");
      }
    },

    // Preview XML

    async previewPengeluaran(context, reportId = "") {
      let id = reportId ? reportId : +localStorage.getItem("reportId");
      try {
        context.commit("SET_LOADING_PLB", {
          key: "loadingPreviewXML",
          value: true,
        });
        const result = await axios({
          url: baseUrl + `/report/ViewDokumen/get/pengeluaranXML/${id}`,
          method: "GET",
          headers: {
            authorization:
              "Bearer " + localStorage.getItem("token_it_inventory"),
          },
        });

        if (result.data) {
          // console.log(result.data)
          context.commit("SET_XML_DOCUMENT", result.data.data);
        }
      } catch (error) {
        console.log(error.response.data);
      } finally {
        context.commit("SET_LOADING_PLB", {
          key: "loadingPreviewXML",
          value: false,
        });
      }
    },
    async previewPemasukan(context, reportId = "") {
      let id = reportId ? reportId : +localStorage.getItem("reportId");
      try {
        context.commit("SET_LOADING_PLB", {
          key: "loadingPreviewXML",
          value: true,
        });
        const result = await axios({
          url: baseUrl + `/report/ViewDokumen/get/pemasukanXML/${id}`,
          method: "GET",
          headers: {
            authorization:
              "Bearer " + localStorage.getItem("token_it_inventory"),
          },
        });

        if (result.data) {
          // console.log(result.data)
          context.commit("SET_XML_DOCUMENT", result.data.data);
        }
      } catch (error) {
        console.log(error.response.data);
      } finally {
        context.commit("SET_LOADING_PLB", {
          key: "loadingPreviewXML",
          value: false,
        });
      }
    },

    async getAllPlb(context) {
      try {
        context.commit("SET_LOADING_PLB", { key: "loadingData", value: true });

        const result = await axios({
          url: `${baseUrl}/plb`,
          method: "GET",
          headers: {
            authorization:
              "Bearer " + localStorage.getItem("token_it_inventory"),
          },
        });
        const data = AESDecrypt(result.data.data);
        if (result.data.success) {
          // console.log(result.data.data.rows)
          context.commit("SET_REPORTS_PLB", data);
        }
      } catch (error) {
        console.log(error.response.data);
      } finally {
        context.commit("SET_LOADING_PLB", { key: "loadingData", value: false });
      }
    },

    async previewPLB(context, id) {
      try {
        context.commit("SET_LOADING_PLB", {
          key: "loadingReport",
          value: true,
        });

        const result = await axios({
          url: `${baseUrl}/report/ViewDokumen/get/pemasukan/${id}`,
          method: "GET",
          headers: {
            authorization:
              "Bearer " + localStorage.getItem("token_it_inventory"),
          },
        });
        const data = AESDecrypt(result.data.data);
        if (result.data.success) {
          context.commit("SET_PREVIEW_PLB", data);
        }
      } catch (error) {
        console.log(error.response.data);
      } finally {
        context.commit("SET_LOADING_PLB", {
          key: "loadingReport",
          value: false,
        });
      }
    },

    async deletePLB(context, id) {
      try {
        context.commit("SET_LOADING_PLB", {
          key: "loadingData",
          value: true,
        });
        const result = await axios({
          url: `${baseUrl}/Report/delete/${id}`,
          method: "DELETE",
          headers: {
            authorization:
              "Bearer " + localStorage.getItem("token_it_inventory"),
          },
        });
        if (result.data.success) {
          Swal.fire("Berhasil!", "Berhasil Menghapus PLB.", "success");
          context.dispatch("getAllPlb");
        }
      } catch (error) {
        console.log(error);
        Swal.fire("Gagal!", "Gagal Menghapus PLB.", "error");
      } finally {
        context.commit("SET_LOADING_PLB", {
          key: "loadingData",
          value: false,
        });
      }
    },

    // Dokumen BCF

    async getDokumenBCF(context) {
      try {
        context.commit("SET_LOADING_PLB", {
          key: "loadingDokumen",
          value: true,
        });

        const result = await axios({
          url: baseUrl + `/report/dokumen/get/bcf`,
          method: "GET",
          headers: {
            authorization:
              "Bearer " + localStorage.getItem("token_it_inventory"),
          },
        });
        const data = AESDecrypt(result.data.data);
        if (result.data.success) {
          context.commit("SET_DOKUMEN_BCF", data);
        }
      } catch (error) {
        console.log(error.response.data);
      } finally {
        context.commit("SET_LOADING_PLB", {
          key: "loadingDokumen",
          value: false,
        });
      }
    },

    // Data Dokumen

    async getTempatPenimbun(context) {
      try {
        context.commit("SET_LOADING_PLB", {
          key: "loadingDokumen",
          value: true,
        });

        const result = await axios({
          url: baseUrl + `/report/getTempatPenimpuinan`,
          method: "GET",
          headers: {
            authorization:
              "Bearer " + localStorage.getItem("token_it_inventory"),
          },
        });
        const data = AESDecrypt(result.data.data);
        if (result.data.success) {
          context.commit("SET_ITEM_TEMPAT_PENIMBUNAN", data);
        }
      } catch (error) {
        console.log(error.response.data);
      } finally {
        context.commit("SET_LOADING_PLB", {
          key: "loadingDokumen",
          value: false,
        });
      }
    },
  },
};

export default plb;
