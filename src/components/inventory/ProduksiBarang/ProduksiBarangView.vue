<template>
  <v-card>
    <v-card-title>
      <v-row no-gutters align-content="center" justify="space-between">
        <span class="headline font-weight-bold">Produksi Barang Preview</span>
        <span @click="handleClose" style="cursor: pointer"
          ><v-icon>mdi-close</v-icon></span
        >
      </v-row>
    </v-card-title>

    <v-card-text>
      <v-form ref="initialReport" @submit.prevent="handleSubmit">
        <v-container fluid>
          <v-row no-gutters>
            <v-col cols="3">
              <div class="mt-2 head">Nomor Produksi</div>
            </v-col>
            <v-col cols="7">
              <div class="mt-2">: {{ item.nomorProduksi }}</div>
            </v-col>
          </v-row>

          <v-row no-gutters>
            <v-col cols="3">
              <div class="mt-2 head">Tanggal Produksi</div>
            </v-col>
            <v-col cols="7">
              <div class="mt-2">: {{ item.tanggalProduksi }}</div>
            </v-col>
          </v-row>

          <v-row no-gutters>
            <v-col cols="3">
              <div class="mt-2 head">Hasil Barang</div>
            </v-col>
            <v-col cols="7">
              <div class="mt-2">: {{ item.tanggalProduksi }}</div>
            </v-col>
          </v-row>

          <v-row no-gutters>
            <v-col cols="3">
              <div class="mt-2 head">Quantity</div>
            </v-col>
            <v-col cols="7">
              <div class="mt-2">: {{ item.quantity }}</div>
            </v-col>
          </v-row>

          <v-data-table
            :headers="headers"
            :items="reports.data"
            :server-items-length="reports.data_size"
            no-data-text="Data not available"
            no-results-text="Data not available"
            class="it-inventory-simple-table mt-10"
          >
          </v-data-table>
          <v-row no-gutters class="mt-10">
            <v-col cols="1">
              <div class="mt-2 head">Remarks :</div>
            </v-col>
            <v-col cols="7">
              <div class="mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                ipsa, in nobis, commodi iste a saepe iusto sapiente earum ad
                ipsum sunt. Aliquam laborum obcaecati quas sunt ipsa porro
                facere!
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "ProduksiBarangView",
  components: {},
  data() {
    return {
      headers: [
        {
          text: "Kode Barang",
          value: "kodebarang",
        },
        {
          text: "Item Deskripsi",
          value: "deskripsi",
        },
        {
          text: "Quantity",
          value: "quantity",
        },
        {
          text: "Jumlah",
          value: "jumlah",
        },
      ],
      item: [
        {
          nomorProduksi: 1,
          tanggalProduksi: "01/01/2021",
          hasilBarang: "Emas, Perak",
          quantity: 5,
          remarks:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsa, in nobis, commodi iste a saepe iusto sapiente earum ad ipsum sunt. Aliquam laborum obcaecati quas sunt ipsa porro facere!",
        },
      ],
    };
  },
  computed: {
    reports() {
      return this.$store.state.ProduksiBarang.reports.data;
    },
  },
  methods: {
    handleClose() {
      this.$emit("handleCloseView");
    },
  },
};
</script>

<style lang="scss" scoped>
.head {
  font-weight: 600 !important;
}
</style>
