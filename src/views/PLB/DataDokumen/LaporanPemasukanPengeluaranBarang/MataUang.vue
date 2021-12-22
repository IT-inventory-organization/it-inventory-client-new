<template>
  <div>
    <div class="body-1 font-weight-bold mb-5">
      Mata Uang
    </div>
    <v-row justify="space-between" class="mb-3">
      <v-col lg="5" md="5" sm="12">
        <div>
          <label class="caption font-weight-medium">Valuta</label>
          <v-select
            outlined
            dense
            placeholder="Pilih Valuta"
            v-model="valuta"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Valuta');
              },
            ]"
            :items="itemValuta"
            item-text="name"
            append-icon="mdi-chevron-down"
          ></v-select>
        </div>
        <div>
          <label class="caption font-weight-medium">Freight</label>
          <v-text-field
            outlined
            dense
            v-model="freight"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Freight');
              },
              (value) => {
                return genericNumberRule(value, 'Freight');
              },
              (value) => {
                return genericMinRule(value, 'Freight');
              },
            ]"
            placeholder="0"
          ></v-text-field>
        </div>
        <div>
          <label class="caption font-weight-medium">NDPBM Kurs</label>
          <v-text-field
            outlined
            dense
            v-model="ndbpmKurs"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'NDPBM Kurs');
              },
              (value) => {
                return genericNumberRule(value, 'NDPBM Kurs');
              },
              (value) => {
                return genericMinRule(value, 'NDPBM Kurs');
              },
            ]"
            placeholder="0"
          ></v-text-field>
        </div>
      </v-col>
      <v-col lg="5" md="5" sm="12">
        <div>
          <label class="caption font-weight-medium">CIF</label>
          <v-text-field
            outlined
            dense
            v-model="cif"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'CIF');
              },
              (value) => {
                return genericNumberRule(value, 'CIF');
              },
              (value) => {
                return genericMinRule(value, 'CIF');
              },
            ]"
            placeholder="0"
          ></v-text-field>
        </div>
        <div>
          <label class="caption font-weight-medium">Transaksi Lainnya</label>
          <v-text-field
            outlined
            dense
            v-model="transaksiLainnya"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Transaksi Lainnya');
              },
            ]"
            placeholder="Transaksi Lainnya"
          ></v-text-field>
        </div>
        <div>
          <label class="caption font-weight-medium">Harga Penyerahan</label>
          <v-text-field
            outlined
            dense
            v-model="hargaPenyerahan"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Harga Penyerahan');
              },
              (value) => {
                return genericNumberRule(value, 'Harga Penyerahan');
              },
              (value) => {
                return genericMinRule(value, 'Harga Penyerahan');
              },
            ]"
            placeholder="Harga Penyerahan"
          ></v-text-field>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { FieldRequired } from "@/mixins/ValidationRules";
export default {
  name: "MataUang",
  mixins: [FieldRequired],
  computed: {
    itemValuta() {
      return this.$store.state.plb.itemValuta;
    },
    valuta: {
      get() {
        return this.$store.state.plb.mataUang.valuta;
      },
      set(value) {
        this.$store.commit("SET_MATA_UANG", {
          key: "valuta",
          value,
        });
      },
    },
    freight: {
      get() {
        return this.$store.state.plb.mataUang.freight;
      },
      set(value) {
        value = parseInt(value);
        this.$store.commit("SET_MATA_UANG", {
          key: "freight",
          value,
        });
      },
    },
    ndbpmKurs: {
      get() {
        return this.$store.state.plb.mataUang.ndbpmKurs;
      },
      set(value) {
        this.$store.commit("SET_MATA_UANG", {
          key: "ndbpmKurs",
          value,
        });
      },
    },
    cif: {
      get() {
        return this.$store.state.plb.mataUang.cif;
      },
      set(value) {
        this.$store.commit("SET_MATA_UANG", {
          key: "cif",
          value,
        });
      },
    },
    transaksiLainnya: {
      get() {
        return this.$store.state.plb.mataUang.transaksiLainnya;
      },
      set(value) {
        this.$store.commit("SET_MATA_UANG", {
          key: "transaksiLainnya",
          value,
        });
      },
    },
    hargaPenyerahan: {
      get() {
        return this.$store.state.plb.mataUang.hargaPenyerahan;
      },
      set(value) {
        this.$store.commit("SET_MATA_UANG", {
          key: "hargaPenyerahan",
          value,
        });
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
