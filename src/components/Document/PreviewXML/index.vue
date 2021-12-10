<template>
  <v-card>
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
      <code>asdasbajsjda asdbas sadsadas sadas asdsadad</code>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "PreviewXML",
  methods: {
    handleClose() {
      this.$emit("handleCloseDialogXML");
    },
  },
};
</script>

<style lang="scss" scoped></style>
