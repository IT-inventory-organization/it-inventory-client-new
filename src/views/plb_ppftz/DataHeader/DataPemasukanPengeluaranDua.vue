<template>
  <v-expansion-panel-content>
    <v-row>
      <v-col lg="6" sm="12">
        <!-- Data Pelabuhan Muat Bongkar -->
        <v-card-title
          class="it-inventory-card-title it-inventory-card-title__sub"
          >Data Pelabuhan Muat Bongkar</v-card-title
        >

        <v-autocomplete
          :items="[`Test1`, `Test2`]"
          outlined
          label="Pelabuhan Muat"
          v-model="pelabuhanMuat"
          clearable
          :rules="[
            (value) => {
              return genericRequiredRule(value, 'Pelabuhan Muat');
            },
          ]"
        ></v-autocomplete>

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
          v-model="perkiraanTanggalPengeluaran"
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

      <v-col lg="6" sm="12">
        <!-- Data Berat dan Volume -->
        <v-card-title
          class="it-inventory-card-title it-inventory-card-title__sub"
          >Data Berat dan Volume</v-card-title
        >
        <v-text-field
          label="Berat Bersih Total (KGM)"
          outlined
          v-model="beratBersihTotal"
          :rules="[
            (value) => {
              return genericRequiredRule(value, 'Berat Bersih Total (KGM)');
            },
          ]"
        >
        </v-text-field>
        <v-text-field
          label="Berat Kotor Total (KGM)"
          outlined
          v-model="beratKotorTotal"
          :rules="[
            (value) => {
              return genericRequiredRule(value, 'Berat Kotor Total (KGM)');
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
              return genericRequiredRule(value, 'Volume (M3)');
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
        <v-autocomplete
          :items="[`Test1`, `Test2`]"
          outlined
          clearable
          label="Tempat Penimbunan"
          v-model="tempatPenimbunan"
          :rules="[
            (value) => {
              return genericRequiredRule(value, 'Tempat Penimbunan');
            },
          ]"
        ></v-autocomplete>
        <!-- End Data Tempat Penimbunan -->

        <!-- Data Tempat Penimbunan -->
        <v-card-title
          class="it-inventory-card-title it-inventory-card-title__sub"
          >Data Tempat Penimbunan</v-card-title
        >
        <v-autocomplete
          :items="[`Test1`, `Test2`]"
          outlined
          label="Data Lartas Barang"
          v-model="dataLartasBarang"
          clearable
          :rules="[
            (value) => {
              return genericRequiredRule(value, 'Data Lartas Barang');
            },
          ]"
        ></v-autocomplete>
        <!-- End Data Tempat Penimbunan -->
      </v-col>
    </v-row>
  </v-expansion-panel-content>
</template>

<script>
import { FieldRequired } from "@/mixins/ValidationRules";
export default {
  name: "DataPemasukanPengeluaranDua",
  mixins: [FieldRequired],
  data() {
    return {
      // Data Pelabuhan Muat Bongkar
      pelabuhanMuat: "",
      pelabuhanTujuan: "",
      pelabuhanTransit: "",

      // Data Peti Kemas dan Pengemas
      jumlahJenisKemasan: "",
      jumlahPetiKemas: "",
      jumlahJenisBarang: "",

      // Data Perkiraan Tanggal
      perkiraanTanggalPengeluaran: "",

      // Data Berat dan Volume
      beratBersihTotal: "",
      beratKotorTotal: "",
      volume: "",

      // Data Tempat Penimbunan
      tempatPenimbunan: "",
      dataLartasBarang: "",
    };
  },
};
</script>

<style lang="scss" scoped></style>
