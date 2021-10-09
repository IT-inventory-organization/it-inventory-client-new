<template>
  <div class="preview-card">
    <!-- Judul -->
    <div id="nomor-dokumen">
      <h1 class="preview-title">Inventory #{{ reportId }}</h1>
      <v-divider class="preview-divider"></v-divider>
    </div>
    <!-- End Judul -->

    <!--Dokumen Pengajuan -->
    <div id="dokumen-pengajuan">
      <div class="preview-subtitle">
        <h2>Dokumen Pengajuan</h2>
        <v-divider class="preview-divider"></v-divider>
      </div>
      <div class="preview-content">
        <v-row no-gutters>
          <v-col cols="4">
            <div class="preview-text__field">
              <div>Pengajuan Sebagai</div>
              <span>{{ report.pengajuanSebagai }}</span>
            </div>
            <div class="preview-text__field">
              <div>Diajukan Dikantor</div>
              <span>{{ report.kantorPengajuan }}</span>
            </div>
            <div class="preview-text__field">
              <div>Kode Dokumen</div>
              <span>{{ dataDokumen[0].kodeDokumen }}</span>
            </div>
            <div class="preview-text__field">
              <div>Nomor Dokumen</div>
              <span>{{ dataDokumen[0].nomorDokumen }}</span>
            </div>
          </v-col>
          <v-col cols="4">
            <div class="preview-text__field">
              <div>Jenis Pemberitahuan</div>
              <span>{{ report.jenisPemberitahuan }}</span>
            </div>
            <div class="preview-text__field">
              <div>Jenis Dokumen BC</div>
              <span>{{ report.BCDocumentType }}</span>
            </div>
            <div class="preview-text__field">
              <div>Tanggal Dokumen</div>
              <span>{{ dataDokumen[0].tanggalDokumen }}</span>
            </div>
          </v-col>
          <v-col cols="4"></v-col>
        </v-row>
      </div>
    </div>

    <!--End Dokumen Pengajuan -->

    <!--Dokumen Pengiriman Barang -->
    <div id="data-pingiriman-barang">
      <div class="preview-subtitle">
        <h2>Data Pengiriman Barang</h2>
        <v-divider class="preview-divider"></v-divider>
      </div>
      <div class="preview-content">
        <v-row no-gutters>
          <v-col cols="4">
            <div class="preview-text__field">
              <div>Kantor Pabean Asal</div>
              <span>{{ dataPengajuan.kantorPabeanAsal }}</span>
            </div>
            <div class="preview-text__field">
              <div>Kategori Pemberitahuan</div>
              <span>{{ dataPengajuan.kategoryPemberitahuan }}</span>
            </div>
            <div class="preview-text__field">
              <div>Pengirim</div>
              <span>{{ identitasPengirim.namaPengirim }}</span>
              <span
                >{{ "NPWP" }} -
                {{ identitasPengirim.nomorIdentitasPengirim }}
              </span>
              <span>{{ identitasPengirim.alamatPengirim }}</span>
              <span>{{ identitasPengirim.nomorIjinBpkPengirim }}</span>
              <span class="preview-text__field-date">{{
                identitasPengirim.tanggalIjinBpkPengirim
              }}</span>
            </div>
          </v-col>
          <v-col cols="4">
            <div class="preview-text__field">
              <div>Kantor Pengeluaran Biasa</div>
              <span>{{ dataPengajuan.kategoryPengeluaran }}</span>
            </div>
            <div class="preview-text__field">
              <div>Tujuan Pengeluaran</div>
              <span>{{ dataPengajuan.tujuanPengeluaran }}</span>
            </div>
            <div class="preview-text__field">
              <div>Penerima</div>
              <span>{{ identitasPenerima.namaPenerima }}</span>
              <span
                >{{ "NPWP" }} -
                {{ identitasPenerima.nomorIdentitasPenerima }}</span
              >
              <span>{{ identitasPenerima.alamatPenerima }}</span>
            </div>
          </v-col>
          <v-col cols="4">
            <div class="preview-text__field">
              <div>Asal Barang</div>
              <span>{{ dataPengajuan.asalBarang }}</span>
            </div>
            <div class="preview-text__field">
              <div>Cara Pembayaran</div>
              <span>{{ dataPengajuan.caraPembayaran }}</span>
            </div>
          </v-col>
        </v-row>

        <!-- Data Table -->
        <v-row>
          <v-col cols="12">
            <div class="preview-box">
              <v-data-table
                :headers="headers"
                :items="listDataBarang"
                hide-default-footer
                class="it-inventory-preview-table"
              ></v-data-table>
            </div>
          </v-col>
        </v-row>
        <!-- End Data Table -->

        <v-row>
          <v-col cols="6">
            <table class="preview-table">
              <div class="preview-table__caption">Peti Kemas dan Pengemas</div>
              <tr>
                <td>Jumlah Jenis Kemasan</td>
                <td>{{ dataPetiKemasDanPengemas.jumlahJenisKemasan }}</td>
              </tr>
              <tr>
                <td>Jumlah Peti Kemas</td>
                <td>{{ dataPetiKemasDanPengemas.jumlahPetiKemas }}</td>
              </tr>
              <tr>
                <td>Jumlah Jenis Barang</td>
                <td>{{ dataPetiKemasDanPengemas.jumlahJenisBarang }}</td>
              </tr>
            </table>
          </v-col>
          <v-col cols="6">
            <table class="preview-table">
              <div class="preview-table__caption">Berat dan Volume</div>
              <tr>
                <td>Berat Bersih Total (KGM)</td>
                <td>{{ dataBeratDanVolume.beratBersih }}</td>
              </tr>
              <tr>
                <td>Berat Kotor Total (KGM)</td>
                <td>{{ dataBeratDanVolume.beratKotor }}</td>
              </tr>
              <tr>
                <td>Volume (M3)</td>
                <td>{{ dataBeratDanVolume.volume }}</td>
              </tr>
            </table>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <table class="preview-table">
              <div class="preview-table__caption">Data Lartas</div>
              <tr>
                <td>Data Lartas Barang</td>
                <td>{{ dataLartas.name }}</td>
              </tr>
            </table>
          </v-col>
          <v-col cols="6">
            <table class="preview-table">
              <div class="preview-table__caption">Data Perkiraan Tanggal</div>
              <tr>
                <td>Perkiraan Tanggal Pengeluaran</td>
                <td>
                  {{
                    dataPerkiraanTanggalPengeluaran.perkiraanTanggalPengeluaran
                  }}
                </td>
              </tr>
            </table>
          </v-col>
        </v-row>
        <v-divider class="preview-divider"></v-divider>

        <v-row class="mt-1">
          <v-col cols="6">
            <table class="preview-table">
              <div class="preview-table__caption">Data Tempat Penimbunan</div>
              <tr>
                <td>Tempat Penimbunan</td>
                <td>{{ dataTempatPenimbunan.tempatPenimbunan }}</td>
              </tr>
            </table>
          </v-col>
          <v-col cols="6">
            <table class="preview-table">
              <div class="preview-table__caption">
                Data Pelabuhan Muat Bongkar
              </div>
              <tr>
                <td>Pelabuhan Muat</td>
                <td>{{ dataPelabuhanMuatBongkar.pelabuhanMuat }}</td>
              </tr>
              <tr>
                <td>Pelabuhan Tujuan</td>
                <td>{{ dataPelabuhanMuatBongkar.pelabuhanTujuan }}</td>
              </tr>
              <tr>
                <td>Pelabuhan Transit</td>
                <td>{{ dataPelabuhanMuatBongkar.pelabuhanTransit }}</td>
              </tr>
            </table>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <table class="preview-table">
              <div class="preview-table__caption">
                Data Transaksi Perdagangan
              </div>
              <tr>
                <td>Transaksi</td>
                <td>{{ transaksiPerdagangan.transaksi }}</td>
              </tr>
              <tr>
                <td>Valuta</td>
                <td>{{ transaksiPerdagangan.valuta }}</td>
              </tr>
              <tr>
                <td>CIF</td>
                <td>{{ transaksiPerdagangan.cif }}</td>
              </tr>
              <tr>
                <td>Freight</td>
                <td>{{ transaksiPerdagangan.freight }}</td>
              </tr>
            </table>
          </v-col>
          <v-col cols="6">
            <table class="preview-table">
              <div class="preview-table__caption">&nbsp;</div>
              <tr>
                <td>Transaksi Lainnya</td>
                <td>{{ transaksiPerdagangan.transaksiLainnya }}</td>
              </tr>
              <tr>
                <td>NDPBM Kurs</td>
                <td>{{ transaksiPerdagangan.kursNDPBM }}</td>
              </tr>
              <tr>
                <td>Voluntary Declaration</td>
                <td>{{ transaksiPerdagangan.voluntaryDeclaration }}</td>
              </tr>
              <tr>
                <td>Harga Penyerahan</td>
                <td>{{ transaksiPerdagangan.hargaPenyerahan }}</td>
              </tr>
            </table>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <table class="preview-table">
              <div class="preview-table__caption">
                Data Pengangkutan
              </div>
              <tr>
                <td>Cara Angkut</td>
                <td>{{ dataPengangkutan.caraAngkut }}</td>
              </tr>
              <tr>
                <td>Nama Pengangkut</td>
                <td>{{ dataPengangkutan.namaPengangkut }}</td>
              </tr>
            </table>
          </v-col>
          <v-col cols="6">
            <table class="preview-table">
              <div class="preview-table__caption">&nbsp;</div>
              <tr>
                <td>Bendera</td>
                <td>{{ dataPengangkutan.bendera }}</td>
              </tr>
              <tr>
                <td>Nomor By Flight Pol</td>
                <td>{{ dataPengangkutan.nomorVoyFlightPol }}</td>
              </tr>
            </table>
          </v-col>
        </v-row>
      </div>
    </div>
    <!-- End Dokumen Pengiriman Barang -->
  </div>
</template>

<script>
export default {
  name: "PreviewDokumen",
  data() {
    return {
      headers: [
        {
          text: "Post Tarif",
          value: "posTarif",
          sortable: false,
        },
        {
          text: "Uraian",
          value: "uraian",
          sortable: false,
        },
        {
          text: "Neto, Bruto, Volume",
          value: "nettoBrutoVolume",
          sortable: false,
        },
        {
          text: "Satuan Kemasan",
          value: "satuanKemasan",
          sortable: false,
        },
        {
          text: "Nilai Pabean, Harga Penyerahan",
          value: "nilaiPabeanHargaPenyerahan",
          sortable: false,
        },
        {
          text: "Hs Code",
          value: "hsCode",
          sortable: false,
        },
      ],
      dataTable: [],
    };
  },
  computed: {
    report() {
      return this.$store.state.report.report;
    },
    reportId() {
      return this.$store.state.report.reportId;
    },
    dataPengajuan() {
      return this.$store.state.report.dataPengajuan;
    },
    identitasPenerima() {
      return this.$store.state.report.identitasPenerima;
    },
    identitasPengirim() {
      return this.$store.state.report.identitasPengirim;
    },
    transaksiPerdagangan() {
      return this.$store.state.report.transaksiPerdagangan;
    },
    dataPengangkutan() {
      return this.$store.state.report.dataPengangkutan;
    },
    dataPelabuhanMuatBongkar() {
      return this.$store.state.report.dataPelabuhanMuatBongkar;
    },
    dataBeratDanVolume() {
      return this.$store.state.report.dataBeratDanVolume;
    },
    dataPetiKemasDanPengemas() {
      return this.$store.state.report.dataPetiKemasDanPengemas;
    },
    dataPerkiraanTanggalPengeluaran() {
      return this.$store.state.report.dataPerkiraanTanggalPengeluaran;
    },
    dataTempatPenimbunan() {
      return this.$store.state.report.dataTempatPenimbunan;
    },
    dataLartas() {
      return this.$store.state.report.dataLartas;
    },
    dataDokumen() {
      return this.$store.state.report.dataDokumen;
    },
    dataPetiKemas() {
      return this.$store.state.report.dataPetiKemas;
    },
    listDataBarang() {
      return this.$store.state.report.listDataBarang;
    },
  },
  created() {
    this.$store.dispatch("getOneReport");
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/preview.scss";
</style>
