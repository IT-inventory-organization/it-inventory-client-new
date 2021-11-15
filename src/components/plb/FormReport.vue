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
              <div class="mt-2">Diajukan Di Kantor</div>
            </v-col>
            <v-col cols="8">
              <v-text-field
                outlined
                dense
                v-model="diAjukanDiKantor"
                placeholder="value"
                :rules="[
                  (value) => {
                    return genericRequiredRule(value, 'Diajukan Di Kantor');
                  },
                ]"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="4">
              <div class="mt-2">Jenis Pemberitahuan</div>
            </v-col>
            <v-col cols="8">
              <v-select
                placeholder="value"
                dense
                v-model="jenisPemberitahuan"
                :rules="[
                  (value) => {
                    return genericRequiredRule(value, 'Jenis Pemberitahuan');
                  },
                ]"
                :items="itemJenisPemberitahuan"
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
                v-model="jenisDokumenBC"
                :rules="[
                  (value) => {
                    return genericRequiredRule(value, 'Jenis Dokumen BC');
                  },
                ]"
                :items="itemJenisDokumenBC"
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
  computed: {
    diAjukanDiKantor: {
      get() {
        return this.$store.state.plb.report.diAjukanDiKantor;
      },
      set(value) {
        this.$store.commit("SET_REPORT", {
          key: "diAjukanDiKantor",
          value,
        });
      },
    },
    jenisPemberitahuan: {
      get() {
        return this.$store.state.plb.report.jenisPemberitahuan;
      },
      set(value) {
        this.$store.commit("SET_REPORT", {
          key: "jenisPemberitahuan",
          value,
        });
      },
    },
    jenisDokumenBC: {
      get() {
        return this.$store.state.plb.report.jenisDokumenBC;
      },
      set(value) {
        this.$store.commit("SET_REPORT", {
          key: "jenisDokumenBC",
          value,
        });
      },
    },
    itemJenisPemberitahuan() {
      return this.$store.state.plb.itemJenisPemberitahuan;
    },
    itemJenisDokumenBC() {
      return this.$store.state.plb.itemJenisDokumenBC;
    },
  },
  methods: {
    handleCloseDialog() {
      this.$emit("handleCloseBuatBaru");
    },
    handleSubmit() {
      const getRef = this.$refs.initialReport.handleValidate();
      if (getRef) {
        this.$router.push("/plb/add");
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
