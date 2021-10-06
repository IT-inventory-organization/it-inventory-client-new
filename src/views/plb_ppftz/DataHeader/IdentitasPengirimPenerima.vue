<template>
  <v-expansion-panel-content>
    <!-- Pengirim -->
    <v-card-title class="it-inventory-card-title it-inventory-card-title__sub"
      >Pengirim</v-card-title
    >
    <v-row>
      <v-col lg="6" md="6" sm="12">
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

      <v-col lg="6" md="6" sm="12">
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
      <v-col lg="6" md="6" sm="12">
        <v-select
          clearable
          :items="['5 - NPWP - 15 Digits']"
          label="Jenis Identitas Penerima"
          outlined
          v-model="jenisIdentitasPenerima"
          :rules="[
            (value) => {
              return genericRequiredRule(value, 'Jenis Identitas Penerima');
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

      <v-col lg="6" md="6" sm="12">
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
    return {};
  },
  computed: {
    // Pengirim
    identitasPengirim: {
      get() {
        return this.$store.state.report.identitasPengirim.identitasPengirim;
      },
      set(value) {
        this.$store.commit("SET_IDENTITAS_PENGIRIM", {
          key: "identitasPengirim",
          value,
        });
      },
    },
    jenisIdentitasPengirim: {
      get() {
        return this.$store.state.report.identitasPengirim
          .jenisIdentitasPengirim;
      },
      set(value) {
        this.$store.commit("SET_IDENTITAS_PENGIRIM", {
          key: "jenisIdentitasPengirim",
          value,
        });
      },
    },
    nomorIdentitasPengirim: {
      get() {
        return this.$store.state.report.identitasPengirim
          .nomorIdentitasPengirim;
      },
      set(value) {
        this.$store.commit("SET_IDENTITAS_PENGIRIM", {
          key: "nomorIdentitasPengirim",
          value,
        });
      },
    },
    namaPengirim: {
      get() {
        return this.$store.state.report.identitasPengirim.namaPengirim;
      },
      set(value) {
        this.$store.commit("SET_IDENTITAS_PENGIRIM", {
          key: "namaPengirim",
          value,
        });
      },
    },
    alamatPengirim: {
      get() {
        return this.$store.state.report.identitasPengirim.alamatPengirim;
      },
      set(value) {
        this.$store.commit("SET_IDENTITAS_PENGIRIM", {
          key: "alamatPengirim",
          value,
        });
      },
    },
    nomorIjinBpkPengirim: {
      get() {
        return this.$store.state.report.identitasPengirim.nomorIjinBpkPengirim;
      },
      set(value) {
        this.$store.commit("SET_IDENTITAS_PENGIRIM", {
          key: "nomorIjinBpkPengirim",
          value,
        });
      },
    },
    tanggalIjinBpkPengirim: {
      get() {
        return this.$store.state.report.identitasPengirim
          .tanggalIjinBpkPengirim;
      },
      set(value) {
        this.$store.commit("SET_IDENTITAS_PENGIRIM", {
          key: "tanggalIjinBpkPengirim",
          value,
        });
      },
    },

    // Penerima
    jenisIdentitasPenerima: {
      get() {
        return this.$store.state.report.identitasPenerima
          .jenisIdentitasPenerima;
      },
      set(value) {
        this.$store.commit("SET_IDENTITAS_PENERIMA", {
          key: "jenisIdentitasPenerima",
          value,
        });
      },
    },
    nomorIdentitasPenerima: {
      get() {
        return this.$store.state.report.identitasPenerima
          .nomorIdentitasPenerima;
      },
      set(value) {
        this.$store.commit("SET_IDENTITAS_PENERIMA", {
          key: "nomorIdentitasPenerima",
          value,
        });
      },
    },
    namaPenerima: {
      get() {
        return this.$store.state.report.identitasPenerima.namaPenerima;
      },
      set(value) {
        this.$store.commit("SET_IDENTITAS_PENERIMA", {
          key: "namaPenerima",
          value,
        });
      },
    },
    alamatPenerima: {
      get() {
        return this.$store.state.report.identitasPenerima.alamatPenerima;
      },
      set(value) {
        this.$store.commit("SET_IDENTITAS_PENERIMA", {
          key: "alamatPenerima",
          value,
        });
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
