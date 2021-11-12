<template>
  <div>
    <div class="body-1 font-weight-bold mb-5">
      Berat dan Volume
    </div>
    <v-row justify="space-between" class="mb-3">
      <v-col lg="5" md="5" sm="12">
        <div>
          <label class="caption font-weight-medium">Berat Muatan</label>
          <v-text-field
            outlined
            dense
            type="number"
            placeholder="0"
          ></v-text-field>
        </div>
        <div>
          <label class="caption font-weight-medium">Volume (M3)</label>
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
          <label class="caption font-weight-medium">Berat Kapat + Muatan</label>
          <v-text-field
            outlined
            dense
            type="number"
            placeholder="0"
          ></v-text-field>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
