<template>
  <div>
    <div class="body-1 font-weight-bold mb-5">
      Data Kapal
    </div>
    <v-row justify="space-between" class="mb-3">
      <v-col lg="5" md="5" sm="12">
        <div>
          <label class="caption font-weight-medium">Voyage Kapal</label>
          <v-text-field
            outlined
            dense
            placeholder="Voyage Kapal"
          ></v-text-field>
        </div>
        <div>
          <label class="caption font-weight-medium">Bendera Kapal</label>
          <v-text-field
            outlined
            dense
            placeholder="Bendera Kapal"
          ></v-text-field>
        </div>
      </v-col>
      <v-col lg="5" md="5" sm="12">
        <div>
          <label class="caption font-weight-medium">Nama Kapal</label>
          <v-text-field outlined dense placeholder="Nama Kapal"></v-text-field>
        </div>
        <v-row>
          <v-col lg="6" md="6" sm="12">
            <label class="caption font-weight-medium">Tanggal Kedatangan</label>
            <v-menu
              v-model="datepicker_tgl_kedatangan"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  prepend-inner-icon="mdi-calendar-month-outline"
                  append-icon="mdi-chevron-down"
                  placeholder="Pilih Tanggal"
                  dense
                  outlined
                  clearable
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                scrollable
                no-title
                @input="datepicker_tgl_kedatangan = false"
              ></v-date-picker>
            </v-menu>
          </v-col>
          <v-col lg="6" md="6" sm="12">
            <label class="caption font-weight-medium"
              >Tanggal Tanggal Keberangkatan</label
            >
            <v-menu
              v-model="datepicker_tgl_keberangkatan"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  prepend-inner-icon="mdi-calendar-month-outline"
                  append-icon="mdi-chevron-down"
                  placeholder="Pilih Tanggal"
                  dense
                  outlined
                  clearable
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                scrollable
                no-title
                @input="datepicker_tgl_keberangkatan = false"
              ></v-date-picker>
            </v-menu>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  nama: "DataKapal",
  data() {
    return {
      datepicker_tgl_kedatangan: false,
      datepicker_tgl_keberangkatan: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
