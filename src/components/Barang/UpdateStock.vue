<template>
  <v-card>
    <v-card-title>
      <v-row no-gutters align-content="center" justify="space-between">
        <span class="text-h6">Tambah/Kurangi Stock</span>
        <span style="cursor: pointer" @click.prevent="handleDialog"
          ><v-icon>mdi-close</v-icon></span
        >
      </v-row>
    </v-card-title>
    <v-card-text>
      <v-form class="my-4" ref="formUpdateStock" @submit.prevent="handleSubmit">
        <v-row no-gutters>
          <v-col cols="12">
            <v-text-field
              label="Tambah Stock"
              outlined
              v-model="increase"
              :disabled="increaseDisabled"
              type="number"
              :rules="
                increaseDisabled
                  ? []
                  : [
                      (value) => {
                        return genericRequiredRule(value, 'Tambah Stock');
                      },
                      (value) => {
                        return genericNumberRule(value, 'Tambah Stock');
                      },
                      (value) => {
                        return genericMinRule(value, 'Tambah Stock');
                      },
                    ]
              "
            >
            </v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="Kurangi Stock"
              outlined
              v-model="decrease"
              :disabled="decreaseDisabled"
              type="number"
              :rules="
                decreaseDisabled
                  ? []
                  : [
                      (value) => {
                        return genericRequiredRule(value, 'Kurangi Stock');
                      },
                      (value) => {
                        return genericNumberRule(value, 'Kurangi Stock');
                      },
                      (value) => {
                        return genericMinRule(value, 'Kurangi Stock');
                      },
                    ]
              "
            >
            </v-text-field>
            <!-- <v-text-field
              label="Deskripsi"
              outlined
              v-model="deskripsi"
              :rules="[
                (value) => {
                  return genericRequiredRule(value, 'Deskripsi');
                },
              ]"
            >
            </v-text-field> -->
          </v-col>
        </v-row>
        <v-row no-gutters style="justify-content: flex-end;">
          <v-btn
            type="submit"
            fill
            class="it_inven_create_btn"
            style="width: 200px"
            >Save</v-btn
          >
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { FieldRequired } from "@/mixins/ValidationRules";
export default {
  name: "updatestock",
  mixins: [FieldRequired],
  data() {
    return {
      increaseDisabled: false,
      decreaseDisabled: false,
    };
  },
  computed: {
    increase: {
      get() {
        return this.$store.state.report.updateStockBarang.increase;
      },
      set(value) {
        this.$store.commit("SET_UPDATE_STOCK", {
          key: "increase",
          value: Number(value),
        });
      },
    },
    deskripsi: {
      get() {
        return this.$store.state.report.updateStockBarang.deskripsi;
      },
      set(value) {
        this.$store.commit("SET_UPDATE_STOCK", {
          key: "deskripsi",
          value: value,
        });
      },
    },
    decrease: {
      get() {
        return this.$store.state.report.updateStockBarang.decrease;
      },
      set(value) {
        this.$store.commit("SET_UPDATE_STOCK", {
          key: "decrease",
          value: Number(value),
        });
      },
    },
  },
  watch: {
    increase(val) {
      if (val > 0) {
        this.decreaseDisabled = true;
      } else {
        this.decreaseDisabled = false;
      }
    },
    decrease(val) {
      if (val > 0) {
        this.increaseDisabled = true;
      } else {
        this.increaseDisabled = false;
      }
    },
  },
  methods: {
    handleDialog() {
      this.$store.commit("RESET_UPDATE_STOCK");
      this.$emit("handleCloseDialogUpdateStock");
    },
    handleCreate() {
      this.$store
        .dispatch("updateStockBarang")
        .then(async (result) => {
          if (result.data.success) {
            this.$swal.fire("Berhasil update stock!", "", "success");
            await this.$store.commit("UPDATE_STOCK_BARANG");
          }
        })
        .catch((error) => {
          this.$swal.fire(
            "Gagal update stock!",
            error.response.data.message,
            "error"
          );
        })
        .finally(() => {
          this.$store.commit("RESET_UPDATE_STOCK");
          this.$emit("handleCloseDialogUpdateStock");
        });
    },
    handleSubmit() {
      if (this.$refs.formUpdateStock.validate()) {
        this.handleCreate();
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
