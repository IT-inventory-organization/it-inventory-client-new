<template>
  <v-form ref="initialReport" @submit.prevent="handleSubmit">
    <v-row>
      <v-col lg="6" md="6" sm="12">
        <v-select
          clearable
          v-model="dataKontainer"
          label="Data Kontainer"
          :items="['LCL', 'Test 2']"
          :rules="[
            (value) => {
              return genericRequiredRule(value, 'Data Kontainer');
            },
          ]"
          outlined
        ></v-select>
      </v-col>
      <v-col lg="6" md="6" sm="12">
        <v-text-field
          label="Volume Kontainer"
          type="number"
          min="0"
          outlined
          v-model="volumeKontainer"
          :rules="[
            (value) => {
              return genericRequiredRule(value, 'Hs Code');
            },
          ]"
        >
        </v-text-field>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import { FieldRequired } from "@/mixins/ValidationRules";
export default {
  name: "DataPetiKemas",
  mixins: [FieldRequired],
  data() {
    return {
      dataKontainer: "",
      volumeKontainer: "",
    };
  },
  methods: {
    handleSubmit() {
      if (this.$refs.initialReport.validate()) {
        this.$emit("handleModal");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
