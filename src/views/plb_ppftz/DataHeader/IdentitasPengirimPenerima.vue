<template>
  <v-expansion-panel-content eager>
    <v-form ref="formIdentitas" lazy-validation>
      <!-- Pengirim -->
      <v-card-title class="it-inventory-card-title it-inventory-card-title__sub"
        >Pengirim</v-card-title
      >
      <v-row>
        <v-col lg="6" md="6" sm="12">
          <v-select
            :items="['5 - NPWP - 15 Digits']"
            label="Jenis Identitas Pengirim"
            outlined
            disabled
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
            v-model="dataUser.name"
            disabled
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
            disabled
            outlined
            v-model="dataUser.npwp"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Nomor Identitas Pengirim');
              },
            ]"
          >
          </v-text-field>
          <v-text-field
            label="Alamat Pengirim"
            disabled
            outlined
            v-model="dataUser.address"
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
            :value="handleConvertDate(tanggalIjinBpkPengirim)"
            @change="handleChange('tanggalIjinBpkPengirim', $event)"
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

      <!-- PPJK -->
      <v-card-title class="it-inventory-card-title it-inventory-card-title__sub"
        >PPJK</v-card-title
      >
      <v-row>
        <v-col lg="6" md="6" sm="12">
          <v-select
            :items="['5 - NPWP - 15 Digits']"
            label="Jenis Identitas PPJK"
            outlined
            v-model="jenisIdentitasPPJK"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Jenis Identitas PPJK');
              },
            ]"
          ></v-select>
          <v-text-field
            label="Nama PPJK"
            outlined
            v-model="namaPPJK"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Nama PPJK');
              },
            ]"
          >
          </v-text-field>
        </v-col>

        <v-col lg="6" md="6" sm="12">
          <v-text-field
            label="Nomor Identitas PPJK"
            outlined
            v-model="nomorIdentitasPPJK"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Nomor Identitas PPJK');
              },
            ]"
          >
          </v-text-field>
          <v-text-field
            label="Alamat PPJK"
            outlined
            v-model="alamatPPJK"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Alamat PPJK');
              },
            ]"
          >
          </v-text-field>
        </v-col>
      </v-row>
    </v-form>
    <!-- PPJK -->

    <!-- Penerima -->
    <v-card-title class="it-inventory-card-title it-inventory-card-title__sub"
      >Penerima</v-card-title
    >
    <v-row>
      <v-col lg="6" md="6" sm="12">
        <v-select
          :items="['1 - Laut']"
          label="Cara Angkut"
          outlined
          v-model="caraAngkutPenerima"
          :rules="[
            (value) => {
              return genericRequiredRule(value, 'Cara Angkut');
            },
          ]"
        ></v-select>
        <v-select
          :items="['IDN']"
          label="Bendera"
          outlined
          v-model="benderaPenerima"
          :rules="[
            (value) => {
              return genericRequiredRule(value, 'Bendera');
            },
          ]"
        ></v-select>
      </v-col>
      <v-col lg="6" md="6" sm="12">
        <v-text-field
          label="Nama Pengangkut"
          outlined
          v-model="namaPengangkutPenerima"
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
          v-model="nomorVoyFlightPolPenerima"
          :rules="[
            (value) => {
              return genericRequiredRule(value, 'Nomor Voly Flight Pol');
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
  name: "IdentitasPengirimPenerima",
  mixins: [FieldRequired],
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("getDataUser");
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
    dataUser: {
      get() {
        return this.$store.state.user.dataUser;
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
    // End Pengirim

    // PPJK
    jenisIdentitasPPJK: {
      get() {
        return this.$store.state.report.identitasPPJK.jenisIdentitasPPJK;
      },
      set(value) {
        this.$store.commit("SET_IDENTITAS_PPJK", {
          key: "jenisIdentitasPPJK",
          value,
        });
      },
    },
    nomorIdentitasPPJK: {
      get() {
        return this.$store.state.report.identitasPPJK.nomorIdentitasPPJK;
      },
      set(value) {
        this.$store.commit("SET_IDENTITAS_PPJK", {
          key: "nomorIdentitasPPJK",
          value,
        });
      },
    },
    namaPPJK: {
      get() {
        return this.$store.state.report.identitasPPJK.namaPPJK;
      },
      set(value) {
        this.$store.commit("SET_IDENTITAS_PPJK", {
          key: "namaPPJK",
          value,
        });
      },
    },
    alamatPPJK: {
      get() {
        return this.$store.state.report.identitasPPJK.alamatPPJK;
      },
      set(value) {
        this.$store.commit("SET_IDENTITAS_PPJK", {
          key: "alamatPPJK",
          value,
        });
      },
    },
    // END PPJK

    // Penerima
    caraAngkutPenerima: {
      get() {
        return this.$store.state.report.identitasPenerima.caraAngkutPenerima;
      },
      set(value) {
        this.$store.commit("SET_IDENTITAS_PENERIMA", {
          key: "caraAngkutPenerima",
          value,
        });
      },
    },
    namaPengangkutPenerima: {
      get() {
        return this.$store.state.report.identitasPenerima
          .namaPengangkutPenerima;
      },
      set(value) {
        this.$store.commit("SET_IDENTITAS_PENERIMA", {
          key: "namaPengangkutPenerima",
          value,
        });
      },
    },
    benderaPenerima: {
      get() {
        return this.$store.state.report.identitasPenerima.benderaPenerima;
      },
      set(value) {
        this.$store.commit("SET_IDENTITAS_PENERIMA", {
          key: "benderaPenerima",
          value,
        });
      },
    },
    nomorVoyFlightPolPenerima: {
      get() {
        return this.$store.state.report.identitasPenerima
          .nomorVoyFlightPolPenerima;
      },
      set(value) {
        this.$store.commit("SET_IDENTITAS_PENERIMA", {
          key: "nomorVoyFlightPolPenerima",
          value,
        });
      },
    },
    // End Penerima
  },
  methods: {
    handleValidate() {
      return this.$refs.formIdentitas.validate();
    },
    handleConvertDate(date) {
      if (date) {
        const [d, m, y] = date.split("-");
        return `${y}-${m}-${d}`;
      } else {
        return "";
      }
    },
    handleChange(key, event) {
      this[key] = event;
    },
  },
};
</script>

<style lang="scss" scoped></style>
