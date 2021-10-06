<template>
  <v-card>
    <v-card-title>
      <v-row no-gutters align-content="center" justify="space-between">
        <span class="text-h6">Created New</span>
        <span style="cursor: pointer" @click.prevent="handleDialog"
          ><v-icon>mdi-close</v-icon></span
        >
      </v-row>
    </v-card-title>
    <v-card-text>
      <v-form ref="initialReport" @submit.prevent="handleSubmit">
        <v-container>
          <v-select
            clearable
            label="Pengajuan Sebagai"
            v-model="pengajuanSebagai"
            :items="['Test 1', 'Test 2']"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Pengajauan Sebagai');
              },
            ]"
            outlined
          ></v-select>
          <v-select
            clearable
            label="Diajukan Dikantor"
            :items="['Test 1', 'Test 2']"
            v-model="diajukanDikantor"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Diajukan Dikantor');
              },
            ]"
            outlined
          ></v-select>
          <v-select
            clearable
            label="Jenis Pemberitahuan"
            :items="['Test 1', 'Test 2']"
            v-model="jenisPemberitahuan"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Jenis Pemberitahuan');
              },
            ]"
            outlined
          ></v-select>
          <v-select
            clearable
            label="Jenis Dokumen BC"
            v-model="BCDocumentType"
            :items="['Test 1', 'Test 2']"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Jenis Dokumen BC');
              },
            ]"
            outlined
          ></v-select>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <button type="submit" class="btn_save">
            <span>Next</span> <img src="../../assets/icons/ic_bulletnext.svg" />
          </button>
        </v-card-actions>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { FieldRequired } from "@/mixins/ValidationRules";

export default {
  name: "CreateNewModal",
  mixins: [FieldRequired],
  data() {
    return {
      page: "",
    };
  },
  computed: {
    pengajuanSebagai: {
      get() {
        return this.$store.state.report.report.pengajuanSebagai;
      },
      set(value) {
        this.$store.commit("SET_DATA_REPORT", {
          key: "pengajuanSebagai",
          value,
        });
      },
    },
    diajukanDikantor: {
      get() {
        return this.$store.state.report.report.diajukanDikantor;
      },
      set(value) {
        this.$store.commit("SET_DATA_REPORT", {
          key: "diajukanDikantor",
          value,
        });
      },
    },
    jenisPemberitahuan: {
      get() {
        return this.$store.state.report.report.jenisPemberitahuan;
      },
      set(value) {
        this.$store.commit("SET_DATA_REPORT", {
          key: "jenisPemberitahuan",
          value,
        });
      },
    },
    BCDocumentType: {
      get() {
        return this.$store.state.report.report.BCDocumentType;
      },
      set(value) {
        this.$store.commit("SET_DATA_REPORT", {
          key: "BCDocumentType",
          value,
        });
      },
    },
  },
  methods: {
    handleDialog() {
      this.$emit("handleModal");
      this.$refs.initialReport.resetValidation();
    },
    handleSubmit() {
      if (this.$refs.initialReport.validate()) {
        // this.$store.dispatch("createReport")
        this.$router.push(`${this.$route.path}/add`);
      }
    },
  },
  created() {
    const getPath = this.$route.path;

    if (getPath.includes("plb")) {
      this.page = "PLB";
    } else if (getPath.includes("ppftz")) {
      this.page = "PPFTZ";
    }
  },
};
</script>

<style lang="scss" scoped></style>
