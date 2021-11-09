<template>
  <div class="mt-12">
    <div class="headline">List Kapal</div>
    <v-row no-gutters class="mt-2">
      <v-col lg="3">
        <v-text-field placeholder="Cari" class="it-inventory-search-list-kapal">
          <template slot="prepend-inner">
            <Icon
              icon="akar-icons:search"
              class="mr-2"
              style="font-size: 1.5rem"
            />
          </template>
        </v-text-field>
      </v-col>
    </v-row>
    <v-row no-gutters class="mt-2">
      <v-col>
        <div class="it-inventory-box">
          <v-data-table
            :headers="headers"
            :items="data"
            :items-per-page="5"
            no-data-text="Data not available"
            no-results-text="Data not available"
            class="it-inventory-simple-table"
          ></v-data-table>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue2";
export default {
  name: "ListKapal",
  components: {
    Icon,
  },
  data() {
    return {
      headers: [
        { text: "Voyage Kapal", value: "voyageKapal" },
        { text: "Nama Kapal", value: "namaKapal" },
        { text: "Jenis Dokumen", value: "jenisDokumen" },
        { text: "Bendera", value: "bendera" },
      ],
      data: [
        {
          voyageKapal: "VOYAGE",
          namaKapal: "Collins - Swift",
          jenisDokumen: "Pemasukan",
          bendera: "INA",
        },
        {
          voyageKapal: "VOYAGE",
          namaKapal: "Collins - Swift",
          jenisDokumen: "Pemasukan",
          bendera: "INA",
        },
        {
          voyageKapal: "VOYAGE",
          namaKapal: "Collins - Swift",
          jenisDokumen: "Pemasukan",
          bendera: "INA",
        },
        {
          voyageKapal: "VOYAGE",
          namaKapal: "Collins - Swift",
          jenisDokumen: "Pemasukan",
          bendera: "INA",
        },
        {
          voyageKapal: "VOYAGE",
          namaKapal: "Collins - Swift",
          jenisDokumen: "Pemasukan",
          bendera: "INA",
        },
        {
          voyageKapal: "VOYAGE",
          namaKapal: "Collins - Swift",
          jenisDokumen: "Pemasukan",
          bendera: "INA",
        },
        {
          voyageKapal: "VOYAGE",
          namaKapal: "Collins - Swift",
          jenisDokumen: "Pemasukan",
          bendera: "INA",
        },
        {
          voyageKapal: "VOYAGE",
          namaKapal: "Collins - Swift",
          jenisDokumen: "Pemasukan",
          bendera: "INA",
        },
        {
          voyageKapal: "VOYAGE",
          namaKapal: "Collins - Swift",
          jenisDokumen: "Pemasukan",
          bendera: "INA",
        },
        {
          voyageKapal: "VOYAGE",
          namaKapal: "Collins - Swift",
          jenisDokumen: "Pemasukan",
          bendera: "INA",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
