<template>
  <div>
    <div class="body-1 font-weight-bold mb-5">
      Penjual Barang
    </div>
    <v-row justify="space-between" class="mb-3">
      <v-col lg="5" md="5" sm="12">
        <div>
          <label class="caption font-weight-medium"
            >Jenis Identitas Penjual</label
          >
          <v-select
            outlined
            dense
            v-model="jenisIdentitasPenjual"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Jenis Identitas Penjual');
              },
            ]"
            :items="itemJenisIdentitasPenjual"
            placeholder="Pilih Jenis Identitas Penjual"
            append-icon="mdi-chevron-down"
          ></v-select>
        </div>
        <div>
          <label class="caption font-weight-medium">Nama Penjual</label>
          <v-text-field
            outlined
            dense
            v-model="namaPenjual"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Nama Penjual');
              },
            ]"
            placeholder="Input Nama Penjual"
          ></v-text-field>
        </div>
      </v-col>
      <v-col lg="5" md="5" sm="12">
        <div>
          <label class="caption font-weight-medium"
            >Nomor Identitas Penjual</label
          >
          <v-text-field
            outlined
            dense
            v-model="nomorIdentitasPenjual"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Nomor Identitas Penjual');
              },
            ]"
            placeholder="Input Nomor Identitas"
          ></v-text-field>
        </div>
        <div>
          <label class="caption font-weight-medium">Alamat Penjual</label>
          <v-text-field
            outlined
            dense
            v-model="alamatPenjual"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Alamat Penjual');
              },
            ]"
            placeholder="Input Alamat Penjual"
          ></v-text-field>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { FieldRequired } from "@/mixins/ValidationRules";
export default {
  name: "PenjualBarang",
  mixins: [FieldRequired],
  computed: {
    itemJenisIdentitasPenjual() {
      return this.$store.state.plb.itemJenisIdentitasPenjual;
    },
    jenisIdentitasPenjual: {
      get() {
        return this.$store.state.plb.penjualBarang.jenisIdentitasPenjual;
      },
      set(value) {
        this.$store.commit("SET_PENJUAL_BARANG", {
          key: "jenisIdentitasPenjual",
          value,
        });
      },
    },
    namaPenjual: {
      get() {
        return this.$store.state.plb.penjualBarang.namaPenjual;
      },
      set(value) {
        this.$store.commit("SET_PENJUAL_BARANG", {
          key: "namaPenjual",
          value,
        });
      },
    },
    nomorIdentitasPenjual: {
      get() {
        return this.$store.state.plb.penjualBarang.nomorIdentitasPenjual;
      },
      set(value) {
        this.$store.commit("SET_PENJUAL_BARANG", {
          key: "nomorIdentitasPenjual",
          value,
        });
      },
    },
    alamatPenjual: {
      get() {
        return this.$store.state.plb.penjualBarang.alamatPenjual;
      },
      set(value) {
        this.$store.commit("SET_PENJUAL_BARANG", {
          key: "alamatPenjual",
          value,
        });
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
