<template>
  <div>
    <div class="body-1 font-weight-bold mb-5">
      Data Pengangkutan
    </div>
    <v-row justify="space-between" class="mb-3">
      <v-col lg="5" md="5" sm="12">
        <div>
          <label class="caption font-weight-medium">Cara Angkut</label>
          <v-select
            outlined
            dense
            v-model="caraAngkut"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Cara Angkut');
              },
            ]"
            :items="itemCaraAngkut"
            placeholder="Pilih Cara Angkut"
            append-icon="mdi-chevron-down"
          ></v-select>
        </div>
        <div>
          <label class="caption font-weight-medium">Bendera</label>
          <v-select
            outlined
            dense
            v-model="bendera"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Bendera');
              },
            ]"
            :items="itemBendera"
            placeholder="Pilih Bendera"
            append-icon="mdi-chevron-down"
          ></v-select>
        </div>
      </v-col>
      <v-col lg="5" md="5" sm="12">
        <div>
          <label class="caption font-weight-medium">Nama Pengangkut</label>
          <v-text-field
            outlined
            dense
            v-model="namaPengangkut"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Nama Pengangkut');
              },
            ]"
            placeholder="Nama Pengangkut"
          ></v-text-field>
        </div>
        <div>
          <label class="caption font-weight-medium">Nomor Voy Flight Pol</label>
          <v-text-field
            outlined
            dense
            v-model="nomorVoyFlightPol"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Nomor Voy Flight Pol');
              },
            ]"
            placeholder="Input Nomor Voy Flight Pol"
          ></v-text-field>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { FieldRequired } from "@/mixins/ValidationRules";
export default {
  name: "DataPengangkutan",
  mixins: [FieldRequired],
  computed: {
    itemCaraAngkut() {
      return this.$store.state.plb.itemCaraAngkut;
    },
    itemBendera() {
      return this.$store.state.plb.itemBendera;
    },
    caraAngkut: {
      get() {
        return this.$store.state.plb.dataPengangkutan.caraAngkut;
      },
      set(value) {
        this.$store.commit("SET_DATA_PENGANGKUTAN", {
          key: "caraAngkut",
          value,
        });
      },
    },
    bendera: {
      get() {
        return this.$store.state.plb.dataPengangkutan.bendera;
      },
      set(value) {
        this.$store.commit("SET_DATA_PENGANGKUTAN", {
          key: "bendera",
          value,
        });
      },
    },
    namaPengangkut: {
      get() {
        return this.$store.state.plb.dataPengangkutan.namaPengangkut;
      },
      set(value) {
        this.$store.commit("SET_DATA_PENGANGKUTAN", {
          key: "namaPengangkut",
          value,
        });
      },
    },
    nomorVoyFlightPol: {
      get() {
        return this.$store.state.plb.dataPengangkutan.nomorVoyFlightPol;
      },
      set(value) {
        this.$store.commit("SET_DATA_PENGANGKUTAN", {
          key: "nomorVoyFlightPol",
          value,
        });
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
