<template>
  <v-card>
    <v-card-title>
      <v-row no-gutters align-content="center" justify="space-between">
        <span class="headline font-weight-bold">Purchase Order Baru</span>
        <span style="cursor: pointer" @click.prevent="handleCloseDialog"
          ><v-icon>mdi-close</v-icon></span
        >
      </v-row>
    </v-card-title>
    <v-spacer />
    <v-card-text>
      <v-form ref="initialReport" @submit.prevent="handleSubmit">
        <v-container fluid>
          <v-row no-gutters width="100%">
              <v-col lg="5">
                  <v-row no-gutters>
                    <v-col cols="4">
                    <div class="mt-2">Kapal Pemilik</div>
                    </v-col>
                    <v-col cols="7">
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

              <v-col cols="5">
                  <v-row no-gutters>
                    <v-col cols="4">
                    <div class="mt-2">No. Purchase Order</div>
                    </v-col>
                    <v-col cols="7">
                    <v-text-field
                        outlined
                        dense
                        v-model="noPurchaseOrder"
                        placeholder="value"
                        :rules="[
                        (value) => {
                            return genericRequiredRule(value, 'Nomor Purchase Order');
                        },
                        ]"
                    ></v-text-field>
                    </v-col>

                    <!-- <v-col cols="2"></v-col> -->
                  </v-row>
              </v-col>

          </v-row>

          <v-row no-gutters width="100%">
              <v-col lg="5">
                  <v-row no-gutters>
                    <v-col cols="4">
                    <div class="mt-2">Kapal Pembeli</div>
                    </v-col>
                    <v-col cols="7">
                    <v-text-field
                        outlined
                        dense
                        v-model="kapalPembeli"
                        placeholder="value"
                        :rules="[
                        (value) => {
                            return genericRequiredRule(value, 'Kapal Pembeli');
                        },
                        ]"
                    ></v-text-field>
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

                    <!-- <v-col cols="2"></v-col> -->
                  </v-row>
              </v-col>

          </v-row>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <button type="submit" class="btn_save">
            <span>Selanjutnya</span>
            <img src="@/assets/icons/ic_bulletnext.svg" />
          </button>
        </v-card-actions>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { FieldRequired } from "@/mixins/ValidationRules";
export default {
  name: "FormPO",
  mixins: [FieldRequired],
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
          console.log(this.$store.state.po.po_baru.no_purchase_order)
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
          console.log(this.$store.state.po.po_baru.kapal_pembeli)
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
          console.log(this.$store.state.po.po_baru.tanggal)
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
    handleCloseDialog() {
      this.$emit("handleBuatBaru");
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

<style lang="scss" scoped></style>
