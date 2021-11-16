<template>
  <div class="mx-12">
    <v-row class="mb-3">
      <v-col lg="5" md="5" sm="12">
        <div v-if="handleNotificationType() === constantPemasukan">
          <label class="caption font-weight-medium">Pelabuhan Masuk</label>
          <v-text-field
            outlined
            dense
            v-model="pelabuhan"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Pelabuhan Masuk');
              },
            ]"
            placeholder="Pelabuhan Masuk"
          ></v-text-field>
        </div>
        <div v-if="handleNotificationType() === constantPengeluaran">
          <label class="caption font-weight-medium">Pelabuhan Tujuan</label>
          <v-text-field
            outlined
            dense
            v-model="pelabuhan"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Pelabuhan Tujuan');
              },
            ]"
            placeholder="Pelabuhan Tujuan"
          ></v-text-field>
        </div>
      </v-col>
    </v-row>
    <data-kapal />
    <identitas-barang />
    <penjual-barang />
    <pengirim-barang />
    <pengusaha-PLB />
    <pembeli-barang />
    <data-PPJK />
    <mata-uang />
    <data-pengangkutan />
    <berat-dan-volume />
    <tempat-penimbunan />
  </div>
</template>

<script>
import { FieldRequired } from "@/mixins/ValidationRules";
export default {
  name: "LaporanPemasukanPengeluaranBarang",
  mixins: [FieldRequired],
  components: {
    DataKapal: () =>
      import(
        "@/views/PLB/DataDokumen/LaporanPemasukanPengeluaranBarang/DataKapal"
      ),
    IdentitasBarang: () =>
      import(
        "@/views/PLB/DataDokumen/LaporanPemasukanPengeluaranBarang/IdentitasBarang"
      ),
    PenjualBarang: () =>
      import(
        "@/views/PLB/DataDokumen/LaporanPemasukanPengeluaranBarang/PenjualBarang"
      ),
    PengirimBarang: () =>
      import(
        "@/views/PLB/DataDokumen/LaporanPemasukanPengeluaranBarang/PengirimBarang"
      ),
    PengusahaPLB: () =>
      import(
        "@/views/PLB/DataDokumen/LaporanPemasukanPengeluaranBarang/PengusahaPLB"
      ),
    PembeliBarang: () =>
      import(
        "@/views/PLB/DataDokumen/LaporanPemasukanPengeluaranBarang/PembeliBarang"
      ),
    DataPPJK: () =>
      import(
        "@/views/PLB/DataDokumen/LaporanPemasukanPengeluaranBarang/DataPPJK"
      ),
    MataUang: () =>
      import(
        "@/views/PLB/DataDokumen/LaporanPemasukanPengeluaranBarang/MataUang"
      ),
    DataPengangkutan: () =>
      import(
        "@/views/PLB/DataDokumen/LaporanPemasukanPengeluaranBarang/DataPengangkutan"
      ),
    BeratDanVolume: () =>
      import(
        "@/views/PLB/DataDokumen/LaporanPemasukanPengeluaranBarang/BeratDanVolume"
      ),
    TempatPenimbunan: () =>
      import(
        "@/views/PLB/DataDokumen/LaporanPemasukanPengeluaranBarang/TempatPenimbunan"
      ),
  },
  computed: {
    constantPemasukan() {
      return this.$store.state.plb.constant.pemasukan;
    },
    constantPengeluaran() {
      return this.$store.state.plb.constant.pengeluaran;
    },
    pelabuhan: {
      get() {
        return this.$store.state.plb.dataPelabuhan.pelabuhan;
      },
      set(value) {
        this.$store.commit("SET_DATA_PELABUHAN", {
          key: "pelabuhan",
          value,
        });
      },
    },
  },
  methods: {
    handleNotificationType() {
      return localStorage.getItem("NotificationType");
    },
  },
  created() {
    if (this.handleNotificationType() === this.constantPemasukan) {
      this.$store.commit("SET_DATA_PELABUHAN", {
        key: "status",
        value: "masuk",
      });
      return;
    }

    if (this.handleNotificationType() === this.constantPengeluaran) {
      this.$store.commit("SET_DATA_PELABUHAN", {
        key: "status",
        value: "keluar",
      });
      return;
    }
  },
};
</script>

<style lang="scss" scoped></style>
