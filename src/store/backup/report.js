import axios from "axios";
import { AESDecrypt, AESEncrypt } from "../helper/Encryption";
import router from "@/router/";
import Swal from "sweetalert2";
import user from "@/store/user";
import config from "../config.json";

const baseUrl = config.baseURL;

const report = {
  state: {
    reportId: "",
    reportIdPreview: "",
    preview: null,
    previewIsLoading: false,
    optionsTableMerah: {
      page: 1,
      itemsPerPage: 5,
      type: "",
    },
    report: {
      pengajuanSebagai: "",
      kantorPengajuan: "",
      jenisPemberitahuan: "",
      BCDocumentType: "",
    },
    reports: [],
    optionsTableReports: {
      page: 1,
      itemsPerPage: 5,
      type: "",
      search: "",
    },
    totalReport: [],
    totalReportAll: {
      Import: 0,
      Export: 0,
    },
    reportInventoryMerah: [],
    // Data Header
    dataPengajuan: {
      kantorPabeanAsal: "",
      kategoryPemberitahuan: "",
      kategoryPengeluaran: "",
      tujuanPengeluaran: "",
      asalBarang: "",
      caraPembayaran: "",
    },
    identitasPengirim: {
      jenisIdentitasPengirim: "5 - NPWP - 15 Digits",
      nomorIdentitasPengirim: "",
      namaPengirim: "",
      alamatPengirim: "",
      nomorIjinBpkPengirim: "",
      tanggalIjinBpkPengirim: "",
    },
    identitasPenerima: {
      jenisIdentitasPenerima: "5 - NPWP - 15 Digits",
      nomorIdentitasPenerima: "",
      namaPenerima: "",
      alamatPenerima: "",
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
    },
    dataPengangkutan: {
      caraAngkut: "",
      namaPengangkut: "",
      bendera: "",
      nomorVoyFlightPol: "",
    },
    dataPelabuhanMuatBongkar: {
      pelabuhanMuat: "",
      pelabuhanTujuan: "",
      pelabuhanTransit: "",
    },
    dataBeratDanVolume: {
      beratBersih: "",
      beratKotor: "",
      volume: "",
    },
    dataPetiKemasDanPengemas: {
      jumlahJenisKemasan: "",
      jumlahPetiKemas: "",
      jumlahJenisBarang: "",
    },
    dataTempatPenimbunan: {
      tempatPenimbunan: "",
    },
    dataPerkiraanTanggalPengeluaran: {
      perkiraanTanggalPengeluaran: "",
    },
    dataLartas: {
      name: "",
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

    dataPetiKemas: {
      dataKontainer: "",
      volumeKontainer: "",
    },

    // Data Barang
    // listDataBarang: [
    //   {
    //     posTarif: "",
    //     uraian:"",
    //     nettoBrutoVolume: "",
    //     satuanKemasan: "",
    //     nilaiPabeanHargaPenyerahan: "",
    //     hsCode: "",
    //   },
    // ],
    listDataBarang: [],
    dataBarang: {
      posTarif: "",
      uraian: "",
      nettoBrutoVolume: "",
      satuanKemasan: "",
      nilaiPabeanHargaPenyerahan: "",
      hsCode: "",
    },
    loading: {
      getOne: false,
      loadingEdit: false,
      loadingForm: false,
      deleteOne: false,
    },
    previewXML: "",
  },
  mutations: {
    SET_REPORT_ID_PREVIEW(state, payload) {
      state.reportIdPreview = payload;
    },
    RESET_REPORT_ID(state) {
      state.reportIdPreview = "";
    },
    SET_PREVIEW(state, payload) {
      state.preview = payload;
    },
    SET_PREVIEW_IS_LOADING(state, payload) {
      state.previewIsLoading = payload;
    },
    RESET_PREVIEW(state) {
      state.preview = null;
    },
    RESET_PREVIEW_XML(state) {
      state.previewXML = "";
    },
    SET_REPORT_ID(state, payload) {
      state.reportId = payload;
    },
    // Data Header
    SET_DATA_REPORT(state, payload) {
      state.report[payload.key] = payload.value;
    },
    SET_OPTIONS_TABLE_MERAH(state, payload) {
      state.optionsTableMerah = Object.assign({}, payload);
    },
    SET_REPORT(state, payload) {
      state.report = payload;
    },
    SET_TOTAL_REPORT_BY_STATUS(state, payload) {
      state.totalReport = [...state.totalReport, payload.value];
    },
    SET_TOTAL_REPORT_ALL(state, payload) {
      state.totalReportAll = payload;
    },
    RESET_TOTAL_REPORT_BY_STATUS(state) {
      state.totalReport = [];
    },
    SET_REPORT_INVENTORY_MERAH(state, payload) {
      state.reportInventoryMerah = payload;
    },
    SET_OPTIONS_TABLE_REPORTS(state, payload) {
      state.optionsTableReports = Object.assign({}, payload);
    },
    SET_REPORTS(state, payload) {
      state.reports = payload;
    },
    SET_DATA_PENGAJUAN(state, payload) {
      state.dataPengajuan[payload.key] = payload.value;
    },
    SET_IDENTITAS_PENGIRIM(state, payload) {
      if (payload.key === "tanggalIjinBpkPengirim") {
        const [y, m, d] = payload.value.split("-");
        state.identitasPengirim[payload.key] = `${d}-${m}-${y}`;
      } else {
        state.identitasPengirim[payload.key] = payload.value;
      }
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
      const [y, m, d] = payload.value.split("-");
      state.dataPerkiraanTanggalPengeluaran[payload.key] = `${d}-${m}-${y}`;
    },
    SET_DATA_LARTAS(state, payload) {
      state.dataLartas[payload.key] = payload.value;
    },

    // Data Lanjutan
    SET_DATA_DOKUMEN(state, payload) {
      state.dataDokumen = [...state.dataDokumen, payload];
    },
    UPDATE_DATA_DOKUMENT(state, payload) {
      const temp = [...state.dataDokumen];
      state.dataDokumen = [];
      state.dataDokumen = temp.map((ele, ind) => {
        if (ind === payload.index) {
          ele = Object.assign({}, payload.payload);
        }
        return ele;
      });
    },
    DELETE_DATA_DOKUMEN(state, payload) {
      const index = state.dataDokumen.indexOf(payload);
      if (index != -1) {
        state.dataDokumen.splice(index, 1);
      }
    },
    SET_DATA_PETI_KEMAS(state, payload) {
      state.dataPetiKemas[payload.key] = payload.value;
    },

    // Data Barang
    SET_LIST_DATA_BARANG(state, payload) {
      state.listDataBarang = [...state.listDataBarang, payload];
    },
    SET_DATA_BARANG(state, payload) {
      state.dataBarang[payload.key] = payload.value;
    },
    DELETE_DATA_BARANG(state, payload) {
      const index = state.listDataBarang.indexOf(payload);
      if (index != -1) {
        state.listDataBarang.splice(index, 1);
      }
    },
    UPDATE_DATA_LIST_BARANG(state, payload) {
      const temp = [...state.listDataBarang];
      state.listDataBarang = [];
      state.listDataBarang = temp.map((ele, ind) => {
        if (ind === payload.index) {
          ele = Object.assign({}, payload.payload);
        }
        return ele;
      });
    },
    SET_STATE_GLOBAL(state, payload) {
      state[payload.key] = payload.value;
    },
    SET_LOADING(state, payload) {
      state.loading[payload.key] = payload.value;
    },
    DELETE_REPORT(state, id) {
      const index = state.reports.data.findIndex((ele) => ele.nomorAjuan == id);
      if (index !== -1) {
        state.reports.data.splice(index, 1);
        state.reports["data_size"] -= 1;
      }
    },
    RESET_STATE(state) {
      state.reportId = "";
      localStorage.removeItem("current_report_id");
      state.preview = null;
      state.previewIsLoading = false;
      state.report = {
        pengajuanSebagai: "",
        kantorPengajuan: "",
        jenisPemberitahuan: "",
        BCDocumentType: "",
      };
      // Data Header
      state.dataPengajuan = {
        kantorPabeanAsal: "",
        kategoryPemberitahuan: "",
        kategoryPengeluaran: "",
        tujuanPengeluaran: "",
        asalBarang: "",
        caraPembayaran: "",
      };
      state.identitasPengirim = {
        jenisIdentitasPengirim: "5 - NPWP - 15 Digits",
        nomorIdentitasPengirim: "",
        namaPengirim: "",
        alamatPengirim: "",
        nomorIjinBpkPengirim: "",
        tanggalIjinBpkPengirim: "",
      };
      state.identitasPenerima = {
        jenisIdentitasPenerima: "5 - NPWP - 15 Digits",
        nomorIdentitasPenerima: "",
        namaPenerima: "",
        alamatPenerima: "",
      };
      state.transaksiPerdagangan = {
        transaksi: "",
        transaksiLainnya: "",
        valuta: "",
        kursNDPBM: "",
        cif: "",
        voluntaryDeclaration: "",
        freight: "",
        hargaPenyerahan: "",
      };
      state.dataPengangkutan = {
        caraAngkut: "",
        namaPengangkut: "",
        bendera: "",
        nomorVoyFlightPol: "",
      };
      state.dataPelabuhanMuatBongkar = {
        pelabuhanMuat: "",
        pelabuhanTujuan: "",
        pelabuhanTransit: "",
      };
      state.dataBeratDanVolume = {
        beratBersih: "",
        beratKotor: "",
        volume: "",
      };
      state.dataPetiKemasDanPengemas = {
        jumlahJenisKemasan: "",
        jumlahPetiKemas: "",
        jumlahJenisBarang: "",
      };
      state.dataTempatPenimbunan = {
        tempatPenimbunan: "",
      };
      state.dataPerkiraanTanggalPengeluaran = {
        perkiraanTanggalPengeluaran: "",
      };
      state.dataLartas = {
        name: "",
      };
      state.dataDokumen = [];
      state.dataPetiKemas = {
        dataKontainer: "",
        volumeKontainer: "",
      };
      state.listDataBarang = [];
      state.dataBarang = {
        posTarif: "",
        uraian: "",
        nettoBrutoVolume: "",
        satuanKemasan: "",
        nilaiPabeanHargaPenyerahan: "",
        hsCode: "",
      };
      state.loading = {
        getOne: false,
        loadingEdit: false,
        loadingForm: false,
        deleteOne: false,
      };
    },
    SET_PREVIEW_XML(state, payload) {
      state.previewXML = payload;
    },
  },
  actions: {
    async createReport(context, payload) {
      // context.commit("SET_LOADING_CREATE", true);
      try {
        let result = await axios({
          url: baseUrl + "/report/?type=" + payload,
          method: "POST",
          headers: {
            authorization:
              "Bearer " + localStorage.getItem("token_it_inventory"),
          },
          data: {
            dataReport: AESEncrypt(context.state.report),
          },
        });
        if (result.data.success) {
          const report = AESDecrypt(result.data.data);
          context.commit("SET_REPORT", report);
          context.commit("SET_REPORT_ID", report.id);
          localStorage.setItem("current_report_id", report.id);
          router.push(`/${payload.toLowerCase()}/add`);
        }
      } catch (error) {
        const response = error.response.data;
        Swal.fire("Gagal!", response.message, "error");
      } finally {
        // context.commit("SET_LOADING_CREATE", false);
      }
    },
    async fetchAllReport(context) {
      const size =
        context.state.optionsTableReports.itemsPerPage === -1
          ? 100
          : context.state.optionsTableReports.itemsPerPage;
      let result = await axios({
        url:
          baseUrl +
          `/report/get?pageSize=${size}&pageNo=${context.state.optionsTableReports.page}&sortBy=newest&search=${context.state.optionsTableReports.search}&type=${context.state.optionsTableReports.type}`,
        method: "GET",
        headers: {
          authorization: "Bearer " + localStorage.getItem("token_it_inventory"),
        },
      });
      if (result.data.success) {
        context.commit("SET_REPORTS", AESDecrypt(result.data.data));
      }
    },
    async getOneReport(context) {
      context.commit("SET_LOADING", { key: "getOne", value: true });
      try {
        let result = await axios({
          url: baseUrl + "/report/get/OneReport/" + context.state.reportId,
          method: "GET",
          headers: {
            authorization:
              "Bearer " + localStorage.getItem("token_it_inventory"),
          },
        });
        if (result.data.success) {
          const decrypt = AESDecrypt(result.data.data);
          context.commit("SET_REPORT_ID", decrypt.id);
          const tempReport = {
            pengajuanSebagai: decrypt.pengajuanSebagai,
            kantorPengajuan: decrypt.kantorPengajuan,
            jenisPemberitahuan: decrypt.jenisPemberitahuan,
            BCDocumentType: decrypt.BCDocumentType,
          };
          context.commit("SET_REPORT", tempReport);
          const {
            DataPengajuan,
            reportIdentitasPenerima,
            IdentitasPengirim,
            TransaksiPerdagangan,
            DataPengangkutan,
            DataPelabuhanMuatBongkar,
            DataBeratDanVolume,
            DataPetiKemasDanPengema,
            DataPerkiraanTanggalPengeluaran,
            DataTempatPenimbunan,
            DataLarta,
            ListDokumens,
            DataPetiKema,
            listBarangs,
          } = decrypt;

          context.commit("SET_STATE_GLOBAL", {
            key: "dataPengajuan",
            value: DataPengajuan,
          });
          context.commit("SET_STATE_GLOBAL", {
            key: "identitasPenerima",
            value: reportIdentitasPenerima,
          });
          context.commit("SET_STATE_GLOBAL", {
            key: "identitasPengirim",
            value: IdentitasPengirim,
          });
          context.commit("SET_STATE_GLOBAL", {
            key: "transaksiPerdagangan",
            value: TransaksiPerdagangan,
          });
          context.commit("SET_STATE_GLOBAL", {
            key: "dataPengangkutan",
            value: DataPengangkutan,
          });
          context.commit("SET_STATE_GLOBAL", {
            key: "dataPelabuhanMuatBongkar",
            value: DataPelabuhanMuatBongkar,
          });
          context.commit("SET_STATE_GLOBAL", {
            key: "dataBeratDanVolume",
            value: DataBeratDanVolume,
          });
          context.commit("SET_STATE_GLOBAL", {
            key: "dataPetiKemasDanPengemas",
            value: DataPetiKemasDanPengema,
          });
          context.commit("SET_STATE_GLOBAL", {
            key: "dataPerkiraanTanggalPengeluaran",
            value: DataPerkiraanTanggalPengeluaran,
          });
          context.commit("SET_STATE_GLOBAL", {
            key: "dataTempatPenimbunan",
            value: DataTempatPenimbunan,
          });
          context.commit("SET_STATE_GLOBAL", {
            key: "dataLartas",
            value: DataLarta,
          });
          context.commit("SET_STATE_GLOBAL", {
            key: "dataDokumen",
            value: ListDokumens,
          });
          context.commit("SET_STATE_GLOBAL", {
            key: "dataPetiKemas",
            value: DataPetiKema,
          });
          context.commit("SET_STATE_GLOBAL", {
            key: "listDataBarang",
            value: listBarangs,
          });
        }
      } catch (error) {
        console.log(error);
      } finally {
        context.commit("SET_LOADING", { key: "getOne", value: false });
      }
    },
    async fetchAllTotalReport(context) {
      // /report/get/getTotalReport
      let result = await axios({
        url: `${baseUrl + "/report/get/getTotalReport"}`,
        method: "GET",
        headers: {
          authorization: "Bearer " + localStorage.getItem("token_it_inventory"),
        },
      });
      if (result.data.success) {
        context.commit("SET_TOTAL_REPORT_ALL", AESDecrypt(result.data.data));
      }
    },
    async fetchReportByStatus(context, payload) {
      const extendedUrl = payload ? "?status=" + payload : "";
      let result = await axios({
        url: `${baseUrl + "/report/get/total" + extendedUrl}`,
        method: "GET",
        headers: {
          authorization: "Bearer " + localStorage.getItem("token_it_inventory"),
        },
      });
      if (result.data.success && result.data.data !== null) {
        const payloadMutation = {
          key: payload,
          value: AESDecrypt(result.data.data),
        };
        context.commit("SET_TOTAL_REPORT_BY_STATUS", payloadMutation);
      }
      if (result.data.success && result.data.data == null) {
        const payloadMutation = {
          key: payload,
          value: {
            Import: 0,
            Export: 0,
            status: payload,
          },
        };
        context.commit("SET_TOTAL_REPORT_BY_STATUS", payloadMutation);
      }
    },
    async fetchReportInventoryMerah(context, payload) {
      const size = payload.itemsPerPage === -1 ? 100 : payload.itemsPerPage;
      const result = await axios({
        url:
          baseUrl +
          `/report/get/dataJalurMerah?pageSize=${size}&pageNo=${payload.page}${
            payload.type ? "&type=" + payload.type : ""
          }`,
        method: "GET",
        headers: {
          authorization: "Bearer " + localStorage.getItem("token_it_inventory"),
        },
      });
      if (result.data.success) {
        context.commit(
          "SET_REPORT_INVENTORY_MERAH",
          AESDecrypt(result.data.data)
        );
      }
    },

    // Data Header
    createDataHeader(context) {
      context.commit("SET_IDENTITAS_PENGIRIM", {
        key: "namaPengirim",
        value: user.state.dataUser.name,
      });
      context.commit("SET_IDENTITAS_PENGIRIM", {
        key: "nomorIdentitasPengirim",
        value: user.state.dataUser.npwp,
      });
      context.commit("SET_IDENTITAS_PENGIRIM", {
        key: "alamatPengirim",
        value: user.state.dataUser.address,
      });
      const {
        reportId,
        dataPengajuan,
        identitasPenerima,
        identitasPengirim,
        transaksiPerdagangan,
        dataPengangkutan,
        dataPelabuhanMuatBongkar,
        dataBeratDanVolume,
        dataPetiKemasDanPengemas,
        dataPerkiraanTanggalPengeluaran,
        dataTempatPenimbunan,
        dataLartas,
      } = context.state;

      return axios({
        url: baseUrl + "/report/data-header",
        method: "POST",
        headers: {
          authorization: "Bearer " + localStorage.getItem("token_it_inventory"),
        },
        data: {
          dataHeader: AESEncrypt({
            reportId,
            dataPengajuan,
            identitasPenerima,
            identitasPengirim,
            transaksiPerdagangan,
            dataPengangkutan,
            dataPelabuhanMuatBongkar,
            dataBeratDanVolume,
            dataPetiKemasDanPengemas,
            dataPerkiraanTanggalPengeluaran,
            dataTempatPenimbunan,
            dataLartas,
          }),
        },
      });
    },

    createDataLanjutan(context) {
      const { reportId, dataDokumen, dataPetiKemas } = context.state;

      return axios({
        url: baseUrl + "/report/data-lanjutan",
        method: "POST",
        headers: {
          authorization: "Bearer " + localStorage.getItem("token_it_inventory"),
        },
        data: {
          dataLanjutan: AESEncrypt({
            reportId,
            dataDokumen,
            dataPetiKemas,
          }),
        },
      });
    },

    createDataBarang(context) {
      const { reportId, listDataBarang } = context.state;

      return axios({
        url: baseUrl + "/report/data-barang",
        method: "POST",
        headers: {
          authorization: "Bearer " + localStorage.getItem("token_it_inventory"),
        },
        data: {
          dataBarang: AESEncrypt({
            reportId,
            listDataBarang,
          }),
        },
      });
    },
    editReport(context) {
      const { reportId, report } = context.state;

      return axios({
        url: baseUrl + "/report/update/" + reportId,
        method: "PUT",
        headers: {
          authorization: "Bearer " + localStorage.getItem("token_it_inventory"),
        },
        data: {
          dataReport: AESEncrypt(report),
        },
      });
    },
    editDataHeader(context) {
      const {
        reportId,
        dataPengajuan,
        identitasPenerima,
        identitasPengirim,
        transaksiPerdagangan,
        dataPengangkutan,
        dataPelabuhanMuatBongkar,
        dataBeratDanVolume,
        dataPetiKemasDanPengemas,
        dataPerkiraanTanggalPengeluaran,
        dataTempatPenimbunan,
        dataLartas,
      } = context.state;

      return axios({
        url: baseUrl + "/report/update/data-header/" + reportId,
        method: "PUT",
        headers: {
          authorization: "Bearer " + localStorage.getItem("token_it_inventory"),
        },
        data: {
          dataHeader: AESEncrypt({
            reportId,
            dataPengajuan,
            identitasPenerima,
            identitasPengirim,
            transaksiPerdagangan,
            dataPengangkutan,
            dataPelabuhanMuatBongkar,
            dataBeratDanVolume,
            dataPetiKemasDanPengemas,
            dataPerkiraanTanggalPengeluaran,
            dataTempatPenimbunan,
            dataLartas,
          }),
        },
      });
    },
    editDataLanjutan(context) {
      const { reportId, dataDokumen, dataPetiKemas } = context.state;

      return axios({
        url: baseUrl + "/report/update/data-lanjutan/" + reportId,
        method: "PUT",
        headers: {
          authorization: "Bearer " + localStorage.getItem("token_it_inventory"),
        },
        data: {
          dataLanjutan: AESEncrypt({
            reportId,
            dataDokumen,
            dataPetiKemas,
          }),
        },
      });
    },
    editDataBarang(context) {
      const { reportId, listDataBarang } = context.state;

      return axios({
        url: baseUrl + "/report/update/data-barang/" + reportId,
        method: "PUT",
        headers: {
          authorization: "Bearer " + localStorage.getItem("token_it_inventory"),
        },
        data: {
          dataBarang: AESEncrypt({
            reportId,
            listDataBarang,
          }),
        },
      });
    },
    async deleteReport(context, id) {
      context.commit("SET_LOADING", { key: "deleteOne", value: true });
      try {
        const result = await axios({
          url: baseUrl + "/report/delete/" + id,
          method: "DELETE",
          headers: {
            authorization:
              "Bearer " + localStorage.getItem("token_it_inventory"),
          },
        });
        if (result.data.success) {
          Swal.fire("Success!", result.data.message, "success");
          context.commit("DELETE_REPORT", id);
        }
      } catch (error) {
        Swal.fire("Gagal!", error.response.data.message, "error");
      } finally {
        context.commit("SET_LOADING", { key: "deleteOne", value: false });
      }
    },

    async previewReport(context) {
      context.commit("SET_PREVIEW_IS_LOADING", true);
      try {
        const result = await axios({
          url:
            baseUrl + `/report/get/OneReport/${context.state.reportIdPreview}`,
          method: "GET",
          headers: {
            authorization:
              "Bearer " + localStorage.getItem("token_it_inventory"),
          },
        });
        if (result.data.success) {
          context.commit("SET_PREVIEW", AESDecrypt(result.data.data));
        }
      } catch (error) {
        console.log(error);
      } finally {
        context.commit("SET_PREVIEW_IS_LOADING", false);
      }
    },

    async previewXML(context) {
      context.commit("SET_PREVIEW_IS_LOADING", true);
      try {
        const result = await axios({
          url: baseUrl + `/report/get/getXML/${context.state.reportIdPreview}`,
          method: "GET",
          headers: {
            authorization:
              "Bearer " + localStorage.getItem("token_it_inventory"),
          },
        });
        if (result.data.success) {
          context.commit("SET_PREVIEW_XML", AESDecrypt(result.data.data));
        }
      } catch (error) {
        console.log(error);
      } finally {
        context.commit("SET_PREVIEW_IS_LOADING", false);
      }
    },
  },
};

export default report;
