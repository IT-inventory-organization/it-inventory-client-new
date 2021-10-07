<template>
  <div>
    <v-row no-gutters>
      <v-col lg="9" md="9"><div class="text-h6">List Dokumen</div></v-col>
      <v-col lg="3" md="3" style="display:flex; justify-content: flex-end">
        <button class="btn mr-6" @click.prevent="handleImport">
          <v-icon left>mdi-tray-arrow-down</v-icon> Import CSV
        </button>
        <input type="file" id="fileInput" accept=".csv" hidden />
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
            <template v-slot:[`item.status`]="{ item }">
              <approval-badge :status="item.status"></approval-badge>
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
                      <v-icon left>mdi-pencil-outline </v-icon>
                      Edit
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>
                      <v-icon left>mdi-content-copy </v-icon>
                      Copy
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
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
    <!-- Modal -->
    <v-dialog v-model="dialog" persistent max-width="800px">
      <form-data-dokumen @handleModal="handleModal" />
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "DataDokumen",
  components: {
    FormDataDokumen: () =>
      import("@/views/plb_ppftz/DataLanjutan/FormDataDokumen"),
  },
  computed: {
    dataDokumen: {
      get() {
        return this.$store.state.report.dataDokumen;
      },
    },
  },
  data() {
    return {
      dialog: false,
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
      const fileInput = document.getElementById("fileInput");
      fileInput.click();
      fileInput.onchange = (e) => {
        const file = e.target.files;
        console.log(file);
      };
      // fileReader.click;
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
