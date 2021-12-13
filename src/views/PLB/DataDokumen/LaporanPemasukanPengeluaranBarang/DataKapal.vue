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
            v-model="voyageKapal"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Voyage Kapal');
              },
            ]"
            placeholder="Voyage Kapal"
          ></v-text-field>
        </div>
        <div>
          <label class="caption font-weight-medium">Bendera Kapal</label>
          <v-text-field
            outlined
            dense
            v-model="benderaKapal"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Bendera Kapal');
              },
            ]"
            placeholder="Bendera Kapal"
          ></v-text-field>
        </div>
      </v-col>
      <v-col lg="5" md="5" sm="12">
        <div>
          <label class="caption font-weight-medium">Nama Kapal</label>
          <v-text-field
            outlined
            dense
            v-model="namaKapal"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Nama Kapal');
              },
            ]"
            placeholder="Nama Kapal"
          ></v-text-field>
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
                  v-model="tanggalKedatangan"
                  :rules="[
                    (value) => {
                      return genericRequiredRule(value, 'Tanggal Kedatangan');
                    },
                  ]"
                  outlined
                  clearable
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                scrollable
                v-model="tanggalKedatangan"
                no-title
                @input="datepicker_tgl_kedatangan = false"
              ></v-date-picker>
            </v-menu>
          </v-col>
          <v-col lg="6" md="6" sm="12">
            <label class="caption font-weight-medium"
              >Tanggal Keberangkatan</label
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
                  v-model="tanggalKeberangkatan"
                  :rules="[
                    (value) => {
                      return genericRequiredRule(
                        value,
                        'Tanggal Keberangkatan'
                      );
                    },
                  ]"
                  outlined
                  clearable
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                scrollable
                v-model="tanggalKeberangkatan"
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
import { FieldRequired } from "@/mixins/ValidationRules";
export default {
  nama: "DataKapal",
  mixins: [FieldRequired],
  data() {
    return {
      datepicker_tgl_kedatangan: false,
      datepicker_tgl_keberangkatan: false,
    };
  },
  computed: {
    voyageKapal: {
      get() {
        return this.$store.state.plb.dataKapal.voyageKapal;
      },
      set(value) {
        this.$store.commit("SET_DATA_KAPAL", {
          key: "voyageKapal",
          value,
        });
      },
    },

    benderaKapal: {
      get() {
        return this.$store.state.plb.dataKapal.benderaKapal;
      },
      set(value) {
        this.$store.commit("SET_DATA_KAPAL", {
          key: "benderaKapal",
          value,
        });
      },
    },
    namaKapal: {
      get() {
        return this.$store.state.plb.dataKapal.namaKapal;
      },
      set(value) {
        this.$store.commit("SET_DATA_KAPAL", {
          key: "namaKapal",
          value,
        });
      },
    },
    tanggalKedatangan: {
      get() {
        return this.$store.state.plb.dataKapal.tanggalKedatangan;
      },
      set(value) {
        
        this.$store.commit("SET_DATA_KAPAL", {
          key: "tanggalKedatangan",
          value,
        });
      },
    },
    tanggalKeberangkatan: {
      get() {
        return this.$store.state.plb.dataKapal.tanggalKeberangkatan;
      },
      set(value) {
        

        this.$store.commit("SET_DATA_KAPAL", {
          key: "tanggalKeberangkatan",
          value,
        });
      },
    },
    
  },
  methods: {
      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.toString().split('-')
        return `${day}-${month}-${year}`
      },
    }
};
</script>

<style lang="scss" scoped></style>
