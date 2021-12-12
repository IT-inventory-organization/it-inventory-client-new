<template>
  <div>
    <v-form ref="formDataDokumen" @submit.prevent="handleSubmit">
      <v-expansion-panels>
        <v-expansion-panel class="it-accordion-panel">
          <v-expansion-panel-header class="title font-weight-bold">
            <span>Data Pengajuan</span>
          </v-expansion-panel-header>
          <!-- Form -->
          <v-expansion-panel-content eager>
            <data-pengajuan ref="dataPengajuanForm" />
          </v-expansion-panel-content>
          <!-- End Form -->
        </v-expansion-panel>

        <v-expansion-panel class="it-accordion-panel">
          <v-expansion-panel-header class="title font-weight-bold">
            <span>Laporan Pemasukan/Pengeluaran Barang</span>
          </v-expansion-panel-header>
          <!-- Form -->
          <v-expansion-panel-content eager>
            <laporan-pemasukan-pengeluaran-barang />
          </v-expansion-panel-content>
          <!-- End Form -->
        </v-expansion-panel>
      </v-expansion-panels>

      <v-row no-gutters style="justify-content: flex-end" class="my-4">
        <button type="submit" class="btn_save">
          <span>Selanjutnya</span>
          <img src="@/assets/icons/ic_bulletnext.svg" />
        </button>
      </v-row>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "DataDokumen",
  components: {
    DataPengajuan: () => import("@/views/PLB/DataDokumen/DataPengajuan"),
    LaporanPemasukanPengeluaranBarang: () =>
      import("@/views/PLB/DataDokumen/LaporanPemasukanPengeluaranBarang/index"),
  },
  computed: {
    dokumenSaveSucceded: {
      get() {
        return this.$store.state.plb.dokumenSaveSucceded;
      }
  }
  },
  methods: {
    async submitDocument() {
      await this.$store.dispatch("saveDocument", this.$store.state.plb);
      if(this.dokumenSaveSucceded){
         this.$store.commit("SET_STEPPER", 3);
      }
      // TODO: create error handle here if data is not saved succesfully
    },
   async handleSubmit() {
      
      if (this.$refs.formDataDokumen.validate()) {
        await this.submitDocument();
         
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
