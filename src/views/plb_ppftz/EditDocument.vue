<template>
  <div class="it-inventory-card">
    <v-row align="center">
      <v-col lg="10" md="10" sm="12">
        <v-card-title class="it-inventory-card-title">
          Edit {{ page }}
        </v-card-title>
      </v-col>
      <v-col lg="2" md="2" sm="12" style="text-align: right">
        <v-btn
          v-if="step === 4"
          fill
          class="it_inven_create_btn"
          style="width: 60%"
          @click="handleSubmitAll"
          >Submit</v-btn
        >
      </v-col>
    </v-row>

    <v-stepper class="it-inven-stepper" v-model="step" elevation="0">
      <v-stepper-header>
        <v-stepper-step :complete="step > 1" step="1">
          Data Header
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="step > 2" step="2">
          Data Lanjutan
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="step > 3" step="3">
          Data Barang
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="4">
          Preview
        </v-stepper-step>
      </v-stepper-header>

      <!-- Stepper Items Content -->
      <!-- Data Header -->
      <v-stepper-items>
        <v-stepper-content step="1">
          <form-data-header @handleSubmitStepper="handleSubmitStepper" />
        </v-stepper-content>
      </v-stepper-items>
      <!-- End Data Header -->

      <!-- Data Lanjutan -->
      <v-stepper-items>
        <v-stepper-content step="2">
          <form-data-lanjutan @handleSubmitStepper="handleSubmitStepper" />
        </v-stepper-content>
      </v-stepper-items>
      <!-- End Data Lanjutan -->

      <!-- Data Barang -->
      <v-stepper-items>
        <v-stepper-content step="3">
          <form-data-barang @handleSubmitStepper="handleSubmitStepper" />
        </v-stepper-content>
      </v-stepper-items>
      <!-- End Data Barang -->

      <!-- Preview -->
      <v-stepper-items>
        <v-stepper-content step="4">
          <data-preview />
        </v-stepper-content>
      </v-stepper-items>
      <!-- End Preview -->
    </v-stepper>
  </div>
</template>

<script>
import DetectReportType from "@/helper/DetectReportType";
export default {
  name: "CreateDocument",
  components: {
    FormDataHeader: () => import("@/views/plb_ppftz/DataHeader/FormDataHeader"),
    FormDataLanjutan: () =>
      import("@/views/plb_ppftz/DataLanjutan/FormDataLanjutan"),
    FormDataBarang: () => import("@/views/plb_ppftz/DataBarang/TableBarang"),
    DataPreview: () => import("@/views/plb_ppftz/DataPreview/DataPreview"),
  },
  data() {
    return {
      page: "",
      currentLocation: "",
      step: 1,
    };
  },
  created() {
    this.currentLocation = this.$route.path;
    this.page = DetectReportType(this.currentLocation);
    if (!localStorage.getItem("current_report_id")) {
      this.$router.push(`/${this.page.toLowerCase()}`);
    } else {
      this.$store.commit(
        "SET_REPORT_ID",
        +localStorage.getItem("current_report_id")
      );
    }
    if (localStorage.getItem("stepper")) {
      this.step = +localStorage.getItem("stepper");
    }
    this.$store.dispatch("getOneReport");
  },
  methods: {
    handleSubmitStepper() {
      this.step += 1;
      localStorage.setItem("stepper", +this.step);
    },
    handleSubmitAll() {
      localStorage.removeItem("current_report_id");
      localStorage.removeItem("stepper");
      if (this.$route.path.toLowerCase().includes("plb")) {
        this.$router.push("/plb");
      } else if (this.$route.path.toLowerCase().includes("ppftz")) {
        this.$router.push("/ppftz");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.v-stepper__header {
  box-shadow: none !important;
}
.v-stepper__content {
  box-shadow: none !important;
  padding-right: 0 !important;
  padding-left: 0 !important;
}
</style>
