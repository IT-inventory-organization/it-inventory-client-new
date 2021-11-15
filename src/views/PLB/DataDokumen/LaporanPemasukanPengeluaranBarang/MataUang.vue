<template>
  <div>
    <div class="body-1 font-weight-bold mb-5">
      Mata Uang
    </div>
    <v-row justify="space-between" class="mb-3">
      <v-col lg="5" md="5" sm="12">
        <div>
          <label class="caption font-weight-medium">Valuta</label>
          <v-select
            outlined
            dense
            placeholder="Pilih Valuta"
            append-icon="mdi-chevron-down"
          ></v-select>
        </div>
        <div>
          <label class="caption font-weight-medium">Freight</label>
          <v-text-field
            outlined
            dense
            type="number"
            placeholder="0"
          ></v-text-field>
        </div>
        <div>
          <label class="caption font-weight-medium">NDPBM Kurs</label>
          <v-text-field
            outlined
            dense
            type="number"
            placeholder="0"
          ></v-text-field>
        </div>
      </v-col>
      <v-col lg="5" md="5" sm="12">
        <div>
          <label class="caption font-weight-medium">CIF</label>
          <v-text-field
            outlined
            dense
            type="number"
            placeholder="0"
          ></v-text-field>
        </div>
        <div>
          <label class="caption font-weight-medium">Transaksi Lainnya</label>
          <v-text-field
            outlined
            dense
            placeholder="Transaksi Lainnya"
          ></v-text-field>
        </div>
        <div>
          <label class="caption font-weight-medium">Harga Penyerahan</label>
          <v-text-field
            outlined
            dense
            placeholder="Harga Penyerahan"
          ></v-text-field>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "MataUang",
};
</script>

<style lang="scss" scoped></style>
