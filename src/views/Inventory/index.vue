<template>
  <div>
    <!-- Page subtitle and create new button -->
    <v-row no-gutters align="center">
      <v-col cols="11">
        <div class="display-1 font-weight-bold">
          Inventory
        </div>
      </v-col>
    </v-row>

    <!-- Search bar and button  -->
    <v-row no-gutters class="mt-2">
      <v-col lg="3">
        <v-text-field placeholder="Cari" class="it-inventory-search-list-kapal">
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
        :items="reports.data"
        :options.sync="optionsTableReports"
        :server-items-length="reports.data_size"
        :single-expand="singleExpand"
        :expanded.sync="expanded"
        @click:row="(item, slot) => slot.expand(!slot.isExpanded)"
        no-data-text="Data not available"
        no-results-text="Data not available"
        class="it-inventory-simple-table"
      >
        <template v-slot:expanded-item="{ headers, item }">
          <td :colspan="headers.length" class="collapsable">
            <table class="table-header">
              <tr>
                <th>Kode Barang</th>
                <th>Nama Barang</th>
                <th>Item Deskripsi</th>
                <th>Satuan Kemasan</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </table>

            <table v-for="(details, index) in item.details" :key="index">
              <tr>
                <td>{{ details.kode_barang }}</td>
                <td>{{ details.nama_barang }}</td>
                <td>{{ details.item_deskripsi }}</td>
                <td>{{ details.satuan_kemasan }}</td>
                <td>{{ details.quantity }}</td>
                <td>
                  <template>
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
                            <img
                              style="filter: brightness(4.8);"
                              src="@/assets/icons/ic_produce.svg"
                            />
                            <span style="padding-left: 0.5em;">Adjustment</span>
                          </v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="handleViewPurchaseOrder">
                          <v-list-item-title>
                            <img
                              style="filter: brightness(4.8);"
                              src="@/assets/icons/ic_produce.svg"
                            />
                            <span style="padding-left: 0.5em;"
                              >Inventory Card</span
                            >
                          </v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </template>
                </td>
              </tr>
            </table>
          </td>
        </template>

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
                @click="pilihProduksiBarang"
              >
                <!-- Actions -->
                <img
                  style="filter: brightness(4.8);"
                  src="@/assets/icons/ic_produce.svg"
                />
                <span style="padding-left: 0.5em;">Produksi Barang</span>
              </v-btn>
            </template>
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
      max-width="45%"
    >
      <form-po @handleBuatBaru="handleBuatBaru" />
    </v-dialog>

    <v-dialog
      v-model="dialogPurchaseOrderView"
      persistent
      width="100%"
      @click:outside="handleViewPurchaseOrder"
      max-width="70%"
    >
      <purchase-order-view
        :data="items"
        @handleBuatBaru="handleViewPurchaseOrder"
      />
    </v-dialog>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue2';
export default {
  name: 'TablePO',
  components: {
    Icon,
    FormPo: () => import('@/components/inventory/FormAdjustment'),
    PurchaseOrderView: () => import('@/components/inventory/InventoryCard')
  },
  data() {
    return {
      dialogBuatBaruPO: false,
      dialogPurchaseOrderView: false,
      expanded: [],
      singleExpand: true,
      isExpanded: false,
      headers: [
        {
          text: 'Voyage Kapal',
          value: 'voyage'
        },
        {
          text: 'Nama Kapal',
          value: 'tanggal'
        },
        {
          text: 'Jenis Dokumen',
          value: 'kapal_pemilik'
        },
        {
          text: 'Bendera',
          value: 'kapal_pembeli'
        },
        {
          text: 'Actions',
          value: 'action',
          width: '17.5%'
        }
      ],
      items: [
        {
          id: 1,
          inventoryType: 'Adjustment Stock',
          tanggal: '01-01-2021',
          nomorDokumen: '1009867848485757575',
          quantity: '1.200',
          balance: '48.360'
        },
        {
          id: 2,
          inventoryType: 'Dokumen PO',
          tanggal: '01-01-2021',
          nomorDokumen: '1009867848485757575',
          quantity: '1.200',
          balance: '48.360'
        },
        {
          id: 3,
          inventoryType: 'Dokumen Pemasukan',
          tanggal: '01-01-2021',
          nomorDokumen: '1009867848485757575',
          quantity: '1.200',
          balance: '48.360'
        }
      ]
    };
  },
  watch: {
    optionsTableReports: {
      handler() {
        console.log('trigger change options table reports');
      },
      deep: true
    }
  },
  computed: {
    reports() {
      return this.$store.state.inventory.reports;
    },
    optionsTableReports: {
      get() {
        return this.$store.state.inventory.optionsTableReports;
      },
      set(val) {
        this.$store.commit('SET_OPTIONS_TABLE_REPORTS', val);
      }
    }
  },
  methods: {
    handleBuatBaru() {
      this.dialogBuatBaruPO = !this.dialogBuatBaruPO;
    },
    handleViewPurchaseOrder() {
      this.dialogPurchaseOrderView = !this.dialogPurchaseOrderView;
    },
    pilihProduksiBarang() {
      this.$router.push({ name: 'ProduksiBarang', params: { id: 1 } });
    }
  }
};
</script>

<style lang="scss" scoped>
table {
  border-collapse: collapse;
  border: 1px solid gray;
  width: 100%;
  table-layout: fixed;
  text-align: left;
}
td,
th {
  border: 1px solid gray !important;
  padding: 0.5em 1em !important;
}

th {
  color: #848484;
}

.collapsable {
  padding: 1.5em 1em !important;
}
</style>
