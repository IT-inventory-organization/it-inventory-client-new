<template>
  <div>
    <div class="preview-content__subtitle">
      A. DATA PENGAJUAN
    </div>
    <v-row>
      <v-col cols="6">
        <table class="preview-content__list">
          <tr>
            <td>Diajukan Di Kantor</td>
            <td>:</td>
            <td>{{ report.diAjukanDiKantor }}</td>
          </tr>
          <tr>
            <td>Jenis Pemberitahuan</td>
            <td>:</td>
            <td>{{ report.jenisPemberitahuan }}</td>
          </tr>
          <tr>
            <td>Jenis Dokumen Pemasukan/Pengeluaran</td>
            <td>:</td>
            <td>{{ report.jenisDokumenBC }}</td>
          </tr>
          <tr>
            <td>Nomor Dokumen Pemasukan/Pengeluaran</td>
            <td>:</td>
            <td>{{ dokumen.nomorDokumen }}</td>
          </tr>
          <tr>
            <td>Tanggal Dokumen Pemasukan/Pengeluaran</td>
            <td>:</td>
            <td>{{ dokumen.tanggalDokumen }}</td>
          </tr>
        </table>
      </v-col>
      <v-col cols="6">
        <table class="preview-content__list">
          <tr>
            <td>Nomor BC 1.0</td>
            <td>:</td>
            <td>{{ dokumenTambahan.nomorBC10 }}</td>
          </tr>
          <tr>
            <td>Tanggal BC 1.0</td>
            <td>:</td>
            <td>{{ dokumenTambahan.tanggalBC10 }}</td>
          </tr>
          <tr>
            <td>Nomor BC 1.1</td>
            <td>:</td>
            <td>{{ dokumenTambahan.nomorBC11 }}</td>
          </tr>
          <tr>
            <td>Tanggal BC 1.1</td>
            <td>:</td>
            <td>{{ dokumenTambahan.tanggalBC11 }}</td>
          </tr>
          <tr>
            <td>Nomor B/L</td>
            <td>:</td>
            <td>{{ dokumenTambahan.nomorBL }}</td>
          </tr>
          <tr>
            <td>Tanggal B/L</td>
            <td>:</td>
            <td>{{ dokumenTambahan.tanggalBL }}</td>
          </tr>
        </table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "DataPengajuan",
  data() {
    return {};
  },
  computed: {
    report() {
      return this.$store.state.plb.previewDokumenPLB;
    },
    jenisPemberitahuan() {
      return this.$store.state.plb.previewDokumenPLB.jenisPemberitahuan;
    },
    dokumen() {
      let stat = this.jenisPemberitahuan === "Pemasukan";
      return stat
        ? this.$store.state.plb.previewDokumenPLB.dokumenPemasukan
        : this.$store.state.plb.previewDokumenPLB.dokumenPengeluaran;
    },
    dokumenTambahan() {
      return this.$store.state.plb.previewDokumenPLB.dokumenTambahan;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/preview_document";
</style>
