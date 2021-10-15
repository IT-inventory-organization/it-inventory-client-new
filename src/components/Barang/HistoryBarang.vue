<template>
  <v-card>
    <v-card-title>
      <v-row no-gutters align-content="center" justify="space-between">
        <span class="text-h6">History Data Barang</span>
        <span style="cursor: pointer" @click.prevent="handleDialog"
          ><v-icon>mdi-close</v-icon></span
        >
      </v-row>
    </v-card-title>
    <v-card-text>
      <div class="history_nama_barang mt-2 mb-4">
        Minyak
      </div>
      <!-- List -->
      <v-row no-gutters>
        <v-col cols="1" class="history_list">
          <div class="history_list_dot"></div>
          <div class="history_list_line"></div>
        </v-col>
        <v-col cols="11">
          <v-row align="center">
            <v-col cols="8">
              <v-chip color="#3CB774" class="mr-2" text-color="white">
                Inventory #1
              </v-chip>
              <v-chip color="#F27B61" text-color="white">
                PLB | Export
              </v-chip>
            </v-col>
            <v-col cols="4">
              <div class="history_datetime_barang">
                01-01-2021 &nbsp;&nbsp; | &nbsp;&nbsp; 1:20 pm
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4">
              <v-text-field
                disabled
                label="Nomor Dokumen"
                value="1231"
                outlined
                dense
              ></v-text-field>
            </v-col>
            <v-col cols="2">
              <v-text-field
                value="BC.04"
                label="Jenis Dokumen BC"
                outlined
                disabled
                dense
              ></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field
                label="Penerima"
                value="Ikhwan"
                disabled
                outlined
                dense
              ></v-text-field>
            </v-col>
            <v-col cols="2">
              <v-text-field
                label="Quantity"
                value="2"
                disabled
                outlined
                dense
              ></v-text-field>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <!-- End List -->
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "HistoryBarang",
  methods: {
    handleDialog() {
      this.$emit("handleCloseDialogHistory");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/history.scss";
</style>
