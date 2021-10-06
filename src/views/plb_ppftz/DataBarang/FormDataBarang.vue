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
      <v-form ref="formDataBarang" @submit.prevent="handleSubmit">
        <v-row>
          <v-col lg="6" md="6" sm="12">
            <v-text-field
              label="Pos Tarif"
              outlined
              v-model="posTarif"
              :rules="[
                (value) => {
                  return genericRequiredRule(value, 'Pos Tarif');
                },
              ]"
            >
            </v-text-field>
          </v-col>
          <v-col lg="6" md="6" sm="12">
            <v-text-field
              label="Hs Code"
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
        <v-row>
          <v-col cols="12">
            <v-textarea
              name="uraian"
              label="Uraian"
              v-model="uraian"
              :rules="[
                (value) => {
                  return genericRequiredRule(value, 'Uraian');
                },
              ]"
              outlined
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col lg="4" md="4" sm="12">
            <v-text-field
              label="Netto, Bruto, Volume"
              outlined
              v-model="nettoBrutoVolume"
              :rules="[
                (value) => {
                  return genericRequiredRule(value, 'Netto, Bruto, Volume');
                },
              ]"
            >
            </v-text-field>
          </v-col>
          <v-col lg="4" md="4" sm="12">
            <v-text-field
              label="Satuan Kemasan"
              outlined
              v-model="satuanKemasan"
              :rules="[
                (value) => {
                  return genericRequiredRule(value, 'Satuan Kemasan');
                },
              ]"
            >
            </v-text-field>
          </v-col>
          <v-col lg="4" md="4" sm="12">
            <v-text-field
              label="Nilai Pabean, Harga Penyerahan"
              outlined
              v-model="nilaiPabeanHargaPenyerahan"
              :rules="[
                (value) => {
                  return genericRequiredRule(
                    value,
                    'Nilai Pabean, Harga Penyerahan'
                  );
                },
              ]"
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row no-gutters style="justify-content: flex-end; padding: 20px 0px">
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
  name: "FormDataBarang",
  mixins: [FieldRequired],
  props: ["handleModal"],
  data() {
    return {
      posTarif: 0,
      uraian: "",
      nettoBrutoVolume: 0,
      satuanKemasan: 0,
      nilaiPabeanHargaPenyerahan: 0,
      hsCode: "",
    };
  },
  methods: {
    handleSubmit() {
      if (this.$refs.formDataBarang.validate()) {
        this.$emit("handleModal");
      }
    },
    handleDialog() {
      this.$emit("handleModal");
      this.$refs.formDataBarang.resetValidation();
    },
  },
};
</script>

<style lang="scss" scoped></style>
