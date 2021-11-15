<template>
    <div>
        <!-- Page subtitle and create new button -->
        <v-row no-gutters align="center">
            <v-col cols="11">
                <div class="display-1 font-weight-bold">
                    Purchase Order
                </div>
            </v-col>
            <v-col cols="1">
                <button @click="handleBuatBaru" class="it-inventory-btn it-inventory-btn__fw it-inventory-btn__blue">
                    Buat Baru
                </button>
            </v-col>
        </v-row>

        <!-- Search bar and button  -->
        <v-row no-gutters class="mt-2">
            <v-col lg="3">
                <v-text-field placeholder="Cari" class="it-inventory-search-list-kapal">
                    <template slot="prepend-inner">
                        <Icon icon="akar-icons:search" class="mr-2" style="font-size: 1.5rem" />
                    </template>
                </v-text-field>
            </v-col>
        </v-row>

        <!-- Data Tables  -->
        <div class="it-inventory-box mt-2">
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
        <template v-slot:[`item.action`]>
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
              <v-list-item>
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

        <!-- Form Buat PO Baru Dialog -->
        <v-dialog
            v-model="dialogBuatBaruPO"
            persistent
            width="50%"
            max-width="1200px" >
            <form-report @handleBuatBaru="handleBuatBaru" />
        </v-dialog>
    </div>
</template>

<script>
import { Icon } from "@iconify/vue2";
    export default {
        name: "TablePO",
        components: {
            Icon,
            FormReport: () => import("@/components/po/FormReport")
        },
        data() {
            return {
                dialogBuatBaruPO: false,
                headers: [
                    {
                    text: "No",
                    value: "no",
                    },
                    {
                    text: "Tanggal",
                    value: "tanggal",
                    },
                    {
                    text: "Jenis Pemberitahuan",
                    value: "jenis_pemberitahuan",
                    },
                    {
                    text: "Jenis Dokumen",
                    value: "jenis_dokumen",
                    },
                    {
                    text: "Nomor Dokumen",
                    value: "nomor_dokumen",
                    },
                    {
                    text: "Voyage Kapal",
                    value: "voyage_kapal",
                    },
                    {
                    text: "Nama Kapal",
                    value: "nama_kapal",
                    },
                    {
                    text: "Bendera",
                    value: "bendera",
                    },
                    {
                    text: "Actions",
                    value: "action",
                    },
                ],
            }
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
            handleBuatBaru() {
                this.dialogBuatBaruPO = !this.dialogBuatBaruPO;
                console.log(this.dialogBuatBaruPO)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>