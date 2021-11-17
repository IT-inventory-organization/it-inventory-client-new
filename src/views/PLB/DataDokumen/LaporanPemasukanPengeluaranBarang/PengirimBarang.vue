<template>
  <div>
    <div class="body-1 font-weight-bold mb-5">
      Pengirim Barang
    </div>
    <v-row justify="space-between" class="mb-3">
      <v-col lg="5" md="5" sm="12">
        <div>
          <label class="caption font-weight-medium"
            >Jenis Identitas Pengirim</label
          >
          <v-select
            outlined
            dense
            v-model="jenisIdentitasPengirim"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Jenis Identitas Pengirim');
              },
            ]"
            :items="itemJenisIdentitasPengirim"
            placeholder="Pilih Jenis Identitas Pengirim"
            append-icon="mdi-chevron-down"
          ></v-select>
        </div>
        <div>
          <label class="caption font-weight-medium">Nama Pengirim</label>
          <v-text-field
            outlined
            dense
            v-model="namaPengirim"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Nama Pengirim');
              },
            ]"
            placeholder="Input Nama Pengirim"
          ></v-text-field>
        </div>
        <v-checkbox
          dense
          v-model="termasukPenjualBarang"
          label="Termasuk Penjual Barang"
        ></v-checkbox>
      </v-col>
      <v-col lg="5" md="5" sm="12">
        <div>
          <label class="caption font-weight-medium"
            >Nomor Identitas Pengirim</label
          >
          <v-text-field
            outlined
            dense
            v-model="nomorIdentitasPengirim"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Nomor Identitas Pengirim');
              },
            ]"
            placeholder="Input Nomor Identitas"
          ></v-text-field>
        </div>
        <div>
          <label class="caption font-weight-medium">Alamat Pengirim</label>
          <v-text-field
            outlined
            dense
            v-model="alamatPengirim"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Alamat Pengirim');
              },
            ]"
            placeholder="Input Alamat Pengirim"
          ></v-text-field>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { FieldRequired } from "@/mixins/ValidationRules";
export default {
  name: "PengirimBarang",
  mixins: [FieldRequired],
  data() {
    return {
      termasukPenjualBarang: false,
    };
  },
  computed: {
    itemJenisIdentitasPengirim() {
      return this.$store.state.plb.itemJenisIdentitasPengirim;
    },
    jenisIdentitasPengirim: {
      get() {
        return this.$store.state.plb.pengirimBarang.jenisIdentitasPengirim;
      },
      set(value) {
        this.$store.commit("SET_PENGIRIM_BARANG", {
          key: "jenisIdentitasPengirim",
          value,
        });
      },
    },
    namaPengirim: {
      get() {
        return this.$store.state.plb.pengirimBarang.namaPengirim;
      },
      set(value) {
        this.$store.commit("SET_PENGIRIM_BARANG", {
          key: "namaPengirim",
          value,
        });
      },
    },
    nomorIdentitasPengirim: {
      get() {
        return this.$store.state.plb.pengirimBarang.nomorIdentitasPengirim;
      },
      set(value) {
        this.$store.commit("SET_PENGIRIM_BARANG", {
          key: "nomorIdentitasPengirim",
          value,
        });
      },
    },
    alamatPengirim: {
      get() {
        return this.$store.state.plb.pengirimBarang.alamatPengirim;
      },
      set(value) {
        this.$store.commit("SET_PENGIRIM_BARANG", {
          key: "alamatPengirim",
          value,
        });
      },
    },
  },
  watch: {
    termasukPenjualBarang(val) {
      if (val) {
        this.$store.commit("SET_PENGIRIM_BARANG", {
          key: "jenisIdentitasPengirim",
          value: this.$store.state.plb.penjualBarang.jenisIdentitasPenjual,
        });
        this.$store.commit("SET_PENGIRIM_BARANG", {
          key: "namaPengirim",
          value: this.$store.state.plb.penjualBarang.namaPenjual,
        });
        this.$store.commit("SET_PENGIRIM_BARANG", {
          key: "nomorIdentitasPengirim",
          value: this.$store.state.plb.penjualBarang.nomorIdentitasPenjual,
        });
        this.$store.commit("SET_PENGIRIM_BARANG", {
          key: "alamatPengirim",
          value: this.$store.state.plb.penjualBarang.alamatPenjual,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
