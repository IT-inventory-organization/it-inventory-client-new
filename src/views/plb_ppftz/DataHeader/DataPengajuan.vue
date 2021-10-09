<template>
  <v-expansion-panel-content eager>
    <v-form ref="formDataPengajuan" lazy-validation>
      <v-row>
        <v-col lg="6" md="6" sm="12">
          <v-combobox
            :items="[`Kantor 1`, `Kantor 2`]"
            outlined
            label="Kantor Pabean Asal"
            v-model="kantorPabeanAsal"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'kantor Pabean Asal');
              },
            ]"
          ></v-combobox>
          <v-select
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
          <v-select
            label="Kategori Pengeluaran"
            outlined
            v-model="kategoryPengeluaran"
            :items="['1 - Pengeluaran Biasa']"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Kategori Pengeluaran');
              },
            ]"
          >
          </v-select>
        </v-col>
        <v-col lg="6" md="6" sm="12">
          <v-select
            label="Tujuan Pengeluaran"
            outlined
            v-model="tujuanPengeluaran"
            :items="['20 - Lainnya']"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Tujuan Pengeluaran');
              },
            ]"
          >
          </v-select>
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
          <v-select
            label="Cara Pembayaran"
            outlined
            v-model="caraPembayaran"
            :items="['4 - Transfer']"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Cara Pembayaran');
              },
            ]"
          >
          </v-select>
        </v-col>
      </v-row>
    </v-form>
  </v-expansion-panel-content>
</template>

<script>
import { FieldRequired } from "@/mixins/ValidationRules";
export default {
  name: "DataPengajuan",
  mixins: [FieldRequired],
  data() {
    return {};
  },
  watch: {
    kantorPabeanAsal(val) {
      console.log(val);
    },
  },
  computed: {
    kantorPabeanAsal: {
      get() {
        return this.$store.state.report.dataPengajuan.kantorPabeanAsal;
      },
      set(value) {
        this.$store.commit("SET_DATA_PENGAJUAN", {
          key: "kantorPabeanAsal",
          value,
        });
      },
    },
    kategoryPemberitahuan: {
      get() {
        return this.$store.state.report.dataPengajuan.kategoryPemberitahuan;
      },
      set(value) {
        this.$store.commit("SET_DATA_PENGAJUAN", {
          key: "kategoryPemberitahuan",
          value,
        });
      },
    },
    kategoryPengeluaran: {
      get() {
        return this.$store.state.report.dataPengajuan.kategoryPengeluaran;
      },
      set(value) {
        this.$store.commit("SET_DATA_PENGAJUAN", {
          key: "kategoryPengeluaran",
          value,
        });
      },
    },
    tujuanPengeluaran: {
      get() {
        return this.$store.state.report.dataPengajuan.tujuanPengeluaran;
      },
      set(value) {
        this.$store.commit("SET_DATA_PENGAJUAN", {
          key: "tujuanPengeluaran",
          value,
        });
      },
    },
    asalBarang: {
      get() {
        return this.$store.state.report.dataPengajuan.asalBarang;
      },
      set(value) {
        this.$store.commit("SET_DATA_PENGAJUAN", {
          key: "asalBarang",
          value,
        });
      },
    },
    caraPembayaran: {
      get() {
        return this.$store.state.report.dataPengajuan.caraPembayaran;
      },
      set(value) {
        this.$store.commit("SET_DATA_PENGAJUAN", {
          key: "caraPembayaran",
          value,
        });
      },
    },
    reportId: {
      get() {
        return this.$store.state.report.dataPengajuan.reportId;
      },
      set(value) {
        this.$store.commit("SET_DATA_PENGAJUAN", {
          key: "reportId",
          value,
        });
      },
    },
  },
  methods: {
    handleValidate() {
      return this.$refs.formDataPengajuan.validate();
    },
  },
};
</script>

<style lang="scss" scoped></style>
