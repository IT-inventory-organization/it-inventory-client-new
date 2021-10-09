<template>
  <v-form ref="formDataPetiKemas" lazy-validation>
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
          outlined
          v-model="volumeKontainer"
          :rules="[
            (value) => {
              return genericRequiredRule(value, 'Volume Kontainer');
            },
            (value) => {
              return genericNumberRule(value, 'Volume Kontainer');
            },
            (value) => {
              return genericMinRule(value, 'Volume Kontainer');
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
    return {};
  },
  computed: {
    dataKontainer: {
      get() {
        return this.$store.state.report.dataPetiKemas.dataKontainer;
      },
      set(value) {
        this.$store.commit("SET_DATA_PETI_KEMAS", {
          key: "dataKontainer",
          value,
        });
      },
    },
    volumeKontainer: {
      get() {
        return this.$store.state.report.dataPetiKemas.volumeKontainer;
      },
      set(value) {
        this.$store.commit("SET_DATA_PETI_KEMAS", {
          key: "volumeKontainer",
          value,
        });
      },
    },
  },
  methods: {
    handleValidate() {
      return this.$refs.formDataPetiKemas.validate();
    },
  },
};
</script>

<style lang="scss" scoped></style>
