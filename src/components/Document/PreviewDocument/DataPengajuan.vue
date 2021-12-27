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
            <td>{{ dokumenPemasukan.nomorDokumenPemasukan }}</td>
          </tr>
          <tr>
            <td>Tanggal Dokumen Pemasukan/Pengeluaran</td>
            <td>:</td>
            <td>{{ dokumenPemasukan.tanggalDokumenPemasukan }}</td>
          </tr>
        </table>
      </v-col>
      <v-col cols="6">
        <table class="preview-content__list">
          <tr>
            <td>Nomor BC 1.0</td>
            <td>:</td>
            <td>{{ report.dokumenTambahan.nomorBC10 }}</td>
          </tr>
          <tr>
            <td>Tanggal BC 1.0</td>
            <td>:</td>
            <td>{{ report.dokumenTambahan.tanggalBC10 }}</td>
          </tr>
          <tr>
            <td>Nomor BC 1.1</td>
            <td>:</td>
            <td>{{ report.dokumenTambahan.nomorBC11 }}</td>
          </tr>
          <tr>
            <td>Tanggal BC 1.1</td>
            <td>:</td>
            <td>{{ report.dokumenTambahan.tanggalBC11 }}</td>
          </tr>
          <tr>
            <td>Nomor B/L</td>
            <td>:</td>
            <td>{{ report.dokumenTambahan.nomorBL }}</td>
          </tr>
          <tr>
            <td>Tanggal B/L</td>
            <td>:</td>
            <td>{{ report.dokumenTambahan.tanggalBL }}</td>
          </tr>
        </table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "DataPengajuan",
  computed: {
    report() {
      return this.$store.state.plb.previewDokumenPLB.report;
    },
    dokumenPemasukan() {
      return this.$store.state.plb.previewDokumenPLB;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/preview_document";
</style>
