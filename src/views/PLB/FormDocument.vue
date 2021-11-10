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
          v-if="step === 4"
          fill
          class="it-inventory-btn it-inventory-btn__fw it-inventory-btn__green"
        >
          Selesai
        </button>
      </v-col>
    </v-row>
    <v-stepper class="it-inven-stepper" v-model="step" elevation="0">
      <v-row justify="center">
        <v-col cols="6">
          <v-stepper-header>
            <v-stepper-step :complete="step > 1" step="1">
              Data Dokumen
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
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="10">
          <v-stepper-items>
            <v-stepper-content step="1">
              hhhh
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
  data() {
    return {
      step: 1,
    };
  },
};
</script>

<style lang="scss" scoped></style>
