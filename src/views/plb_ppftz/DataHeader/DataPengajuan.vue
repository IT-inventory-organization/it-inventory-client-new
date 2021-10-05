<template>
  <v-expansion-panel-content>
    <v-row>
      <v-col lg="6" sm="12">
        <v-autocomplete
          :items="[`Test1`, `Test2`]"
          outlined
          label="Kantor Pabean Asal"
          clearable
          v-model="kantorPabeanAsal"
          :rules="[
            (value) => {
              return genericRequiredRule(value, 'kantor Pabean Asal');
            },
          ]"
        ></v-autocomplete>
        <v-select
          clearable
          :items="['1 - Biasa']"
          label="Kategori Pemberitahuan"
          outlined
          v-model="kategoryPemberitahuan"
          :rules="[
            (value) => {
              return genericRequiredRule(value, 'Kategori Pemberitahuan');
            },
          ]"
        ></v-select>
        <v-text-field
          label="Kategori Pengeluaran"
          outlined
          v-model="kategoryPengeluaran"
          :rules="[
            (value) => {
              return genericRequiredRule(value, 'Kategori Pengeluaran');
            },
          ]"
        >
        </v-text-field>
      </v-col>
      <v-col lg="6" sm="12">
        <v-text-field
          label="Tujuan Pengeluaran"
          outlined
          v-model="tujuanPengeluaran"
          :rules="[
            (value) => {
              return genericRequiredRule(value, 'Tujuan Pengeluaran');
            },
          ]"
        >
        </v-text-field>
        <v-text-field
          label="Asal Barang"
          outlined
          v-model="asalBarang"
          :rules="[
            (value) => {
              return genericRequiredRule(value, 'Asal Barang');
            },
          ]"
        >
        </v-text-field>
        <v-text-field
          label="Cara Pembayaran"
          outlined
          v-model="caraPembayaran"
          :rules="[
            (value) => {
              return genericRequiredRule(value, 'Cara Pembayaran');
            },
          ]"
        >
        </v-text-field>
      </v-col>
    </v-row>
  </v-expansion-panel-content>
</template>

<script>
import { FieldRequired } from "@/mixins/ValidationRules";
export default {
  name: "DataPengajuan",
  mixins: [FieldRequired],
  data() {
    return {
      kantorPabeanAsal: "",
      kategoryPemberitahuan: "",
      kategoryPengeluaran: "",
      tujuanPengeluaran: "",
      asalBarang: "",
      caraPembayaran: "",
    };
  },
};
</script>

<style lang="scss" scoped></style>
