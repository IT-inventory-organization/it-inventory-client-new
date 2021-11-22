<template>
  <div>
    <v-row no-gutters align="center">
      <v-col cols="11" md="">
        <div class="display-1 font-weight-bold">
          Informasi Perusahaan
        </div>
      </v-col>
      <v-col cols="1">
        <button
          class="it-inventory-btn it-inventory-btn__fw it-inventory-btn__grey"
          @click="handleEdit"
        >
          Edit
        </button>
      </v-col>
    </v-row>
    <v-row class="mt-5">
      <data-perusahaan :data="dataInformasiPerusahaan" />
      <data-pemilik :data="dataInformasiPerusahaan" />
    </v-row>
    <v-dialog persistent v-model="formEdit" width="50%" max-width="1200px">
      <form-edit-info-perusahaan @handleCloseFormEdit="handleCloseFormEdit" />
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "MasterData",
  components: {
    DataPerusahaan: () => import("@/components/MasterData/DataPerusahaan"),
    DataPemilik: () => import("@/components/MasterData/DataPemilik"),
    FormEditInfoPerusahaan: () =>
      import("@/components/MasterData/FormEditInfoPerusahaan"),
  },
  data() {
    return {
      formEdit: false,
    };
  },
  computed: {
    dataInformasiPerusahaan() {
      return this.$store.state.MasterData.dataInformasiPerusahaan;
    },
  },
  methods: {
    handleEdit() {
      this.formEdit = true;
    },
    handleCloseFormEdit() {
      this.formEdit = false;
    },
  },
  created() {
    this.$store.dispatch("getInformasiPerusahaan");
  },
};
</script>

<style
  lang="scss
    FormEditInfoPerusahaan"
  scoped
></style>
