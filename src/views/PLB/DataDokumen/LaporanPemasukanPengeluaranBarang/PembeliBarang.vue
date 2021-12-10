<template>
  <div>
    <div class="body-1 font-weight-bold mb-5">
      Pembeli Barang
    </div>
    <v-row justify="space-between" class="mb-3">
      <v-col lg="5" md="5" sm="12">
        <div>
          <label class="caption font-weight-medium"
            >Jenis Identitas Pembeli</label
          >
          <v-select
            outlined
            dense
            v-model="jenisIdentitasPembeli"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Jenis Identitas Pembeli');
              },
            ]"
            :items="itemJenisIdentitasPembeli"
            placeholder="Pilih Jenis Identitas Pembeli"
            append-icon="mdi-chevron-down"
          ></v-select>
        </div>
        <div>
          <label class="caption font-weight-medium">Nama Pembeli</label>
          <v-text-field
            outlined
            dense
            v-model="namaPembeli"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Nama Pembeli');
              },
            ]"
            placeholder="Input Nama Pembeli"
          ></v-text-field>
        </div>
        <v-checkbox
          dense
          v-model="termasukPengusahaPLB"
          label="Termasuk Pengusaha PLB"
        ></v-checkbox>
      </v-col>
      <v-col lg="5" md="5" sm="12">
        <div>
          <label class="caption font-weight-medium"
            >Nomor Identitas Pembeli</label
          >
          <v-text-field
            outlined
            dense
            v-model="nomorIdentitasPembeli"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Nomor Identitas Pembeli');
              },
            ]"
            placeholder="Input Nomor Identitas"
          ></v-text-field>
        </div>
        <div>
          <label class="caption font-weight-medium">Alamat Pembeli</label>
          <v-text-field
            outlined
            dense
            v-model="alamatPembeli"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Alamat Pembeli');
              },
            ]"
            placeholder="Input Alamat Pembeli"
          ></v-text-field>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { FieldRequired } from "@/mixins/ValidationRules";
export default {
  name: "PembeliBarang",
  mixins: [FieldRequired],
  data() {
    return {
      termasukPengusahaPLB: false,
    };
  },
  computed: {
    itemJenisIdentitasPembeli() {
      return this.$store.state.plb.itemJenisIdentitasPembeli;
    },
    jenisIdentitasPembeli: {
      get() {
        return this.$store.state.plb.pembeliBarang.jenisIdentitasPembeli;
      },
      set(value) {
        this.$store.commit("SET_PEMBELI_BARANG", {
          key: "jenisIdentitasPembeli",
          value,
        });
      },
    },
    namaPembeli: {
      get() {
        return this.$store.state.plb.pembeliBarang.namaPembeli;
      },
      set(value) {
        this.$store.commit("SET_PEMBELI_BARANG", {
          key: "namaPembeli",
          value,
        });
      },
    },
    nomorIdentitasPembeli: {
      get() {
        return this.$store.state.plb.pembeliBarang.nomorIdentitasPembeli;
      },
      set(value) {
        this.$store.commit("SET_PEMBELI_BARANG", {
          key: "nomorIdentitasPembeli",
          value,
        });
      },
    },
    alamatPembeli: {
      get() {
        return this.$store.state.plb.pembeliBarang.alamatPembeli;
      },
      set(value) {
        this.$store.commit("SET_PEMBELI_BARANG", {
          key: "alamatPembeli",
          value,
        });
      },
    },
  },
  watch: {
    termasukPengusahaPLB(val) {
      if (val) {
        this.$store.commit("SET_PEMBELI_BARANG", {
          key: "jenisIdentitasPembeli",
          value: this.$store.state.plb.pengusahaPLB.jenisIdentitasPengusahaPLB,
        });
        this.$store.commit("SET_PEMBELI_BARANG", {
          key: "namaPembeli",
          value: this.$store.state.plb.pengusahaPLB.namaPengusahaPLB,
        });
        this.$store.commit("SET_PEMBELI_BARANG", {
          key: "nomorIdentitasPembeli",
          value: this.$store.state.plb.pengusahaPLB.nomorIdentitasPengusahaPLB,
        });
        this.$store.commit("SET_PEMBELI_BARANG", {
          key: "alamatPembeli",
          value: this.$store.state.plb.pengusahaPLB.alamatPengusahaPLB,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
