<template>
  <div>
    <v-card class="mb-12" elevation="0">
      <!-- Data Dokumen -->
      <v-expansion-panels>
        <v-expansion-panel
          v-model="show"
          :class="
            `${
              dataDokumenForm === 'a' || dataDokumenForm
                ? 'it-accordion-panel'
                : 'it-accordion-panel it-accordion-panel__error'
            }`
          "
        >
          <v-expansion-panel-header>
            <span>Data Dokumen</span>
            <template
              v-if="dataDokumenForm && dataDokumenForm !== 'a'"
              v-slot:actions
            >
              <img src="@/assets/icons/ic_circle_checklist.svg" />
            </template>
          </v-expansion-panel-header>
          <!-- Form -->
          <v-expansion-panel-content>
            <data-dokumen></data-dokumen>
          </v-expansion-panel-content>
          <!-- End Form -->
        </v-expansion-panel>

        <!-- Data Peti Kemas -->
        <v-expansion-panel
          v-model="show"
          :class="
            `${
              dataPetiKemasForm === 'a' || dataPetiKemasForm
                ? 'it-accordion-panel'
                : 'it-accordion-panel it-accordion-panel__error'
            }`
          "
        >
          <v-expansion-panel-header>
            <span>Data Peti Kemas</span>

            <template
              v-if="dataPetiKemasForm && dataPetiKemasForm !== 'a'"
              v-slot:actions
            >
              <img src="@/assets/icons/ic_circle_checklist.svg" />
            </template>
          </v-expansion-panel-header>
          <!-- Form -->
          <v-expansion-panel-content eager>
            <data-peti-kemas ref="dataPetiKemasForm"></data-peti-kemas>
          </v-expansion-panel-content>
          <!-- End Form -->
        </v-expansion-panel>
        <!-- End Data Peti Kemas -->
      </v-expansion-panels>
    </v-card>

    <v-row no-gutters style="justify-content: flex-end">
      <button type="submit" class="btn_save" @click.prevent="handleSubmit">
        <span>Next</span> <img src="@/assets/icons/ic_bulletnext.svg" />
      </button>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "FormDataLanjutan",
  props: ["step", "handleSubmitStepper"],
  components: {
    DataDokumen: () => import("@/views/plb_ppftz/DataLanjutan/DataDokumen"),
    DataPetiKemas: () => import("@/views/plb_ppftz/DataLanjutan/DataPetiKemas"),
  },
  data() {
    return {
      dataDokumenForm: "a",
      dataPetiKemasForm: "a",
      show: false,
    };
  },
  computed: {
    dataDokumen: {
      get() {
        return this.$store.state.report.dataDokumen;
      },
    },
    dataPetiKemas: {
      get() {
        return this.$store.state.report.dataPetiKemas;
      },
    },
  },
  watch: {
    dataDokumen(val) {
      if (val.length > 0) {
        this.dataDokumenForm = true;
      } else {
        this.dataDokumenForm = false;
      }
    },
  },
  methods: {
    validateStepper() {
      if (!this.dataDokumenForm || !this.dataPetiKemasForm) {
        return false;
      } else {
        return true;
      }
    },
    handleValidate(key) {
      const getRef = this.$refs[key].handleValidate();
      if (getRef) {
        this[key] = true;
      } else {
        this[key] = false;
      }
    },
    handleSubmit() {
      if (this.$store.state.report.dataDokumen.length > 0) {
        this.dataDokumenForm = true;
      } else {
        this.dataDokumenForm = false;
      }
      this.handleValidate("dataPetiKemasForm");
      this.$swal({
        title: "Apakah data anda sudah benar ?",
        type: "warning",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#5682ff",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya",
        cancelButtonText: "Tidak",
      }).then((result) => {
        if (result.value) {
          if (this.validateStepper()) {
            this.$emit("handleSubmitStepper");
          } else {
            this.$swal("Data Belum Lengkap", "", "error");
          }
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
