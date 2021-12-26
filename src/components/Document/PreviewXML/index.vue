<template>
  <v-card :loading="loadingPreviewXML">
    <template slot="progress">
      <progress-linear />
    </template>
    <v-card-title>
      <v-row no-gutters align="center">
        <v-col cols="10">
          <span class="headline font-weight-bold">Data XML</span>
        </v-col>
        <v-col cols="2">
          <div class="d-flex">
            <button
              type="submit"
              class="mx-2 it-inventory-btn it-inventory-btn__fw it-inventory-btn__grey"
              @click.prevent="handleClose"
            >
              Tutup
            </button>
          </div>
        </v-col>
      </v-row>
    </v-card-title>
    <v-card-text>
      <code v-if="!loadingPreviewXML">{{ XMLdocument }}</code>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "PreviewXML",
  components: {
    ProgressLinear: () => import("@/components/ProgressLinear"),
  },
  methods: {
    handleClose() {
      this.$emit("handleCloseDialogXML");
    },
  },
  computed: {
    XMLdocument() {
      return this.$store.state.plb.XMLdocument;
    },
    loadingPreviewXML() {
      return this.$store.state.plb.loading.loadingPreviewXML;
    },
  },
};
</script>

<style lang="scss" scoped></style>
