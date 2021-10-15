<template>
  <v-card>
    <v-card-title>
      <v-row no-gutters align-content="center" justify="space-between">
        <span class="text-h6">Tambah Stock Barang</span>
        <span style="cursor: pointer" @click.prevent="handleDialog"
          ><v-icon>mdi-close</v-icon></span
        >
      </v-row>
    </v-card-title>
    <v-card-text class="py-4">
      <v-form ref="formDataBarang" @submit.prevent="handleSubmit">
        <v-row>
          <v-col cols="12" lg="6" md="5" sm="12">
            <v-text-field
              label="Nama"
              outlined
              v-model="nama"
              :rules="[
                (value) => {
                  return genericRequiredRule(value, 'Nama');
                },
              ]"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" lg="6" md="7" sm="12">
            <v-text-field
              label="Uraian"
              outlined
              v-model="uraian"
              :rules="[
                (value) => {
                  return genericRequiredRule(value, 'Uraian');
                },
              ]"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" lg="4" md="4" sm="12">
            <v-text-field
              label="Netto Bruto Volume"
              outlined
              v-model="nettoBrutoVolume"
              :rules="[
                (value) => {
                  return genericRequiredRule(value, 'Netto Bruto Volume');
                },
              ]"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" lg="4" md="4" sm="12">
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
          <v-col cols="12" lg="4" md="4" sm="12">
            <v-text-field
              label="Stock"
              outlined
              v-model="stock"
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
          <v-col cols="12" lg="6" md="6" sm="12">
            <v-text-field
              label="HS Code"
              outlined
              v-model="hsCode"
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
  name: "CreateStockBarang",
  mixins: [FieldRequired],
  computed: {
    nama: {
      get() {
        return this.$store.state.report.barang.nama;
      },
      set(value) {
        this.$store.commit("SET_BARANG", {
          key: "nama",
          value,
        });
      },
    },
    posTarif: {
      get() {
        return this.$store.state.report.barang.posTarif;
      },
      set(value) {
        this.$store.commit("SET_BARANG", {
          key: "posTarif",
          value,
        });
      },
    },
    uraian: {
      get() {
        return this.$store.state.report.barang.uraian;
      },
      set(value) {
        this.$store.commit("SET_BARANG", {
          key: "uraian",
          value,
        });
      },
    },
    nettoBrutoVolume: {
      get() {
        return this.$store.state.report.barang.nettoBrutoVolume;
      },
      set(value) {
        this.$store.commit("SET_BARANG", {
          key: "nettoBrutoVolume",
          value,
        });
      },
    },
    satuanKemasan: {
      get() {
        return this.$store.state.report.barang.satuanKemasan;
      },
      set(value) {
        this.$store.commit("SET_BARANG", {
          key: "satuanKemasan",
          value,
        });
      },
    },
    nilaiPabeanHargaPenyerahan: {
      get() {
        return this.$store.state.report.barang.nilaiPabeanHargaPenyerahan;
      },
      set(value) {
        this.$store.commit("SET_BARANG", {
          key: "nilaiPabeanHargaPenyerahan",
          value,
        });
      },
    },
    hsCode: {
      get() {
        return this.$store.state.report.barang.hsCode;
      },
      set(value) {
        this.$store.commit("SET_BARANG", {
          key: "hsCode",
          value,
        });
      },
    },
    stock: {
      get() {
        return this.$store.state.report.barang.stock;
      },
      set(value) {
        this.$store.commit("SET_BARANG", {
          key: "stock",
          value,
        });
      },
    },
  },
  methods: {
    handleDialog() {
      this.$emit("handleCloseDialogAddBarang");
    },
    handleSubmit() {
      if (this.$refs.formDataBarang.validate()) {
        this.$emit("handleCloseDialogAddBarang");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
