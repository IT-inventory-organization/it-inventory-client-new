const dashboard = {
  state: {
    loading: {
      loadingListKapal: false,
    },
    listKapal: [],
    jumlahKapal: "",
    optionsTableListKapal: {
      page: 1,
      itemsPerPage: 10,
      search: "",
    },
  },
  mutations: {
    SET_LOADING(state, payload) {
      state.loading[payload.key] = payload.value;
    },
    SET_LIST_KAPAL(state, payload) {
      state.list_kapal = payload;
    },
    SET_OPTIONS_TABLE_LIST_KAPAL(state, payload) {
      state.optionsTableListKapal = Object.assign({}, payload);
    },
  },
  actions: {},
};

export default dashboard;
