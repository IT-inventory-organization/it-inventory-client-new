const inventory = {
    state: {
        newInventory: {
            voyage: "",
            nama_kapal: "",
            jenis_dokumen: "",
            bendera: ""
        },
      reports: {
        data: [
          {
            voyage: "VOYAGE",
            nama_kapal: "Bechtelar and Sons",
            jenis_dokumen: "Pemasukan",
            bendera: "INA"
          },{
            voyage: "VOYAGE1",
            nama_kapal: "Bechtelar and Sons",
            jenis_dokumen: "Pemasukan",
            bendera: "INA"
          },{
            voyage: "VOYAGE2",
            nama_kapal: "Bechtelar and Sons",
            jenis_dokumen: "Pemasukan",
            bendera: "INA"
          },{
            voyage: "VOYAGE3",
            nama_kapal: "Bechtelar and Sons",
            jenis_dokumen: "Pemasukan",
            bendera: "INA"
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
  
  export default inventory;
  