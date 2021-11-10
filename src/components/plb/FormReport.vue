<template>
  <v-card>
    <v-card-title>
      <v-row no-gutters align-content="center" justify="space-between">
        <span class="headline font-weight-bold">Buat Baru</span>
        <span style="cursor: pointer" @click.prevent="handleCloseDialog"
          ><v-icon>mdi-close</v-icon></span
        >
      </v-row>
    </v-card-title>
    <v-card-text>
      <v-form ref="initialReport" @submit.prevent="handleSubmit">
        <v-container>
          <v-row no-gutters>
            <v-col cols="4">
              <div class="mt-2">Jenis Pemberitahuan</div>
            </v-col>
            <v-col cols="8">
              <v-select
                placeholder="value"
                dense
                :rules="[
                  (value) => {
                    return genericRequiredRule(value, 'Jenis Pemberitahuan');
                  },
                ]"
                outlined
              ></v-select>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="4">
              <div class="mt-2">Jenis Dokumen BC</div>
            </v-col>
            <v-col cols="8">
              <v-select
                placeholder="value"
                dense
                :rules="[
                  (value) => {
                    return genericRequiredRule(value, 'Jenis Dokumen BC');
                  },
                ]"
                outlined
              ></v-select>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <button type="submit" class="btn_save">
            <span>Selanjutnya</span>
            <img src="@/assets/icons/ic_bulletnext.svg" />
          </button>
        </v-card-actions>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { FieldRequired } from "@/mixins/ValidationRules";
export default {
  name: "FormReport",
  mixins: [FieldRequired],
  methods: {
    handleCloseDialog() {
      this.$emit("handleCloseBuatBaru");
    },

    handleSubmit() {
      this.$router.push("/plb/add");
    },
  },
};
</script>

<style lang="scss" scoped></style>
