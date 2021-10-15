<template>
  <v-card>
    <v-card-title>
      <v-row no-gutters align-content="center" justify="space-between">
        <span class="text-h6">Edit List</span>
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
              v-model="item.posTarif"
              @change="handleChange('posTarif', $event)"
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
              v-model="item.hsCode"
              @change="handleChange('hsCode', $event)"
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
              v-model="item.uraian"
              @change="handleChange('uraian', $event)"
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
              v-model="item.nettoBrutoVolume"
              @change="handleChange('nettoBrutoVolume', $event)"
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
              v-model="item.satuanKemasan"
              @change="handleChange('satuanKemasan', $event)"
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
              v-model="item.nilaiPabeanHargaPenyerahan"
              @change="handleChange('nilaiPabeanHargaPenyerahan', $event)"
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
            >Update</v-btn
          >
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { FieldRequired } from "@/mixins/ValidationRules";
export default {
  name: "FormEditDataBarang",
  mixins: [FieldRequired],
  props: ["item", "index"],
  methods: {
    handleChange(key, value) {
      this.$emit("handleChangeEdit", key, value);
    },
    async handleSubmit() {
      const payload = {
        posTarif: this.item.posTarif,
        uraian: this.item.uraian,
        nettoBrutoVolume: this.item.nettoBrutoVolume,
        satuanKemasan: this.item.satuanKemasan,
        nilaiPabeanHargaPenyerahan: this.item.nilaiPabeanHargaPenyerahan,
        hsCode: this.item.hsCode,
      };
      const data = {
        payload,
        index: this.index,
      };
      if (this.$refs.formDataBarang.validate()) {
        // this.$emit("handleEdit", payload, this.index)
        this.$store.commit("UPDATE_DATA_LIST_BARANG", data);
        this.handleDialog();
      }
    },
    handleDialog() {
      this.$refs.formDataBarang.resetValidation();
      this.$emit("handleEdit");
    },
  },
};
</script>

<style lang="scss" scoped></style>
