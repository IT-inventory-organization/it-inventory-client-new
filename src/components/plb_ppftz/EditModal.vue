<template>
  <v-card min-height="500">
    <v-card-title>
      <v-row no-gutters align-content="center" justify="space-between">
        <span class="text-h6">Edit report</span>
        <span style="cursor: pointer" @click.prevent="handleDialog"
          ><v-icon>mdi-close</v-icon></span
        >
      </v-row>
    </v-card-title>
    <v-row v-if="loadingGetOne" style="height: 80%" justify="center" align-content="center">
      <v-progress-circular
        :size="50"
        color="primary"
        justify="center"
        indeterminate
      ></v-progress-circular>
    </v-row>
    <v-card-text v-if="!loadingGetOne">
      <v-form ref="initialEditReport" @submit.prevent="handleSubmit">
        <v-container>
          <v-select
            clearable
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
            clearable
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
            clearable
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
            clearable
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
          <button @click.prevent="handleSubmit('done')" class="btn_save pr-3">
            <span>Done</span>
          </button>
          <v-spacer></v-spacer>
          <button type="submit" class="btn_save">
            <span>Update More</span> <img src="../../assets/icons/ic_bulletnext.svg" />
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
  props: ["reportId"],
  data() {
    return {
      page: "",
      dokumenBC: [],
    };
  },
  computed: {
    loadingGetOne() {
     return this.$store.state.report.loading.getOne
    },
    loadingEdit() {
     return this.$store.state.report.loading.loadingEdit
    },
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
      // this.$refs.initialEditReport.resetValidation();
      this.$emit("handleEditModal");
    },
    handleSubmit(condition) {
      this.$store.commit("SET_LOADING", {key: "loadingEdit", value: true})
      this.$store.dispatch("editReport")
        .then((result) => {
          if(result.data.success) {
            this.$swal("Success edit data", "", )
          }
        })
        .catch(err => {
          this.$swal("Error edit data", err.response.data.message, "error")
        })
        .finally(()=> {
          this.$store.commit("SET_LOADING", {key: "loadingEdit", value: false})
          this.$router.push(`/${this.page.toLowerCase()}/edit`)
          if(condition) {
            this.$emit("handleEditModal");
          } else this.$router.push(`/${this.page}/edit`)
        })
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

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>
