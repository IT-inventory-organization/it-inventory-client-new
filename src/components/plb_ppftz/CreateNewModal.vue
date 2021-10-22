<template>
  <v-card>
    <v-card-title>
      <v-row no-gutters align-content="center" justify="space-between">
        <span class="text-h6">Create New</span>
        <span style="cursor: pointer" @click.prevent="handleDialog"
          ><v-icon>mdi-close</v-icon></span
        >
      </v-row>
    </v-card-title>
    <v-card-text>
      <v-form ref="initialReport" @submit.prevent="handleSubmit">
        <v-container>
          <v-select
            label="Pengajuan Sebagai"
            v-model="pengajuanSebagai"
            :items="['Importir', 'Exportir']"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Pengajauan Sebagai');
              },
            ]"
            outlined
          ></v-select>
          <v-select
            label="Diajukan Dikantor"
            :items="['Kantor 1', 'Kantor 2']"
            v-model="kantorPengajuan"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Diajukan Dikantor');
              },
            ]"
            outlined
          ></v-select>
          <v-select
            label="Jenis Pemberitahuan"
            :items="['Import', 'Export']"
            v-model="jenisPemberitahuan"
            :rules="[
              (value) => {
                return genericRequiredRule(value, 'Jenis Pemberitahuan');
              },
            ]"
            outlined
          ></v-select>
          <v-select
            label="Jenis Dokumen BC"
            v-model="BCDocumentType"
            :items="dokumenBC"
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
import DetectReportType from "@/helper/DetectReportType";
import { FieldRequired } from "@/mixins/ValidationRules";

export default {
  name: "CreateNewModal",
  mixins: [FieldRequired],
  data() {
    return {
      page: "",
      dokumenBC: [],
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
    kantorPengajuan: {
      get() {
        return this.$store.state.report.report.kantorPengajuan;
      },
      set(value) {
        this.$store.commit("SET_DATA_REPORT", {
          key: "kantorPengajuan",
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
        this.$store.dispatch("createReport", this.page);
      } else {
        this.$swal("Data Belum Lengkap", "", "error");
      }
    },
  },
  created() {
    this.currentLocation = this.$route.path;
    this.page = DetectReportType(this.currentLocation);
    if (this.page === "PLB") {
      this.dokumenBC = [
        "BC 2.3",
        "BC 2.7",
        "BC 4.0",
        "BC 2.6.2",
        "BC 4.1",
        "BC 2.5",
        "BC 2.7",
        "BC 2.6.1",
      ];
    } else {
      this.dokumenBC = ["BC 01", "BC 02", "BC 03"];
    }
  },
};
</script>

<style lang="scss" scoped></style>
