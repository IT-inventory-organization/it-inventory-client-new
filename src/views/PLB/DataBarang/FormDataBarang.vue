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
          <v-container>
            <v-row no-gutters>
              <v-col cols="3">
                <span class="it-inven-dataperusahaan__label"
                  >Nama Perusahaan</span
                >
              </v-col>
              <v-col cols="9">
                <v-text-field
                  outlined
                  class="it-inven-dataperusahaan__value"
                  placeholder="value"
                  dense
                />
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="3">
                <span class="it-inven-dataperusahaan__label">Nama Barang</span>
              </v-col>
              <v-col cols="9">
                <v-text-field
                  outlined
                  class="it-inven-dataperusahaan__value"
                  placeholder="value"
                  dense
                />
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="3">
                <span class="it-inven-dataperusahaan__label">Uraian</span>
              </v-col>
              <v-col cols="9">
                <v-textarea
                  outlined
                  class="it-inven-dataperusahaan__value"
                  placeholder="value"
                  dense
                />
              </v-col>
            </v-row>
          </v-container>
        </v-row>
        <v-row no-gutters>
          <v-col cols="3">
            <span class="it-inven-dataperusahaan__label"
              >Netto, Brutto, Volume</span
            >
          </v-col>
          <v-col cols="9">
            <v-text-field
              outlined
              class="it-inven-dataperusahaan__value"
              placeholder="value"
              dense
            />
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="3">
            <span class="it-inven-dataperusahaan__label">Satuan Kemasan</span>
          </v-col>
          <v-col cols="9">
            <v-text-field
              outlined
              class="it-inven-dataperusahaan__value"
              placeholder="value"
              dense
            />
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="3">
            <span class="it-inven-dataperusahaan__label">Stock</span>
          </v-col>
          <v-col cols="9">
            <v-text-field
              outlined
              class="it-inven-dataperusahaan__value"
              placeholder="value"
              dense
            />
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="3">
            <span class="it-inven-dataperusahaan__label">Pos Tarif</span>
          </v-col>
          <v-col cols="9">
            <v-text-field
              outlined
              class="it-inven-dataperusahaan__value"
              placeholder="value"
              dense
            />
          </v-col>
        </v-row>

        <v-row no-gutters>
          <v-col cols="3">
            <span class="it-inven-dataperusahaan__label">BM</span>
          </v-col>
          <v-col cols="9">
            <v-text-field
              outlined
              class="it-inven-dataperusahaan__value"
              placeholder="value"
              dense
            />
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="3">
            <span class="it-inven-dataperusahaan__label">PPN</span>
          </v-col>
          <v-col cols="9">
            <v-text-field
              outlined
              class="it-inven-dataperusahaan__value"
              placeholder="value"
              dense
            />
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="3">
            <span class="it-inven-dataperusahaan__label">PPNBM</span>
          </v-col>
          <v-col cols="9">
            <v-text-field
              outlined
              class="it-inven-dataperusahaan__value"
              placeholder="value"
              dense
            />
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="3">
            <span class="it-inven-dataperusahaan__label">Cukai</span>
          </v-col>
          <v-col cols="9">
            <v-text-field
              outlined
              class="it-inven-dataperusahaan__value"
              placeholder="value"
              dense
            />
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "FormDataBarang",
  methods: {
    handleClose() {
      this.$emit("handleCloseFormDataBarang");
    },
  },
};
</script>

<style lang="scss" scoped></style>
