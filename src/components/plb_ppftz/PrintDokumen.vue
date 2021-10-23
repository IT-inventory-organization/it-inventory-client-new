<template>
  <div class="preview-card">
    <!-- Judul -->
    <div id="nomor-dokumen">
      <h1 class="preview-title">Inventory #{{ preview.nomorAjuan }}</h1>
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
              <span>{{ preview.pengajuanSebagai }}</span>
            </div>
            <div class="preview-text__field">
              <div>Diajukan Dikantor</div>
              <span>{{ preview.kantorPengajuan }}</span>
            </div>
            <div class="preview-text__field">
              <div>Kode Dokumen</div>
              <span>{{ preview.ListDokumens[0].kodeDokumen }}</span>
            </div>
            <div class="preview-text__field">
              <div>Nomor Dokumen</div>
              <span>{{ preview.ListDokumens[0].nomorDokumen }}</span>
            </div>
          </v-col>
          <v-col cols="4">
            <div class="preview-text__field">
              <div>Jenis Pemberitahuan</div>
              <span>{{ preview.jenisPemberitahuan }}</span>
            </div>
            <div class="preview-text__field">
              <div>Jenis Dokumen BC</div>
              <span>{{ preview.BCDocumentType }}</span>
            </div>
            <div class="preview-text__field">
              <div>Tanggal Dokumen</div>
              <span>{{ preview.ListDokumens[0].tanggalDokumen }}</span>
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
              <span>{{ preview.DataPengajuan.kantorPabeanAsal }}</span>
            </div>
            <div class="preview-text__field">
              <div>Kategori Pemberitahuan</div>
              <span>{{ preview.DataPengajuan.kategoryPemberitahuan }}</span>
            </div>
            <div class="preview-text__field">
              <div>Pengirim</div>
              <span>{{ preview.IdentitasPengirim.namaPengirim }}</span>
              <span
                >{{ "NPWP" }} -
                {{ preview.IdentitasPengirim.nomorIdentitasPengirim }}
              </span>
              <span>{{ preview.IdentitasPengirim.alamatPengirim }}</span>
              <span>{{ preview.IdentitasPengirim.nomorIjinBpkPengirim }}</span>
              <span class="preview-text__field-date">{{
                preview.IdentitasPengirim.tanggalIjinBpkPengirim
              }}</span>
            </div>
          </v-col>
          <v-col cols="4">
            <div class="preview-text__field">
              <div>Kantor Pengeluaran Biasa</div>
              <span>{{ preview.DataPengajuan.kategoryPengeluaran }}</span>
            </div>
            <div class="preview-text__field">
              <div>Tujuan Pengeluaran</div>
              <span>{{ preview.DataPengajuan.tujuanPengeluaran }}</span>
            </div>
            <div class="preview-text__field">
              <div>PPJK</div>
              <span>{{ preview.reportIdentitasPPJK.namaPPJK }}</span>
              <span
                >{{ "NPWP" }} -
                {{ preview.reportIdentitasPPJK.nomorIdentitasPPJK }}</span
              >
              <span>{{ preview.reportIdentitasPPJK.alamatPPJK }}</span>
            </div>
          </v-col>
          <v-col cols="4">
            <div class="preview-text__field">
              <div>Asal Barang</div>
              <span>{{ preview.DataPengajuan.asalBarang }}</span>
            </div>
            <div class="preview-text__field">
              <div>Cara Pembayaran</div>
              <span>{{ preview.DataPengajuan.caraPembayaran }}</span>
            </div>
            <div class="preview-text__field">
              <div>Penerima</div>
              <span>{{ preview.IdentitasPenerima.caraAngkutPenerima }}</span>
              <span>{{
                preview.IdentitasPenerima.namaPengangkutPenerima
              }}</span>
              <span>{{ preview.IdentitasPenerima.benderaPenerima }}</span>
              <span>{{
                preview.IdentitasPenerima.nomorVoyFlightPolPenerima
              }}</span>
            </div>
          </v-col>
        </v-row>

        <!-- Data Table -->
        <v-row>
          <v-col cols="12">
            <div class="preview-box">
              <v-data-table
                :headers="headers"
                :items="preview.listBarangs"
                hide-default-footer
                class="preview-simple-table"
              ></v-data-table>
            </div>
          </v-col>
        </v-row>
        <!-- End Data Table -->

        <v-row>
          <v-col cols="6">
            <table class="preview-table">
              <div class="preview-table__caption">
                Peti Kemas dan Pengemas
              </div>
              <tr>
                <td>Jumlah Jenis Kemasan</td>
                <td>
                  {{ preview.DataPetiKemasDanPengema.jumlahJenisKemasan }}
                </td>
              </tr>
              <tr>
                <td>Jumlah Peti Kemas</td>
                <td>{{ preview.DataPetiKemasDanPengema.jumlahPetiKemas }}</td>
              </tr>
              <tr>
                <td>Jumlah Jenis Barang</td>
                <td>
                  {{ preview.DataPetiKemasDanPengema.jumlahJenisBarang }}
                </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>Data Container</td>
                <td>{{ preview.DataPetiKema.dataKontainer }}</td>
              </tr>
            </table>
          </v-col>
          <v-col cols="6">
            <table class="preview-table">
              <div class="preview-table__caption">Berat dan Volume</div>
              <tr>
                <td>Berat Bersih Total (KGM)</td>
                <td>{{ preview.DataBeratDanVolume.beratBersih }}</td>
              </tr>
              <tr>
                <td>Berat Kotor Total (KGM)</td>
                <td>{{ preview.DataBeratDanVolume.beratKotor }}</td>
              </tr>
              <tr>
                <td>Volume (M3)</td>
                <td>{{ preview.DataBeratDanVolume.volume }}</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>Volume Container</td>
                <td>{{ preview.DataPetiKema.volumeKontainer }}</td>
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
                <td>{{ preview.DataLarta.name }}</td>
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
                    preview.DataPerkiraanTanggalPengeluaran
                      .perkiraanTanggalPengeluaran
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
                <td>{{ preview.DataTempatPenimbunan.tempatPenimbunan }}</td>
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
                <td>{{ preview.DataPelabuhanMuatBongkar.pelabuhanMuat }}</td>
              </tr>
              <tr>
                <td>Pelabuhan Tujuan</td>
                <td>
                  {{ preview.DataPelabuhanMuatBongkar.pelabuhanTujuan }}
                </td>
              </tr>
              <tr>
                <td>Pelabuhan Transit</td>
                <td>
                  {{ preview.DataPelabuhanMuatBongkar.pelabuhanTransit }}
                </td>
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
                <td>{{ preview.TransaksiPerdagangan.transaksi }}</td>
              </tr>
              <tr>
                <td>Valuta</td>
                <td>{{ preview.TransaksiPerdagangan.valuta }}</td>
              </tr>
              <tr>
                <td>CIF</td>
                <td>{{ preview.TransaksiPerdagangan.cif }}</td>
              </tr>
              <tr>
                <td>Freight</td>
                <td>{{ preview.TransaksiPerdagangan.freight }}</td>
              </tr>
            </table>
          </v-col>
          <v-col cols="6">
            <table class="preview-table">
              <div class="preview-table__caption">&nbsp;</div>
              <tr>
                <td>Transaksi Lainnya</td>
                <td>{{ preview.TransaksiPerdagangan.transaksiLainnya }}</td>
              </tr>
              <tr>
                <td>NDPBM Kurs</td>
                <td>{{ preview.TransaksiPerdagangan.kursNDPBM }}</td>
              </tr>
              <tr>
                <td>Voluntary Declaration</td>
                <td>
                  {{ preview.TransaksiPerdagangan.voluntaryDeclaration }}
                </td>
              </tr>
              <tr>
                <td>Harga Penyerahan</td>
                <td>{{ preview.TransaksiPerdagangan.hargaPenyerahan }}</td>
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
                <td>{{ preview.DataPengangkutan.caraAngkut }}</td>
              </tr>
              <tr>
                <td>Nama Pengangkut</td>
                <td>{{ preview.DataPengangkutan.namaPengangkut }}</td>
              </tr>
            </table>
          </v-col>
          <v-col cols="6">
            <table class="preview-table">
              <div class="preview-table__caption">&nbsp;</div>
              <tr>
                <td>Bendera</td>
                <td>{{ preview.DataPengangkutan.bendera }}</td>
              </tr>
              <tr>
                <td>Nomor By Flight Pol</td>
                <td>{{ preview.DataPengangkutan.nomorVoyFlightPol }}</td>
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
  name: "PrintDokumen",
  data() {
    return {
      headers: [
        {
          text: "Nama",
          value: "Barang.name",
          sortable: false,
        },
        {
          text: "Post Tarif",
          value: "Barang.posTarif",
          sortable: false,
        },
        {
          text: "Uraian",
          value: "Barang.uraian",
          sortable: false,
        },
        {
          text: "Quantity",
          value: "quantity",
          sortable: false,
        },
        {
          text: "Neto, Bruto, Volume",
          value: "Barang.nettoBrutoVolume",
          sortable: false,
        },
        {
          text: "Satuan Kemasan",
          value: "Barang.satuanKemasan",
          sortable: false,
        },
        {
          text: "Nilai Pabean, Harga Penyerahan",
          value: "nilaiPabeanHargaPenyerahan",
          sortable: false,
        },
        {
          text: "Hs Code",
          value: "Barang.hsCode",
          sortable: false,
        },
      ],
    };
  },
  computed: {
    preview() {
      return this.$store.state.report.preview;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/preview.scss";
</style>
