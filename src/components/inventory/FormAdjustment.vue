<template>
  <v-card height="75vh" >
    <v-card-title>
      <v-row no-gutters align-content="center">
        <v-col cols="8">
          <span class="headline font-weight-bold">Adjustment</span>
        </v-col>
        <!-- <span style="cursor: pointer" @click.prevent="handleCloseDialog"
          ><v-icon>mdi-close</v-icon></span
        > -->
        <v-col cols="4">
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
    <v-card-text class="mt-6">
      <v-form ref="initialReport" @submit.prevent="handleSubmit">
        <v-container fluid>
          <v-row no-gutters width="100%">
              <v-col>
                  <v-row no-gutters>
                    <v-col cols="4">
                    <div class="mt-2">Nama Barang</div>
                    </v-col>
                    <v-col cols="8">
                    <v-text-field
                        outlined
                        dense
                        v-model="kapalPemilik"
                        placeholder="value"
                        :rules="[
                        (value) => {
                            return genericRequiredRule(value, 'Kapal Pemilik');
                        },
                        ]"
                    ></v-text-field>
                    </v-col>
                  </v-row>
              </v-col>

          </v-row>

          <v-row no-gutters width="100%">
              <v-col>
                  <v-row no-gutters>
                    <v-col cols="4">
                    <div class="mt-2">Nomor Adjustment</div>
                    </v-col>
                    <v-col cols="8">
                    <v-text-field
                        outlined
                        dense
                        v-model="nomorAdjustment"
                        placeholder="value"
                        :rules="[
                        (value) => {
                            return genericRequiredRule(value, 'Kapal Pemilik');
                        },
                        ]"
                    ></v-text-field>
                    </v-col>
                  </v-row>
              </v-col>

          </v-row>

          <v-row no-gutters width="100%">
              <v-col>
                  <v-row no-gutters>
                    <v-col cols="4">
                    <div class="mt-2">Tanggal Adjustment</div>
                    </v-col>
                    <v-col cols="8">
                    <v-text-field
                        outlined
                        dense
                        v-model="tanggalAdjustment"
                        placeholder="value"
                        :rules="[
                        (value) => {
                            return genericRequiredRule(value, 'Kapal Pemilik');
                        },
                        ]"
                    ></v-text-field>
                    </v-col>
                  </v-row>
              </v-col>

          </v-row>

          <v-row no-gutters width="100%">
              <v-col>
                  <v-row no-gutters>
                    <v-col cols="4">
                    <div class="mt-2">Quantity</div>
                    </v-col>
                    <v-col cols="8">
                    <v-text-field
                        outlined
                        dense
                        v-model="quantity"
                        placeholder="value"
                        :rules="[
                        (value) => {
                            return genericRequiredRule(value, 'Kapal Pemilik');
                        },
                        ]"
                    ></v-text-field>
                    </v-col>
                  </v-row>
              </v-col>

          </v-row>

          <v-row no-gutters width="100%">
              <v-col>
                  <v-row no-gutters>
                    <v-col cols="4">
                    <div class="mt-2">Remarks</div>
                    </v-col>
                    <v-col cols="8">
                    <v-text-field
                        outlined
                        dense
                        v-model="remarks"
                        placeholder="value"
                        :rules="[
                        (value) => {
                            return genericRequiredRule(value, 'Kapal Pemilik');
                        },
                        ]"
                    ></v-text-field>
                    </v-col>
                  </v-row>
              </v-col>

          </v-row>
          <v-row no-gutters class="mt-10">
              <button @click.prevent="add" style="background-color: white; border-radius: 1em; padding: 0.5em 1em 0.5em 0.8em; display: flex; align-items: center;" >
                <img src="@/assets/icons/ic_plus.svg" />
                <span style="padding: 0 0 0 0.5em;text-decoration: underline;">
                Upload Fiile Surat Persetujuan</span></button>
          </v-row>

        </v-container>
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
import { FieldRequired } from "@/mixins/ValidationRules";
// import { Icon } from "@iconify/vue2";
export default {
  name: "FormAdjustment",
  mixins: [FieldRequired],
  components: {
  },
  data() {
    return {
      inputs: [
        {
          kode_barang: "",
          item_deskripsi: "",
          quantity: "",
          harga_satuan: "",
          jumlah: ""
        },
      ],
    remarks: ""
    }
  },
  computed: {
      kapalPemilik: {
        get() {
            return this.$store.state.po.po_baru.kapal_pemilik
        },
        set(value) {
            this.$store.commit("SET_PO_BARU", {
                key: "kapal_pemilik",
                value
            })
        }
    },
    noPurchaseOrder: {
      get() {
        return this.$store.state.po.po_baru.no_purchase_order;
      },
      set(value) {
        this.$store.commit("SET_PO_BARU", {
          key: "no_purchase_order",
          value,
        });
      },
    },
    kapalPembeli: {
      get() {
        return this.$store.state.po.po_baru.kapal_pembeli;
      },
      set(value) {
        this.$store.commit("SET_PO_BARU", {
          key: "kapal_pembeli",
          value,
        });
      },
    },
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
    
  },
  methods: {
    add () {
      this.inputs.push({
        kode_barang: "",
        item_deskripsi: "",
        quantity: "",
        harga_satuan: "",
        jumlah: ""
      })
    },
    remove (index) {
      this.inputs.splice(index, 1)
    },
    handleCloseDialog() {
      this.$emit("handleBuatBaru");
      this.inputs = [
        {
          kode_barang: "",
          item_deskripsi: "",
          quantity: "",
          harga_satuan: "",
          jumlah: ""
        },
      ],
      this.remarks= ""
    },
    handleSubmit() {
      const getRef = this.$refs.initialReport.handleValidate();
      if (getRef) {
        this.$router.push("/po/add");
      } else {
        return false;
      }
    },
    
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
