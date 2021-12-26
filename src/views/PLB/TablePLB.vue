<template>
  <div>
    <v-row no-gutters align="center">
      <v-col cols="11" md="">
        <div class="display-1 font-weight-bold">
          PLB
        </div>
      </v-col>
      <v-col cols="1">
        <button
          @click="handleOpenBuatBaru"
          class="it-inventory-btn it-inventory-btn__fw it-inventory-btn__blue"
        >
          Buat Baru
        </button>
      </v-col>
    </v-row>

    <v-row no-gutters class="mt-2">
      <v-col lg="3">
        <v-text-field
          placeholder="Cari"
          v-model="optionsTableReports.search"
          class="it-inventory-search-list-kapal"
        >
          <template slot="prepend-inner">
            <Icon
              icon="akar-icons:search"
              class="mr-2"
              style="font-size: 1.5rem"
            />
          </template>
        </v-text-field>
      </v-col>
    </v-row>

    <div class="it-inventory-box mt-2">
      <v-data-table
        :headers="headers"
        :items="reports.rows"
        :options.sync="optionsTableReports"
        :server-items-length="reports.length"
        no-data-text="Data not available"
        no-results-text="Data not available"
        class="it-inventory-simple-table"
      >
        <template v-slot:[`item.no`]="props">
          {{ props.index + 1 }}
        </template>
        <template v-slot:[`item.action`]="{ item }">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="it-inventory-actions-btn"
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

            <v-list class="it-inventory-actions-list">
              <v-list-item @click.prevent="handleOpenView(item)">
                <v-list-item-title>
                  <Icon
                    icon="fluent:apps-list-detail-20-regular"
                    class="v-icon--left it-inventory-action-list__icon"
                  />
                  View
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>
                  <Icon
                    icon="ph:pencil-line-light"
                    class="v-icon--left it-inventory-action-list__icon"
                  />
                  Edit
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>
                  <Icon
                    icon="octicon:trash-24"
                    class="v-icon--left it-inventory-action-list__icon"
                  />
                  Delete
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </v-data-table>
    </div>
    <v-dialog
      v-model="dialogBuatBaruPLB"
      persistent
      width="50%"
      max-width="1200px"
    >
      <form-report @handleCloseBuatBaru="handleCloseBuatBaru" />
    </v-dialog>
    <v-dialog v-model="dialogView" persistent width="100%" max-width="1200px">
      <PLB-view @handleCloseView="handleCloseView" />
    </v-dialog>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue2";
export default {
  name: "TablePLB",
  components: {
    Icon,
    FormReport: () => import("@/components/plb/FormReport"),
    PLBView: () => import("@/components/plb/PLBView"),
  },
  data() {
    return {
      isEdit: false,
      dialogBuatBaruPLB: false,
      dialogView: false,
      headers: [
        {
          text: "No",
          value: "no",
        },
        {
          text: "Tanggal",
          value: "createdAt",
        },
        {
          text: "Jenis Pemberitahuan",
          value: "jenisPemberitahuan",
        },
        {
          text: "Jenis Dokumen",
          value: "jenisDokumenBC",
        },
        {
          text: "Nomor Dokumen",
          // TODO: tidak ada di reponse
          value: "nomorDokumen",
        },
        {
          text: "Voyage Kapal",
          value: "dataKapal.voyageKapal",
        },
        {
          text: "Nama Kapal",
          value: "dataKapal.namaKapal",
        },
        {
          text: "Bendera",
          value: "dataKapal.benderaKapal",
        },
        {
          text: "Actions",
          value: "action",
        },
      ],
    };
  },
  watch: {
    optionsTableReports: {
      handler() {
        console.log("trigger change options table reports");
      },
      deep: true,
    },
  },
  computed: {
    reports() {
      return this.$store.state.plb.reports;
    },
    optionsTableReports: {
      get() {
        return this.$store.state.plb.optionsTableReports;
      },
      set(val) {
        this.$store.commit("SET_OPTIONS_TABLE_REPORTS", val);
      },
    },
  },
  methods: {
    handleOpenBuatBaru() {
      this.dialogBuatBaruPLB = true;
      this.isEdit = false;
    },
    handleCloseBuatBaru() {
      this.dialogBuatBaruPLB = false;
      this.isEdit = false;
    },
    handleOpenView(item) {
      this.dialogView = true;
      this.$store.commit("SET_NOTIFICATION_TYPE", item.jenisPemberitahuan);
      this.$store.commit("SET_REPORT_ID", item.id);
    },
    handleCloseView() {
      this.dialogView = false;
      this.$store.commit("SET_NOTIFICATION_TYPE", "");
      this.$store.commit("SET_REPORT_ID", "");
    },
  },
  created() {
    this.$store.dispatch("getAllPlb");
  },
};
</script>

<style lang="scss" scoped></style>
