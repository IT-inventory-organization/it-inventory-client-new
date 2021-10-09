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
            <v-list-item>
              <v-list-item-title>
                <v-icon left> mdi-format-list-bulleted </v-icon>
                View
              </v-list-item-title>
            </v-list-item>
            <v-list-item v-if="item.edit">
              <v-list-item-title>
                <v-icon left>mdi-pencil-outline </v-icon>
                Edit
              </v-list-item-title>
            </v-list-item>
            <v-list-item v-if="item.edit">
              <v-list-item-title>
                <v-icon left>mdi-trash-can-outline</v-icon>
                Delete
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <v-icon left>mdi-printer-outline </v-icon>
                Print
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-data-table>

    <!-- Modal -->
    <v-dialog v-model="dialog" persistent max-width="600px">
      <create-new-modal @handleModal="handleModal" />
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
  },
  data() {
    return {
      search: "",
      page: "",
      dialog: false,
      headers: [
        {
          text: "No",
          value: "no",
        },
        {
          text: "Jenis Inventory",
          value: "jenisInvetory",
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
    handleModal() {
      this.dialog = !this.dialog;
    },
    fetchReports() {
      this.$store.dispatch("fetchAllReport", this.optionsTableReports);
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
