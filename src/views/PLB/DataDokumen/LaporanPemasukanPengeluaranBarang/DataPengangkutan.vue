<template>
  <div>
    <div class="body-1 font-weight-bold mb-5">
      Data Pengangkutan
    </div>
    <v-row justify="space-between" class="mb-3">
      <v-col lg="5" md="5" sm="12">
        <div>
          <label class="caption font-weight-medium">Cara Angkut</label>
          <v-select
            outlined
            dense
            placeholder="Pilih Cara Angkut"
            append-icon="mdi-chevron-down"
          ></v-select>
        </div>
        <div>
          <label class="caption font-weight-medium">Bendera</label>
          <v-select
            outlined
            dense
            placeholder="Pilih Bendera"
            append-icon="mdi-chevron-down"
          ></v-select>
        </div>
      </v-col>
      <v-col lg="5" md="5" sm="12">
        <div>
          <label class="caption font-weight-medium">Nama Pengangkut</label>
          <v-text-field
            outlined
            dense
            placeholder="Nama Pengangkut"
          ></v-text-field>
        </div>
        <div>
          <label class="caption font-weight-medium">Nomor Voy Flight Pol</label>
          <v-text-field
            outlined
            dense
            placeholder="Input Nomor Voy Flight Pol"
          ></v-text-field>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "DataPengangkutan",
};
</script>

<style lang="scss" scoped></style>
