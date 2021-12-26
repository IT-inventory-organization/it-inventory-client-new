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
            <td>BC 1.6</td>
          </tr>
          <tr>
            <td>Nomor Dokumen Pemasukan/Pengeluaran</td>
            <td>:</td>
            <td>12345</td>
          </tr>
          <tr>
            <td>Nomor Dokumen</td>
            <td>:</td>
            <td>12345</td>
          </tr>
          <tr>
            <td>Tanggal Dokumen Pemasukan/Pengeluaran</td>
            <td>:</td>
            <td>01-01-2021</td>
          </tr>
        </table>
      </v-col>
      <v-col cols="6">
        <table class="preview-content__list">
          <tr>
            <td>Nomor BC 1.0</td>
            <td>:</td>
            <td>12345</td>
          </tr>
          <tr>
            <td>Tanggal BC 1.0</td>
            <td>:</td>
            <td>01-01-2021</td>
          </tr>
          <tr>
            <td>Nomor BC 1.1</td>
            <td>:</td>
            <td>12345</td>
          </tr>
          <tr>
            <td>Tanggal BC 1.1</td>
            <td>:</td>
            <td>01-01-2021</td>
          </tr>
          <tr>
            <td>Nomor B/L</td>
            <td>:</td>
            <td>12345</td>
          </tr>
          <tr>
            <td>Tanggal B/L</td>
            <td>:</td>
            <td>01-01-2021</td>
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
      return this.$store.state.plb.report;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/preview_document";
</style>
