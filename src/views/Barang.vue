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
      :items="itemBarang"
      :options.sync="optionsTableBarang"
      :server-items-length="listBarang.data_size"
      no-data-text="Data not available"
      no-results-text="Data not available"
      class="it-inventory-simple-table"
    >
      <template v-slot:[`item.no`]="props">
        {{ (props.index += 1) }}
      </template>
      <template v-slot:[`item.action`]="props">
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
            <v-list-item
              @click.prevent="handleOpenDialogEditBarang(props.item.idBarang)"
            >
              <v-list-item-title>
                <v-icon left> mdi-pencil-outline </v-icon>
                Edit
              </v-list-item-title>
            </v-list-item>
            <v-list-item
              @click.prevent="handleOpenDialogUpdateStock(props.item.idBarang)"
            >
              <v-list-item-title>
                <v-icon left> mdi-plus-minus-variant </v-icon>
                Tambah/Kurangi Stock
              </v-list-item-title>
            </v-list-item>
            <v-list-item
              @click.prevent="handleHistoryBarang(props.item.idBarang)"
            >
              <v-list-item-title>
                <v-icon left> mdi-clock-time-four-outline </v-icon>
                History
              </v-list-item-title>
            </v-list-item>
            <v-list-item
              @click.prevent="
                handleDeleteBarang(props.item.idBarang, props.item.name)
              "
            >
              <v-list-item-title>
                <v-icon left> mdi-trash-can-outline </v-icon>
                Delete
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-data-table>
    <v-dialog v-model="dialogAddBarang" persistent max-width="800px">
      <form-create-barang
        @handleCloseDialogAddBarang="handleCloseDialogAddBarang"
      />
    </v-dialog>
    <v-dialog v-model="dialogEditBarang" persistent max-width="800px">
      <form-edit-barang
        @handleCloseDialogEditBarang="handleCloseDialogEditBarang"
      />
    </v-dialog>
    <v-dialog v-model="dialogStock" persistent max-width="500px">
      <form-update-stock
        @handleCloseDialogUpdateStock="handleCloseDialogUpdateStock"
      />
    </v-dialog>
    <v-dialog v-model="dialogHistory" persistent max-width="1000px">
      <history-barang @handleCloseDialogHistory="handleCloseDialogHistory" />
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "stockbarang",
  components: {
    FormCreateBarang: () => import("@/components/Barang/CreateBarang"),
    FormEditBarang: () => import("@/components/Barang/EditBarang"),
    FormUpdateStock: () => import("@/components/Barang/UpdateStock"),
    HistoryBarang: () => import("@/components/Barang/HistoryBarang"),
  },
  data() {
    return {
      dialogAddBarang: false,
      dialogEditBarang: false,
      dialogStock: false,
      dialogHistory: false,
      headers: [
        {
          text: "No",
          value: "no",
        },
        {
          text: "Nama",
          value: "name",
        },
        {
          text: "Pos Tarif",
          value: "posTarif",
        },
        {
          text: "Uraian",
          value: "uraian",
        },
        {
          text: "Netto, Bruto, Volume",
          value: "nettoBrutoVolume",
        },
        { text: "Satuan Kemasan", value: "satuanKemasan" },
        {
          text: "Stock",
          value: "stock",
        },
        { text: "Hs Code", value: "hsCode" },
        { text: "Action", value: "action", sortable: false },
      ],
    };
  },
  watch: {
    optionsTableBarang: {
      handler() {
        this.fetchBarang();
      },
      deep: true,
    },
  },
  computed: {
    itemBarang() {
      return this.$store.state.report.listBarang.data;
    },
    listBarang() {
      return this.$store.state.report.listBarang;
    },
    optionsTableBarang: {
      get() {
        return this.$store.state.report.optionsTableBarang;
      },
      set(val) {
        this.$store.commit("SET_OPTIONS_TABLE_BARANG", val);
      },
    },
  },
  created() {
    this.fetchBarang();
  },
  methods: {
    fetchBarang() {
      this.$store.dispatch("fetchBarang");
    },
    handleOpenDialogAddBarang() {
      this.dialogAddBarang = true;
    },
    handleCloseDialogAddBarang() {
      this.dialogAddBarang = false;
    },
    handleOpenDialogEditBarang(id) {
      this.dialogEditBarang = true;
      this.$store.commit("SET_ID_BARANG", id);
      this.$store.dispatch("getOneBarang", id);
    },
    handleCloseDialogEditBarang() {
      this.dialogEditBarang = false;
      this.$store.commit("RESET_ID_BARANG");
    },
    handleOpenDialogUpdateStock(id) {
      this.dialogStock = true;
      this.$store.commit("SET_ID_BARANG", id);
    },
    handleCloseDialogUpdateStock() {
      this.dialogStock = false;
      this.$store.commit("RESET_ID_BARANG");
    },
    handleOpenDialogHistory() {
      this.dialogHistory = true;
    },
    handleCloseDialogHistory() {
      this.dialogHistory = false;
    },
    handleHistoryBarang(id) {
      this.$store.dispatch("fetchHistoryBarang", id);
      this.handleOpenDialogHistory();
    },
    handleDeleteBarang(id, name) {
      this.$swal({
        title: `Konfirmasi Hapus`,
        text: `Apakah 
        anda yakin untuk menghapus data dengan nama barang ${name} ?`,
        type: "warning",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#5682ff",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya",
        cancelButtonText: "Tidak",
      }).then((result) => {
        if (result.value) {
          this.$store.dispatch("deleteBarang", id);
        }
      });
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
