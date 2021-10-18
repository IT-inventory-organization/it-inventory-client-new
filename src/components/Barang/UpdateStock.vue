<template>
  <v-card>
    <v-card-title>
      <v-row no-gutters align-content="center" justify="space-between">
        <span class="text-h6">Tambah/Kurangi Stock</span>
        <span style="cursor: pointer" @click.prevent="handleDialog"
          ><v-icon>mdi-close</v-icon></span
        >
      </v-row>
    </v-card-title>
    <v-card-text>
      <form class="my-4" ref="formUpdateStock" @submit.prevent="handleSubmit">
        <v-row no-gutters>
          <v-col cols="12">
            <v-text-field
              label="Tambah Stock"
              outlined
              single-line
              type="number"
              :rules="[
                (value) => {
                  return genericRequiredRule(value, 'Tambah Stock');
                },
                (value) => {
                  return genericNumberRule(value, 'Tambah Stock');
                },
                (value) => {
                  return genericMinRule(value, 'Tambah Stock');
                },
              ]"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="Kurangi Stock"
              outlined
              single-line
              type="number"
              :rules="[
                (value) => {
                  return genericRequiredRule(value, 'Kurangi Stock');
                },
                (value) => {
                  return genericNumberRule(value, 'Kurangi Stock');
                },
                (value) => {
                  return genericMinRule(value, 'Kurangi Stock');
                },
              ]"
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row no-gutters style="justify-content: flex-end;">
          <v-btn
            type="submit"
            fill
            class="it_inven_create_btn"
            style="width: 200px"
            >Save</v-btn
          >
        </v-row>
      </form>
    </v-card-text>
  </v-card>
</template>

<script>
import { FieldRequired } from "@/mixins/ValidationRules";
export default {
  name: "updatestock",
  mixins: [FieldRequired],
  methods: {
    handleDialog() {
      this.$emit("handleCloseDialogUpdateStock");
    },
    handleSubmit() {
      if (this.$refs.formUpdateStock.validate()) {
        console.log("test");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
