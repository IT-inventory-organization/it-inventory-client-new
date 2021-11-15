<template>
  <div>
    <div class="body-1 font-weight-bold mb-5">
      Pengirim Barang
    </div>
    <v-row justify="space-between" class="mb-3">
      <v-col lg="5" md="5" sm="12">
        <div>
          <label class="caption font-weight-medium"
            >Jenis Identitas Pengirim</label
          >
          <v-select
            outlined
            dense
            placeholder="Pilih Jenis Identitas Pengirim"
            append-icon="mdi-chevron-down"
          ></v-select>
        </div>
        <div>
          <label class="caption font-weight-medium">Nama Pengirim</label>
          <v-text-field
            outlined
            dense
            placeholder="Input Nama Pengirim"
          ></v-text-field>
        </div>
        <v-checkbox dense label="Termasuk Penjual Barang"></v-checkbox>
      </v-col>
      <v-col lg="5" md="5" sm="12">
        <div>
          <label class="caption font-weight-medium"
            >Nomor Identitas Pengirim</label
          >
          <v-text-field
            outlined
            dense
            placeholder="Input Nomor Identitas"
          ></v-text-field>
        </div>
        <div>
          <label class="caption font-weight-medium">Alamat Pengirim</label>
          <v-text-field
            outlined
            dense
            placeholder="Input Alamat Pengirim"
          ></v-text-field>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "PengirimBarang",
};
</script>

<style lang="scss" scoped></style>
