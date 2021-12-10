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
            v-model="jenisIdentitasPengusahaPLB"
            :rules="[
              (value) => {
                return genericRequiredRule(
                  value,
                  'Jenis Identitas Pengusaha PLB'
                );
              },
            ]"
            :items="itemJenisIdentitasPengusahaPLB"
            placeholder="Pilih Jenis Identitas Pengusaha PLB"
            append-icon="mdi-chevron-down"
          ></v-select>
        </div>
        <div>
          <label class="caption font-weight-medium">Nama Pengusaha PLB</label>
          <v-text-field
            outlined
            dense
            v-model="namaPengusahaPLB"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Nama Pengusaha PLB');
              },
            ]"
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
            v-model="nomorIdentitasPengusahaPLB"
            :rules="[
              (value) => {
                return genericRequiredRule(
                  value,
                  'Nomor Identitas Pengusaha PLB'
                );
              },
            ]"
            placeholder="Input Nomor Identitas"
          ></v-text-field>
        </div>
        <div>
          <label class="caption font-weight-medium">Alamat Pengusaha PLB</label>
          <v-text-field
            outlined
            dense
            v-model="alamatPengusahaPLB"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Alamat Pengusaha PLB');
              },
            ]"
            placeholder="Input Alamat Pengusaha PLB"
          ></v-text-field>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { FieldRequired } from "@/mixins/ValidationRules";
export default {
  name: "PengusahaPLB",
  mixins: [FieldRequired],
  computed: {
    itemJenisIdentitasPengusahaPLB() {
      return this.$store.state.plb.itemJenisIdentitasPengusahaPLB;
    },
    jenisIdentitasPengusahaPLB: {
      get() {
        return this.$store.state.plb.pengusahaPLB.jenisIdentitasPengusahaPLB;
      },
      set(value) {
        this.$store.commit("SET_PENGUSAHA_PLB", {
          key: "jenisIdentitasPengusahaPLB",
          value,
        });
      },
    },
    namaPengusahaPLB: {
      get() {
        return this.$store.state.plb.pengusahaPLB.namaPengusahaPLB;
      },
      set(value) {
        this.$store.commit("SET_PENGUSAHA_PLB", {
          key: "namaPengusahaPLB",
          value,
        });
      },
    },
    nomorIdentitasPengusahaPLB: {
      get() {
        return this.$store.state.plb.pengusahaPLB.nomorIdentitasPengusahaPLB;
      },
      set(value) {
        this.$store.commit("SET_PENGUSAHA_PLB", {
          key: "nomorIdentitasPengusahaPLB",
          value,
        });
      },
    },
    alamatPengusahaPLB: {
      get() {
        return this.$store.state.plb.pengusahaPLB.alamatPengusahaPLB;
      },
      set(value) {
        this.$store.commit("SET_PENGUSAHA_PLB", {
          key: "alamatPengusahaPLB",
          value,
        });
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
