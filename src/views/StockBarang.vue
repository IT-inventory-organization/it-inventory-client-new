<template>
  <div class="it-inventory-card">
    <v-row no-gutters align="center" style="margin-bottom: 25px">
      <v-col lg="10">
        <v-card-title class="it-inventory-card-title">
          Data Barang
        </v-card-title>
      </v-col>
      <v-col lg="2" style="text-align: right">
        <v-btn
          fill
          class="it_inven_create_btn"
          @click="handleOpenDialogAddBarang"
        >
          <v-icon left>mdi-plus-box-outline</v-icon> Tambah
        </v-btn>
      </v-col>
    </v-row>

    <v-data-table
      :headers="headers"
      :items="data"
      no-data-text="Data not available"
      no-results-text="Data not available"
      class="it-inventory-simple-table"
    >
      <template v-slot:[`item.no`]="props">
        {{ (props.index += 1) }}
      </template>
      <template v-slot:[`item.action`]>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="table_menu_actions"
              color="#95c0f9"
              outlined
              v-bind="attrs"
              v-on="on"
            >
              Actions
              <v-icon right>
                mdi-chevron-down
              </v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item>
              <v-list-item-title>
                <v-icon left> mdi-pencil-outline </v-icon>
                Edit
              </v-list-item-title>
            </v-list-item>
            <v-list-item @click="dialogStock = true">
              <v-list-item-title>
                <v-icon left> mdi-plus-minus-variant </v-icon>
                Tambah/Kurangi Stock
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-data-table>
    <v-dialog v-model="dialogAddBarang" persistent max-width="800px">
      <form-create-stock-barang
        @handleCloseDialogAddBarang="handleCloseDialogAddBarang"
      />
    </v-dialog>
    <v-dialog v-model="dialogStock" max-width="500px">
      <form-update-stock />
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "stockbarang",
  components: {
    FormCreateStockBarang: () =>
      import("@/components/StockBarang/CreateStockBarang"),
    FormUpdateStock: () => import("@/components/StockBarang/UpdateStock"),
  },
  data() {
    return {
      dialogAddBarang: false,
      dialogEditBarang: false,
      dialogStock: false,
      headers: [
        {
          text: "No",
          value: "no",
          sortable: false,
        },
        {
          text: "Pos Tarif",
          value: "posTarif",
          sortable: false,
        },
        {
          text: "Uraian",
          value: "uraian",
          sortable: false,
        },
        {
          text: "Neto, Bruto, Volume",
          value: "nettoBrutoVolume",
          sortable: false,
        },
        { text: "Satuan Kemasan", value: "satuanKemasan", sortable: false },
        {
          text: "Nilai Pabean, Harga Penyerahan",
          value: "nilaiPabeanHargaPenyerahan",
          sortable: false,
        },
        { text: "Hs Code", value: "hsCode", sortable: false },
        { text: "Action", value: "action", sortable: false },
      ],
      data: [
        {
          posTarif: 2300032,
          uraian: "Bensin",
          nettoBrutoVolume: 300,
          satuanKemasan: "Liter",
          stock: 20,
          nilaiPabeanHargaPenyerahan: 23333,
          hsCode: "GHASS",
        },
      ],
    };
  },
  methods: {
    handleOpenDialogAddBarang() {
      this.dialogAddBarang = true;
    },
    handleCloseDialogAddBarang() {
      this.dialogAddBarang = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.v-list-item {
  cursor: pointer;
  min-height: 40px;
  & .v-list-item__title {
    color: #95c0f9 !important;
    i {
      color: #95c0f9 !important;
      font-size: 1rem;
    }
  }
  &:hover {
    background-color: rgba($color: #000000, $alpha: 0.1);
  }
}
</style>
