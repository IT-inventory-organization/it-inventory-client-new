<template>
  <div>
    <div class="wrapper">
      <div
        style="padding: 0 48px; font-size: 12px; width: 100%"
        ref="dokumenBCF3315"
        id="dokumenBCF3315"
      >
        <h4 style="text-align: right">BCF 3.3.15</h4>
        <div style="border: 1px solid black; padding: 20px 16px">
          <h4 style="text-align: center">KOP PERUSAHAAN</h4>
          <br />
          <table>
            <tr>
              <td valign="top">Nomor</td>
              <td valign="top">:</td>
              <td valign="top">{{ report.nomor }}</td>
            </tr>
            <tr>
              <td style="width: 100px">Lampiran</td>
              <td valign="top">:</td>
              <td valign="top">{{ report.lampiran }}</td>
            </tr>
            <tr>
              <td valign="top">Hal</td>
              <td valign="top">:</td>
              <td valign="top" style="width: 357px">
                Permohonan Pemasukan atau Pengeluaran Barang ke atau dari PLB
                dan/atau Pemuatan Barang ke Sarana Pengangkut Sebelum
                Penyampaian Pemberitahuan Pabean
              </td>
            </tr>
          </table>

          <br />
          <br />
          <div>
            Yth. <br />Kepala Kantor Pengawasan dan Pelayanan Bea dan Cukai Tipe
            B Tanjungpinang
          </div>
          <br />
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dengan
            Ini kami mengajukan permohonan untuk pemuatan barang ke sarana
            pengangkut sebelum penyampaian P3BET yang akan dilakukan secara
            berkala karena barang memiliki bisnis proses yang memerlukan
            pergerakan barang secara cepat dan singkat dengan rincian sebagai
            berikut :
          </p>

          <ol start="1">
            <li>
              Exportir Pengusaha PLB/PDPLB*
              <table>
                <tr>
                  <td style="width: 20px">a.</td>
                  <td style="width: 170px">NPWP</td>
                  <td>:</td>
                  <td>{{ report.npwp }}</td>
                </tr>
                <tr>
                  <td>b.</td>
                  <td>Nama</td>
                  <td>:</td>
                  <td>{{ report.nama }}</td>
                </tr>
                <tr>
                  <td>c.</td>
                  <td>Alamat</td>
                  <td>:</td>
                  <td>{{ report.alamat }}</td>
                </tr>
                <tr>
                  <td>d.</td>
                  <td>Lokasi PLB</td>
                  <td>:</td>
                  <td>{{ report.lokasiPLB }}</td>
                </tr>
              </table>
            </li>
            <br />
            <p style="text-align: center">
              Lampiran Data Barang <br />
              Permohonan Pemasukan/Pemuatan Barang ke PLB/Sarana Pengangkut
              Sebelum Penyampaian Pemberitahuan Pabean
            </p>
            <table style="border-collapse: collapse; width: 100%" border="1">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Jenis Barang</th>
                  <th>Ex. HS 4 Digit</th>
                  <th>Persyaratan Expor</th>
                  <th>Perikiraan Jumlah dan Satuan</th>
                </tr>
              </thead>
              <tbody style="font-size: 10px">
                <tr v-for="(barangPO, key) in barangPOs" v-bind:key="key">
                  <td align="center">No</td>
                  <td>{{ barangPO.dataBarang.jenisBarang }}</td>
                  <td>{{ barangPO.dataBarang.hsCode }}</td>
                  <td align="center">-</td>
                  <td>
                    {{ barangPO.perkiraanJumlah }}
                    {{ barangPO.satuan }}
                  </td>
                </tr>
              </tbody>
            </table>
          </ol>
          <br />
          <ol start="3" style="paddin: 0">
            <li>
              <span style="display: inline-block; width: 194px"
                >Cara Pengangkutan</span
              >
              <span>: {{ report.caraPengangkutan }}</span>
              <span style="padding-left: 5px"></span>
            </li>
            <li class="">
              <span style="display: inline-block; width: 194px"
                >Pelabuhan Muat/Tempat Muat</span
              >
              <span>: {{ report.pelabuhanMuat }}</span>
              <span style="padding-left: 5px"></span>
            </li>
            <li>
              <span style="display: inline-block"
                >Tanggal Perkiraan Pemasukan ke PLB/Pemuatan ke Sarana
                Pengangkut*</span
              >
              <span>:</span>
              <span style="padding-left: 5px">
                {{ report.tanggalPerkiraan }}
              </span>
            </li>
            <li>
              Sarana Pengangkut yang akan mengangkut barang ke Luar Daerah
              Pabean:
              <table>
                <tr>
                  <td style="width: 20px">a.</td>
                  <td style="width: 170px">Nama</td>
                  <td>:</td>
                  <td>{{ report.namaPengangkutKeLuar }}</td>
                </tr>
                <tr>
                  <td>b.</td>
                  <td>Voyage/Flight/Nopol</td>
                  <td>:</td>
                  <td>{{ report.voyage }}</td>
                </tr>
                <tr>
                  <td>c.</td>
                  <td>Call Sign</td>
                  <td>:</td>
                  <td>{{ report.callSign }}</td>
                </tr>
              </table>
            </li>
          </ol>
          <br />
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Demikian
            Permohonan ini diajukan dengan sesungguhnya dan kami
            bertanggungjawab terhadap pemenuhan ketentuan perundang-undangan.
          </p>
          <br />
          <div style="display: grid; grid-template-columns: 1fr auto">
            <div style="align-self: end">
              Catatan:<br />
              *=Coret yang tidak perlu
            </div>
            <div style="margin-right: 70px">
              <div style="width: fit-content">
                Tanjungpinang, {{ report.tanggal }}
              </div>
              <div style="width: fit-content">
                Tanda tangan dan cap perusahaan
              </div>
              <div style="height: 70px"></div>
              <div style="text-align: center">
                <b>{{ report.penanggungJawab }}</b>
              </div>
              <div style="text-align: center">
                {{ report.jabatan }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="alasan"
        v-bind:class="[
          report.status === 'DISETUJUI'
            ? 'disetujui'
            : report.status === 'MENUNGGU'
            ? 'menunggu'
            : 'perbaikan',
        ]"
      >
        <p class="status">
          <span>{{ report.status }}</span>
          <Icon
            icon="bx:bx-check-double"
            v-if="report.status === 'DISETUJUI'"
          />
          <Icon icon="bx:bx-loader" v-if="report.status === 'MENUNGGU'" />
          <Icon icon="bx:bx-minus" v-if="report.status === 'PERBAIKAN'" />
        </p>
        <div class="card">
          <p class="title">Alasan :</p>
          <p class="desc">
            {{ report.alasan }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue2";

export default {
  name: "PreviewBCF3115",
  data() {
    return {};
  },
  components: {
    Icon,
  },
  computed: {
    report() {
      return this.$store.state.bcf.BCF3315Id;
    },
    barangPOs() {
      return this.$store.state.bcf.BCF3315Id.po.barangPOs;
    },
    isPrint() {
      return this.$store.state.bcf.dokumenBCF3315;
    },
  },
  watch: {
    isPrint: function(val) {
      if (val) {
        this.$htmlToPaper("dokumenBCF3315");
        this.$store.commit("bcf/SET_PRINT_BCF3315", false);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;

  .alasan {
    width: 30%;

    .status {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 130px;
      margin-left: auto;
      padding: 0.3rem 0.5rem;
      border-radius: 50px;
      font-weight: 500;
    }
    .card {
      font-size: 0.8rem;
      border-radius: 5px;
      padding: 0.7rem;
    }
  }
}
.disetujui {
  .status {
    border: 1px solid #3cb774;
    color: #3cb774;
  }
  .card {
    border: 1px solid #3cb774;
    color: #3cb774;
  }
}

.menunggu {
  .status {
    border: 1px solid #c8c8c8;
    color: #c8c8c8;
  }
  .card {
    border: 1px solid #c8c8c8;
    color: #c8c8c8;
  }
}

.perbaikan {
  .status {
    border: 1px solid #f27b61;
    color: #f27b61;
  }
  .card {
    border: 1px solid #f27b61;
    color: #f27b61;
  }
}
</style>
