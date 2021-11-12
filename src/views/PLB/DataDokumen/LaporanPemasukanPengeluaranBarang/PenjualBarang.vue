<template>
  <div>
    <div class="body-1 font-weight-bold mb-5">
      Penjual Barang
    </div>
    <v-row justify="space-between" class="mb-3">
      <v-col lg="5" md="5" sm="12">
        <div>
          <label class="caption font-weight-medium"
            >Jenis Identitas Penjual</label
          >
          <v-select
            outlined
            dense
            placeholder="Pilih Jenis Identitas Penjual"
            append-icon="mdi-chevron-down"
          ></v-select>
        </div>
        <div>
          <label class="caption font-weight-medium">Nama Penjual</label>
          <v-text-field
            outlined
            dense
            placeholder="Input Nama Penjual"
          ></v-text-field>
        </div>
      </v-col>
      <v-col lg="5" md="5" sm="12">
        <div>
          <label class="caption font-weight-medium"
            >Nomor Identitas Penjual</label
          >
          <v-text-field
            outlined
            dense
            placeholder="Input Nomor Identitas"
          ></v-text-field>
        </div>
        <div>
          <label class="caption font-weight-medium">Alamat Penjual</label>
          <v-text-field
            outlined
            dense
            placeholder="Input Alamat Penjual"
          ></v-text-field>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "PenjualBarang",
};
</script>

<style lang="scss" scoped></style>
