<template>
  <v-card>
    <v-form ref="formInformasiPerusahaan" @submit.prevent="handleSubmit">
      <v-card-title>
        <v-row no-gutters align="center">
          <v-col cols="8">
            <span class="headline font-weight-bold">Informasi Perusahaan</span>
          </v-col>
          <v-col cols="4">
            <div class="d-flex">
              <button
                @click="handleClose"
                class="mx-2 it-inventory-btn it-inventory-btn__fw it-inventory-btn__grey"
              >
                Batal
              </button>
              <button
                class="mx-2 it-inventory-btn it-inventory-btn__fw it-inventory-btn__green"
              >
                Simpan
              </button>
            </div>
          </v-col>
        </v-row>
      </v-card-title>
      <v-card-text>
        <v-row class="mt-12">
          <!-- Data Perusahaan -->
          <v-col lg="12" sm="12" md="12">
            <div class="headline font-weight-bold d-flex align-center">
              <Icon
                icon="lucide:building"
                style="color: #A6A6A6"
                class="mr-5"
              />
              Data Perusahaan
            </div>
            <v-container>
              <v-row class="my-12" no-gutters>
                <v-col cols="3" class="mr-2">
                  <span class="it-inven-dataperusahaan__label"
                    >Nama Perusahaan</span
                  >
                </v-col>
                <v-col cols="7">
                  <v-text-field
                    class="it-inven-dataperusahaan__value"
                    v-model="namaPerusahaan"
                    :rules="[
                      (value) => {
                        return genericRequiredRule(value, 'Nama Perusahaan');
                      },
                    ]"
                    dense
                  />
                </v-col>
              </v-row>
              <v-row class="my-12" no-gutters>
                <v-col cols="3" class="mr-2">
                  <span class="it-inven-dataperusahaan__label">NPWP</span>
                </v-col>
                <v-col cols="7">
                  <v-text-field
                    class="it-inven-dataperusahaan__value"
                    v-model="npwp"
                    :rules="[
                      (value) => {
                        return genericRequiredRule(value, 'NPWP');
                      },
                    ]"
                    dense
                  />
                </v-col>
              </v-row>
              <v-row class="my-12" no-gutters>
                <v-col cols="3" class="mr-2">
                  <span class="it-inven-dataperusahaan__label">Alamat</span>
                </v-col>
                <v-col cols="7">
                  <v-textarea
                    class="it-inven-dataperusahaan__value"
                    dense
                    auto-grow
                    v-model="alamat"
                    :rules="[
                      (value) => {
                        return genericRequiredRule(value, 'Alamat');
                      },
                    ]"
                    rows="1"
                  >
                  </v-textarea>
                </v-col>
              </v-row>
              <v-row class="my-12" no-gutters>
                <v-col cols="3" class="mr-2">
                  <span class="it-inven-dataperusahaan__label"
                    >Nomor Telepon</span
                  >
                </v-col>
                <v-col cols="7">
                  <v-text-field
                    class="it-inven-dataperusahaan__value"
                    v-model="nomorTelepon"
                    :rules="[
                      (value) => {
                        return genericRequiredRule(value, 'Nomor Telepon');
                      },
                    ]"
                    dense
                  />
                </v-col>
              </v-row>
              <v-row class="my-12" no-gutters>
                <v-col cols="3" class="mr-2">
                  <span class="it-inven-dataperusahaan__label">FAX</span>
                </v-col>
                <v-col cols="7">
                  <v-text-field
                    class="it-inven-dataperusahaan__value"
                    v-model="fax"
                    :rules="[
                      (value) => {
                        return genericRequiredRule(value, 'FAX');
                      },
                    ]"
                    dense
                  />
                </v-col>
              </v-row>
              <v-row class="my-12" no-gutters>
                <v-col cols="3" class="mr-2">
                  <span class="it-inven-dataperusahaan__label"
                    >Bidang Usaha</span
                  >
                </v-col>
                <v-col cols="7">
                  <v-text-field
                    class="it-inven-dataperusahaan__value"
                    v-model="bidangUsaha"
                    :rules="[
                      (value) => {
                        return genericRequiredRule(value, 'Bidang Usaha');
                      },
                    ]"
                    dense
                  />
                </v-col>
              </v-row>
            </v-container>
          </v-col>

          <!-- Data Pemilik -->
          <v-col lg="12" sm="12" md="12">
            <div class="headline font-weight-bold d-flex align-center">
              <Icon
                icon="ant-design:user-outlined"
                style="color: #A6A6A6"
                class="mr-5"
              />
              Data Pemilik
            </div>

            <v-container>
              <v-row class="my-12" no-gutters>
                <v-col cols="3" class="mr-2">
                  <span class="it-inven-dataperusahaan__label"
                    >Nama Pemilik <br />/ Penanggung Jawab</span
                  >
                </v-col>
                <v-col cols="7">
                  <v-text-field
                    class="it-inven-dataperusahaan__value"
                    v-model="namaPemilik"
                    :rules="[
                      (value) => {
                        return genericRequiredRule(value, 'Nama Pemilik');
                      },
                    ]"
                    dense
                  />
                </v-col>
              </v-row>
              <v-row class="my-12" no-gutters>
                <v-col cols="3" class="mr-2">
                  <span class="it-inven-dataperusahaan__label"
                    >Alamat Pemilik</span
                  >
                </v-col>
                <v-col cols="7">
                  <v-textarea
                    class="it-inven-dataperusahaan__value"
                    dense
                    v-model="alamatPemilik"
                    :rules="[
                      (value) => {
                        return genericRequiredRule(value, 'Alamat Pemilik');
                      },
                    ]"
                    auto-grow
                    rows="1"
                  >
                  </v-textarea>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </v-card-text>
    </v-form>
  </v-card>
</template>

<script>
import { Icon } from "@iconify/vue2";
import { FieldRequired } from "@/mixins/ValidationRules";
export default {
  name: "FormEditInfoPerusahaan",
  mixins: [FieldRequired],
  components: {
    Icon,
  },
  computed: {
    namaPerusahaan: {
      get() {
        return this.$store.state.MasterData.informasiPerusahaan.namaPerusahaan;
      },
      set(value) {
        this.$store.commit("SET_INFORMASI_PERUSAHAAN", {
          key: "namaPerusahaan",
          value,
        });
      },
    },
    npwp: {
      get() {
        return this.$store.state.MasterData.informasiPerusahaan.npwp;
      },
      set(value) {
        this.$store.commit("SET_INFORMASI_PERUSAHAAN", {
          key: "npwp",
          value,
        });
      },
    },
    alamat: {
      get() {
        return this.$store.state.MasterData.informasiPerusahaan.alamat;
      },
      set(value) {
        this.$store.commit("SET_INFORMASI_PERUSAHAAN", {
          key: "alamat",
          value,
        });
      },
    },
    nomorTelepon: {
      get() {
        return this.$store.state.MasterData.informasiPerusahaan.nomorTelepon;
      },
      set(value) {
        this.$store.commit("SET_INFORMASI_PERUSAHAAN", {
          key: "nomorTelepon",
          value,
        });
      },
    },
    fax: {
      get() {
        return this.$store.state.MasterData.informasiPerusahaan.fax;
      },
      set(value) {
        this.$store.commit("SET_INFORMASI_PERUSAHAAN", {
          key: "fax",
          value,
        });
      },
    },
    bidangUsaha: {
      get() {
        return this.$store.state.MasterData.informasiPerusahaan.bidangUsaha;
      },
      set(value) {
        this.$store.commit("SET_INFORMASI_PERUSAHAAN", {
          key: "bidangUsaha",
          value,
        });
      },
    },
    namaPemilik: {
      get() {
        return this.$store.state.MasterData.informasiPerusahaan.namaPemilik;
      },
      set(value) {
        this.$store.commit("SET_INFORMASI_PERUSAHAAN", {
          key: "namaPemilik",
          value,
        });
      },
    },
    alamatPemilik: {
      get() {
        return this.$store.state.MasterData.informasiPerusahaan.alamatPemilik;
      },
      set(value) {
        this.$store.commit("SET_INFORMASI_PERUSAHAAN", {
          key: "alamatPemilik",
          value,
        });
      },
    },
  },
  methods: {
    handleClose() {
      this.$emit("handleCloseFormEdit");
      this.$refs.formInformasiPerusahaan.reset();
    },
    handleSubmit() {
      const getRef = this.$refs.formInformasiPerusahaan.validate();
      if (getRef) {
        this.handleClose();
      }
    },
  },
  created() {
    console.log(this.$store.state.MasterData);
  },
};
</script>

<style lang="scss" scoped></style>
