<template>
  <v-card>
    <v-form ref="initialReport" @submit.prevent="handleSubmit">
      <v-card-title>
        <v-row no-gutters align-content="center">
          <v-col cols="10">
            <span class="headline font-weight-bold">Purchase Order Baru</span>
          </v-col>
          <!-- <span style="cursor: pointer" @click.prevent="handleCloseDialog"
          ><v-icon>mdi-close</v-icon></span
        > -->
          <v-col cols="2">
            <div class="d-flex">
              <button
                @click="handleCloseDialog"
                class="mx-2 it-inventory-btn it-inventory-btn__fw it-inventory-btn__grey"
              >
                Batal
              </button>
              <button
                class="mx-2 it-inventory-btn it-inventory-btn__fw it-inventory-btn__green"
              >
                Simpan
              </button>
            </div>
          </v-col>
        </v-row>
      </v-card-title>
      <v-card-text class="mt-10">
        <v-container fluid>
          <v-row no-gutters width="100%">
            <v-col lg="5">
              <v-row no-gutters>
                <v-col cols="4">
                  <div class="mt-2">Kapal Penjual</div>
                </v-col>
                <v-col cols="7">
                  <v-select
                    outlined
                    dense
                    v-model="kapalPenjual"
                    :items="kapalPenjual"
                    ref="kapalPenjual"
                    item-text="namaKapal"
                    v-on:change="
                      getBarangAfterChoosingKapalPenjual(...kapalPenjual)
                    "
                    placeholder="Value"
                    :rules="[
                      (value) => {
                        return genericRequiredRule(value, 'Kapal Penjual');
                      },
                    ]"
                  ></v-select>
                </v-col>
              </v-row>
            </v-col>

            <v-col cols="5">
              <v-row no-gutters>
                <v-col cols="4">
                  <div class="mt-2">Tanggal</div>
                </v-col>
                <v-col cols="7">
                  <v-menu
                    v-model="tanggalpicker"
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
                        v-model="tanggalPurchaseOrder"
                        outlined
                        clearable
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="tanggalPurchaseOrder"
                      scrollable
                      no-title
                      @input="tanggalpicker = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <v-row no-gutters width="100%">
            <v-col lg="5">
              <v-row no-gutters>
                <v-col cols="4">
                  <div class="mt-2">No. Purchase Order</div>
                </v-col>
                <v-col cols="7">
                  <v-text-field
                    outlined
                    dense
                    v-model="nomorPO"
                    placeholder="value"
                    :rules="[
                      (value) => {
                        return genericRequiredRule(
                          value,
                          'Nomor Purchase Order'
                        );
                      },
                    ]"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <v-row no-gutters class="mt-5">
            <v-col cols="2" style="padding: 0 1em 0 0;">Kode Barang</v-col>
            <v-col cols="5" style="padding: 0 1em;">Item Deskripsi</v-col>
            <v-col cols="1" style="padding: 0 0 0 1em;">Satuan Kemasan</v-col>
            <v-col cols="1" style="padding: 0 1em;">Quantity</v-col>
            <v-col cols="1" style="padding: 0 1em;">Harga Satuan</v-col>
            <v-col cols="1" style="padding: 0 0 0 1em;">Jumlah</v-col>
          </v-row>
          <div class="mt-5"></div>
          <div v-for="(input, k) in ListPurchaseOrderItem" :key="k">
            <v-row no-gutters>
              <v-col cols="2" style="padding: 0 1em 0 0;">
                <v-select
                  outlined
                  dense
                  :items="dataBarang"
                  v-model="input.kodeBarang"
                  item-text="kodeBarang"
                  placeholder="Pilih Kode Barang"
                  @change="idDataBarang(...dataBarang)"
                  :rules="[
                    (value) => {
                      return genericRequiredRule(value, 'Kode Barang');
                    },
                  ]"
                ></v-select>
              </v-col>
              <v-col cols="5" style="padding: 0 1em;">
                <v-text-field
                  outlined
                  dense
                  v-model="input.itemDeskripsi"
                  readonly
                  placeholder="Tulis Deskripsi"
                ></v-text-field>
              </v-col>
              <v-col cols="1" style="padding: 0 1em;">
                <v-text-field
                  outlined
                  dense
                  v-model="input.satuanKemasan"
                  readonly
                  placeholder="Barel"
                ></v-text-field>
              </v-col>
              <v-col cols="1" style="padding: 0 1em;">
                <v-text-field
                  outlined
                  dense
                  v-model="input.quantity"
                  @change="hitungJumlah()"
                  placeholder="0"
                  type="number"
                  default="0"
                  :rules="[
                    (value) => {
                      return genericRequiredRule(value, 'Quantity');
                    },
                  ]"
                ></v-text-field>
              </v-col>
              <v-col cols="1" style="padding: 0 0 0 1em;">
                <v-text-field
                  outlined
                  dense
                  v-model="input.hargaSatuan"
                  @change="hitungJumlah()"
                  placeholder="0"
                  type="number"
                  :rules="[
                    (value) => {
                      return genericRequiredRule(value, 'Harga Satuan');
                    },
                  ]"
                ></v-text-field>
              </v-col>
              <v-col cols="1" style="padding: 0 0 0 1em;">
                <v-text-field
                  outlined
                  dense
                  readonly
                  v-model="input.jumlah"
                  placeholder="0"
                  type="number"
                ></v-text-field>
              </v-col>
              <v-col
                cols="1"
                style="padding: 0 0 0 1em;"
                class="delete-container"
              >
                <div
                  @click.prevent="remove(k)"
                  v-show="k || (!k && ListPurchaseOrderItem.length > 1)"
                >
                  <Icon icon="octicon:trash-24" class="delete-icon" />
                </div>
              </v-col>
            </v-row>
          </div>

          <v-spacer></v-spacer>
          <v-row no-gutters>
            <button
              @click.prevent="add"
              style="background-color: #F8F8F8; border-radius: 1em; padding: 0.5em 1em 0.5em 0.8em; display: flex; align-items: center;"
            >
              <img
                style="filter: brightness(4.8);"
                src="@/assets/icons/ic_plus.svg"
              />
              <span style="padding: 0 0 0 0.5em;"> Tambah Item</span>
            </button>
          </v-row>
        </v-container>
        <v-card-actions height="100%">
          <v-row no-gutters justify="space-between">
            <v-col cols="3">
              Remarks
              <v-text-field
                outlined
                dense
                v-model="remarks"
                placeholder="Remarks"
                :rules="[
                  (value) => {
                    return genericRequiredRule(value, 'Remarks');
                  },
                ]"
              ></v-text-field>
            </v-col>
            <v-col cols="3" style="background: #F8F8F8; padding: 0.5em 0.3em;">
              Jumlah Total
              <div
                style="font-size: 1.25em; display: flex; justify-content: space-between; padding: 0.5em;"
              >
                <strong>TOTAL</strong>
                <strong>{{ jumlahTotal }}</strong>
              </div>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card-text>
    </v-form>
  </v-card>
</template>

<script>
import { FieldRequired } from "@/mixins/ValidationRules";
import { Icon } from "@iconify/vue2";
export default {
  name: "FormPO",
  mixins: [FieldRequired],
  components: {
    Icon,
  },
  data() {
    return {
      tanggalpicker: "",
      namaKapal: [],
    };
  },

  computed: {
    reportId: {
      get() {
        return this.$store.state.po.PurchaseOrder.reportId;
      },
      set(value) {
        this.$store.commit("SET_PURCHASE_ORDER", {
          key: "reportId",
          value,
        });
      },
    },
    kapalPenjual: {
      get() {
        return this.$store.state.po.kapalPenjual;
      },
      set(value) {
        this.$store.commit("SET_PURCHASE_ORDER", {
          key: "kapalPenjual",
          value,
        });
      },
    },
    nomorPO: {
      get() {
        return this.$store.state.po.PurchaseOrder.nomorPO;
      },
      set(value) {
        this.$store.commit("SET_PURCHASE_ORDER", {
          key: "nomorPO",
          value,
        });
      },
    },
    tanggalPurchaseOrder: {
      get() {
        return this.$store.state.po.PurchaseOrder.tanggalPurchaseOrder;
      },
      set(value) {
        this.$store.commit("SET_PURCHASE_ORDER", {
          key: "tanggalPurchaseOrder",
          value,
        });
      },
    },
    ListPurchaseOrderItem: {
      get() {
        return this.$store.state.po.ListPurchaseOrderItem;
      },
      set(value) {
        this.$store.commit("SET_PURCHASE_ORDER_ITEM", {
          key: "ListPurchaseOrderItem",
          value,
        });
      },
    },
    jumlahTotal: {
      get() {
        return this.$store.state.po.PurchaseOrder.jumlahTotal;
      },
      set(value) {
        this.$store.commit("SET_PURCHASE_ORDER", {
          key: "jumlahTotal",
          value,
        });
      },
    },
    remarks: {
      get() {
        return this.$store.state.po.PurchaseOrder.remarks;
      },
      set(value) {
        this.$store.commit("SET_PURCHASE_ORDER", {
          key: "remarks",
          value,
        });
      },
    },
    dataBarang() {
      return this.$store.state.po.dataBarang;
    },
  },
  methods: {
    // Handle Close Dialog and Submit

    handleCloseDialog() {
      this.$emit("handleBuatBaru");
      this.resetData();
    },
    resetData() {
      this.$refs.kapalPenjual.reset();
      this.$store.commit("RESET_PURCHASE_ORDER", {
        reportId: "",
        kapalPenjual: "",
        nomorPO: "",
        tanggalPurchaseOrder: "",
        remarks: "",
        jumlahTotal: 0,
      });
      let value = this.$store.state.po.ListPurchaseOrderItem;
      for (let i = 0; i < value.length; i++) {
        this.ListPurchaseOrderItem[i].idBarang = "";
        this.ListPurchaseOrderItem[i].kodeBarang = "";
        this.ListPurchaseOrderItem[i].itemDeskripsi = "";
        this.ListPurchaseOrderItem[i].satuanKemasan = "";
        this.ListPurchaseOrderItem[i].quantity = "";
        this.ListPurchaseOrderItem[i].hargaSatuan = "";
        this.ListPurchaseOrderItem[i].jumlah = "";
      }
      this.ListPurchaseOrderItem.splice(1);
    },
    handleSubmit() {
      const getRef = this.$refs.initialReport.validate();
      if (getRef) {
        this.$store.dispatch("addPo").then((result) => {
          if (result) {
            this.handleCloseDialog();
          }
        });
      } else {
        return false;
      }
    },

    // Data Barang

    getBarangAfterChoosingKapalPenjual(kapalPenjual) {
      this.reportId = kapalPenjual.id;
      this.$store.dispatch(
        "getBarangAfterChoosingKapalPenjual",
        kapalPenjual.idKapal
      );
      console.log(kapalPenjual.idKapal);
    },
    idDataBarang(dataBarang) {
      let value = this.$store.state.po.ListPurchaseOrderItem;
      for (let i = 0; i < value.length; i++) {
        this.ListPurchaseOrderItem[i].idBarang = dataBarang.id;
        this.ListPurchaseOrderItem[i].itemDeskripsi = dataBarang.uraian;
        this.ListPurchaseOrderItem[i].satuanKemasan = dataBarang.satuanKemasan;
      }
    },
    hitungJumlah() {
      let value = this.$store.state.po.ListPurchaseOrderItem;
      let result = 0;
      for (let i = 0; i < value.length; i++) {
        let quantity = parseInt(value[i].quantity);
        let hargaSatuan = parseInt(value[i].hargaSatuan);

        result = quantity * hargaSatuan;
        this.ListPurchaseOrderItem[i].jumlah = result;
      }

      this.hitungJumlahTotal();
    },

    // Increment Data Barang

    add() {
      this.ListPurchaseOrderItem.push({
        kodeBarang: "",
        itemDeskripsi: "",
        satuanKemasan: "",
        quantity: "",
        hargaSatuan: "",
        jumlah: "",
      });
    },
    remove(index) {
      this.ListPurchaseOrderItem.splice(index, 1);
    },

    // Jumlah Total

    hitungJumlahTotal() {
      let value = this.$store.state.po.ListPurchaseOrderItem;
      let result = 0;
      for (let i = 0; i < value.length; i++) {
        result += parseInt(value[i].jumlah);
      }
      if (isNaN(result)) {
        result = 0;
      }
      this.jumlahTotal = result;
    },
  },
  created() {
    this.$store.dispatch("fetchKapalPenjual");
  },
};
</script>

<style lang="scss" scoped>
.delete-icon {
  font-size: 1.5em;
  cursor: pointer;
}
.delete-icon:hover {
  color: #000;
}
.delete-container {
  padding: 0.5em !important;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
