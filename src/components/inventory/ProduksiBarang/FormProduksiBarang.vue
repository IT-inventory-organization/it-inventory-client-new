<template>
  <v-card height="85vh">
    <v-card-title>
      <v-row no-gutters align-content="center">
        <v-col cols="10">
          <span class="headline font-weight-bold">Barang Produksi</span>
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
    <v-card-text>
      <v-form ref="initialReport" @submit.prevent="handleSubmit">
        <v-container fluid>
          <v-row no-gutters width="100%">
            <v-col lg="5">
              <v-row no-gutters>
                <v-col cols="4">
                  <div class="mt-2">Nomor Produksi</div>
                </v-col>
                <v-col cols="7">
                  <v-text-field
                    outlined
                    dense
                    v-model="kapalPemilik"
                    placeholder="value"
                    :rules="[
                      value => {
                        return genericRequiredRule(value, 'Nomor Produksi');
                      }
                    ]"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-col>

            <v-col cols="5">
              <v-row no-gutters>
                <v-col cols="4">
                  <div class="mt-2">Tanggal Produksi</div>
                </v-col>
                <v-col cols="7">
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
              </v-row>
            </v-col>
          </v-row>

          <v-row no-gutters width="100%">
            <v-col lg="5">
              <v-row no-gutters>
                <v-col cols="4">
                  <div class="mt-2">Hasil Barang</div>
                </v-col>
                <v-col cols="7">
                  <v-text-field
                    outlined
                    dense
                    v-model="kapalPembeli"
                    placeholder="value"
                    :rules="[
                      value => {
                        return genericRequiredRule(value, 'Hasil Barang');
                      }
                    ]"
                  ></v-text-field>
                </v-col>
                <v-col cols="1">
                  <button class="mt-2 ml-2">
                    <img
                      style="filter: brightness(4.8);"
                      src="@/assets/icons/ic_plus.svg"
                    />
                  </button>
                </v-col>
              </v-row>
            </v-col>

            <v-col cols="5">
              <v-row no-gutters> </v-row>
            </v-col>
          </v-row>

          <v-row no-gutters width="100%">
            <v-col lg="5">
              <v-row no-gutters>
                <v-col cols="4">
                  <div class="mt-2">Quantity</div>
                </v-col>
                <v-col cols="7">
                  <v-text-field
                    outlined
                    dense
                    v-model="kapalPembeli"
                    placeholder="value"
                    :rules="[
                      value => {
                        return genericRequiredRule(value, 'Quantity');
                      }
                    ]"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-col>

            <v-col cols="5">
              <v-row no-gutters> </v-row>
            </v-col>
          </v-row>

          <v-row no-gutters>
            <v-col cols="2" style="padding: 0 1em 0 0;">Kode Barang</v-col>
            <v-col cols="5" style="padding: 0 1em;">Item Deskripsi</v-col>
            <v-col cols="2" style="padding: 0 1em;">Quantity</v-col>
            <v-col cols="2" style="padding: 0 0 0 1em;">Jumlah</v-col>
          </v-row>
          <div v-for="(input, k) in inputs" :key="k">
            <v-row no-gutters>
              <v-col cols="2" style="padding: 0 1em 0 0;">
                <v-select
                  outlined
                  dense
                  v-model="input.kode_barang"
                  placeholder="Pilih Kode Barang"
                  :rules="[
                    value => {
                      return genericRequiredRule(value, 'Kode Barang');
                    }
                  ]"
                ></v-select>
              </v-col>
              <v-col cols="5" style="padding: 0 1em;">
                <v-text-field
                  outlined
                  dense
                  v-model="input.item_deskripsi"
                  placeholder="Tulis Deskripsi"
                  :rules="[
                    value => {
                      return genericRequiredRule(value, 'Item Deskripsi');
                    }
                  ]"
                ></v-text-field>
              </v-col>
              <v-col cols="2" style="padding: 0 1em;">
                <v-text-field
                  outlined
                  dense
                  v-model="inputs.quantity"
                  placeholder="Barel"
                  :rules="[
                    value => {
                      return genericRequiredRule(value, 'Quantity');
                    }
                  ]"
                ></v-text-field>
              </v-col>
              <v-col cols="2" style="padding: 0 0 0 1em;">
                <v-text-field
                  outlined
                  dense
                  v-model="inputs.jumlah"
                  placeholder="0"
                  type="number"
                  :rules="[
                    value => {
                      return genericRequiredRule(value, 'Jumlah');
                    }
                  ]"
                ></v-text-field>
              </v-col>
              <v-col
                cols="1"
                style="padding: 0 0 0 1em;"
                class="delete-container"
              >
                <div
                  @click.prevent="remove(k)"
                  v-show="k || (!k && inputs.length > 1)"
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
                  value => {
                    return genericRequiredRule(value, 'Remarks');
                  }
                ]"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-actions>
        <!-- <v-card-actions>
          <v-spacer></v-spacer>
          <button type="submit" class="btn_save">
            <span>Selanjutnya</span>
            <img src="@/assets/icons/ic_bulletnext.svg" />
          </button>
        </v-card-actions> -->
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { FieldRequired } from '@/mixins/ValidationRules';
import { Icon } from '@iconify/vue2';
export default {
  name: 'FormProduksiBarang',
  mixins: [FieldRequired],
  components: {
    Icon
  },
  data() {
    return {
      inputs: [
        {
          kode_barang: '',
          item_deskripsi: '',
          quantity: '',
          harga_satuan: '',
          jumlah: ''
        }
      ],
      remarks: ''
    };
  },
  computed: {
    kapalPemilik: {
      get() {
        return this.$store.state.po.po_baru.kapal_pemilik;
      },
      set(value) {
        this.$store.commit('SET_PO_BARU', {
          key: 'kapal_pemilik',
          value
        });
      }
    },
    noPurchaseOrder: {
      get() {
        return this.$store.state.po.po_baru.no_purchase_order;
      },
      set(value) {
        this.$store.commit('SET_PO_BARU', {
          key: 'no_purchase_order',
          value
        });
      }
    },
    kapalPembeli: {
      get() {
        return this.$store.state.po.po_baru.kapal_pembeli;
      },
      set(value) {
        this.$store.commit('SET_PO_BARU', {
          key: 'kapal_pembeli',
          value
        });
      }
    },
    tanggal: {
      get() {
        return this.$store.state.po.po_baru.tanggal;
      },
      set(value) {
        this.$store.commit('SET_PO_BARU', {
          key: 'tanggal',
          value
        });
      }
    }
  },
  methods: {
    add() {
      this.inputs.push({
        kode_barang: '',
        item_deskripsi: '',
        quantity: '',
        harga_satuan: '',
        jumlah: ''
      });
    },
    remove(index) {
      this.inputs.splice(index, 1);
    },
    handleCloseDialog() {
      this.$emit('handleBuatBaru');
      (this.inputs = [
        {
          kode_barang: '',
          item_deskripsi: '',
          quantity: '',
          harga_satuan: '',
          jumlah: ''
        }
      ]),
        (this.remarks = '');
    },
    handleSubmit() {
      const getRef = this.$refs.initialReport.handleValidate();
      if (getRef) {
        this.$router.push('/po/add');
      } else {
        return false;
      }
    }
  }
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
