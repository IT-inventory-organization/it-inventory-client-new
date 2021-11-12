<template>
  <div>
    <div class="body-1 font-weight-bold mb-5">
      Identitas Barang
    </div>
    <v-row justify="space-between" class="mb-3">
      <v-col lg="5" md="5" sm="12">
        <div>
          <label class="caption font-weight-medium">Negara Asal</label>
          <v-text-field outlined dense placeholder="Negara Asal"></v-text-field>
        </div>
        <div>
          <label class="caption font-weight-medium">Jenis Barang</label>
          <v-text-field
            outlined
            dense
            placeholder="Jenis Barang"
          ></v-text-field>
        </div>
        <div>
          <label class="caption font-weight-medium">Nilai Barang</label>
          <v-text-field
            outlined
            dense
            placeholder="Nilai Barang"
          ></v-text-field>
        </div>
        <div>
          <label class="caption font-weight-medium">Cara Pembayaran</label>
          <v-select
            outlined
            dense
            placeholder="Pilih Cara Pembayaran"
            append-icon="mdi-chevron-down"
          ></v-select>
        </div>
      </v-col>
      <v-col lg="5" md="5" sm="12">
        <div>
          <label class="caption font-weight-medium">Asal Barang</label>
          <v-text-field outlined dense placeholder="Asal Barang"></v-text-field>
        </div>
        <div>
          <label class="caption font-weight-medium">Jumlah Barang</label>
          <v-text-field
            type="number"
            outlined
            dense
            placeholder="Jumlah Barang"
          ></v-text-field>
        </div>
        <div>
          <label class="caption font-weight-medium">Jumlah Kemasan</label>
          <v-text-field
            type="number"
            outlined
            dense
            placeholder="Jumlah Kemasan"
          ></v-text-field>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Identitas Barang",
};
</script>

<style lang="scss" scoped></style>
