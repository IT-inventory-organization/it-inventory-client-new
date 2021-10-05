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
          dense
          clearable
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
      :items="data"
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
                <v-icon left> mdi-format-list-bulleted </v-icon>
                View
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <v-icon left>mdi-pencil-outline </v-icon>
                Edit
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
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
import dataPLB from "@/dummy/plbDummy.json";
export default {
  name: "TableInventory",
  components: {
    ApprovalBadge: () => import("@/components/ApprovalBadge"),
    CreateNewModal: () => import("@/components/plb_ppftz/CreateNewModal"),
  },
  data() {
    return {
      page: "",
      dialog: false,
      headers: [
        {
          text: "No",
          value: "id",
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
        { text: "No. Daftar", value: "noDaftar" },
        { text: "Tanggal Daftar", value: "tanggalDaftar" },
        { text: "Pengirim", value: "pengirim" },
        { text: "Penerima", value: "penerima" },
        { text: "Jalur", value: "status", sortable: false },
        { text: "Action", value: "action", sortable: false },
      ],
      data: dataPLB,
    };
  },
  methods: {
    handleModal() {
      this.dialog = !this.dialog;
    },
  },
  created() {
    const getPath = this.$route.path;

    if (getPath.includes("plb")) {
      this.page = "PLB";
    } else if (getPath.includes("ppftz")) {
      this.page = "PPFTZ";
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
