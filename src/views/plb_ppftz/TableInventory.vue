<template>
  <div class="it-inventory-card">
    <v-card-title class="it-inventory-card-title" style="margin-bottom: 25px">
      {{ page }}
    </v-card-title>
    <v-row no-gutters>
      <v-col lg="10">
        <v-text-field
          placeholder="Cari..."
          prepend-inner-icon="mdi-magnify"
          style="width:350px"
          outlined
          v-model="optionsTableReports.search"
          dense
        ></v-text-field>
      </v-col>
      <v-col lg="2" style="text-align: right">
        <v-btn fill class="it_inven_create_btn" @click.prevent="handleModal"
          >Create New</v-btn
        >
      </v-col>
    </v-row>
    <v-data-table
      :headers="headers"
      :items="reports.data"
      :options.sync="optionsTableReports"
      :server-items-length="reports.data_size"
      no-data-text="Data not available"
      no-results-text="Data not available"
      class="it-inventory-simple-table"
    >
      <template v-slot:[`item.no`]="props">
        {{ props.index + 1 }}
      </template>
      <template v-slot:[`item.jalur`]="{ item }">
        <approval-badge v-if="item.jalur" :status="item.jalur"></approval-badge>
      </template>
      <template v-slot:[`item.action`]="{ item }">
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
            <v-list-item @click="handlePreview(item.nomorAjuan)">
              <v-list-item-title>
                <v-icon left> mdi-format-list-bulleted </v-icon>
                View
              </v-list-item-title>
            </v-list-item>
            <v-list-item @click="handlePreviewXML(item.nomorAjuan)">
              <v-list-item-title>
                <v-icon left> mdi-format-list-bulleted </v-icon>
                View XML
              </v-list-item-title>
            </v-list-item>
            <v-list-item
              v-if="item.edit"
              @click="handleEditModal(item.nomorAjuan)"
            >
              <v-list-item-title>
                <v-icon left>mdi-pencil-outline</v-icon>
                Edit
              </v-list-item-title>
            </v-list-item>
            <v-list-item
              v-if="item.edit"
              @click="handleDelete(item.nomorAjuan)"
            >
              <v-list-item-title>
                <v-icon left>mdi-trash-can-outline</v-icon>
                Delete
              </v-list-item-title>
            </v-list-item>
            <!-- <v-list-item>
              <v-list-item-title>
                <v-icon left>mdi-printer-outline </v-icon>
                Print
              </v-list-item-title>
            </v-list-item> -->
          </v-list>
        </v-menu>
      </template>
    </v-data-table>

    <!-- Modal -->
    <v-dialog v-model="dialog" persistent max-width="600px">
      <create-new-modal @handleModal="handleModal" />
    </v-dialog>
    <v-dialog v-model="editDialog" persistent max-width="600px">
      <edit-modal @handleEditModal="handleEditModal" :reportId="editedId" />
    </v-dialog>
    <!-- Modal Preview -->
    <v-dialog v-model="dialogPreview" persistent width="1400px">
      <preview-print-report @handleCloseDialog="handleCloseDialogPreview" />
    </v-dialog>
    <v-dialog v-model="dialogXML" persistent width="1400px">
      <preview-xml @handleCloseDialog="handleCloseDialogXML" />
    </v-dialog>
  </div>
</template>

<script>
import DetectReportType from "@/helper/DetectReportType";
export default {
  name: "TableInventory",
  components: {
    ApprovalBadge: () => import("@/components/ApprovalBadge"),
    CreateNewModal: () => import("@/components/plb_ppftz/CreateNewModal"),
    EditModal: () => import("@/components/plb_ppftz/EditModal"),
    PreviewPrintReport: () => import("@/views/PreviewPrintReport"),
    PreviewXml: () => import("@/views/PreviewXML"),
  },
  data() {
    return {
      search: "",
      page: "",
      dialog: false,
      dialogPreview: false,
      dialogXML: false,
      editedId: null,
      editDialog: false,
      headers: [
        {
          text: "No",
          value: "no",
        },
        {
          text: "Jenis Inventory",
          value: "jenisInventory",
        },
        {
          text: "Nomor Ajuan",
          value: "nomorAjuan",
        },
        { text: "Tanggal Ajuan", value: "tanggalAjuan" },
        // { text: "No. Daftar", value: "noDaftar" },
        // { text: "Tanggal Daftar", value: "tanggalDaftar" },
        { text: "Pengirim", value: "pengirim" },
        { text: "Penerima", value: "penerima" },
        { text: "Jalur", value: "jalur", sortable: false },
        { text: "Action", value: "action", sortable: false },
      ],
    };
  },
  watch: {
    optionsTableReports: {
      handler() {
        this.fetchReports();
      },
      deep: true,
    },
  },
  computed: {
    reports() {
      return this.$store.state.report.reports;
    },
    optionsTableReports: {
      get() {
        return this.$store.state.report.optionsTableReports;
      },
      set(val) {
        this.$store.commit("SET_OPTIONS_TABLE_REPORTS", val);
      },
    },
  },
  created() {
    this.currentLocation = this.$route.path;
    this.page = DetectReportType(this.currentLocation);
    this.optionsTableReports.type = this.page.toUpperCase();
    this.fetchReports();
  },
  methods: {
    handlePreview(reportId) {
      this.dialogPreview = true;
      this.$store.commit("SET_REPORT_ID_PREVIEW", reportId);
      this.$store.dispatch("previewReport");
    },

    handlePreviewXML(reportId) {
      this.dialogXML = true;
      this.$store.commit("SET_REPORT_ID_PREVIEW", reportId);
      this.$store.dispatch("previewXML");
    },

    async handleCloseDialogPreview() {
      this.dialogPreview = false;
      await this.$store.commit("RESET_PREVIEW");
      await this.$store.commit("RESET_REPORT_ID");
    },

    async handleCloseDialogXML() {
      this.dialogXML = false;
      await this.$store.commit("RESET_PREVIEW_XML");
      await this.$store.commit("RESET_REPORT_ID");
    },

    handleModal() {
      this.dialog = !this.dialog;
    },
    fetchReports() {
      this.$store.dispatch("fetchAllReport", this.optionsTableReports);
    },
    handleEditModal(id) {
      this.editDialog = !this.editDialog;
      if (this.editDialog) {
        this.$store.commit("SET_REPORT_ID", id);
        localStorage.setItem("current_report_id", id);
        this.$store.dispatch("getOneReport");
        this.editedId = id;
      }
    },
    handleDelete(id) {
      this.$swal({
        title: `Apakah data anda yakin untuk menghapus data dengan nomor ajuan ${id} ?`,
        type: "warning",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#5682ff",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya",
        cancelButtonText: "Tidak",
      }).then((result) => {
        if (result.value) {
          this.$store.dispatch("deleteReport", id);
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
