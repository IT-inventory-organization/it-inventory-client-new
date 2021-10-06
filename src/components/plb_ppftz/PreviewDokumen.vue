<template>
  <div class="preview-card">
    <!-- Judul -->
    <div id="nomor-dokumen">
      <h1 class="preview-title">Inventory #{{ "1024" }}</h1>
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
              <span>{{ "Importir" }}</span>
            </div>
            <div class="preview-text__field">
              <div>Diajukan Dikantor</div>
              <span>{{ "Kantor Pabean Cukai" }}</span>
            </div>
            <div class="preview-text__field">
              <div>Kode Dokumen</div>
              <span>{{ "1232132" }}</span>
            </div>
            <div class="preview-text__field">
              <div>Nomor Dokumen</div>
              <span>{{ "123123213" }}</span>
            </div>
          </v-col>
          <v-col cols="4">
            <div class="preview-text__field">
              <div>Jenis Pemberitahuan</div>
              <span>{{ "Import" }}</span>
            </div>
            <div class="preview-text__field">
              <div>Jenis Dokumen BC</div>
              <span>{{ "BC 4.2" }}</span>
            </div>
            <div class="preview-text__field">
              <div>Tanggal Dokumen</div>
              <span>{{ "11/02/2021" }}</span>
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
              <span>{{ "Kantor Pabean" }}</span>
            </div>
            <div class="preview-text__field">
              <div>Kategori Pemberitahuan</div>
              <span>{{ "Biasa" }}</span>
            </div>
            <div class="preview-text__field">
              <div>Pengirim</div>
              <span>{{ "Nama Pengirim" }}</span>
              <span
                >{{ "NPWP" }} -
                {{ "Nomor NPWP" }}
              </span>
              <span>{{ "Alamat Pengirim" }}</span>
              <span>{{ "Nomor Identitas Pengirim" }}</span>
              <span class="preview-text__field-date">{{ "20/01/2021" }}</span>
            </div>
          </v-col>
          <v-col cols="4">
            <div class="preview-text__field">
              <div>Kantor Pengeluaran Biasa</div>
              <span>{{ "Pengeluaran Biasa" }}</span>
            </div>
            <div class="preview-text__field">
              <div>Tujuan Pengeluaran</div>
              <span>{{ "Lainnya" }}</span>
            </div>
            <div class="preview-text__field">
              <div>Penerima</div>
              <span>{{ "Nama Penerima" }}</span>
              <span>{{ "NPWP" }} - {{ "nomor npwp" }}</span>
              <span>{{ "Alamat Penerima" }}</span>
              <span class="preview-text__field-date">{{ "20/01/2021" }}</span>
            </div>
          </v-col>
          <v-col cols="4">
            <div class="preview-text__field">
              <div>Asal Barang</div>
              <span>{{ "Batam" }}</span>
            </div>
            <div class="preview-text__field">
              <div>Cara Pembayaran</div>
              <span>{{ "Lainnya" }}</span>
            </div>
          </v-col>
        </v-row>

        <!-- Data Table -->
        <v-row>
          <v-col cols="12">
            <div class="preview-box">
              <v-data-table
                :headers="headers"
                :items="dataTable"
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
                <td>10</td>
              </tr>
              <tr>
                <td>Jumlah Peti Kemas</td>
                <td>30</td>
              </tr>
              <tr>
                <td>Jumlah Jenis Barang</td>
                <td>50</td>
              </tr>
            </table>
          </v-col>
          <v-col cols="6">
            <table class="preview-table">
              <div class="preview-table__caption">Berat dan Volume</div>
              <tr>
                <td>Berat Bersih Total (KGM)</td>
                <td>12345.67</td>
              </tr>
              <tr>
                <td>Berat Kotor Total (KGM)</td>
                <td>12345.67</td>
              </tr>
              <tr>
                <td>Volume (M3)</td>
                <td>10</td>
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
                <td>repellendus</td>
              </tr>
            </table>
          </v-col>
          <v-col cols="6">
            <table class="preview-table">
              <div class="preview-table__caption">Data Perkiraan Tanggal</div>
              <tr>
                <td>Perkiraan Tanggal Pengeluaran</td>
                <td>12345.67</td>
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
                <td>Ipsa omnis unde</td>
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
                <td>Ipsa omnis unde</td>
              </tr>
              <tr>
                <td>Pelabuhan Tujuan</td>
                <td>Ipsa omnis unde</td>
              </tr>
              <tr>
                <td>Pelabuhan Transit</td>
                <td>Ipsa omnis unde</td>
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
                <td>enim doloremque desaurnt</td>
              </tr>
              <tr>
                <td>Valuta</td>
                <td>USD - US Dollar</td>
              </tr>
              <tr>
                <td>CIF</td>
                <td>1232132132</td>
              </tr>
              <tr>
                <td>Freight</td>
                <td>0</td>
              </tr>
            </table>
          </v-col>
          <v-col cols="6">
            <table class="preview-table">
              <div class="preview-table__caption">&nbsp;</div>
              <tr>
                <td>Transaksi Lainnya</td>
                <td>enim doloremque desaurnt</td>
              </tr>
              <tr>
                <td>NDPBM Kurs</td>
                <td>14302</td>
              </tr>
              <tr>
                <td>Voluntary Declaration</td>
                <td>Tidak</td>
              </tr>
              <tr>
                <td>Harga Penyerahan</td>
                <td>12312312.23</td>
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
                <td>Laut</td>
              </tr>
              <tr>
                <td>Nama Pengangkut</td>
                <td>Eric</td>
              </tr>
            </table>
          </v-col>
          <v-col cols="6">
            <table class="preview-table">
              <div class="preview-table__caption">&nbsp;</div>
              <tr>
                <td>Bendera</td>
                <td>Indonesia</td>
              </tr>
              <tr>
                <td>Nomor By Flight Pol</td>
                <td>373820</td>
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
          value: "postTarif",
          sortable: false,
        },
        {
          text: "Uraian",
          value: "uraian",
          sortable: false,
        },
        {
          text: "Neto, Bruto, Volume",
          value: "netoBrutoVolume",
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
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/preview.scss";
</style>
