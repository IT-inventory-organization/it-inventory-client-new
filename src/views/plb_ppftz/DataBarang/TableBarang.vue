<template>
  <div>
    <v-row no-gutters>
      <v-col lg="9" md="9"><div class="text-h6">List Data Barang</div></v-col>
      <v-col lg="3" md="3" style="display:flex; justify-content: flex-end">
        <button class="btn mr-6" @click.prevent="handleImport">
          <v-icon left>mdi-tray-arrow-down</v-icon> Import CSV
        </button>
        <input
          type="file"
          @change="handleCSV"
          ref="fileInput"
          accept=".csv"
          multiple="false"
          hidden
          @click="$refs.fileInput.value = ''"
        />
        <button @click.prevent="handleModal" class="btn">
          <v-icon left>mdi-plus-box-outline</v-icon> Add
        </button>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="it-inventory-box">
          <v-data-table
            :headers="headers"
            :items="listDataBarang"
            :items-per-page="5"
            class="it-inventory-simple-table"
          >
            <template v-slot:[`item.no`]="props">
              {{ (props.index += 1) }}
            </template>
            <template v-slot:[`item.status`]="{ item }">
              <approval-badge :status="item.status"></approval-badge>
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
                    @click="handleEditDialog(props.item, props.index)"
                  >
                    <v-list-item-title>
                      <v-icon left>mdi-pencil-outline </v-icon>
                      Edit
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="handleCopy(props.item)">
                    <v-list-item-title>
                      <v-icon left>mdi-content-copy </v-icon>
                      Copy
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item @click.prevent="handleDelete(props.item)">
                    <v-list-item-title>
                      <v-icon left>mdi-trash-can-outline</v-icon>
                      Delete
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </template>
          </v-data-table>
        </div>
      </v-col>
    </v-row>

    <v-row no-gutters class="mt-5" style="justify-content: flex-end">
      <button type="submit" class="btn_save" @click.prevent="handleSubmit">
        <span>Next</span> <img src="@/assets/icons/ic_bulletnext.svg" />
      </button>
    </v-row>

    <!-- Modal -->
    <v-dialog v-model="dialog" persistent max-width="800px">
      <form-data-barang @handleModal="handleModal" />
    </v-dialog>

    <v-dialog v-model="editDialog" persistent max-width="800px">
      <form-edit-data-barang
        ref="editListDataBarang"
        :item="editedItem"
        :index="editedIndex"
        @handleEdit="handleEditDialog"
        @handleChangeEdit="handleChangeEdit"
      />
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "TableBarang",
  components: {
    FormDataBarang: () => import("@/views/plb_ppftz/DataBarang/FormDataBarang"),
    FormEditDataBarang: () =>
      import("@/views/plb_ppftz/DataBarang/FormEditDataBarang"),
  },
  data() {
    return {
      dialog: false,
      tableListBarangValidate: false,
      editDialog: false,
      editedItem: {
        posTarif: "",
        uraian: "",
        nettoBrutoVolume: "",
        satuanKemasan: "",
        nilaiPabeanHargaPenyerahan: "",
        hsCode: "",
      },
      csvData: [],
      Bruto: null,
      Netto: null,
      Volume: null,
      editedIndex: null,
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
    };
  },
  computed: {
    listDataBarang: {
      get() {
        return this.$store.state.report.listDataBarang;
      },
    },
  },
  watch: {
    listDataBarang(val) {
      if (val.length > 0) {
        this.tableListBarangValidate = true;
      } else {
        this.tableListBarangValidate = false;
      }
    },
    Bruto(val) {
      if (val && val != "-") {
        this.nettoBrutoVolume;
      }
    },
    Netto(val) {
      if (val && val != "-") {
        this.nettoBrutoVolume;
      }
    },
    Volume(val) {
      if (val && val != "-") {
        this.nettoBrutoVolume;
      }
    },
    csvData(val) {
      // Belum bisa
      if (val.length && val.length > 0) {
        let temp = [...val];
        temp.pop();
        for (let i = 1; i < temp.length; i++) {
          temp[i] = temp[i].split(",");
          const payload = {
            posTarif: temp[i][0],
            uraian: temp[i][1],
            nettoBrutoVolume: temp[i][2],
            satuanKemasan: temp[i][3],
            nilaiPabeanHargaPenyerahan: temp[i][4],
            hsCode: temp[i][5],
          };
          this.$store.commit("SET_LIST_DATA_BARANG", payload);
        }
        this.posTarif = "";
        this.uraian = "";
        this.nettoBrutoVolume = "";
        this.satuanKemasan = "";
        this.nilaiPabeanHargaPenyerahan = "";
        this.hsCode = "";
      }
    },
  },
  methods: {
    handleModal() {
      this.dialog = !this.dialog;
    },
    handleImport() {
      this.$refs.fileInput.click();

      // fileReader.click;
    },
    handleCSV(e) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = async (e) => {
        this.csvData = await e.target.result.split(/\r\n|\r|\n/);

        this.posTarif = "";
        this.uraian = "";
        this.nettoBrutoVolume = "";
        this.satuanKemasan = "";
        this.nilaiPabeanHargaPenyerahan = "";
        this.hsCode = "";
        // Mematikan resetCSV
        // this.csvData = [];
      };
      reader.readAsText(file);
    },
    handleImportCSV(key, value) {
      this[key] = value;
    },
    handleSubmit() {
      if (this.tableListBarangValidate) {
        this.$swal({
          title: "Apakah data anda sudah benar ?",
          type: "warning",
          icon: "question",
          showCancelButton: true,
          confirmButtonColor: "#5682ff",
          cancelButtonColor: "#d33",
          confirmButtonText: "Ya",
          cancelButtonText: "Tidak",
        }).then((result) => {
          if (result.value) {
            this.$store
              .dispatch("createDataBarang")
              .then((result) => {
                if (result.data.success) {
                  this.$swal.fire(
                    "Berhasil create data barang!",
                    "",
                    "success"
                  );
                  this.$emit("handleSubmitStepper");
                }
              })
              .catch((error) => {
                this.$swal.fire(
                  "Gagal membuat data barang!",
                  error.response.data.message,
                  "error"
                );
              });
          }
        });
      } else {
        this.$swal("Data Belum Lengkap", "", "error");
      }
    },
    handleCopy(item) {
      this.$store.commit("SET_LIST_DATA_BARANG", item);
    },
    handleDelete(item) {
      this.$store.commit("DELETE_DATA_BARANG", item);
    },
    handleEditDialog(item, index) {
      this.editDialog = !this.editDialog;
      if (this.editDialog) {
        this.editedItem = Object.assign({}, item);
        this.editedIndex = index;
      } else {
        this.editedItem = {
          posTarif: "",
          uraian: "",
          nettoBrutoVolume: "",
          satuanKemasan: "",
          nilaiPabeanHargaPenyerahan: "",
          hsCode: "",
        };
        this.editedIndex = null;
      }
    },
    handleChangeEdit(key, value) {
      this.editedItem[key] = value;
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
