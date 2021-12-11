<template>
    <div>
        <!-- Page subtitle and create new button -->
        <v-row no-gutters align="center">
            <v-col cols="11">
                <div class="display-1 font-weight-bold">
                    LAPORAN PEMASUKAN BARANG
                </div>
            </v-col>
            <v-col cols="11" class="mt-6">
                <div class="font-weight-bold">
                    PERIODE TANGGAL
                </div>
            </v-col>
        </v-row>

        <!-- date button  -->
        <div class="d-flex flex-row mt-4">
            <v-col cols="1" class="pl-0">
                <div class="mt-2">Periode</div>
            </v-col>

            <v-col cols="3">
            <v-menu
                v-model="tanggal"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                min-width="auto"
            >
                <template v-slot:activator="{ on, attrs }">
                <v-text-field
                    prepend-inner-icon="mdi-calendar-month-outline"
                    append-icon="mdi-chevron-down"
                    placeholder="Pilih Tanggal"
                    dense
                    outlined
                    clearable
                    v-bind="attrs"
                    v-on="on"
                ></v-text-field>
                </template>
                <v-date-picker
                scrollable
                no-title
                @input="tanggal = false"
                ></v-date-picker>
            </v-menu>
            </v-col>
    
            <!-- <v-icon right>
                mdi-chevron-right
            </v-icon> -->

            <v-col cols="3">
                <v-menu
                    v-model="tanggal"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    min-width="auto"
                >
                    <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        prepend-inner-icon="mdi-calendar-month-outline"
                        append-icon="mdi-chevron-down"
                        placeholder="Pilih Tanggal"
                        dense
                        outlined
                        clearable
                        v-bind="attrs"
                        v-on="on"
                    ></v-text-field>
                    </template>
                    <v-date-picker
                    scrollable
                    no-title
                    @input="tanggal = false"
                    ></v-date-picker>
                </v-menu>
            </v-col>

            <v-col cols="1">
                <button class="it-inventory-btn it-inventory-btn__fw it-inventory-btn__green">
                    Tampilkan
                </button>
            </v-col>
        </div>

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
                    <v-list-item @click="handleViewPurchaseOrder">
                        <v-list-item-title>
                        <Icon
                            icon="fluent:apps-list-detail-20-regular"
                            class="v-icon--left it-inventory-action-list__icon"
                        />
                        View
                        </v-list-item-title>
                    </v-list-item>
                    <!-- <v-list-item>
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
                    </v-list-item> -->
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

        <v-dialog
            persistent
            width="100%"
            max-width="70%" >
            <income-table-view />
        </v-dialog>
    </div>
</template>

<script>
import { Icon } from "@iconify/vue2";
    export default {
        name: "TableIncome",
        components: {
            Icon,
            IncomeTableView: () => import("@/components/laporan/IncomeTableView"),
        },
        data() {
            return {
                headers: [
                    {
                    text: "No",
                    value: "nomor",
                    },
                    {
                    text: "Tanggal",
                    value: "tanggal",
                    },
                    {
                    text: "Jenis Pemberitahuan",
                    value: "Jenis",
                    },
                    {
                    text: "Jenis Dokumen",
                    value: "Doc",
                    },
                    {
                    text: "Nomor Dokumen",
                    value: "Doc Numb",
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
            tanggal: {
                get() {
                    return this.$store.state.po.po_baru.tanggal;
                },
                set(value) {
                    this.$store.commit("SET_PO_BARU", {
                    key: "tanggal",
                    value,
                    });
                },
            },
            reports() {
            return this.$store.state.po.reports;
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
    }
</script>

<style lang="scss" scoped>

</style>