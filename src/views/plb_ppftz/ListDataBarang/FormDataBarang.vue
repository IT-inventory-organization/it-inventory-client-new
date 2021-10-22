<template>
  <v-card>
    <v-card-title>
      <v-row no-gutters align-content="center" justify="space-between">
        <span class="text-h6">Add New List</span>
        <span style="cursor: pointer" @click.prevent="handleDialog"
          ><v-icon>mdi-close</v-icon></span
        >
      </v-row>
    </v-card-title>
    <v-card-text class="py-4">
      <v-form ref="formDataBarang" @submit.prevent="handleSubmit">
        <v-row>
          <v-col cols="12" lg="6" md="6" sm="12">
            <v-select
              outlined
              label="Jenis Barang"
              :items="listBarang.data"
              :item-text="(item) => item.name"
              v-model="barang"
              return-object
              :rules="[
                (value) => {
                  return genericRequiredRule(value, 'Jenis Barang');
                },
              ]"
            >
            </v-select>
          </v-col>
          <v-col cols="12" lg="6" md="6" sm="12">
            <v-text-field
              outlined
              label="Uraian"
              disabled
              v-model="barang.uraian"
              :rules="[
                (value) => {
                  return genericRequiredRule(value, 'Uraian');
                },
              ]"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" lg="6" md="6" sm="12">
            <v-text-field
              outlined
              label="Stock"
              v-model="barang.stock"
              disabled
              :rules="[
                (value) => {
                  return genericRequiredRule(value, 'Stock');
                },
              ]"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" lg="6" md="6" sm="12">
            <v-text-field
              outlined
              label="Quantity"
              v-model="quantity"
              :rules="[
                (value) => {
                  return genericRequiredRule(value, 'Quantity');
                },
                (value) => {
                  return genericNumberRule(value, 'Quantity');
                },
                (value) => {
                  return genericMinRule(value, 'Quantity');
                },
              ]"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" lg="4" md="4" sm="12">
            <v-text-field
              outlined
              disabled
              v-model="barang.nettoBrutoVolume"
              label="Netto, Bruto, Volume"
              :rules="[
                (value) => {
                  return genericRequiredRule(value, 'Netto, Bruto, Volume');
                },
              ]"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" lg="4" md="4" sm="12">
            <v-text-field
              outlined
              disabled
              label="Satuan Kemasan"
              v-model="barang.satuanKemasan"
              :rules="[
                (value) => {
                  return genericRequiredRule(value, 'Satuan Kemasan');
                },
              ]"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" lg="4" md="4" sm="12">
            <v-text-field
              outlined
              v-model="nilaiPabeanHargaPenyerahan"
              label="Nilai Pabean, Harga Penyerahan"
              :rules="[
                (value) => {
                  return genericRequiredRule(
                    value,
                    'Nilai Pabean, Harga Penyerahan'
                  );
                },
                (value) => {
                  return genericNumberRule(
                    value,
                    'Nilai Pabean, Harga Penyerahan'
                  );
                },
                (value) => {
                  return genericMinRule(
                    value,
                    'Nilai Pabean, Harga Penyerahan'
                  );
                },
              ]"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" lg="6" md="6" sm="12">
            <v-text-field
              outlined
              disabled
              v-model="barang.posTarif"
              label="Pos Tarif"
              :rules="[
                (value) => {
                  return genericRequiredRule(value, 'Pos Tarif');
                },
              ]"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" lg="6" md="6" sm="12">
            <v-text-field
              outlined
              disabled
              v-model="barang.hsCode"
              label="HS Code"
              :rules="[
                (value) => {
                  return genericRequiredRule(value, 'HS Code');
                },
              ]"
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row no-gutters style="justify-content: flex-end; padding: 20px 0px">
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
  name: "FormDataBarang",
  mixins: [FieldRequired],
  props: ["handleModal"],
  data() {
    return {
      barang: {
        name: "",
        uraian: "",
        nettoBrutoVolume: "",
        satuanKemasan: "",
        stock: "",
        posTarif: "",
        hsCode: "",
      },
      nilaiPabeanHargaPenyerahan: "",
      quantity: "",
    };
  },
  computed: {
    listBarang() {
      return this.$store.state.report.listBarang;
    },
    listDataBarang() {
      return this.$store.state.report.listDataBarang;
    },
  },
  methods: {
    handleSubmit() {
      const payload = {
        idBarang: this.barang.idBarang,
        quantity: this.quantity,
        nilaiPabeanHargaPenyerahan: this.nilaiPabeanHargaPenyerahan,
        name: this.barang.name,
        uraian: this.barang.uraian,
        nettoBrutoVolume: this.barang.nettoBrutoVolume,
        satuanKemasan: this.barang.satuanKemasan,
        posTarif: this.barang.posTarif,
        hsCode: this.barang.hsCode,
        stock: this.barang.stock,
      };

      if (this.$refs.formDataBarang.validate()) {
        const index = this.listDataBarang.findIndex(
          (data) => data.idBarang === payload.idBarang
        );
        if (index != -1) {
          this.$swal({
            title: `Data barang ini sudah ada !`,
            text: `apakah anda ingin mengubah data dengan nama ${payload.name}?`,
            type: "warning",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#5682ff",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ya",
            cancelButtonText: "Tidak",
          }).then((result) => {
            if (result.value) {
              const data = {
                payload,
                index,
              };
              this.$store.commit("UPDATE_DATA_LIST_BARANG", data);
            }
          });
        } else {
          this.$store.commit("SET_LIST_DATA_BARANG", payload);
        }
        this.barang = {
          name: "",
          uraian: "",
          nettoBrutoVolume: "",
          satuanKemasan: "",
          stock: "",
          posTarif: "",
          hsCode: "",
          quantity: "",
          nilaiPabeanHargaPenyerahan: "",
        };
        this.quantity = "";
        this.nilaiPabeanHargaPenyerahan = "";
        this.$emit("handleModal");
      } else {
        this.$swal("Data Belum Lengkap", "", "error");
      }
    },
    handleDialog() {
      this.$emit("handleModal");
      this.$refs.formDataBarang.resetValidation();
    },
  },
};
</script>

<style lang="scss" scoped></style>
