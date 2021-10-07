<template>
  <v-card>
    <v-card-title>
      <v-row no-gutters align-content="center" justify="space-between">
        <span class="text-h6">Edit Dokumen</span>
        <span style="cursor: pointer" @click.prevent="handleDialog"
          ><v-icon>mdi-close</v-icon></span
        >
      </v-row>
    </v-card-title>
    <v-card-text class="py-4">
      <v-form ref="formDataDokumen" @submit.prevent="handleSubmit">
        <v-row>
          <v-col lg="6" md="6" sm="12">
            <v-text-field
              label="Kode Dokumen"
              outlined
              v-model="kodeDokumen"
              :rules="[
                (value) => {
                  return genericRequiredRule(value, 'Kode Dokumen');
                },
              ]"
            >
            </v-text-field>
            <v-text-field
              label="Tanggal Dokumen"
              outlined
              v-model="tanggalDokumen"
              type="date"
              :rules="[
                (value) => {
                  return genericRequiredRule(value, 'Tanggal Dokumen');
                },
              ]"
            >
            </v-text-field>
          </v-col>
          <v-col lg="6" md="6" sm="12">
            <v-text-field
              label="Nomor Dokumen"
              outlined
              v-model="nomorDokumen"
              :rules="[
                (value) => {
                  return genericRequiredRule(value, 'Nomor Dokumen');
                },
              ]"
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row no-gutters style="justify-content: flex-end ">
          <v-btn
            type="submit"
            fill
            class="it_inven_create_btn"
            style="width: 200px"
            >Update</v-btn
          >
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { FieldRequired } from "@/mixins/ValidationRules";
export default {
  name: "FormEditDataDokumen",
  mixins: [FieldRequired],
  props: [],
  data() {
    return {
      kodeDokumen: "",
      tanggalDokumen: "",
      nomorDokumen: "",
    };
  },
  computed: {
    index: {
      get() {
        return this.$store.state.report.index;
      },
    },
    item: {
      get() {
        return this.$store.state.report.dataDokumen[this.index];
      },
    },
  },
  mounted() {
    if (this.item) {
      this.kodeDokumen = this.item.kodeDokumen;
      this.tanggalDokumen = this.item.tanggalDokumen;
      this.nomorDokumen = this.item.nomorDokumen;
    }
  },
  methods: {
    async handleSubmit() {
      const [y, m, d] = this.tanggalDokumen.split("-");

      const payload = {
        kodeDokumen: this.kodeDokumen,
        tanggalDokumen: `${d}-${m}-${y}`,
        nomorDokumen: this.nomorDokumen,
      };
      console.log(payload);

      if (this.$refs.formDataDokumen.validate()) {
        await this.$store.commit("UPDATE_DATA_DOKUMENT", payload, this.index);
        this.handleDialog();
      }
    },
    handleDialog() {
      this.$emit("handleEdit");

      this.$refs.formDataDokumen.resetValidation();
    },
  },
};
</script>

<style lang="scss" scoped></style>
