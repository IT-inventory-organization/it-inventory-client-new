import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

const baseUrl = 'http://localhost:3000/'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataPengajua: {
      name
    }
  },
  mutations: {
    SET_NAME(state, value) {
      state.dataPengajua.name = value
    },
    SET_DATA(state, value) {
      state.dataPengajua = value
    }
  },
  actions: {
    async fetchData(context) {
      let result = await axios.get(baseUrl)
      result = {
        success: true,
        message: "",
        data: {
          name: "ayam",
          tanggal: Date.now()
        }
      }
      context.commit("SET_DATA", result.data)
    }
  },
  modules: {
  }
})