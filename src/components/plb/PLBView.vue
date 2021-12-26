<template>
  <v-card>
    <v-card-title>
      <v-row no-gutters align="center">
        <v-col cols="7">
          <span class="headline font-weight-bold">Preview</span>
        </v-col>
        <v-col cols="5">
          <div class="d-flex">
            <button
              class="mx-2 it-inventory-btn it-inventory-btn__fw it-inventory-btn__grey"
              @click.prevent="handleClose"
            >
              Tutup
            </button>
            <button
              class="mx-2 it-inventory-btn it-inventory-btn__fw it-inventory-btn__green"
              @click.prevent="handleOpenDialogXML"
            >
              Lihat Data XML
            </button>
          </div>
        </v-col>
      </v-row>
    </v-card-title>
    <v-container class="d-flex justify-center">
      <div class="my-3">
        <preview-document />
      </div>
    </v-container>
    <v-dialog persistent width="50%" max-width="1200px" v-model="dialogXML">
      <preview-XML @handleCloseDialogXML="handleCloseDialogXML" />
    </v-dialog>
  </v-card>
</template>

<script>
export default {
  name: "PLBView",
  components: {
    PreviewDocument: () =>
      import("@/components/Document/PreviewDocument/index"),
    PreviewXML: () => import("@/components/Document/PreviewXML/index"),
  },
  data() {
    return {
      dialogXML: false,
    };
  },
  computed: {
    constantPengeluaran() {
      return this.$store.state.plb.constant.pengeluaran;
    },
    NotificationType() {
      return this.$store.state.plb.NotificationType;
    },
    reportId() {
      return this.$store.state.plb.reportId;
    },
  },
  methods: {
    handleClose() {
      this.$emit("handleCloseView");
    },
    handleOpenDialogXML() {
      this.dialogXML = true;
      if (this.NotificationType === this.constantPengeluaran) {
        this.$store.dispatch("previewPengeluaran", this.reportId);
      } else {
        this.$store.dispatch("previewPemasukan", this.reportId);
      }
    },
    handleCloseDialogXML() {
      this.dialogXML = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
