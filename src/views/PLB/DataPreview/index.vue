<template>
  <div class="d-flex flex-column align-center justify-center">
    <preview-document />
    <button
      class="it-inventory-btn it-inventory-btn__green mt-4"
      @click.prevent="handleOpenDialogXML"
    >
      Lihat Data XML
    </button>
    <v-dialog persistent width="50%" max-width="1200px" v-model="dialogXML">
      <preview-XML @handleCloseDialogXML="handleCloseDialogXML" />
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "DataPreview",
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
  methods: {
    handleOpenDialogXML() {
      this.dialogXML = true;
    },
    handleCloseDialogXML() {
      this.dialogXML = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
