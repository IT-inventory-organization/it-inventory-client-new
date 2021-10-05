<template>
  <v-expansion-panel-content>
    <!-- Pengirim -->
    <v-card-title class="it-inventory-card-title it-inventory-card-title__sub"
      >Pengirim</v-card-title
    >
    <v-row>
      <v-col lg="6" sm="12">
        <v-select
          clearable
          :items="['5 - NPWP - 15 Digits']"
          label="Jenis Identitas Pengirim"
          outlined
          v-model="jenisIdentitasPengirim"
          :rules="[
            (value) => {
              return genericRequiredRule(value, 'Kategori Pemberitahuan');
            },
          ]"
        ></v-select>
        <v-text-field
          label="Nama Pengirim"
          outlined
          v-model="namaPengirim"
          :rules="[
            (value) => {
              return genericRequiredRule(value, 'Nama Pengirim');
            },
          ]"
        >
        </v-text-field>
        <v-text-field
          label="Nomor Ijin Bpk Pengirim"
          outlined
          v-model="nomorIjinBpkPengirim"
          :rules="[
            (value) => {
              return genericRequiredRule(value, 'Nomor Ijin Bpk Pengirim');
            },
          ]"
        >
        </v-text-field>
      </v-col>

      <v-col lg="6" sm="12">
        <v-text-field
          label="Nomor Identitas Pengirim"
          outlined
          v-model="nomorIdentitasPengirim"
          :rules="[
            (value) => {
              return genericRequiredRule(value, 'Nomor Identitas Pengirim');
            },
          ]"
        >
        </v-text-field>
        <v-text-field
          label="Alamat Pengirim"
          outlined
          v-model="alamatPengirim"
          :rules="[
            (value) => {
              return genericRequiredRule(value, 'Alamat Pengirim');
            },
          ]"
        >
        </v-text-field>
        <v-text-field
          label="Tanggal Ijin Bpk Pengirim"
          outlined
          v-model="tanggalIjinBpkPengirim"
          type="date"
          :rules="[
            (value) => {
              return genericRequiredRule(value, 'Tanggal Ijin Bpk Pengirim');
            },
          ]"
        >
        </v-text-field>
      </v-col>
    </v-row>
    <!-- Pengirim -->

    <!-- Penerima -->
    <v-card-title class="it-inventory-card-title it-inventory-card-title__sub"
      >Penerima</v-card-title
    >
    <v-row>
      <v-col lg="6" sm="12">
        <v-select
          clearable
          :items="['5 - NPWP - 15 Digits']"
          label="Jenis Identitas Pengirim"
          outlined
          v-model="jenisIdentitasPengirim"
          :rules="[
            (value) => {
              return genericRequiredRule(value, 'Jenis Identitas Pengirim');
            },
          ]"
        ></v-select>
        <v-text-field
          label="Nama Penerima"
          outlined
          v-model="namaPenerima"
          :rules="[
            (value) => {
              return genericRequiredRule(value, 'Nama Penerima');
            },
          ]"
        >
        </v-text-field>
      </v-col>

      <v-col lg="6" sm="12">
        <v-text-field
          label="Nomor Identitas Penerima"
          outlined
          v-model="nomorIdentitasPenerima"
          :rules="[
            (value) => {
              return genericRequiredRule(value, 'Nomor Identitas Penerima');
            },
          ]"
        >
        </v-text-field>
        <v-text-field
          label="Alamat Penerima"
          outlined
          v-model="alamatPenerima"
          :rules="[
            (value) => {
              return genericRequiredRule(value, 'Alamat Penerima');
            },
          ]"
        >
        </v-text-field>
      </v-col>
    </v-row>
    <!-- Penerima -->
  </v-expansion-panel-content>
</template>

<script>
import { FieldRequired } from "@/mixins/ValidationRules";
export default {
  name: "IdentitasPengirimPenerima",
  mixins: [FieldRequired],
  data() {
    return {
      // Penerima
      jenisIdentitasPengirim: "",
      namaPengirim: "",
      nomorIjinBpkPengirim: "",
      nomorIdentitasPengirim: "",
      alamatPengirim: "",
      tanggalIjinBpkPengirim: "",
      // Pengirim
      jenisIdentitasPenerima: "",
      namaPenerima: "",
      nomorIdentitasPenerima: "",
      alamatPenerima: "",
    };
  },
};
</script>

<style lang="scss" scoped></style>
