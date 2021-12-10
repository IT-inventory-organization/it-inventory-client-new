<template>
  <div>
    <div class="body-1 font-weight-bold mb-5">
      PPJK
    </div>
    <v-row justify="space-between" class="mb-3">
      <v-col lg="5" md="5" sm="12">
        <div>
          <label class="caption font-weight-medium">Jenis Identitas PPJK</label>
          <v-select
            outlined
            dense
            v-model="jenisIdentitasPpjk"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Jenis Identitas PPJK');
              },
            ]"
            :items="itemJenisIdentitasPpjk"
            placeholder="Pilih Jenis Identitas PPJK"
            append-icon="mdi-chevron-down"
          ></v-select>
        </div>
        <div>
          <label class="caption font-weight-medium">Nama PPJK</label>
          <v-text-field
            outlined
            dense
            v-model="namaPpjk"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Nama PPJK');
              },
            ]"
            placeholder="Input Nama PPJK"
          ></v-text-field>
        </div>
      </v-col>
      <v-col lg="5" md="5" sm="12">
        <div>
          <label class="caption font-weight-medium">Nomor Identitas PPJK</label>
          <v-text-field
            outlined
            dense
            v-model="nomorIdentitasPpjk"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Nomor Identitas PPJK');
              },
            ]"
            placeholder="Input Nomor Identitas"
          ></v-text-field>
        </div>
        <div>
          <label class="caption font-weight-medium">Alamat PPJK</label>
          <v-text-field
            outlined
            dense
            v-model="alamatPpjk"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Alamat PPJK');
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
  name: "DataPPJK",
  mixins: [FieldRequired],
  computed: {
    itemJenisIdentitasPpjk() {
      return this.$store.state.plb.itemJenisIdentitasPpjk;
    },
    jenisIdentitasPpjk: {
      get() {
        return this.$store.state.plb.ppjk.jenisIdentitasPpjk;
      },
      set(value) {
        this.$store.commit("SET_PPJK", {
          key: "jenisIdentitasPpjk",
          value,
        });
      },
    },
    namaPpjk: {
      get() {
        return this.$store.state.plb.ppjk.namaPpjk;
      },
      set(value) {
        this.$store.commit("SET_PPJK", {
          key: "namaPpjk",
          value,
        });
      },
    },
    nomorIdentitasPpjk: {
      get() {
        return this.$store.state.plb.ppjk.nomorIdentitasPpjk;
      },
      set(value) {
        this.$store.commit("SET_PPJK", {
          key: "nomorIdentitasPpjk",
          value,
        });
      },
    },
    alamatPpjk: {
      get() {
        return this.$store.state.plb.ppjk.alamatPpjk;
      },
      set(value) {
        this.$store.commit("SET_PPJK", {
          key: "alamatPpjk",
          value,
        });
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
