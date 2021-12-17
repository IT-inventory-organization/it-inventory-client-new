<template>
  <div>
    <v-row align="center">
      <v-col lg="9" md="11" sm="12">
        <div class="display-1 font-weight-bold">
          Dokumen Baru PLB
        </div>
      </v-col>
      <v-col
        v-if="stepper === 4"
        lg="3"
        md="1"
        sm="12"
        class="d-flex"
        style="text-align: right"
      >
        <button
          fill
          class="mx-2 it-inventory-btn it-inventory-btn__fw it-inventory-btn__green"
          @click.prevent="handleOpenDialogXML"
        >
          Lihat XML
        </button>
        <button
          fill
          class="mx-2 it-inventory-btn it-inventory-btn__fw it-inventory-btn__grey"
          @click.prevent="handleFinish"
        >
          Tutup
        </button>
      </v-col>
    </v-row>
    <v-stepper
      alt-labels
      class="it-inven-stepper"
      v-model="stepper"
      elevation="0"
    >
      <v-row justify="center">
        <v-col cols="6">
          <v-stepper-header>
            <v-stepper-step :complete="stepper > 1" step="1">
              Dokumen BCF
            </v-stepper-step>

            <v-divider :class="stepper > 1 && 'v-divider__active'"></v-divider>

            <v-stepper-step :complete="stepper > 2" step="2">
              Data Dokumen
            </v-stepper-step>

            <v-divider :class="stepper > 2 && 'v-divider__active'"></v-divider>

            <v-stepper-step :complete="stepper > 3" step="3">
              Data Barang
            </v-stepper-step>

            <v-divider :class="stepper > 3 && 'v-divider__active'"></v-divider>

            <v-stepper-step step="4">
              Preview
            </v-stepper-step>
          </v-stepper-header>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="10">
          <v-stepper-items>
            <v-stepper-content step="1">
              <dokumen-PO />
            </v-stepper-content>
          </v-stepper-items>
          <v-stepper-items>
            <v-stepper-content step="2">
              <data-dokumen />
            </v-stepper-content>
          </v-stepper-items>

          <v-stepper-items>
            <v-stepper-content step="3">
              <data-barang />
            </v-stepper-content>
          </v-stepper-items>

          <v-stepper-items>
            <v-stepper-content step="4">
              <data-preview />
            </v-stepper-content>
          </v-stepper-items>
        </v-col>
      </v-row>
    </v-stepper>

    <v-dialog persistent width="50%" max-width="1200px" v-model="dialogXML">
      <preview-XML @handleCloseDialogXML="handleCloseDialogXML" />
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "FormDocument",
  components: {
    DokumenPO: () => import("@/views/PLB/DokumenPO/index"),
    DataDokumen: () => import("@/views/PLB/DataDokumen/index"),
    DataBarang: () => import("@/views/PLB/DataBarang/index"),
    DataPreview: () => import("@/views/PLB/DataPreview/index"),
    PreviewXML: () => import("@/components/Document/PreviewXML/index"),
  },
  data() {
    return {
      dialogXML: false,
    };
  },
  computed: {
    stepper() {
      return this.$store.state.plb.stepper;
    },
    constantPengeluaran() {
      return this.$store.state.plb.constant.pengeluaran;
    },
  },
  methods: {
    handleNotificationType() {
      return localStorage.getItem("NotificationType");
    },
    handleFinish() {
      this.$router.push("/plb");
      this.$store.commit("SET_STEPPER", 1);
    },
    handleOpenDialogXML() {
      this.dialogXML = true;
      if (this.handleNotificationType() === this.constantPengeluaran) {
        this.$store.dispatch("previewPengeluaran");
      } else {
        this.$store.dispatch("previewPemasukan");
      }
    },
    handleCloseDialogXML() {
      this.dialogXML = false;
    },
  },
  created() {
    const getStepper = localStorage.getItem("stepper");
    if (getStepper) {
      this.$store.commit("SET_STEPPER", +getStepper);
    }
  },
};
</script>

<style lang="scss" scoped></style>
