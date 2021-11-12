<template>
  <div class="mx-12">
    <v-row class="mb-3">
      <v-col lg="5" md="5" sm="12">
        <div>
          <label class="caption font-weight-medium">Pelabuhan Tujuan</label>
          <v-text-field
            outlined
            dense
            placeholder="Pelabuhan Masuk"
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
export default {
  name: "LaporanPemasukanPengeluaranBarang",
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
};
</script>

PembeliBarang PenjualBarang
<style lang="scss" scoped></style>
