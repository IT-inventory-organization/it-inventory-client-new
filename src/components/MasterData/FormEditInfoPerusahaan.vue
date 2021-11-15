<template>
  <v-card>
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
      <v-form class="mt-12">
        <v-row>
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
                  <v-text-field class="it-inven-dataperusahaan__value" dense />
                </v-col>
              </v-row>
              <v-row class="my-12" no-gutters>
                <v-col cols="3" class="mr-2">
                  <span class="it-inven-dataperusahaan__label">NPWP</span>
                </v-col>
                <v-col cols="7">
                  <v-text-field class="it-inven-dataperusahaan__value" dense />
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
                  <v-text-field class="it-inven-dataperusahaan__value" dense />
                </v-col>
              </v-row>
              <v-row class="my-12" no-gutters>
                <v-col cols="3" class="mr-2">
                  <span class="it-inven-dataperusahaan__label">FAX</span>
                </v-col>
                <v-col cols="7">
                  <v-text-field class="it-inven-dataperusahaan__value" dense />
                </v-col>
              </v-row>
              <v-row class="my-12" no-gutters>
                <v-col cols="3" class="mr-2">
                  <span class="it-inven-dataperusahaan__label"
                    >Bidang Usaha</span
                  >
                </v-col>
                <v-col cols="7">
                  <v-text-field class="it-inven-dataperusahaan__value" dense />
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
                  <v-text-field class="it-inven-dataperusahaan__value" dense />
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
                    auto-grow
                    rows="1"
                  >
                  </v-textarea>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { Icon } from "@iconify/vue2";
export default {
  name: "FormEditInfoPerusahaan",
  components: {
    Icon,
  },
  methods: {
    handleClose() {
      this.$emit("handleCloseFormEdit");
    },
  },
};
</script>

<style lang="scss" scoped></style>
