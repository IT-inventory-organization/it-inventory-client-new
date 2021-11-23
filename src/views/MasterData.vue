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
      this.handleSetStateInformasiPerusahan(
        this.dataInformasiPerusahaan.namaPerusahaan,
        this.dataInformasiPerusahaan.npwp,
        this.dataInformasiPerusahaan.alamat,
        this.dataInformasiPerusahaan.nomorTelepon,
        this.dataInformasiPerusahaan.fax,
        this.dataInformasiPerusahaan.bidangUsaha,
        this.dataInformasiPerusahaan.namaPemilik,
        this.dataInformasiPerusahaan.alamatPemilik
      );
    },
    handleCloseFormEdit() {
      this.formEdit = false;
      this.handleSetStateInformasiPerusahan("", "", "", "", "", "", "", "");
    },

    handleSetStateInformasiPerusahan(
      namaPerusahaan,
      npwp,
      alamat,
      nomorTelepon,
      fax,
      bidangUsaha,
      namaPemilik,
      alamatPemilik
    ) {
      this.$store.commit("SET_INFORMASI_PERUSAHAAN", {
        key: "namaPerusahaan",
        value: namaPerusahaan,
      });
      this.$store.commit("SET_INFORMASI_PERUSAHAAN", {
        key: "npwp",
        value: npwp,
      });
      this.$store.commit("SET_INFORMASI_PERUSAHAAN", {
        key: "alamat",
        value: alamat,
      });
      this.$store.commit("SET_INFORMASI_PERUSAHAAN", {
        key: "nomorTelepon",
        value: nomorTelepon,
      });
      this.$store.commit("SET_INFORMASI_PERUSAHAAN", {
        key: "fax",
        value: fax,
      });
      this.$store.commit("SET_INFORMASI_PERUSAHAAN", {
        key: "bidangUsaha",
        value: bidangUsaha,
      });
      this.$store.commit("SET_INFORMASI_PERUSAHAAN", {
        key: "namaPemilik",
        value: namaPemilik,
      });
      this.$store.commit("SET_INFORMASI_PERUSAHAAN", {
        key: "alamatPemilik",
        value: alamatPemilik,
      });
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
