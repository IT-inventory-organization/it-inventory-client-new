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
          <v-col cols="12" lg="6" md="6" sm="12">
            <v-select
              outlined
              label="Jenis Barang"
              :items="listBarang.data"
              :item-text="(item) => item.name"
              :value="item"
              return-object
              @change="handleChange($event)"
              :rules="[
                (value) => {
                  return genericRequiredRule(value, 'Jenis Barang');
                },
              ]"
            >
            </v-select>
          </v-col>
          <v-col cols="12" lg="6" md="6" sm="12">
            <v-text-field
              outlined
              label="Uraian"
              disabled
              v-model="item.uraian"
              :rules="[
                (value) => {
                  return genericRequiredRule(value, 'Uraian');
                },
              ]"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" lg="6" md="6" sm="12">
            <v-text-field
              outlined
              label="Stock"
              v-model="item.stock"
              disabled
              :rules="[
                (value) => {
                  return genericRequiredRule(value, 'Stock');
                },
              ]"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" lg="6" md="6" sm="12">
            <v-text-field
              outlined
              label="Quantity"
              :value="quantity"
              @change="handleChangeOthers('quantityEdit', $event)"
              :rules="[
                (value) => {
                  return genericRequiredRule(value, 'Quantity');
                },
                (value) => {
                  return genericNumberRule(value, 'Quantity');
                },
                (value) => {
                  return genericMinRule(value, 'Quantity');
                },
              ]"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" lg="4" md="4" sm="12">
            <v-text-field
              outlined
              disabled
              v-model="item.nettoBrutoVolume"
              label="Netto, Bruto, Volume"
              :rules="[
                (value) => {
                  return genericRequiredRule(value, 'Netto, Bruto, Volume');
                },
              ]"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" lg="4" md="4" sm="12">
            <v-text-field
              outlined
              disabled
              label="Satuan Kemasan"
              v-model="item.satuanKemasan"
              :rules="[
                (value) => {
                  return genericRequiredRule(value, 'Satuan Kemasan');
                },
              ]"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" lg="4" md="4" sm="12">
            <v-text-field
              outlined
              :value="nilaiPabeanHargaPenyerahan"
              label="Nilai Pabean, Harga Penyerahan"
              @change="
                handleChangeOthers('nilaiPabeanHargaPenyerahanEdit', $event)
              "
              :rules="[
                (value) => {
                  return genericRequiredRule(
                    value,
                    'Nilai Pabean, Harga Penyerahan'
                  );
                },
                (value) => {
                  return genericNumberRule(
                    value,
                    'Nilai Pabean, Harga Penyerahan'
                  );
                },
                (value) => {
                  return genericMinRule(
                    value,
                    'Nilai Pabean, Harga Penyerahan'
                  );
                },
              ]"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" lg="6" md="6" sm="12">
            <v-text-field
              outlined
              disabled
              v-model="item.posTarif"
              label="Pos Tarif"
              :rules="[
                (value) => {
                  return genericRequiredRule(value, 'Pos Tarif');
                },
              ]"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" lg="6" md="6" sm="12">
            <v-text-field
              outlined
              disabled
              v-model="item.hsCode"
              label="HS Code"
              :rules="[
                (value) => {
                  return genericRequiredRule(value, 'HS Code');
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
  props: ["item", "index", "quantity", "nilaiPabeanHargaPenyerahan"],
  computed: {
    listBarang: {
      get() {
        return this.$store.state.report.listBarang;
      },
    },
  },
  data() {
    return {
      quantityEdit: "",
      nilaiPabeanHargaPenyerahanEdit: "",
    };
  },
  methods: {
    handleChange(value) {
      this.$emit("handleChangeEdit", value);
    },
    handleChangeOthers(key, value) {
      this[key] = value;
    },
    async handleSubmit() {
      const payload = {
        idBarang: this.item.idBarang,
        quantity: this.quantityEdit ? this.quantityEdit : this.quantity,
        nilaiPabeanHargaPenyerahan: this.nilaiPabeanHargaPenyerahanEdit
          ? this.nilaiPabeanHargaPenyerahanEdit
          : this.nilaiPabeanHargaPenyerahan,
        name: this.item.name,
        uraian: this.item.uraian,
        nettoBrutoVolume: this.item.nettoBrutoVolume,
        satuanKemasan: this.item.satuanKemasan,
        posTarif: this.item.posTarif,
        hsCode: this.item.hsCode,
        stock: this.item.stock,
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
