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
              v-model="item.kodeDokumen"
              @change="handleChange('kodeDokumen', $event)"
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
              v-model="item.tanggalDokumen"
              @change="handleChange('tanggalDokumen', $event)"
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
              v-model="item.nomorDokumen"
              @change="handleChange('nomorDokumen', $event)"
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
  props: ["item", "index"],
  methods: {
    handleChange (key, value) {
      this.$emit("handleChangeEdit", key, value)
    },
    async handleSubmit() {
      const [y, m, d] = this.item.tanggalDokumen.split("-");

      const payload = {
        kodeDokumen: this.item.kodeDokumen,
        tanggalDokumen: `${d}-${m}-${y}`,
        nomorDokumen: this.item.nomorDokumen,
      };
      const data = {
        payload, index: this.index
      }
      if (this.$refs.formDataDokumen.validate()) {
        // this.$emit("handleEdit", payload, this.index)
        this.$store.commit("UPDATE_DATA_DOKUMENT", data)
        this.handleDialog();
      }
    },
    handleDialog() {
      this.$refs.formDataDokumen.resetValidation();
      this.$emit("handleEdit");
    },
  },
};
</script>

<style lang="scss" scoped></style>
