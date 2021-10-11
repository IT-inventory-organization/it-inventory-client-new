<template>
  <v-card>
    <v-card-title>
      <v-row no-gutters justify="end">
        <span style="cursor: pointer" @click="handleCloseDialog"
          ><v-icon>mdi-close</v-icon></span
        >
      </v-row>
    </v-card-title>
    <v-card-text>
      <v-row no-gutters class="mt-2" align="center" justify="space-between">
        <div class="title" style="color: black">Preview</div>
        <div>
          <v-btn
            class="ma-2"
            color="primary"
            outlined
            @click.prevent="exportToPDF"
          >
            <v-icon left>mdi-printer-outline </v-icon>
            Print
          </v-btn>
        </div>
      </v-row>
      <div class="preview-container">
        <v-progress-linear
          v-if="previewIsLoading"
          indeterminate
          rounded
          height="6"
        ></v-progress-linear>
        <print-dokumen
          id="printdokumen"
          v-if="!previewIsLoading && preview !== null"
        />
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "PreviewPrintReport",
  components: {
    PrintDokumen: () => import("@/components/plb_ppftz/PrintDokumen"),
  },
  computed: {
    reportIdPreview() {
      return this.$store.state.report.reportIdPreview;
    },
    preview() {
      return this.$store.state.report.preview;
    },
    previewIsLoading() {
      return this.$store.state.report.previewIsLoading;
    },
  },
  methods: {
    handleCloseDialog() {
      this.$emit("handleCloseDialog");
    },
    async exportToPDF() {
      // await this.$htmlToPaper("printdokumen");
      const prtHtml = document.getElementById("printdokumen").innerHTML;

      // Get all stylesheets HTML
      let stylesHtml = "";
      for (const node of [
        ...document.querySelectorAll('link[rel="stylesheet"], style'),
      ]) {
        stylesHtml += node.outerHTML;
      }
      // Open the print window
      const WinPrint = window.open(
        "",
        "",
        "left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0"
      );

      WinPrint.document.write(`<!DOCTYPE html>
      <html>
        <head>
          ${stylesHtml}
        </head>
        <body>
          ${prtHtml}
        </body>
      </html>`);

      WinPrint.document.close();
      WinPrint.focus();
      WinPrint.print();
      WinPrint.close();
    },
  },
};
</script>

<style lang="scss" scoped>
.preview-container {
  width: max-content;
  margin: 3rem auto;
  border: 1px solid #d8dcf2;
  border-radius: 10px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
}

@media (max-width: 768px) {
  .preview-container {
    margin: 0 !important;
    transform: scale(0.5) !important;
  }
}

@media (max-width: 900px) {
  .preview-container {
    margin: 0 !important;
    transform: scale(0.8) !important;
  }
}
</style>
