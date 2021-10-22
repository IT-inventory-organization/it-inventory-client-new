<template>
  <v-expansion-panel-content eager>
    <v-form ref="formDataPemasukanDua" lazy-validation>
      <v-row>
        <v-col lg="6" md="6" sm="12">
          <!-- Data Pelabuhan Muat Bongkar -->
          <v-card-title
            class="it-inventory-card-title it-inventory-card-title__sub"
            >Data Pelabuhan Muat Bongkar</v-card-title
          >

          <v-combobox
            :items="[`Pelabuhan Muat 1`, `Pelabuhan Muat 2`]"
            outlined
            label="Pelabuhan Muat"
            v-model="pelabuhanMuat"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Pelabuhan Muat');
              },
            ]"
          ></v-combobox>

          <v-text-field
            label="Pelabuhan Tujuan"
            outlined
            v-model="pelabuhanTujuan"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Pelabuhan Tujuan');
              },
            ]"
          >
          </v-text-field>
          <v-text-field
            label="Pelabuhan Transit"
            outlined
            v-model="pelabuhanTransit"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Pelabuhan Tujuan');
              },
            ]"
          >
          </v-text-field>
          <!-- End Data Pelabuhan Muat Bongkar -->

          <!-- Data Peti Kemas dan Pengemas -->
          <v-card-title
            class="it-inventory-card-title it-inventory-card-title__sub"
            >Data Peti Kemas dan Pengemas</v-card-title
          >

          <v-text-field
            label="Jumlah Jenis Kemasan"
            outlined
            type="number"
            min="0"
            v-model="jumlahJenisKemasan"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Jumlah Jenis Kemasan');
              },
            ]"
          >
          </v-text-field>

          <v-text-field
            label="Jumlah Peti Kemas"
            outlined
            type="number"
            min="0"
            v-model="jumlahPetiKemas"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Jumlah Peti Kemas');
              },
            ]"
          >
          </v-text-field>

          <v-text-field
            label="Jumlah Jenis Barang"
            outlined
            type="number"
            min="0"
            v-model="jumlahJenisBarang"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Jumlah Jenis Barang');
              },
            ]"
          >
          </v-text-field>
          <!-- End Data Peti Kemas dan Pengemas -->

          <!-- Data Perkiraan Tanggal -->
          <v-card-title
            class="it-inventory-card-title it-inventory-card-title__sub"
            >Data Perkiraan Tanggal</v-card-title
          >
          <v-text-field
            label="Perkiraan Tanggal Pengeluaran"
            outlined
            type="date"
            :value="handleConvertDate(perkiraanTanggalPengeluaran)"
            @change="handleChange('perkiraanTanggalPengeluaran', $event)"
            :rules="[
              (value) => {
                return genericRequiredRule(
                  value,
                  'Perkiraan Tanggal Pengeluaran'
                );
              },
            ]"
          >
          </v-text-field>
          <!-- End Data Perkiraan Tanggal -->
        </v-col>

        <v-col lg="6" md="6" sm="12">
          <!-- Data Berat dan Volume -->
          <v-card-title
            class="it-inventory-card-title it-inventory-card-title__sub"
            >Data Berat dan Volume</v-card-title
          >
          <v-text-field
            label="Berat Bersih Total (KGM)"
            outlined
            v-model="beratBersih"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Berat Bersih');
              },
              (value) => {
                return genericNumberRule(value, 'Berat Bersih');
              },
              (value) => {
                return genericMinRule(value, 'Berat Bersih');
              },
            ]"
          >
          </v-text-field>
          <v-text-field
            label="Berat Kotor Total (KGM)"
            outlined
            v-model="beratKotor"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Berat Kotor');
              },
              (value) => {
                return genericNumberRule(value, 'Berat Kotor');
              },
              (value) => {
                return genericMinRule(value, 'Berat Kotor');
              },
            ]"
          >
          </v-text-field>
          <v-text-field
            label="Volume (M3)"
            outlined
            v-model="volume"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Volume');
              },
              (value) => {
                return genericNumberRule(value, 'Volume');
              },
              (value) => {
                return genericMinRule(value, 'Volume');
              },
            ]"
          >
          </v-text-field>
          <!-- End Data Berat dan Volume -->

          <!-- Data Tempat Penimbunan -->
          <v-card-title
            class="it-inventory-card-title it-inventory-card-title__sub"
            >Data Tempat Penimbunan</v-card-title
          >
          <v-combobox
            :items="[`Tempat Penimbunan 1`, `Tempat Penimbunan 2`]"
            outlined
            label="Tempat Penimbunan"
            v-model="tempatPenimbunan"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Tempat Penimbunan');
              },
            ]"
          ></v-combobox>
          <!-- End Data Tempat Penimbunan -->

          <!-- Data Tempat Penimbunan -->
          <v-card-title
            class="it-inventory-card-title it-inventory-card-title__sub"
            >Data Lartas Barang</v-card-title
          >
          <v-combobox
            :items="[`Narkotika`, `Bom`]"
            outlined
            label="Data Lartas Barang"
            v-model="name"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Data Lartas Barang');
              },
            ]"
          ></v-combobox>
          <!-- End Data Tempat Penimbunan -->
        </v-col>
      </v-row>
    </v-form>
  </v-expansion-panel-content>
</template>

<script>
import { FieldRequired } from "@/mixins/ValidationRules";
export default {
  name: "DataPemasukanPengeluaranDua",
  mixins: [FieldRequired],
  data() {
    return {};
  },
  computed: {
    // Data Pelabuhan Muat Bongkat
    pelabuhanMuat: {
      get() {
        return this.$store.state.report.dataPelabuhanMuatBongkar.pelabuhanMuat;
      },
      set(value) {
        this.$store.commit("SET_DATA_PELABUHAN_MUAT_BONGKAR", {
          key: "pelabuhanMuat",
          value,
        });
      },
    },
    pelabuhanTujuan: {
      get() {
        return this.$store.state.report.dataPelabuhanMuatBongkar
          .pelabuhanTujuan;
      },
      set(value) {
        this.$store.commit("SET_DATA_PELABUHAN_MUAT_BONGKAR", {
          key: "pelabuhanTujuan",
          value,
        });
      },
    },
    pelabuhanTransit: {
      get() {
        return this.$store.state.report.dataPelabuhanMuatBongkar
          .pelabuhanTransit;
      },
      set(value) {
        this.$store.commit("SET_DATA_PELABUHAN_MUAT_BONGKAR", {
          key: "pelabuhanTransit",
          value,
        });
      },
    },

    // Data Berat Dan Volume
    beratBersih: {
      get() {
        return this.$store.state.report.dataBeratDanVolume.beratBersih;
      },
      set(value) {
        this.$store.commit("SET_DATA_BERAT_DAN_VOLUME", {
          key: "beratBersih",
          value,
        });
      },
    },
    beratKotor: {
      get() {
        return this.$store.state.report.dataBeratDanVolume.beratKotor;
      },
      set(value) {
        this.$store.commit("SET_DATA_BERAT_DAN_VOLUME", {
          key: "beratKotor",
          value,
        });
      },
    },
    volume: {
      get() {
        return this.$store.state.report.dataBeratDanVolume.volume;
      },
      set(value) {
        this.$store.commit("SET_DATA_BERAT_DAN_VOLUME", {
          key: "volume",
          value,
        });
      },
    },

    // Data Peti Kemas dan Pengemas
    jumlahJenisKemasan: {
      get() {
        return this.$store.state.report.dataPetiKemasDanPengemas
          .jumlahJenisKemasan;
      },
      set(value) {
        this.$store.commit("SET_DATA_PETI_KEMAS_DAN_PENGEMAS", {
          key: "jumlahJenisKemasan",
          value,
        });
      },
    },
    jumlahPetiKemas: {
      get() {
        return this.$store.state.report.dataPetiKemasDanPengemas
          .jumlahPetiKemas;
      },
      set(value) {
        this.$store.commit("SET_DATA_PETI_KEMAS_DAN_PENGEMAS", {
          key: "jumlahPetiKemas",
          value,
        });
      },
    },
    jumlahJenisBarang: {
      get() {
        return this.$store.state.report.dataPetiKemasDanPengemas
          .jumlahJenisBarang;
      },
      set(value) {
        this.$store.commit("SET_DATA_PETI_KEMAS_DAN_PENGEMAS", {
          key: "jumlahJenisBarang",
          value,
        });
      },
    },

    // Data Tempat Penimbunan
    tempatPenimbunan: {
      get() {
        return this.$store.state.report.dataTempatPenimbunan.tempatPenimbunan;
      },
      set(value) {
        this.$store.commit("SET_DATA_TEMPAT_PENIMBUNAN", {
          key: "tempatPenimbunan",
          value,
        });
      },
    },

    // Data Perkiraan Tanggal Pengeluaran
    perkiraanTanggalPengeluaran: {
      get() {
        return this.$store.state.report.dataPerkiraanTanggalPengeluaran
          .perkiraanTanggalPengeluaran;
      },
      set(value) {
        this.$store.commit("SET_DATA_PERKIRAAN_TANGGAL_PENGELUARAN", {
          key: "perkiraanTanggalPengeluaran",
          value,
        });
      },
    },

    // Data Lartas
    name: {
      get() {
        return this.$store.state.report.dataLartas.name;
      },
      set(value) {
        this.$store.commit("SET_DATA_LARTAS", {
          key: "name",
          value,
        });
      },
    },
  },
  methods: {
    handleValidate() {
      return this.$refs.formDataPemasukanDua.validate();
    },
    handleConvertDate(date) {
      if (date) {
        const [d, m, y] = date.split("-");
        return `${y}-${m}-${d}`;
      } else {
        return "";
      }
    },
    handleChange(key, event) {
      this[key] = event;
    },
  },
};
</script>

<style lang="scss" scoped></style>
