<template>
  <div>
    <v-card class="mb-12" elevation="0">
      <!-- Data Dokumen -->
      <v-expansion-panels>
        <v-expansion-panel class="it-accordion-panel">
          <v-expansion-panel-header>
            <span>Data Dokumen</span>
          </v-expansion-panel-header>
          <!-- Form -->
          <v-expansion-panel-content>
            <data-dokumen></data-dokumen>
          </v-expansion-panel-content>
          <!-- End Form -->
        </v-expansion-panel>
      </v-expansion-panels>
      <!-- End Data Dokumen -->

      <!-- Data Dokumen -->
      <v-expansion-panels>
        <v-expansion-panel class="it-accordion-panel">
          <v-expansion-panel-header>
            <span>Data Peti Kemas</span>
          </v-expansion-panel-header>
          <!-- Form -->
          <v-expansion-panel-content>
            <data-peti-kemas></data-peti-kemas>
          </v-expansion-panel-content>
          <!-- End Form -->
        </v-expansion-panel>
      </v-expansion-panels>
      <!-- End Data Peti Kemas -->
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
  name: "FormDataLanjutan",
  props: ["step", "handleSubmitStepper"],
  components: {
    DataDokumen: () => import("@/views/plb_ppftz/DataLanjutan/DataDokumen"),
    DataPetiKemas: () => import("@/views/plb_ppftz/DataLanjutan/DataPetiKemas"),
  },
  data() {
    return {};
  },
  methods: {
    handleSubmit() {
      this.$swal({
        title: "Apakah data anda sudah benar ?",
        type: "warning",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#5682ff",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya",
        cancelButtonText: "Tidak",
      }).then((result) => {
        if (result.value) {
          this.$emit("handleSubmitStepper");
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
