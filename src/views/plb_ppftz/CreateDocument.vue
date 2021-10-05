<template>
  <div class="it-inventory-card">
    <v-card-title class="it-inventory-card-title">
      Create New {{ page }}
    </v-card-title>

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
          barang
        </v-stepper-content>
      </v-stepper-items>
      <!-- End Data Barang -->

      <!-- Preview -->
      <v-stepper-items>
        <v-stepper-content step="4">
          Preview
        </v-stepper-content>
      </v-stepper-items>
      <!-- End Preview -->
    </v-stepper>
  </div>
</template>

<script>
export default {
  name: "CreateDocument",
  components: {
    FormDataHeader: () => import("@/views/plb_ppftz/DataHeader/FormDataHeader"),
    FormDataLanjutan: () =>
      import("@/views/plb_ppftz/DataLanjutan/FormDataLanjutan"),
  },
  data() {
    return {
      page: "",
      step: 1,
    };
  },
  created() {
    const getPath = this.$route.path;

    if (getPath.includes("plb")) {
      this.page = "PLB";
    } else if (getPath.includes("ppftz")) {
      this.page = "PPFTZ";
    }
  },
  methods: {
    handleSubmitStepper() {
      this.step += 1;
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
