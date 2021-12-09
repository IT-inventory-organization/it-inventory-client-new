<template>
    <div>
        <!-- Page subtitle and create new button -->
        <v-row no-gutters align="center">
            <v-col cols="11">
                <div class="display-1 font-weight-bold">
                    Produksi Barang
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
                {{ props.index + 2 }}
                </template>
                <template v-slot:item.jumlah="{ item }">
                    {{item.details.length}}
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
                        <v-list-item @click="handleBuatBaru">
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
                                icon="fluent:apps-list-detail-20-regular"
                                class="v-icon--left it-inventory-action-list__icon"
                            />
                            View
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
            width="100%"
            @click:outside="handleBuatBaru"
            max-width="95%" >
            <form-po @handleBuatBaru="handleBuatBaru" />
        </v-dialog>

        <v-dialog
            v-model="dialogPurchaseOrderView"
            persistent
            width="100%"
            @click:outside="handleViewPurchaseOrder"
            max-width="70%" >
            <purchase-order-view @handleBuatBaru="handleViewPurchaseOrder" />
        </v-dialog>
    </div>
</template>

<script>
import { Icon } from "@iconify/vue2";
    export default {
        name: "ProduksiBarang",
        components: {
            Icon,
            FormPo: () => import("@/components/inventory/ProduksiBarang/FormProduksiBarang"),
            PurchaseOrderView: () => import("@/components/po/PurchaseOrderView"),
        },
        data() {
            return {
                dialogBuatBaruPO: false,
                dialogPurchaseOrderView: false,
                headers: [
                    {
                        text: "No. Produksi",
                        value: "nomorProduksi",
                    },
                    {
                        text: "Tanggal",
                        value: "tanggalProduksi",
                    },
                    {
                        text: "Item Deskripsi",
                        value: "remarks",
                    },
                    {
                        text: "Quantity",
                        value: "quantity",
                    },
                    {
                        text: "Jumlah",
                        value: "jumlah",
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
                return this.$store.state.ProduksiBarang.reports;
            },
            optionsTableReports: {
            get() {
                return this.$store.state.po.optionsTableReports;
            },
            set(val) {
                this.$store.commit("SET_OPTIONS_TABLE_REPORTS", val);
            },
            },
        },
        methods: {
            handleBuatBaru() {
                this.dialogBuatBaruPO = !this.dialogBuatBaruPO;
            },
            handleViewPurchaseOrder() {
                this.dialogPurchaseOrderView = !this.dialogPurchaseOrderView;
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>