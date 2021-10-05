<template>
  <v-card>
    <v-card-title>
      <v-row no-gutters align-content="center" justify="space-between">
        <span class="text-h6">Add New List</span>
        <span style="cursor: pointer" @click.prevent="handleDialog"
          ><v-icon>mdi-close</v-icon></span
        >
      </v-row>
    </v-card-title>
    <v-card-text class="py-4">
      <v-form ref="initialReport" @submit.prevent="handleSubmit">
        <v-row>
          <v-col lg="6" md="6" sm="12">
            <v-text-field
              label="Kode Dokumen"
              outlined
              v-model="kodeDokumen"
              :rules="[
                (value) => {
                  return genericRequiredRule(value, 'Kode Dokumen');
                },
              ]"
            >
            </v-text-field>
            <v-text-field
              label="Tanggal Dokumen"
              outlined
              v-model="tanggalDokumen"
              type="date"
              :rules="[
                (value) => {
                  return genericRequiredRule(value, 'Tanggal Dokumen');
                },
              ]"
            >
            </v-text-field>
          </v-col>
          <v-col lg="6" md="6" sm="12">
            <v-text-field
              label="Nomor Dokumen"
              outlined
              v-model="nomorDokumen"
              :rules="[
                (value) => {
                  return genericRequiredRule(value, 'Nomor Dokumen');
                },
              ]"
            >
            </v-text-field>
            <v-text-field
              label="HS Code"
              outlined
              v-model="hsCode"
              :rules="[
                (value) => {
                  return genericRequiredRule(value, 'Hs Code');
                },
              ]"
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row no-gutters style="justify-content: flex-end ">
          <v-btn
            type="submit"
            fill
            class="it_inven_create_btn"
            style="width: 200px"
            >Save</v-btn
          >
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { FieldRequired } from "@/mixins/ValidationRules";
export default {
  name: "FormDataDokumen",
  mixins: [FieldRequired],
  props: ["handleModal"],
  data() {
    return {
      pageActions: "",
      kodeDokumen: "",
      nomorDokumen: "",
      tanggalDokumen: "",
      hsCode: "",
    };
  },
  methods: {
    handleSubmit() {
      if (this.$refs.initialReport.validate()) {
        this.$emit("handleModal");
      }
    },
    handleDialog() {
      this.$emit("handleModal");
    },
  },
};
</script>

<style lang="scss" scoped></style>
