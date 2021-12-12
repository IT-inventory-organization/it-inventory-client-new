<template>
  <div class="mx-12">
    <div class="body-1 font-weight-bold mb-5">Dokumen Pengajuan</div>
    <v-row
      justify="space-between"
      class="mb-3"
      v-if="handleNotificationType() === constantPemasukan"
    >
      <v-col lg="5" md="5" sm="12">
        <div>
          <label class="caption font-weight-medium"
            >Nomor Dokumen Pemasukan</label
          >
          <v-text-field
            outlined
            dense
            v-model="nomorDokumenPemasukan"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Nomor Dokumen Pemasukan');
              },
            ]"
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
                v-model="tanggalDokumenPemasukan"
                :rules="[
                  (value) => {
                    return genericRequiredRule(
                      value,
                      'Tanggal Dokumen Pemasukan'
                    );
                  },
                ]"
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="tanggalDokumenPemasukan"
              scrollable
              no-title
              @input="datepicker_dokumen_masuk = false"
            ></v-date-picker>
          </v-menu>
        </div>
      </v-col>
    </v-row>

    <!-- Dokumen Pengeluaran -->
    <v-row
      justify="space-between"
      class="mb-3"
      v-if="handleNotificationType() === constantPengeluaran"
    >
      <v-col lg="5" md="5" sm="12">
        <div>
          <label class="caption font-weight-medium"
            >Nomor Dokumen Pengeluaran</label
          >
          <v-text-field
            outlined
            dense
            placeholder="Nomor Dokumen Pengeluaran"
          ></v-text-field>
        </div>

        <div>
          <label class="caption font-weight-medium"
            >Tanggal Dokumen Pengeluaran</label
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
      <v-col lg="5" md="5" sm="12">
        <div>
          <label class="caption font-weight-medium"
            >Nomor Dokumen Pemasukan</label
          >
          <v-select
            outlined
            dense
            placeholder="Nomor Dokumen Pemasukan"
            append-icon="mdi-chevron-down"
          ></v-select>
        </div>
      </v-col>
    </v-row>
    <!-- End Dokumen Pengeluaran -->

    <div class="body-1 font-weight-bold mb-5">Dokumen Tambahan</div>
    <v-row justify="space-between" class="mb-3">
      <v-col lg="5" md="5" sm="12">
        <div>
          <label class="caption font-weight-medium">Nomor BC 1.0</label>
          <v-text-field
            outlined
            dense
            v-model="nomorBC10"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Nomor BC 1.0');
              },
            ]"
            placeholder="Nomor BC 1.0"
          ></v-text-field>
        </div>

        <div>
          <label class="caption font-weight-medium">Nomor BC 1.1</label>
          <v-text-field
            outlined
            dense
            v-model="nomorBC11"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Nomor BC 1.1');
              },
            ]"
            placeholder="Nomor BC 1.1"
          ></v-text-field>
        </div>

        <div>
          <label class="caption font-weight-medium">Nomor B/L</label>
          <v-text-field
            outlined
            dense
            v-model="nomorBL"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Nomor B/L');
              },
            ]"
            placeholder="Nomor B/L"
          ></v-text-field>
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
                v-model="tanggalBC10"
                :rules="[
                  (value) => {
                    return genericRequiredRule(value, 'Tanggal BC 1.0');
                  },
                ]"
                outlined
                clearable
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="tanggalBC10"
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
                v-model="tanggalBC11"
                :rules="[
                  (value) => {
                    return genericRequiredRule(value, 'Tanggal BC 1.1');
                  },
                ]"
                outlined
                clearable
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="tanggalBC11"
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
                v-model="tanggalBL"
                :rules="[
                  (value) => {
                    return genericRequiredRule(value, 'Tanggal B/L');
                  },
                ]"
                outlined
                clearable
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="tanggalBL"
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
import { FieldRequired } from "@/mixins/ValidationRules";
export default {
  name: "DataPengajuan",
  components: {},
  mixins: [FieldRequired],
  data() {
    return {
      datepicker_dokumen_masuk: "",
      datepicker_tgl_bc10: "",
      datepicker_tgl_bc11: "",
      datepicker_tgl_bl: "",
    };
  },
  computed: {
   
    constantPemasukan() {
      return this.$store.state.plb.constant.pemasukan;
    },
    constantPengeluaran() {
      return this.$store.state.plb.constant.pengeluaran;
    },
    nomorDokumenPemasukan: {
      get() {
        return this.$store.state.plb.dokumenPemasukan.nomorDokumenPemasukan;
      },
      set(value) {
        this.$store.commit("SET_DOKUMEN_PEMASUKAN", {
          key: "nomorDokumenPemasukan",
          value,
        });
      },
    },
    tanggalDokumenPemasukan: {
      get() {
        return this.$store.state.plb.dokumenPemasukan.tanggalDokumenPemasukan;
      },
      set(value) {
        value =this.formatDate(value)

        this.$store.commit("SET_DOKUMEN_PEMASUKAN", {
          key: "tanggalDokumenPemasukan",
          value,
        });
      },
    },
    nomorBC10: {
      get() {
        return this.$store.state.plb.dokumenTambahan.nomorBC10;
      },
      set(value) {
        this.$store.commit("SET_DOKUMEN_TAMBAHAN", {
          key: "nomorBC10",
          value,
        });
      },
    },
    nomorBC11: {
      get() {
        return this.$store.state.plb.dokumenTambahan.nomorBC11;
      },
      set(value) {
        this.$store.commit("SET_DOKUMEN_TAMBAHAN", {
          key: "nomorBC11",
          value,
        });
      },
    },
    nomorBL: {
      get() {
        return this.$store.state.plb.dokumenTambahan.nomorBL;
      },
      set(value) {
        this.$store.commit("SET_DOKUMEN_TAMBAHAN", {
          key: "nomorBL",
          value,
        });
      },
    },
    tanggalBC10: {
      get() {
        return this.$store.state.plb.dokumenTambahan.tanggalBC10;
      },
      set(value) {
        value =this.formatDate(value)


        this.$store.commit("SET_DOKUMEN_TAMBAHAN", {
          key: "tanggalBC10",
          value,
        });
      },
    },
    tanggalBC11: {
      get() {
        return this.$store.state.plb.dokumenTambahan.tanggalBC11;
      },
      set(value) {
        value =this.formatDate(value)

        this.$store.commit("SET_DOKUMEN_TAMBAHAN", {
          key: "tanggalBC11",
          value,
        });
      },
    },
    tanggalBL: {
      get() {
        return this.$store.state.plb.dokumenTambahan.tanggalBL;
      },
      set(value) {
        value =this.formatDate(value)

        this.$store.commit("SET_DOKUMEN_TAMBAHAN", {
          key: "tanggalBL",
          value,
        });
      },
    },
  },
  methods: {
    handleNotificationType() {
      return localStorage.getItem("NotificationType");
    },
     formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.toString().split('-')
        return `${day}-${month}-${year}`
      },
  },
};
</script>

<style lang="scss" scoped></style>
