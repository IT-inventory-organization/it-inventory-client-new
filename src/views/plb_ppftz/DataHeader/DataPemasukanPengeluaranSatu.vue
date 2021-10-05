<template>
  <v-expansion-panel-content>
    <!-- Data Transaksi Perdagangan -->
    <v-card-title class="it-inventory-card-title it-inventory-card-title__sub"
      >Data Transaksi Perdagangan</v-card-title
    >
    <v-row>
      <v-col lg="6" sm="12">
        <v-select
          clearable
          :items="['4 - Transaksi']"
          label="Transaksi"
          outlined
          v-model="transaksi"
          :rules="[
            (value) => {
              return genericRequiredRule(value, 'Transaksi');
            },
          ]"
        ></v-select>
        <v-select
          clearable
          :items="['USD - US Dollar']"
          label="Valuta"
          outlined
          v-model="valuta"
          :rules="[
            (value) => {
              return genericRequiredRule(value, 'Valuta');
            },
          ]"
        ></v-select>
        <v-text-field
          label="CIF"
          outlined
          v-model="cif"
          :rules="[
            (value) => {
              return genericRequiredRule(value, 'CIF');
            },
          ]"
        >
        </v-text-field>
        <v-text-field
          label="Freight"
          outlined
          v-model="freight"
          :rules="[
            (value) => {
              return genericRequiredRule(value, 'Freight');
            },
          ]"
        >
        </v-text-field>
      </v-col>

      <v-col lg="6" sm="12">
        <v-text-field
          label="Transaksi Lainnya"
          outlined
          v-model="transaksiLainnya"
          :rules="[
            (value) => {
              return genericRequiredRule(value, 'Transaksi Lainnya');
            },
          ]"
        >
        </v-text-field>
        <v-text-field
          label="NDPBM Kurs"
          outlined
          v-model="ndpbmKurs"
          :rules="[
            (value) => {
              return genericRequiredRule(value, 'NDPBM Kurs');
            },
          ]"
        >
        </v-text-field>
        <v-select
          clearable
          :items="['Ya', 'Tidak']"
          label="Voluntary Declaration"
          outlined
          v-model="voluntaryDeclaration"
          :rules="[
            (value) => {
              return genericRequiredRule(value, 'Voluntary Declaration');
            },
          ]"
        ></v-select>
        <v-text-field
          label="Harga Penyerahan"
          outlined
          v-model="hargaPenyerahan"
          :rules="[
            (value) => {
              return genericRequiredRule(value, 'Harga Penyerahan');
            },
          ]"
        >
        </v-text-field>
      </v-col>
    </v-row>
    <!-- End Data Transaksi Perdagangan -->

    <!-- Data Pengangkutan -->
    <v-card-title class="it-inventory-card-title it-inventory-card-title__sub"
      >Data Pengangkutan</v-card-title
    >
    <v-row>
      <v-col lg="6" sm="12">
        <v-select
          clearable
          :items="['1 - Laut']"
          label="Cara Angkut"
          outlined
          v-model="caraAngkut"
          :rules="[
            (value) => {
              return genericRequiredRule(value, 'Cara Angkut');
            },
          ]"
        ></v-select>
        <v-select
          clearable
          :items="['IDN']"
          label="Bendera"
          outlined
          v-model="bendera"
          :rules="[
            (value) => {
              return genericRequiredRule(value, 'Bendera');
            },
          ]"
        ></v-select>
      </v-col>
      <v-col lg="6" sm="12">
        <v-text-field
          label="Nama Pengangkut"
          outlined
          v-model="namaPengangkut"
          :rules="[
            (value) => {
              return genericRequiredRule(value, 'Nama Pengangkut');
            },
          ]"
        >
        </v-text-field>
        <v-text-field
          label="Nomor Voly Flight Pol"
          outlined
          v-model="nomorVolyFlightPol"
          :rules="[
            (value) => {
              return genericRequiredRule(value, 'Nomor Voly Flight Pol');
            },
          ]"
        >
        </v-text-field>
      </v-col>
    </v-row>
    <!-- End Data Pengangkutan -->
  </v-expansion-panel-content>
</template>

<script>
import { FieldRequired } from "@/mixins/ValidationRules";
export default {
  name: "DataPemasukanPengeluaranSatu",
  mixins: [FieldRequired],
  data() {
    return {
      // Data Transaksi Perdagangan
      transaksi: "",
      valuta: "",
      cif: "",
      freight: "",
      transaksiLainnya: "-",
      ndpbmKurs: "",
      voluntaryDeclaration: "",
      hargaPenyerahan: "",

      // Data Pengangkutan
      caraAngkut: "",
      bendera: "",
      namaPengangkut: "",
      nomorVolyFlightPol: "",
    };
  },
};
</script>

<style lang="scss" scoped></style>
