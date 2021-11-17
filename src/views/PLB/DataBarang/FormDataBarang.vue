<template>
  <v-card>
    <v-form ref="refFormDataBarang" @submit.prevent="handleSubmit">
      <v-card-title>
        <v-row no-gutters align="center">
          <v-col cols="8">
            <span class="headline font-weight-bold">Informasi Perusahaan</span>
          </v-col>
          <v-col cols="4">
            <div class="d-flex">
              <button
                @click="handleClose"
                class="mx-2 it-inventory-btn it-inventory-btn__fw it-inventory-btn__grey"
              >
                Batal
              </button>
              <button
                type="submit"
                class="mx-2 it-inventory-btn it-inventory-btn__fw it-inventory-btn__green"
              >
                Simpan
              </button>
            </div>
          </v-col>
        </v-row>
      </v-card-title>
      <v-card-text>
        <v-row class="mt-7">
          <v-container>
            <v-row no-gutters>
              <v-col cols="3">
                <span class="it-inven-dataperusahaan__label">Kode Barang</span>
              </v-col>
              <v-col cols="9">
                <v-text-field
                  outlined
                  class="it-inven-dataperusahaan__value"
                  placeholder="value"
                  v-model="kodeBarang"
                  :rules="[
                    (value) => {
                      return genericRequiredRule(value, 'Kode Barang');
                    },
                  ]"
                  dense
                />
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="3">
                <span class="it-inven-dataperusahaan__label">Nama Barang</span>
              </v-col>
              <v-col cols="9">
                <v-text-field
                  outlined
                  class="it-inven-dataperusahaan__value"
                  placeholder="value"
                  v-model="namaBarang"
                  :rules="[
                    (value) => {
                      return genericRequiredRule(value, 'Nama Barang');
                    },
                  ]"
                  dense
                />
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="3">
                <span class="it-inven-dataperusahaan__label">Uraian</span>
              </v-col>
              <v-col cols="9">
                <v-textarea
                  outlined
                  class="it-inven-dataperusahaan__value"
                  placeholder="value"
                  v-model="uraian"
                  :rules="[
                    (value) => {
                      return genericRequiredRule(value, 'Uraian');
                    },
                  ]"
                  dense
                />
              </v-col>
            </v-row>
          </v-container>
        </v-row>
        <v-row no-gutters>
          <v-col cols="3">
            <span class="it-inven-dataperusahaan__label"
              >Netto, Brutto, Volume</span
            >
          </v-col>
          <v-col cols="9">
            <v-text-field
              outlined
              class="it-inven-dataperusahaan__value"
              placeholder="value"
              v-model="nettoBruttoVolume"
              :rules="[
                (value) => {
                  return genericRequiredRule(value, 'Netto, Brutto, Volume');
                },
              ]"
              dense
            />
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="3">
            <span class="it-inven-dataperusahaan__label">Satuan Kemasan</span>
          </v-col>
          <v-col cols="9">
            <v-text-field
              outlined
              class="it-inven-dataperusahaan__value"
              placeholder="value"
              v-model="satuanKemasan"
              :rules="[
                (value) => {
                  return genericRequiredRule(value, 'Satuan Kemasan');
                },
              ]"
              dense
            />
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="3">
            <span class="it-inven-dataperusahaan__label">Stock</span>
          </v-col>
          <v-col cols="9">
            <v-text-field
              outlined
              class="it-inven-dataperusahaan__value"
              placeholder="value"
              v-model="stock"
              :rules="[
                (value) => {
                  return genericRequiredRule(value, 'Stock');
                },
              ]"
              dense
            />
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="3">
            <span class="it-inven-dataperusahaan__label"
              >Nilai Pabean Harga Penyerahan</span
            >
          </v-col>
          <v-col cols="9">
            <v-text-field
              outlined
              class="it-inven-dataperusahaan__value"
              placeholder="value"
              v-model="nilaiPabeanHargaPenyerahan"
              :rules="[
                (value) => {
                  return genericRequiredRule(
                    value,
                    'Nilai Pabean Harga Penyerahan'
                  );
                },
              ]"
              dense
            />
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="3">
            <span class="it-inven-dataperusahaan__label">Pos Tarif</span>
          </v-col>
          <v-col cols="9">
            <v-text-field
              outlined
              class="it-inven-dataperusahaan__value"
              placeholder="value"
              v-model="posTarif"
              :rules="[
                (value) => {
                  return genericRequiredRule(value, 'Pos Tarif');
                },
              ]"
              dense
            />
          </v-col>
        </v-row>

        <v-row no-gutters>
          <v-col cols="3">
            <span class="it-inven-dataperusahaan__label">BM</span>
          </v-col>
          <v-col cols="9">
            <v-text-field
              outlined
              class="it-inven-dataperusahaan__value"
              placeholder="value"
              v-model="bm"
              :rules="[
                (value) => {
                  return genericRequiredRule(value, 'BM');
                },
              ]"
              dense
            />
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="3">
            <span class="it-inven-dataperusahaan__label">PPN</span>
          </v-col>
          <v-col cols="9">
            <v-text-field
              outlined
              class="it-inven-dataperusahaan__value"
              placeholder="value"
              v-model="ppn"
              :rules="[
                (value) => {
                  return genericRequiredRule(value, 'PPN');
                },
              ]"
              dense
            />
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="3">
            <span class="it-inven-dataperusahaan__label">PPNBM</span>
          </v-col>
          <v-col cols="9">
            <v-text-field
              outlined
              class="it-inven-dataperusahaan__value"
              placeholder="value"
              v-model="ppnbm"
              :rules="[
                (value) => {
                  return genericRequiredRule(value, 'PPNBM');
                },
              ]"
              dense
            />
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="3">
            <span class="it-inven-dataperusahaan__label">Cukai</span>
          </v-col>
          <v-col cols="9">
            <v-text-field
              outlined
              class="it-inven-dataperusahaan__value"
              placeholder="value"
              v-model="cukai"
              :rules="[
                (value) => {
                  return genericRequiredRule(value, 'Cukai');
                },
              ]"
              dense
            />
          </v-col>
        </v-row>
      </v-card-text>
    </v-form>
  </v-card>
</template>

<script>
import { FieldRequired } from "@/mixins/ValidationRules";
export default {
  name: "FormDataBarang",
  mixins: [FieldRequired],
  computed: {
    kodeBarang: {
      get() {
        return this.$store.state.plb.dataBarang.kodeBarang;
      },
      set(value) {
        this.$store.commit("SET_DATA_BARANG", {
          key: "kodeBarang",
          value,
        });
      },
    },
    namaBarang: {
      get() {
        return this.$store.state.plb.dataBarang.namaBarang;
      },
      set(value) {
        this.$store.commit("SET_DATA_BARANG", {
          key: "namaBarang",
          value,
        });
      },
    },
    uraian: {
      get() {
        return this.$store.state.plb.dataBarang.uraian;
      },
      set(value) {
        this.$store.commit("SET_DATA_BARANG", {
          key: "uraian",
          value,
        });
      },
    },
    nettoBruttoVolume: {
      get() {
        return this.$store.state.plb.dataBarang.nettoBruttoVolume;
      },
      set(value) {
        this.$store.commit("SET_DATA_BARANG", {
          key: "nettoBruttoVolume",
          value,
        });
      },
    },
    satuanKemasan: {
      get() {
        return this.$store.state.plb.dataBarang.satuanKemasan;
      },
      set(value) {
        this.$store.commit("SET_DATA_BARANG", {
          key: "satuanKemasan",
          value,
        });
      },
    },
    stock: {
      get() {
        return this.$store.state.plb.dataBarang.stock;
      },
      set(value) {
        this.$store.commit("SET_DATA_BARANG", {
          key: "stock",
          value,
        });
      },
    },
    posTarif: {
      get() {
        return this.$store.state.plb.dataBarang.posTarif;
      },
      set(value) {
        this.$store.commit("SET_DATA_BARANG", {
          key: "posTarif",
          value,
        });
      },
    },
    bm: {
      get() {
        return this.$store.state.plb.dataBarang.bm;
      },
      set(value) {
        this.$store.commit("SET_DATA_BARANG", {
          key: "bm",
          value,
        });
      },
    },
    ppn: {
      get() {
        return this.$store.state.plb.dataBarang.ppn;
      },
      set(value) {
        this.$store.commit("SET_DATA_BARANG", {
          key: "ppn",
          value,
        });
      },
    },
    ppnbm: {
      get() {
        return this.$store.state.plb.dataBarang.ppnbm;
      },
      set(value) {
        this.$store.commit("SET_DATA_BARANG", {
          key: "ppnbm",
          value,
        });
      },
    },
    cukai: {
      get() {
        return this.$store.state.plb.dataBarang.cukai;
      },
      set(value) {
        this.$store.commit("SET_DATA_BARANG", {
          key: "cukai",
          value,
        });
      },
    },
    nilaiPabeanHargaPenyerahan: {
      get() {
        return this.$store.state.plb.dataBarang.nilaiPabeanHargaPenyerahan;
      },
      set(value) {
        this.$store.commit("SET_DATA_BARANG", {
          key: "nilaiPabeanHargaPenyerahan",
          value,
        });
      },
    },
  },
  methods: {
    handleClose() {
      this.$refs.refFormDataBarang.reset();
      this.$refs.refFormDataBarang.resetValidation();
      this.$emit("handleCloseFormDataBarang");
    },
    handleSubmit() {
      const getRef = this.$refs.refFormDataBarang.validate();
      const data = {
        kodeBarang: this.kodeBarang,
        namaBarang: this.namaBarang,
        uraian: this.uraian,
        nettoBruttoVolume: this.nettoBruttoVolume,
        satuanKemasan: this.satuanKemasan,
        stock: this.stock,
        nilaiPabeanHargaPenyerahan: this.nilaiPabeanHargaPenyerahan,
        posTarif: this.posTarif,
        bm: this.bm,
        ppn: this.ppn,
        ppnbm: this.ppnbm,
        cukai: this.cukai,
      };
      if (getRef) {
        this.$store.commit("SET_LIST_BARANG", data);
        this.handleClose();
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
