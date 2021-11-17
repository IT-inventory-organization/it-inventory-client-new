<template>
  <div>
    <div class="body-1 font-weight-bold mb-5">
      Identitas Barang
    </div>
    <v-row justify="space-between" class="mb-3">
      <v-col lg="5" md="5" sm="12">
        <div>
          <label class="caption font-weight-medium">Negara Asal</label>
          <v-text-field
            outlined
            dense
            v-model="negaraAsal"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Negara Asal');
              },
            ]"
            placeholder="Negara Asal"
          ></v-text-field>
        </div>
        <div>
          <label class="caption font-weight-medium">Jenis Barang</label>
          <v-text-field
            outlined
            dense
            v-model="jenisBarang"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Jenis Barang');
              },
              (value) => {
                return genericNumberRule(value, 'Jenis Barang');
              },
              (value) => {
                return genericMinRule(value, 'Jenis Barang');
              },
            ]"
            placeholder="Jenis Barang"
          ></v-text-field>
        </div>
        <div>
          <label class="caption font-weight-medium">Nilai Barang</label>
          <v-text-field
            outlined
            dense
            v-model="nilaiBarang"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Nilai Barang');
              },
              (value) => {
                return genericNumberRule(value, 'Nilai Barang');
              },
              (value) => {
                return genericMinRule(value, 'Nilai Barang');
              },
            ]"
            placeholder="Nilai Barang"
          ></v-text-field>
        </div>
        <div>
          <label class="caption font-weight-medium">Cara Pembayaran</label>
          <v-select
            outlined
            dense
            v-model="caraPembayaran"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Cara Pembayaran');
              },
            ]"
            :items="itemCaraPembayaran"
            placeholder="Pilih Cara Pembayaran"
            append-icon="mdi-chevron-down"
          ></v-select>
        </div>
      </v-col>
      <v-col lg="5" md="5" sm="12">
        <div>
          <label class="caption font-weight-medium">Asal Barang</label>
          <v-text-field
            outlined
            dense
            v-model="asalBarang"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Asal Barang');
              },
            ]"
            placeholder="Asal Barang"
          ></v-text-field>
        </div>
        <div>
          <label class="caption font-weight-medium">Jumlah Barang</label>
          <v-text-field
            outlined
            dense
            v-model="jumlahBarang"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Jumlah Barang');
              },
              (value) => {
                return genericNumberRule(value, 'Jumlah Barang');
              },
              (value) => {
                return genericMinRule(value, 'Jumlah Barang');
              },
            ]"
            placeholder="Jumlah Barang"
          ></v-text-field>
        </div>
        <div>
          <label class="caption font-weight-medium">Jumlah Kemasan</label>
          <v-text-field
            outlined
            dense
            v-model="jumlahKemasan"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Jumlah Kemasan');
              },
              (value) => {
                return genericNumberRule(value, 'Jumlah Kemasan');
              },
              (value) => {
                return genericMinRule(value, 'Jumlah Kemasan');
              },
            ]"
            placeholder="Jumlah Kemasan"
          ></v-text-field>
        </div>

        <div>
          <label class="caption font-weight-medium">Nomor PO</label>
          <v-select
            outlined
            dense
            v-model="nomorPO"
            placeholder="Pilih Nomor PO"
            append-icon="mdi-chevron-down"
          ></v-select>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { FieldRequired } from "@/mixins/ValidationRules";
export default {
  name: "IdentitasBarang",
  mixins: [FieldRequired],
  computed: {
    itemCaraPembayaran() {
      return this.$store.state.plb.itemCaraPembayaran;
    },
    negaraAsal: {
      get() {
        return this.$store.state.plb.identitasBarang.negaraAsal;
      },
      set(value) {
        this.$store.commit("SET_IDENTITAS_BARANG", {
          key: "negaraAsal",
          value,
        });
      },
    },
    jenisBarang: {
      get() {
        return this.$store.state.plb.identitasBarang.jenisBarang;
      },
      set(value) {
        this.$store.commit("SET_IDENTITAS_BARANG", {
          key: "jenisBarang",
          value,
        });
      },
    },
    nilaiBarang: {
      get() {
        return this.$store.state.plb.identitasBarang.nilaiBarang;
      },
      set(value) {
        this.$store.commit("SET_IDENTITAS_BARANG", {
          key: "nilaiBarang",
          value,
        });
      },
    },
    caraPembayaran: {
      get() {
        return this.$store.state.plb.identitasBarang.caraPembayaran;
      },
      set(value) {
        this.$store.commit("SET_IDENTITAS_BARANG", {
          key: "caraPembayaran",
          value,
        });
      },
    },
    asalBarang: {
      get() {
        return this.$store.state.plb.identitasBarang.asalBarang;
      },
      set(value) {
        this.$store.commit("SET_IDENTITAS_BARANG", {
          key: "asalBarang",
          value,
        });
      },
    },
    jumlahBarang: {
      get() {
        return this.$store.state.plb.identitasBarang.jumlahBarang;
      },
      set(value) {
        this.$store.commit("SET_IDENTITAS_BARANG", {
          key: "jumlahBarang",
          value,
        });
      },
    },
    jumlahKemasan: {
      get() {
        return this.$store.state.plb.identitasBarang.jumlahKemasan;
      },
      set(value) {
        this.$store.commit("SET_IDENTITAS_BARANG", {
          key: "jumlahKemasan",
          value,
        });
      },
    },
    nomorPO: {
      get() {
        return this.$store.state.plb.identitasBarang.nomorPO;
      },
      set(value) {
        this.$store.commit("SET_IDENTITAS_BARANG", {
          key: "nomorPO",
          value,
        });
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
