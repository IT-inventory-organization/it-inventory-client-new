<template>
  <div>
    <div class="body-1 font-weight-bold mb-5">
      Pembeli Barang
    </div>
    <v-row justify="space-between" class="mb-3">
      <v-col lg="5" md="5" sm="12">
        <div>
          <label class="caption font-weight-medium"
            >Jenis Identitas Pembeli</label
          >
          <v-select
            outlined
            dense
            placeholder="Pilih Jenis Identitas Pembeli"
            append-icon="mdi-chevron-down"
          ></v-select>
        </div>
        <div>
          <label class="caption font-weight-medium">Nama Pembeli</label>
          <v-text-field
            outlined
            dense
            placeholder="Input Nama Pembeli"
          ></v-text-field>
        </div>
        <v-checkbox dense label="Termasuk Pengusaha PLB"></v-checkbox>
      </v-col>
      <v-col lg="5" md="5" sm="12">
        <div>
          <label class="caption font-weight-medium"
            >Nomor Identitas Pembeli</label
          >
          <v-text-field
            outlined
            dense
            placeholder="Input Nomor Identitas"
          ></v-text-field>
        </div>
        <div>
          <label class="caption font-weight-medium">Alamat Pembeli</label>
          <v-text-field
            outlined
            dense
            placeholder="Input Alamat Pembeli"
          ></v-text-field>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "PembeliBarang",
};
</script>

<style lang="scss" scoped></style>
