<template lang="">
  <div id="PurchaseOrderView" ref="PurchaseOrderView">
    <v-card>
      <v-card-title>
        <v-row no-gutters align-content="center" justify="space-between">
          <span class="headline font-weight-bold">{{ reportId.nomorPO }}</span>
          <span @click="handleViewClose" style="cursor: pointer"
            ><v-icon>mdi-close</v-icon></span
          >
        </v-row>
      </v-card-title>
      <v-card-text>
        <v-container fluid>
          <v-row no-gutters>
            <v-col cols="3">
              <div class="mt-2 head">Purchase Order No</div>
            </v-col>
            <v-col cols="7">
              <div class="mt-2">: {{ reportId.nomorPO }}</div>
            </v-col>
          </v-row>

          <v-row no-gutters>
            <v-col cols="3">
              <div class="mt-2 head">Tanggal</div>
            </v-col>
            <v-col cols="7">
              <div class="mt-2">: {{ reportId.tanggalPurchaseOrder }}</div>
            </v-col>
          </v-row>

          <v-row no-gutters>
            <v-col cols="3">
              <div class="mt-2 head">Kapal Penjual</div>
            </v-col>
            <v-col cols="7">
              <div class="mt-2">: {{ reportId.kapalPenjual }}</div>
            </v-col>
          </v-row>

          <v-data-table
            :headers="headers"
            :items="reportId.barangPOs"
            no-data-text="Data not available"
            no-results-text="Data not available"
            class="it-inventory-simple-table mt-10"
          >
          </v-data-table>

          <v-row no-gutters>
            <v-col cols="3">
              <div class="mt-2 head">Jumlah Total</div>
            </v-col>
            <v-col cols="7">
              <div class="mt-2">: {{ reportId.jumlahTotal }}</div>
            </v-col>
          </v-row>

          <v-row no-gutters class="mt-10">
            <v-col cols="3">
              <div class="mt-2 head">Remarks :</div>
            </v-col>
            <v-col cols="7">
              <div class="mt-2">
                {{ reportId.remarks }}
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Kode Barang",
          value: "kodeBarang",
        },
        {
          text: "Item Deskripsi",
          value: "itemDeskripsi",
        },
        {
          text: "Satuan Kemasan",
          value: "satuanKemasan",
        },
        {
          text: "Quantity",
          value: "quantity",
        },
        {
          text: "hargaSatuan",
          value: "hargaSatuan",
        },
      ],
    };
  },
  methods: {
    handleViewClose() {
      this.$emit("dialogPurchaseOrderPrint");
      this.$store.commit("SET_PRINT_PO", false);
    },
    print() {
      if (this.loadingReportId) {
        this.$htmlToPaper("PurchaseOrderView");
      }
      this.handleViewClose();
    },
  },
  computed: {
    loadingReportId() {
      return this.$store.state.po.loading.loadingReportId;
    },
    isPrint() {
      return this.$store.state.po.isPrint;
    },
    reportId() {
      return this.$store.state.po.reportId;
    },
  },
  watch: {
    isPrint: function(val) {
      if (val) {
        this.print();
      }
    },
  },
};
</script>
<style scoped>
.subtitle {
  padding-left: 0.8rem;
}

.card-subtitle {
  margin-top: 3em;
  align-items: flex-end;
}

.tanggal {
  color: #697d95;
}

.list-title {
  font-weight: 400;
  margin-top: 1em;
}

.list-item {
  color: #697d95;
}

table {
  border-collapse: collapse;
  width: 100%;
  box-shadow: inset -1px 0px 0px #eaeaea, inset 1px 0px 0px #eaeaea,
    inset 0px 1px 0px #eaeaea;
}

th,
td {
  color: #848484;
  padding: 1em 1.1em !important;
  text-align: left;
}
</style>
