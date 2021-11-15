const po = {
    state: {
      po_baru: {
        kapal_pemilik: "",
        kapal_pembeli: "",
        no_purchase_order: "",
        tanggal: "",
        purchases: [
          {
            kode_barang: "",
            item_deskripsi: "",
            quantity: "",
            harga_satuan: "",
            jumlah: ""
          },
          {
            kode_barang: "",
            item_deskripsi: "",
            quantity: "",
            harga_satuan: "",
            jumlah: ""
          },
        ],
        remarks: "",
        jumlah_total: ""
      },
      reports: {
        data: [
          {
            id: "1",
            nomor_po: "PO-00001",
            tanggal: "20-02-2020",
            item_deskripsi: "pemasukan",
            quantity: "17783",
            jumlah: "456789",
          },
          {
            id: "2",
            nomor_po: "PO-00002",
            tanggal: "20-02-2020",
            item_deskripsi: "pemasukan",
            quantity: "17783",
            jumlah: "54852",
          },
        ],
      },
      optionsTableReports: {
        page: 1,
        itemsPerPage: 10,
        search: "",
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
      SET_PO_BARU(state, payload) {
        state.po_baru[payload.key] = payload.value;
      },
      SET_OPTIONS_TABLE_REPORTS(state, payload) {
        state.optionsTableReports = Object.assign({}, payload);
      },
    },
    actions: {},
  };
  
  export default po;
  