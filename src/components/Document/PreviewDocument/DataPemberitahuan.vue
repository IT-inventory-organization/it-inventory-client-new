<template>
  <div>
    <div class="preview-content__subtitle">
      B. DATA PEMBERITAHUAN
    </div>
    <v-row>
      <v-col cols="6">
        <table class="preview-content__list">
          <tr>
            <td>Pelabuhan Masuk</td>
            <td>:</td>
            <td>{{ dataPelabuhan.pelabuhan }}</td>
          </tr>
        </table>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <div class="preview-content__list-title">DATA KAPAL</div>
        <table class="preview-content__list">
          <tr>
            <td>Voyage Kapal</td>
            <td>:</td>
            <td>{{ dataKapal.voyageKapal }}</td>
          </tr>
          <tr>
            <td>Bendera Kapal</td>
            <td>:</td>
            <td>{{ dataKapal.benderaKapal }}</td>
          </tr>
          <tr>
            <td>Tanggal Kedatangan</td>
            <td>:</td>
            <td>{{ dataKapal.tanggalKedatangan }}</td>
          </tr>
        </table>
      </v-col>
      <v-col cols="6">
        <div class="preview-content__list-title">&nbsp;</div>
        <table class="preview-content__list">
          <tr>
            <td>Nama Kapal</td>
            <td>:</td>
            <td>{{ dataKapal.namaKapal }}</td>
          </tr>
          <tr>
            <td>Tanggal Keberangkatan</td>
            <td>:</td>
            <td>{{ dataKapal.tanggalKeberangkatan }}</td>
          </tr>
        </table>
      </v-col>
    </v-row>
    <div class="preview-content__line"></div>
    <v-row>
      <v-col cols="6">
        <div class="preview-content__list-title">IDENTITAS BARANG</div>
        <table class="preview-content__list">
          <tr>
            <td>Negara Asal</td>
            <td>:</td>
            <td>{{ identitasBarang.negaraAsal }}</td>
          </tr>
          <tr>
            <td>Asal Barang</td>
            <td>:</td>
            <td>{{ identitasBarang.asalBarang }}</td>
          </tr>
          <tr>
            <td>Jenis Barang</td>
            <td>:</td>
            <td>{{ identitasBarang.jenisBarang }}</td>
          </tr>
          <tr>
            <td>Jumlah Barang</td>
            <td>:</td>
            <td>{{ identitasBarang.jumlahBarang }}</td>
          </tr>
        </table>
      </v-col>
      <v-col cols="6">
        <div class="preview-content__list-title">&nbsp;</div>
        <table class="preview-content__list">
          <tr>
            <td>Nilai Barang</td>
            <td>:</td>
            <td>{{ identitasBarang.nilaiBarang }}</td>
          </tr>
          <tr>
            <td>Jumlah Kemasan</td>
            <td>:</td>
            <td>{{ identitasBarang.jumlahKemasan }}</td>
          </tr>
          <tr>
            <td>Cara Pembayaran</td>
            <td>:</td>
            <td>{{ identitasBarang.caraPembayaran }}</td>
          </tr>
        </table>
      </v-col>
    </v-row>
    <div class="preview-content__line"></div>
    <v-row>
      <v-col cols="6">
        <div class="preview-content__list-title">PENJUAL BARANG</div>
        <table class="preview-content__list">
          <tr>
            <td>NPWP</td>
            <td>:</td>
            <td>{{ penjualBarang.nomorIdentitasPenjual }}</td>
          </tr>
          <tr>
            <td>Nama</td>
            <td>:</td>
            <td>{{ penjualBarang.namaPenjual }}</td>
          </tr>
          <tr>
            <td>Alamat</td>
            <td>:</td>
            <td>{{ penjualBarang.alamatPenjual }}</td>
          </tr>
        </table>
      </v-col>
      <v-col cols="6">
        <div class="preview-content__list-title">
          PENGIRIM BARANG
          <span class="preview-content__list-title__status">
            Termasuk Penjual Barang
          </span>
        </div>
        <table class="preview-content__list">
          <tr>
            <td>NPWP</td>
            <td>:</td>
            <td>{{ pengirimBarang.nomorIdentitasPengirim }}</td>
          </tr>
          <tr>
            <td>Nama</td>
            <td>:</td>
            <td>{{ pengirimBarang.namaPengirim }}</td>
          </tr>
          <tr>
            <td>Alamat</td>
            <td>:</td>
            <td>{{ pengirimBarang.alamatPengirim }}</td>
          </tr>
        </table>
      </v-col>
    </v-row>
    <div class="preview-content__line"></div>
    <v-row>
      <v-col cols="6">
        <div class="preview-content__list-title">PENGUSAHA PLB</div>
        <table class="preview-content__list">
          <tr>
            <td>NPWP</td>
            <td>:</td>
            <td>{{ pengusahaPLB.nomorIdentitasPengusahaPLB }}</td>
          </tr>
          <tr>
            <td>Nama</td>
            <td>:</td>
            <td>{{ pengusahaPLB.namaPengusahaPLB }}</td>
          </tr>
          <tr>
            <td>Alamat</td>
            <td>:</td>
            <td>{{ pengusahaPLB.alamatPengusahaPLB }}</td>
          </tr>
        </table>
      </v-col>
      <v-col cols="6">
        <div class="preview-content__list-title">
          PEMBELI BARANG
          <span class="preview-content__list-title__status">
            Termasuk Pengusaha PLB
          </span>
        </div>
        <table class="preview-content__list">
          <tr>
            <td>NPWP</td>
            <td>:</td>
            <td>{{ pembeliBarang.nomorIdentitasPembeli }}</td>
          </tr>
          <tr>
            <td>Nama</td>
            <td>:</td>
            <td>{{ pembeliBarang.namaPembeli }}</td>
          </tr>
          <tr>
            <td>Alamat</td>
            <td>:</td>
            <td>{{ pembeliBarang.alamatPembeli }}</td>
          </tr>
        </table>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <div class="preview-content__list-title">PPJK</div>
        <table class="preview-content__list">
          <tr>
            <td>NPWP</td>
            <td>:</td>
            <td>{{ ppjk.nomorIdentitasPpjk }}</td>
          </tr>
          <tr>
            <td>Alamat</td>
            <td>:</td>
            <td>{{ ppjk.alamatPpjk }}</td>
          </tr>
        </table>
      </v-col>
      <v-col cols="6">
        <div class="preview-content__list-title">
          &nbsp;
        </div>
        <table class="preview-content__list">
          <tr>
            <td>Nama</td>
            <td>:</td>
            <td>{{ ppjk.namaPpjk }}</td>
          </tr>
        </table>
      </v-col>
    </v-row>
    <div class="preview-content__line"></div>
    <v-row>
      <v-col cols="6">
        <div class="preview-content__list-title">MATA UANG</div>
        <table class="preview-content__list">
          <tr>
            <td>Valuta</td>
            <td>:</td>
            <td>{{ mataUang.valuta }}</td>
          </tr>
          <tr>
            <td>Freight</td>
            <td>:</td>
            <td>{{ mataUang.freight }}</td>
          </tr>
          <tr>
            <td>NDPBM Kurs</td>
            <td>:</td>
            <td>{{ mataUang.ndbpmKurs }}</td>
          </tr>
          <tr>
            <td>CIF</td>
            <td>:</td>
            <td>{{ mataUang.cif }}</td>
          </tr>
          <tr>
            <td>Transaksi Lainnya</td>
            <td>:</td>
            <td>{{ mataUang.transaksiLainnya }}</td>
          </tr>
          <tr>
            <td>Harga Penyerahan</td>
            <td>:</td>
            <td>{{ mataUang.hargaPenyerahan }}</td>
          </tr>
        </table>
      </v-col>
      <v-col cols="6">
        <div class="preview-content__list-title">
          DATA PENGANGKUTAN
        </div>
        <table class="preview-content__list">
          <tr>
            <td>Cara Angkut</td>
            <td>:</td>
            <td>{{ dataPengangkutan.caraAngkut }}</td>
          </tr>
          <tr>
            <td>Nama Pengangkut</td>
            <td>:</td>
            <td>{{ dataPengangkutan.namaPengangkut }}</td>
          </tr>
          <tr>
            <td>Bendera</td>
            <td>:</td>
            <td>{{ dataPengangkutan.bendera }}</td>
          </tr>
          <tr>
            <td>Nomor Voy Flight Pol</td>
            <td>:</td>
            <td>{{ dataPengangkutan.nomorVoyFlightPol }}</td>
          </tr>
        </table>
      </v-col>
    </v-row>
    <div class="preview-content__line"></div>
    <v-row>
      <v-col cols="6">
        <div class="preview-content__list-title">BERAT DAN VOLUME</div>
        <table class="preview-content__list">
          <tr>
            <td>Berat Muatan</td>
            <td>:</td>
            <td>{{ beratDanVolume.beratMuatan }}</td>
          </tr>
          <tr>
            <td>Volume (M3)</td>
            <td>:</td>
            <td>{{ beratDanVolume.volume }}</td>
          </tr>
        </table>
      </v-col>
      <v-col cols="6">
        <div class="preview-content__list-title">
          &nbsp;
        </div>
        <table class="preview-content__list">
          <tr>
            <td>Berat Kapal+Muatan</td>
            <td>:</td>
            <td>{{ beratDanVolume.beratKapalDenganMuatan }}</td>
          </tr>
        </table>
      </v-col>
    </v-row>
    <div class="preview-content__line"></div>
    <v-row class="preview-content__list py-2">
      <v-col cols="6">
        <table class="preview-content__list">
          <tr>
            <td>Tempat Penimbunan</td>
            <td>:</td>
            <td>{{ tempatPenimbunan.tempatPenimbunan }}</td>
          </tr>
        </table>
      </v-col>
      <v-col cols="6">
        <table>
          <tr>
            <td>Perkiraan Tanggal Pengeluaran</td>
            <td>:</td>
            <td>{{ tempatPenimbunan.perkiraanTanggalPengeluaran }}</td>
          </tr>
        </table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "DataPemberitahuan",
  computed: {
    dataPelabuhan() {
      return this.$store.state.plb.previewDokumenPLB.report.dataPelabuhan;
    },
    dataKapal() {
      return this.$store.state.plb.previewDokumenPLB.report.dataKapal;
    },
    identitasBarang() {
      return this.$store.state.plb.previewDokumenPLB.report.identitasBarang;
    },
    penjualBarang() {
      return this.$store.state.plb.previewDokumenPLB.report.penjualBarang;
    },
    pengirimBarang() {
      return this.$store.state.plb.previewDokumenPLB.report.pengirimBarang;
    },
    pengusahaPLB() {
      return this.$store.state.plb.previewDokumenPLB.report.pengusahaPLB;
    },
    pembeliBarang() {
      return this.$store.state.plb.previewDokumenPLB.report.pembeliBarang;
    },
    ppjk() {
      return this.$store.state.plb.previewDokumenPLB.report.ppjk;
    },
    mataUang() {
      return this.$store.state.plb.previewDokumenPLB.report.mataUang;
    },
    dataPengangkutan() {
      return this.$store.state.plb.previewDokumenPLB.report.dataPengangkutan;
    },
    beratDanVolume() {
      return this.$store.state.plb.previewDokumenPLB.report.beratDanVolume;
    },
    tempatPenimbunan() {
      return this.$store.state.plb.previewDokumenPLB.report.tempatPenimbunan;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/preview_document";
</style>
