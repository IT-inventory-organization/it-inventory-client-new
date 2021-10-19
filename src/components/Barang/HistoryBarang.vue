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
    <v-card-text v-if="loadingHistoryBarang">
      <v-progress-linear
        class="my-4"
        indeterminate
        color="blue"
      ></v-progress-linear>
    </v-card-text>
    <v-card-text class="text-center" v-if="historyBarang.length <= 0">
      <p class="my-5">History not available</p>
    </v-card-text>
    <v-card-text v-if="!loadingHistoryBarang && historyBarang.length > 0">
      <div class="history_nama_barang mt-2 mb-4">
        {{ historyBarang[0].name }}
      </div>
      <!-- List -->
      <v-row
        v-for="(history, index) in historyBarang"
        :key="index.toString()"
        no-gutters
      >
        <v-col cols="1" class="history_list">
          <div class="history_list_dot"></div>
          <div class="history_list_line"></div>
        </v-col>
        <v-col cols="11">
          <v-row align="center">
            <v-col cols="8">
              <v-chip color="#3CB774" class="mr-2" text-color="white">
                Inventory #{{ history.nomorAjuan }}
              </v-chip>
              <v-chip
                :color="
                  history.jenisPemberitahuan === 'Export'
                    ? '#F27B61'
                    : '#5682FF'
                "
                text-color="white"
              >
                {{ history.typeReport }} | {{ history.jenisPemberitahuan }}
              </v-chip>
            </v-col>
            <v-col cols="4">
              <div class="history_datetime_barang">
                {{ handleDate(history.updatedAt) }}
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4">
              <v-text-field
                disabled
                label="Nomor Dokumen"
                :value="history.nomorDokumen"
                outlined
                dense
              ></v-text-field>
            </v-col>
            <v-col cols="2">
              <v-text-field
                :value="history.BCDocumentType"
                label="Jenis Dokumen BC"
                outlined
                disabled
                dense
              ></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field
                label="Penerima"
                :value="history.namaPenerima"
                disabled
                outlined
                dense
              ></v-text-field>
            </v-col>
            <v-col cols="2">
              <v-text-field
                label="Quantity"
                :value="history.quantity"
                disabled
                outlined
                dense
                :class="
                  history.status === 'decrease'
                    ? 'history_qty_dec'
                    : 'history_qty_inc'
                "
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
  computed: {
    loadingHistoryBarang() {
      return this.$store.state.report.loading.loadingHistoryBarang;
    },
    historyBarang() {
      return this.$store.state.report.historyBarang;
    },
  },
  methods: {
    handleDialog() {
      this.$store.commit("RESET_HISTORY_BARANG");
      this.$emit("handleCloseDialogHistory");
    },
    handleDate(value) {
      const date = new Date(value);
      const getDate = `${date.getDate()}-${date.getMonth() +
        1}-${date.getFullYear()}`;
      const getTime = date.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
      return `${getDate} | ${getTime}`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/history.scss";
</style>
