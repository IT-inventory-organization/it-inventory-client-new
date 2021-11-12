<template>
  <div class="mx-12">
    <div class="body-1 font-weight-bold mb-5">Dokumen Pengajuan</div>
    <v-row justify="space-between" class="mb-3">
      <v-col lg="5" md="5" sm="12">
        <div>
          <label class="caption font-weight-medium"
            >Nomor Dokumen Pemasukan</label
          >
          <v-text-field
            outlined
            dense
            placeholder="Nomor Dokumen Pemasukan"
          ></v-text-field>
        </div>
      </v-col>
      <v-col lg="5" md="5" sm="12">
        <div>
          <label class="caption font-weight-medium"
            >Tanggal Dokumen Pemasukan</label
          >
          <v-menu
            v-model="datepicker_dokumen_masuk"
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
              @input="datepicker_dokumen_masuk = false"
            ></v-date-picker>
          </v-menu>
        </div>
      </v-col>
    </v-row>

    <div class="body-1 font-weight-bold mb-5">Dokumen Pengajuan</div>
    <v-row justify="space-between" class="mb-3">
      <v-col lg="5" md="5" sm="12">
        <div>
          <label class="caption font-weight-medium">Nomor BC 1.0</label>
          <v-text-field
            outlined
            dense
            placeholder="Nomor BC 1.0"
            disabled
          ></v-text-field>
        </div>

        <div>
          <label class="caption font-weight-medium">Nomor BC 1.1</label>
          <v-text-field
            outlined
            dense
            placeholder="Nomor BC 1.1"
            disabled
          ></v-text-field>
        </div>

        <div>
          <label class="caption font-weight-medium">Nomor B/L</label>
          <v-text-field outlined dense placeholder="Nomor B/L"></v-text-field>
        </div>
      </v-col>
      <v-col lg="5" md="5" sm="12">
        <div>
          <label class="caption font-weight-medium">Tanggal BC 1.0</label>
          <v-menu
            v-model="datepicker_tgl_bc10"
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
              @input="datepicker_tgl_bc10 = false"
            ></v-date-picker>
          </v-menu>
        </div>

        <div>
          <label class="caption font-weight-medium">Tanggal BC 1.1</label>
          <v-menu
            v-model="datepicker_tgl_bc11"
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
              @input="datepicker_tgl_bc11 = false"
            ></v-date-picker>
          </v-menu>
        </div>

        <div>
          <label class="caption font-weight-medium">Tanggal B/L</label>
          <v-menu
            v-model="datepicker_tgl_bl"
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
              @input="datepicker_tgl_bl = false"
            ></v-date-picker>
          </v-menu>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "DataPengajuan",
  components: {},
  data() {
    return {
      datepicker_dokumen_masuk: "",
      datepicker_tgl_bc10: "",
      datepicker_tgl_bc11: "",
      datepicker_tgl_bl: "",
    };
  },
};
</script>

<style lang="scss" scoped></style>
