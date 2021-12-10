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
            v-model="beratMuatan"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Berat Muatan');
              },
            ]"
            dense
            placeholder="0"
          ></v-text-field>
        </div>
        <div>
          <label class="caption font-weight-medium">Volume (M3)</label>
          <v-text-field
            outlined
            v-model="volume"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Volume');
              },
            ]"
            dense
            placeholder="0"
          ></v-text-field>
        </div>
      </v-col>
      <v-col lg="5" md="5" sm="12">
        <div>
          <label class="caption font-weight-medium">Berat Kapat + Muatan</label>
          <v-text-field
            outlined
            v-model="beratKapalDanMuatan"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Berat Kapat + Muatan');
              },
            ]"
            dense
            placeholder="0"
          ></v-text-field>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { FieldRequired } from "@/mixins/ValidationRules";
export default {
  name: "BeratDanVolume",
  mixins: [FieldRequired],
  computed: {
    beratMuatan: {
      get() {
        return this.$store.state.plb.beratDanVolume.beratMuatan;
      },
      set(value) {
        this.$store.commit("SET_BERAT_DAN_VOLUME", {
          key: "beratMuatan",
          value,
        });
      },
    },
    beratKapalDanMuatan: {
      get() {
        return this.$store.state.plb.beratDanVolume.beratKapalDanMuatan;
      },
      set(value) {
        this.$store.commit("SET_BERAT_DAN_VOLUME", {
          key: "beratKapalDanMuatan",
          value,
        });
      },
    },
    volume: {
      get() {
        return this.$store.state.plb.beratDanVolume.volume;
      },
      set(value) {
        this.$store.commit("SET_BERAT_DAN_VOLUME", {
          key: "volume",
          value,
        });
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
