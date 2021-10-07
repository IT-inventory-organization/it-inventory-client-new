<template>
  <div>
    <v-row no-gutters>
      <v-col lg="9" md="9"><div class="text-h6">List Dokumen</div></v-col>
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
            :items="dataDokumen"
            :items-per-page="5"
            class="it-inventory-simple-table"
          >
            <template v-slot:[`item.no`]="props">
              {{ props.index + 1 }}
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
                  <v-list-item @click="handleEditDialog(props.item, props.index)">
                    <v-list-item-title
                    >
                      <v-icon left>mdi-pencil-outline </v-icon>
                      Edit
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title @click="handleCopy(props.item)">
                      <v-icon left>mdi-content-copy </v-icon>
                      Copy
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title @click="handleDelete(props.item)">
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
    <!-- Modal -->
    <v-dialog v-model="dialog" persistent max-width="800px">
      <form-data-dokumen ref="dataDokumen" @handleModal="handleModal" />
    </v-dialog>

    <!-- Edit -->
    <v-dialog v-model="editDialog" persistent max-width="800px">
      <form-edit-data-dokumen
        ref="editDataDokumen"
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
  name: "DataDokumen",
  components: {
    FormDataDokumen: () =>
      import("@/views/plb_ppftz/DataLanjutan/FormDataDokumen"),
    FormEditDataDokumen: () =>
      import("@/views/plb_ppftz/DataLanjutan/FormEditDataDokumen"),
  },
  computed: {
    dataDokumen: {
      get() {
        return this.$store.state.report.dataDokumen;
      },
    },
  },
  watch: {
    csvData(val) {
      if (val.length && val.length > 0) {
        let temp = [...val];
        temp[0] = temp[0].split(",");
        temp.pop();
        for (let i = 1; i < temp.length; i++) {
          temp[i] = temp[i].split(",");
          for (let j = 0; j < temp[i].length; j++) {
            const tempKeyArr = temp[0][j].split(" ").map((ele) => ele);
            const key =
              tempKeyArr[0][0].toLowerCase() +
              tempKeyArr[0].substr(1) +
              tempKeyArr[1][0].toUpperCase() +
              tempKeyArr[1].substr(1);
            const value = temp[i][j];
            this[key] = value;
          }
          const payload = {
            kodeDokumen: this.kodeDokumen,
            tanggalDokumen: this.tanggalDokumen,
            nomorDokumen: this.nomorDokumen,
          };
          this.$store.commit("SET_DATA_DOKUMEN", payload);
        }
        this.kodeDokumen = "";
        this.tanggalDokumen = "";
        this.nomorDokumen = "";
      }
    },
  },
  data() {
    return {
      dialog: false,
      editDialog: false,
      editedItem: {
        kodeDokumen: "",
        tanggalDokumen: "",
        nomorDokumen: "",
      },
      editedIndex: null,
      csvData: [],
      headers: [
        {
          text: "No",
          value: "no",
          sortable: false,
        },
        {
          text: "Kode Dokumen",
          value: "kodeDokumen",
          sortable: false,
        },
        {
          text: "Nomor Dokumen",
          value: "nomorDokumen",
          sortable: false,
        },
        { text: "Tanggal Dokumen", value: "tanggalDokumen" },
        { text: "Action", value: "action", sortable: false },
      ],
    };
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

        this.kodeDokumen = "";
        this.tanggalDokumen = "";
        this.nomorDokumen = "";
        this.csvData = []
      };
      reader.readAsText(file);
    },
    handleImportCSV(key, value) {
      this[key] = value;
    },
    handleCopy(item) {
      this.$store.commit("SET_DATA_DOKUMEN", item);
    },
    handleDelete(item) {
      this.$store.commit("DELETE_DATA_DOKUMEN", item);
    },
    handleEditDialog(item, index) {
      this.editDialog = !this.editDialog;
      if (this.editDialog) {
        this.editedItem = Object.assign({}, item);
        this.editedIndex = index;
        const [d, m, y] = this.editedItem.tanggalDokumen.split("-");
        this.editedItem.tanggalDokumen = `${y}-${m}-${d}`;
      } else {
        this.editedItem = {
          kodeDokumen: "",
          tanggalDokumen: "",
          nomorDokumen: "",
        };
        this.editedIndex = null;
      }
    },
    handleChangeEdit(key, value) {
      this.editedItem[key] = value
    }
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
