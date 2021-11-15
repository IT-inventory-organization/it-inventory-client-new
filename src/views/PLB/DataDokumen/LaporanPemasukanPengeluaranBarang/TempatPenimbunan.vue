<template>
  <div>
    <div class="body-1 font-weight-bold mb-5">
      Tempat Penimbunan
    </div>
    <v-row justify="space-between" class="mb-3">
      <v-col lg="5" md="5" sm="12">
        <div>
          <label class="caption font-weight-medium">Tempat Penimbunan</label>
          <v-select
            outlined
            dense
            placeholder="Pilih Tempat Penimbunan"
            append-icon="mdi-chevron-down"
          ></v-select>
        </div>
        <v-checkbox dense label="Termasuk Tempat Penimbunan"></v-checkbox>
      </v-col>
      <v-col lg="5" md="5" sm="12">
        <div>
          <label class="caption font-weight-medium"
            >Perkiraan Tanggal Pengeluaran</label
          >
          <v-menu
            v-model="datepicker_perkiraan_tgl_pengeluaran"
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
              @input="datepicker_perkiraan_tgl_pengeluaran = false"
            ></v-date-picker>
          </v-menu>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Tempat Penimbunan",
  data() {
    return {
      datepicker_perkiraan_tgl_pengeluaran: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
