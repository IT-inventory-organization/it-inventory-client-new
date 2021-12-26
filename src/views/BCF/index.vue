<template>
  <div>
    <!-- Page subtitle and create new button -->
    <v-row no-gutters align="center">
      <v-col cols="11">
        <div class="display-1 font-weight-bold">BCF 3.3.15</div>
      </v-col>
      <v-col cols="1">
        <button
          @click="handleBuatBaru"
          class="it-inventory-btn it-inventory-btn__fw it-inventory-btn__blue"
        >
          Buat Baru
        </button>
      </v-col>
    </v-row>

    <!-- Search bar and button  -->
    <v-row no-gutters class="mt-2">
      <v-col lg="3">
        <v-text-field
          v-model="optionsTableListBCF.search"
          placeholder="Cari"
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

    <!-- Data Tables  -->
    <div class="it-inventory-box mt-2">
      <v-data-table
        :headers="headers"
        :options.sync="optionsTableListBCF"
        :items="listBCF.rows"
        :loading="loadingViewList || loadingDeleteBCF"
        :search="optionsTableListBCF.search"
        no-data-text="Data not available"
        no-results-text="Data not available"
        class="it-inventory-simple-table"
      >
        <template v-slot:[`item.no`]="props">
          {{ props.index + 1 }}
        </template>

        <template v-slot:[`item.status`]="{ item }">
          <status-list-table :status="item.status" />
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
                <v-icon right> mdi-chevron-down </v-icon>
              </v-btn>
            </template>

            <v-list class="it-inventory-actions-list">
              <v-list-item @click="handleViewBCF(item.id)">
                <v-list-item-title>
                  <Icon
                    icon="fluent:apps-list-detail-20-regular"
                    class="v-icon--left it-inventory-action-list__icon"
                  />
                  View
                </v-list-item-title>
              </v-list-item>
              <v-list-item @click="handleViewBCF3314(item.id)">
                <v-list-item-title>
                  <Icon
                    icon="fluent:apps-list-detail-20-regular"
                    class="v-icon--left it-inventory-action-list__icon"
                  />
                  View BCF 3.3.14
                </v-list-item-title>
              </v-list-item>
              <v-list-item @click="handleEditFormBCF(item.id)">
                <v-list-item-title>
                  <Icon
                    icon="ph:pencil-line-light"
                    class="v-icon--left it-inventory-action-list__icon"
                  />
                  Edit
                </v-list-item-title>
              </v-list-item>
              <v-list-item @click="handleDelete(item.id)">
                <v-list-item-title>
                  <Icon
                    icon="octicon:trash-24"
                    class="v-icon--left it-inventory-action-list__icon"
                  />
                  Delete
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>
                  <Icon
                    icon="fluent:print-24-regular"
                    class="v-icon--left it-inventory-action-list__icon"
                  />
                  Print
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </v-data-table>
    </div>

    <!-- Form Buat BCF Baru Dialog -->
    <v-dialog
      v-model="dialogBuatBaruBCF"
      persistent
      width="100%"
      max-width="95%"
    >
      <form-bcf
        v-if="dialogBuatBaruBCF"
        @handleBuatBaru="handleBuatBaru"
        :isBCFEdit="isBCFEdit"
      />
    </v-dialog>

    <v-dialog v-model="dialogBCFView" persistent width="100%" max-width="70%">
      <bcf-view @handleViewBCF="handleViewBCF" />
    </v-dialog>

    <v-dialog
      v-model="dialogBCF3314View"
      persistent
      width="100%"
      max-width="70%"
    >
      <bcf-3314-view @handleViewBCF3314="handleViewBCF3314" />
    </v-dialog>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue2";
export default {
  name: "TableBCF",
  components: {
    Icon,
    FormBcf: () => import("@/components/bcf/FormBCF"),
    BcfView: () => import("@/components/bcf/BCFView"),
    Bcf3314View: () => import("@/components/bcf/BCF3314View"),
    StatusListTable: () => import("@/components/StatusListTable"),
  },
  data() {
    return {
      dialogBuatBaruBCF: false,
      dialogBCFView: false,
      dialogBCF3314View: false,
      isBCFEdit: false,
      headers: [
        {
          text: "Exportir/Pengusaha PLB/PDPLB",
          value: "nama",
        },
        {
          text: "Nomor PO",
          value: "nomorPO",
        },
        {
          text: "Tanggal",
          value: "tanggal",
        },
        {
          text: "Nomor",
          value: "nomorFormBcf3315",
        },
        {
          text: "Status",
          value: "status",
        },
        {
          text: "Actions",
          value: "action",
        },
      ],
    };
  },
  watch: {
    optionsTableListBCF: {
      handler() {},
      deep: true,
    },
  },
  computed: {
    loadingDeleteBCF() {
      return this.$store.state.bcf.loading.loadingDeleteBCF;
    },
    loadingViewList() {
      return this.$store.state.bcf.loading.loadingViewList;
    },
    listBCF() {
      return this.$store.state.bcf.listBCF;
    },
    optionsTableListBCF: {
      get() {
        return this.$store.state.bcf.optionsTableListBCF;
      },
      set(val) {
        this.$store.commit("bcf/SET_OPTIONS_TABLE_LIST_BCF", val);
      },
    },
  },
  methods: {
    handleBuatBaru() {
      this.dialogBuatBaruBCF = !this.dialogBuatBaruBCF;
      this.isBCFEdit = false;
    },
    handleViewBCF(id) {
      this.dialogBCFView = !this.dialogBCFView;
      (async () => {
        await this.$store.commit("bcf/SET_BCF_ID", id);
        await this.$store.dispatch("bcf/getOneBCF3315");
      })();
    },
    handleViewBCF3314(id) {
      this.dialogBCF3314View = !this.dialogBCF3314View;
      (async () => {
        await this.$store.commit("bcf/SET_BCF_ID", id);
        await this.$store.dispatch("bcf/getOneBCF3314");
      })();
    },
    handleEditFormBCF(id) {
      this.dialogBuatBaruBCF = !this.dialogBuatBaruBCF;
      this.isBCFEdit = !this.isBCFEdit;
      (async () => {
        await this.$store.commit("bcf/SET_BCF_ID", id);
        await this.$store.dispatch("bcf/getOneBCF");
      })();
    },
    handleDelete(id) {
      this.$store.dispatch("bcf/deleteListBCF", id).then((result) => {
        if (result.success) {
          this.$swal.fire("Berhasil!", result.message, "success");
          this.$store.dispatch("bcf/fetchGetAllBCF");
        } else {
          this.$swal.fire("Gagal!", result.message, "error");
        }
      });
    },
  },
  created() {
    this.$store.dispatch("bcf/fetchGetAllBCF");
  },
};
</script>

<style lang="scss" scoped></style>
