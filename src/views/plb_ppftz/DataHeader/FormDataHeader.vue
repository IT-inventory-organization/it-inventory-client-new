<template>
  <div>
    <v-card class="mb-12" elevation="0">
      <!-- Data Pengajuan -->
      <v-expansion-panels>
        <v-expansion-panel class="it-accordion-panel">
          <v-expansion-panel-header>
            <span>Data Pengajuan</span>

            <template v-if="dataPengajuanForm" v-slot:actions>
              <img src="@/assets/icons/ic_circle_checklist.svg" />
            </template>
          </v-expansion-panel-header>
          <!-- Form -->
          <data-pengajuan />
          <!-- End Form -->
        </v-expansion-panel>
      </v-expansion-panels>
      <!-- End Data Pengajuan -->

      <!-- Identitas Pengirim/Penerima -->
      <v-expansion-panels>
        <v-expansion-panel class="it-accordion-panel">
          <v-expansion-panel-header>
            <span>Identitas Pengirim/Penerima</span>

            <template v-if="dataPengajuanForm" v-slot:actions>
              <img src="@/assets/icons/ic_circle_checklist.svg" />
            </template>
          </v-expansion-panel-header>
          <!-- Form -->
          <identitas-pengirim-penerima />
          <!-- End Form -->
        </v-expansion-panel>
      </v-expansion-panels>
      <!-- End Identitas Pengirim/Penerima -->

      <!-- Data Pemasukan Pengeluaran I -->
      <v-expansion-panels>
        <v-expansion-panel class="it-accordion-panel">
          <v-expansion-panel-header>
            <span>Data Pemasukan Pengeluaran I</span>

            <template v-if="dataPemasukanPengeluaranSatu" v-slot:actions>
              <img src="@/assets/icons/ic_circle_checklist.svg" />
            </template>
          </v-expansion-panel-header>
          <!-- Form -->
          <data-pemasukan-pengeluaran-satu />
          <!-- End Form -->
        </v-expansion-panel>
      </v-expansion-panels>
      <!-- End Data Pemasukan Pengeluaran I -->

      <!-- Data Pemasukan Pengeluaran II -->
      <v-expansion-panels>
        <v-expansion-panel class="it-accordion-panel">
          <v-expansion-panel-header>
            <span>Data Pemasukan Pengeluaran II</span>

            <template v-if="dataPemasukanPengeluaranDua" v-slot:actions>
              <img src="@/assets/icons/ic_circle_checklist.svg" />
            </template>
          </v-expansion-panel-header>
          <!-- Form -->
          <data-pemasukan-pengeluaran-dua />
          <!-- End Form -->
        </v-expansion-panel>
      </v-expansion-panels>
      <!-- Data Pemasukan Pengeluaran II -->
    </v-card>

    <v-row no-gutters style="justify-content: flex-end">
      <button type="submit" class="btn_save" @click.prevent="handleSubmit">
        <span>Next</span> <img src="@/assets/icons/ic_bulletnext.svg" />
      </button>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "FormDataHeader",
  components: {
    DataPengajuan: () => import("@/views/plb_ppftz/DataHeader/DataPengajuan"),
    IdentitasPengirimPenerima: () =>
      import("@/views/plb_ppftz/DataHeader/IdentitasPengirimPenerima"),
    DataPemasukanPengeluaranSatu: () =>
      import("@/views/plb_ppftz/DataHeader/DataPemasukanPengeluaranSatu"),
    DataPemasukanPengeluaranDua: () =>
      import("@/views/plb_ppftz/DataHeader/DataPemasukanPengeluaranDua"),
  },
  props: ["step", "handleSubmitStepper"],
  data() {
    return {
      dataPengajuanForm: false,
      identitasPengirimPenerima: false,
      dataPemasukanPengeluaranSatu: false,
      dataPemasukanPengeluaranDua: false,
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("handleSubmitStepper");
    },
  },
};
</script>

<style lang="scss" scoped></style>
