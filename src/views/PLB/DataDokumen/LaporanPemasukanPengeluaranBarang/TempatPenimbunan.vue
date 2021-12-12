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
            :disabled="disableTempatPenimbunan"
            v-model="tempatPenimbunan"
            :items="itemTempatPenimbunan"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Tempat Penimbunan');
              },
            ]"
            placeholder="Pilih Tempat Penimbunan"
            append-icon="mdi-chevron-down"
          ></v-select>
        </div>
        <v-checkbox
          dense
          v-model="isTempatPenimbunan"
          label="Termasuk Tempat Penimbunan"
        ></v-checkbox>
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
                v-model="perkiraanTanggalPengeluaran"
                :rules="[
                  (value) => {
                    return genericRequiredRule(
                      value,
                      'Perkiraan Tanggal Pengeluaran'
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
              v-model="perkiraanTanggalPengeluaran"
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
import { FieldRequired } from "@/mixins/ValidationRules";
export default {
  name: "TempatPenimbunan",
  mixins: [FieldRequired],
  data() {
    return {
      datepicker_perkiraan_tgl_pengeluaran: false,
      disableTempatPenimbunan: false,
    };
  },
  computed: {
    itemTempatPenimbunan() {
      return this.$store.state.plb.itemTempatPenimbunan;
    },
    tempatPenimbunan: {
      get() {
        return this.$store.state.plb.tempatPenimbunan.tempatPenimbunan;
      },
      set(value) {
        this.$store.commit("SET_TEMPAT_PENIMBUNAN", {
          key: "tempatPenimbunan",
          value,
        });
      },
    },
    perkiraanTanggalPengeluaran: {
      get() {
        return this.$store.state.plb.tempatPenimbunan
          .perkiraanTanggalPengeluaran;
      },
      set(value) {
        this.$store.commit("SET_TEMPAT_PENIMBUNAN", {
          key: "perkiraanTanggalPengeluaran",
          value,
        });
      },
    },
    isTempatPenimbunan: {
      get() {
        return this.$store.state.plb.tempatPenimbunan.isTempatPenimbunan;
      },
      set(value) {
        this.$store.commit("SET_TEMPAT_PENIMBUNAN", {
          key: "isTempatPenimbunan",
          value,
        });
      },
    },
  },
  watch: {
    isTempatPenimbunan(val) {
      if (val) {
        this.disableTempatPenimbunan = true;
        this.$store.commit(
          "SET_ITEM_TEMPAT_PENIMBUNAN",
          this.$store.state.plb.dataKapal.namaKapal
        );
        this.$store.commit("SET_TEMPAT_PENIMBUNAN", {
          key: "tempatPenimbunan",
          value: this.$store.state.plb.dataKapal.namaKapal,
        });
      } else {
        this.disableTempatPenimbunan = false;
        this.$store.commit("SET_TEMPAT_PENIMBUNAN", {
          key: "tempatPenimbunan",
          value: "",
        });
      }
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
