<template>
  <div>
    <v-row align="center">
      <v-col lg="11" md="11" sm="12">
        <div class="display-1 font-weight-bold">
          Informasi Perusahaan
        </div>
      </v-col>
      <v-col lg="1" md="1" sm="12" style="text-align: right">
        <button
          v-if="stepper === 3"
          fill
          class="it-inventory-btn it-inventory-btn__fw it-inventory-btn__green"
          @click.prevent="handleFinish"
        >
          Selesai
        </button>
      </v-col>
    </v-row>
    <v-stepper class="it-inven-stepper" v-model="stepper" elevation="0">
      <v-row justify="center">
        <v-col cols="6">
          <v-stepper-header>
            <v-stepper-step :complete="stepper > 1" step="1">
              Data Dokumen
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="stepper > 2" step="2">
              Data Barang
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="3">
              Preview
            </v-stepper-step>
          </v-stepper-header>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="10">
          <v-stepper-items>
            <v-stepper-content step="1">
              <data-dokumen />
            </v-stepper-content>
          </v-stepper-items>

          <v-stepper-items>
            <v-stepper-content step="2">
              <data-barang />
            </v-stepper-content>
          </v-stepper-items>

          <v-stepper-items>
            <v-stepper-content step="3">
              Preview
            </v-stepper-content>
          </v-stepper-items>
        </v-col>
      </v-row>
    </v-stepper>
  </div>
</template>

<script>
export default {
  name: "FormDocument",
  components: {
    DataDokumen: () => import("@/views/PLB/DataDokumen/index"),
    DataBarang: () => import("@/views/PLB/DataBarang/index"),
  },
  computed: {
    stepper() {
      return this.$store.state.plb.stepper;
    },
  },
  methods: {
    handleFinish() {
      this.$router.push("/plb");
      this.$store.commit("SET_STEPPER", 1);
    },
  },
  created() {
    const getStepper = localStorage.getItem("stepper");
    if (getStepper) {
      this.$store.commit("SET_STEPPER", +getStepper);
    }
  },
};
</script>

<style lang="scss" scoped></style>
