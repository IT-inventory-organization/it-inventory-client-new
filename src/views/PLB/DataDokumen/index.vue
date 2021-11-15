<template>
  <div>
    <v-form ref="FormDataDokumen" lazy-validation>
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
    </v-form>

    <v-row no-gutters style="justify-content: flex-end" class="my-4">
      <button type="submit" class="btn_save">
        <span>Selanjutnya</span> <img src="@/assets/icons/ic_bulletnext.svg" />
      </button>
    </v-row>
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
};
</script>

<style lang="scss" scoped></style>
