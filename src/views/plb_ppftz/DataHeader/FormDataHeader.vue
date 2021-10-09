<template>
  <div>
    <v-card class="mb-12" elevation="0">
      <v-form ref="form" lazy-validation>
        <!-- Data Pengajuan -->
        <v-expansion-panels>
          <v-expansion-panel
            :class="
              `${
                dataPengajuanForm === 'a' || dataPengajuanForm
                  ? 'it-accordion-panel'
                  : 'it-accordion-panel it-accordion-panel__error'
              }`
            "
          >
            <v-expansion-panel-header>
              <span>Data Pengajuan</span>

              <template
                v-if="dataPengajuanForm && dataPengajuanForm !== 'a'"
                v-slot:actions
              >
                <img src="@/assets/icons/ic_circle_checklist.svg" />
              </template>
            </v-expansion-panel-header>
            <!-- Form -->
            <data-pengajuan ref="dataPengajuanForm" />
            <!-- End Form -->
          </v-expansion-panel>

          <v-expansion-panel
            :class="
              `${
                identitasPengirimPenerima === 'a' || identitasPengirimPenerima
                  ? 'it-accordion-panel'
                  : 'it-accordion-panel it-accordion-panel__error'
              }`
            "
          >
            <v-expansion-panel-header>
              <span>Identitas Pengirim/Penerima</span>

              <template
                v-if="
                  identitasPengirimPenerima && identitasPengirimPenerima !== 'a'
                "
                v-slot:actions
              >
                <img src="@/assets/icons/ic_circle_checklist.svg" />
              </template>
            </v-expansion-panel-header>
            <!-- Form -->
            <identitas-pengirim-penerima ref="identitasPengirimPenerima" />
            <!-- End Form -->
          </v-expansion-panel>

          <v-expansion-panel
            :class="
              `${
                dataPemasukanPengeluaranSatu === 'a' ||
                dataPemasukanPengeluaranSatu
                  ? 'it-accordion-panel'
                  : 'it-accordion-panel it-accordion-panel__error'
              }`
            "
          >
            <v-expansion-panel-header>
              <span>Data Pemasukan Pengeluaran I</span>

              <template
                v-if="
                  dataPemasukanPengeluaranSatu &&
                    dataPemasukanPengeluaranSatu !== 'a'
                "
                v-slot:actions
              >
                <img src="@/assets/icons/ic_circle_checklist.svg" />
              </template>
            </v-expansion-panel-header>
            <!-- Form -->
            <data-pemasukan-pengeluaran-satu
              ref="dataPemasukanPengeluaranSatu"
            />
            <!-- End Form -->
          </v-expansion-panel>

          <v-expansion-panel
            :class="
              `${
                dataPemasukanPengeluaranDua === 'a' ||
                dataPemasukanPengeluaranDua
                  ? 'it-accordion-panel'
                  : 'it-accordion-panel it-accordion-panel__error'
              }`
            "
          >
            <v-expansion-panel-header>
              <span>Data Pemasukan Pengeluaran II</span>

              <template
                v-if="
                  dataPemasukanPengeluaranDua &&
                    dataPemasukanPengeluaranDua !== 'a'
                "
                v-slot:actions
              >
                <img src="@/assets/icons/ic_circle_checklist.svg" />
              </template>
            </v-expansion-panel-header>
            <!-- Form -->
            <data-pemasukan-pengeluaran-dua ref="dataPemasukanPengeluaranDua" />
            <!-- End Form -->
          </v-expansion-panel>
        </v-expansion-panels>
        <!-- End Data Pengajuan -->
      </v-form>
    </v-card>

    <v-row no-gutters style="justify-content: flex-end">
      <button type="submit" class="btn_save" @click.prevent="handleSubmit">
        <span>Next</span> <img src="@/assets/icons/ic_bulletnext.svg" />
      </button>
    </v-row>
  </div>
</template>

<script>
// import DataPengajuan from "@/views/plb_ppftz/DataHeader/DataPengajuan";
// import IdentitasPengirimPenerima from "@/views/plb_ppftz/DataHeader/IdentitasPengirimPenerima";
// import DataPemasukanPengeluaranSatu from "@/views/plb_ppftz/DataHeader/DataPemasukanPengeluaranSatu";
// import DataPemasukanPengeluaranDua from "@/views/plb_ppftz/DataHeader/DataPemasukanPengeluaranDua";

export default {
  name: "FormDataHeader",
  components: {
    DataPengajuan: () => import("@/views/plb_ppftz/DataHeader/DataPengajuan"),
    IdentitasPengirimPenerima: () =>
      import("@/views/plb_ppftz/DataHeader/IdentitasPengirimPenerima"),
    DataPemasukanPengeluaranSatu: () =>
      import("@/views/plb_ppftz/DataHeader/DataPemasukanPengeluaranSatu"),
    DataPemasukanPengeluaranDua: () =>
      import("@/views/plb_ppftz/DataHeader/DataPemasukanPengeluaranDua"),
  },
  props: ["step", "handleSubmitStepper"],
  data() {
    return {
      dataPengajuanForm: "a",
      identitasPengirimPenerima: "a",
      dataPemasukanPengeluaranSatu: "a",
      dataPemasukanPengeluaranDua: "a",
    };
  },
  methods: {
    validateStepper() {
      if (
        this.dataPengajuanForm &&
        this.dataPengajuanForm !== "a" &&
        this.identitasPengirimPenerima &&
        this.identitasPengirimPenerima !== "a" &&
        this.dataPemasukanPengeluaranSatu &&
        this.dataPemasukanPengeluaranSatu !== "a" &&
        this.dataPemasukanPengeluaranDua &&
        this.dataPemasukanPengeluaranDua !== "a"
      ) {
        return true;
      }
      return false;
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
      this.handleValidate("dataPengajuanForm");
      this.handleValidate("identitasPengirimPenerima");
      this.handleValidate("dataPemasukanPengeluaranSatu");
      this.handleValidate("dataPemasukanPengeluaranDua");
      if (this.validateStepper()) {
        this.$swal({
          title: "Apakah data anda sudah benar?",
          type: "warning",
          icon: "question",
          showCancelButton: true,
          confirmButtonColor: "#5682ff",
          cancelButtonColor: "#d33",
          confirmButtonText: "Ya",
          cancelButtonText: "Tidak",
        }).then((result) => {
          if (result.value) {
            this.$store
              .dispatch("createDataHeader")
              .then((result) => {
                if (result.data.success) {
                  this.$swal.fire(
                    "Berhasil create data header!",
                    "",
                    "success"
                  );
                  this.$emit("handleSubmitStepper");
                }
              })
              .catch((error) => {
                this.$swal.fire(
                  "Gagal membuat data header!",
                  error.response.data.message,
                  "error"
                );
              });
          }
        });
      } else {
        this.$swal("Data Belum Lengkap", "", "error");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
