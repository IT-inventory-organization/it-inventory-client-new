<template>
  <div>
    <div class="body-1 font-weight-bold mb-5">
      Pengusaha PLB
    </div>
    <v-row justify="space-between" class="mb-3">
      <v-col lg="5" md="5" sm="12">
        <div>
          <label class="caption font-weight-medium"
            >Jenis Identitas Pengusaha PLB</label
          >
          <v-select
            outlined
            dense
            placeholder="Pilih Jenis Identitas Pengusaha PLB"
            append-icon="mdi-chevron-down"
          ></v-select>
        </div>
        <div>
          <label class="caption font-weight-medium">Nama Pengusaha PLB</label>
          <v-text-field
            outlined
            dense
            placeholder="Input Nama Pengusaha PLB"
          ></v-text-field>
        </div>
      </v-col>
      <v-col lg="5" md="5" sm="12">
        <div>
          <label class="caption font-weight-medium"
            >Nomor Identitas Pengusaha PLB</label
          >
          <v-text-field
            outlined
            dense
            placeholder="Input Nomor Identitas"
          ></v-text-field>
        </div>
        <div>
          <label class="caption font-weight-medium">Alamat Pengusaha PLB</label>
          <v-text-field
            outlined
            dense
            placeholder="Input Alamat Pengusaha PLB"
          ></v-text-field>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "PengusahaPLB",
};
</script>

<style lang="scss" scoped></style>
