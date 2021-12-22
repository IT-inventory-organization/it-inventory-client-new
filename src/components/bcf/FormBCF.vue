<template>
  <v-form ref="formBCF" @submit.prevent="handleSubmit">
    <v-card :loading="loadingAddNewBCF">
      <template slot="progress">
        <progress-linear />
      </template>
      <v-card-title>
        <v-row no-gutters align-content="center">
          <v-col cols="10">
            <span class="headline font-weight-bold">BCF 3.3.15</span>
          </v-col>
          <v-col cols="2">
            <div class="d-flex">
              <button
                @click="handleCloseDialog"
                class="
                  mx-2
                  it-inventory-btn it-inventory-btn__fw it-inventory-btn__grey
                "
              >
                Batal
              </button>
              <button
                type="submit"
                class="
                  mx-2
                  it-inventory-btn it-inventory-btn__fw it-inventory-btn__green
                "
              >
                Simpan
              </button>
            </div>
          </v-col>
        </v-row>
      </v-card-title>
      <v-card-text>
        <v-container fluid>
          <v-row no-gutters width="100%">
            <v-col lg="4">
              <v-row no-gutters>
                <v-col cols="4">
                  <div class="mt-2">Nomor PO</div>
                </v-col>
                <v-col cols="7">
                  <v-select
                    outlined
                    dense
                    :disabled="loadingGetPO"
                    :loading="loadingGetPO"
                    v-model="poId"
                    placeholder="Pilih PO"
                    :items="listNomorPO"
                    item-value="id"
                    item-text="nomorPO"
                    :rules="[
                      (value) => {
                        return genericRequiredRule(value, 'Nomor PO');
                      },
                    ]"
                  ></v-select>
                </v-col>
              </v-row>
            </v-col>

            <v-col cols="4">
              <v-row no-gutters>
                <v-col cols="4">
                  <div class="mt-2">Tanggal</div>
                </v-col>
                <v-col cols="7">
                  <v-menu
                    v-model="datepicker_tgl"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        prepend-inner-icon="mdi-calendar-month-outline"
                        append-icon="mdi-chevron-down"
                        placeholder="Pilih Tanggal"
                        dense
                        outlined
                        clearable
                        v-model="tanggal"
                        :rules="[
                          (value) => {
                            return genericRequiredRule(value, 'Tanggal');
                          },
                        ]"
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="tanggal"
                      scrollable
                      no-title
                      @input="datepicker_tgl = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
            </v-col>

            <v-col cols="4">
              <v-row no-gutters>
                <v-col cols="4">
                  <div class="mt-2">Nomor</div>
                </v-col>
                <v-col cols="7">
                  <v-text-field
                    outlined
                    dense
                    v-model="nomorFormBcf3315"
                    placeholder="Nomor"
                    :rules="[
                      (value) => {
                        return genericRequiredRule(value, 'Nomor');
                      },
                      (value) => {
                        return genericNumberRule(value, 'Nomor');
                      },
                      (value) => {
                        return genericMinRule(value, 'Nomor');
                      },
                    ]"
                  ></v-text-field>
                </v-col>

                <!-- <v-col cols="2"></v-col> -->
              </v-row>
            </v-col>
          </v-row>

          <v-row no-gutters width="100%">
            <v-col lg="4">
              <v-row no-gutters>
                <v-col cols="4">
                  <div class="mt-2">{{ `Penanggung \n Jawab` }}</div>
                </v-col>
                <v-col cols="7">
                  <v-text-field
                    outlined
                    dense
                    v-model="penanggungJawab"
                    placeholder="Nama Penanggung Jawab"
                    :rules="[
                      (value) => {
                        return genericRequiredRule(value, 'Penanggung Jawab');
                      },
                    ]"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-col>

            <v-col lg="4">
              <v-row no-gutters>
                <v-col cols="4">
                  <div class="mt-2">Jabatan</div>
                </v-col>
                <v-col cols="7">
                  <v-text-field
                    outlined
                    dense
                    v-model="jabatan"
                    placeholder="Jabatan"
                    :rules="[
                      (value) => {
                        return genericRequiredRule(value, 'Jabatan');
                      },
                    ]"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-col>

            <v-col cols="4">
              <v-row no-gutters>
                <v-col cols="4">
                  <div class="mt-2">Lampiran</div>
                </v-col>
                <v-col cols="7">
                  <v-text-field
                    outlined
                    dense
                    v-model="lampiran"
                    placeholder="Lampiran"
                    :rules="[
                      (value) => {
                        return genericRequiredRule(value, 'Lampiran');
                      },
                    ]"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <div class="mb-6 mt-6">
            <h4>Eksportir/pengusaha PLB/PDPLB</h4>
          </div>

          <v-row no-gutters width="100%">
            <v-col lg="6">
              <v-row no-gutters>
                <v-col cols="4">
                  <div class="mt-2">NPWP</div>
                </v-col>
                <v-col cols="7">
                  <v-text-field
                    outlined
                    dense
                    v-model="npwp"
                    placeholder="NPWP"
                    :rules="[
                      (value) => {
                        return genericRequiredRule(value, 'NPWP');
                      },
                    ]"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-col>

            <v-col lg="6">
              <v-row no-gutters>
                <v-col cols="4">
                  <div class="mt-2">Alamat</div>
                </v-col>
                <v-col cols="7">
                  <v-text-field
                    outlined
                    dense
                    v-model="alamat"
                    placeholder="Alamat"
                    :rules="[
                      (value) => {
                        return genericRequiredRule(value, 'Alamat');
                      },
                    ]"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <v-row no-gutters width="100%">
            <v-col lg="6">
              <v-row no-gutters>
                <v-col cols="4">
                  <div class="mt-2">Nama</div>
                </v-col>
                <v-col cols="7">
                  <v-text-field
                    outlined
                    dense
                    v-model="nama"
                    placeholder="Nama"
                    :rules="[
                      (value) => {
                        return genericRequiredRule(value, 'Nama');
                      },
                    ]"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-col>

            <v-col lg="6">
              <v-row no-gutters>
                <v-col cols="4">
                  <div class="mt-2">Lokasi PLB</div>
                </v-col>
                <v-col cols="7">
                  <v-text-field
                    outlined
                    dense
                    v-model="lokasiPLB"
                    placeholder="Lokasi Penimbunan (Nama Kapal)"
                    :rules="[
                      (value) => {
                        return genericRequiredRule(value, 'Lokasi PLB');
                      },
                    ]"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <div class="mb-6 mt-6">
            <h4>Data Barang</h4>
          </div>
          <v-row no-gutters>
            <!-- <v-col cols="2" style="padding: 0 1em 0 0;">Kode Barang</v-col> -->
            <v-col cols="4" style="padding: 0 1em 0 0">Jenis</v-col>
            <v-col cols="2" style="padding: 0 0 0 1em">Ex. HS 4 Digit</v-col>
            <v-col cols="2" style="padding: 0 1em">Persyaratan Expor</v-col>
            <v-col cols="2" style="padding: 0 0 0 1em">Perkiraan Jumlah</v-col>
            <v-col cols="2" style="padding: 0 0 0 1em">Satuan</v-col>
          </v-row>
          <div v-if="listBarang.length < 1" class="text-center my-8">
            Tidak ada data barang
          </div>
          <div v-for="(list, key) in listBarang" :key="key" class="">
            <v-row no-gutters>
              <v-col cols="4" style="padding: 0 1em 0 0">
                <v-text-field
                  outlined
                  dense
                  :value="list.jenis"
                  placeholder="jenis"
                  disabled
                ></v-text-field>
              </v-col>
              <v-col cols="2" style="padding: 0 1em">
                <v-text-field
                  outlined
                  dense
                  :value="list.hsCode"
                  placeholder="Ex. HS 4 Digit"
                  disabled
                ></v-text-field>
              </v-col>
              <v-col cols="2" style="padding: 0 1em">
                <v-text-field
                  outlined
                  dense
                  value="-"
                  placeholder="Persyaratan Expor"
                  disabled
                ></v-text-field>
              </v-col>
              <v-col cols="2" style="padding: 0 0 0 1em">
                <v-text-field
                  outlined
                  dense
                  :value="list.barangPOs[0].perkiraanJumlah"
                  placeholder="Perkiraan Jumlah"
                  type="number"
                  disabled
                ></v-text-field>
              </v-col>
              <v-col cols="2" style="padding: 0 0 0 1em">
                <v-text-field
                  outlined
                  dense
                  :value="list.barangPOs[0].satuan"
                  placeholder="Satuan"
                  type="number"
                  disabled
                ></v-text-field>
              </v-col>
            </v-row>
          </div>

          <v-spacer></v-spacer>

          <v-row no-gutters width="100%" class="mt-8">
            <v-col lg="6">
              <v-row no-gutters>
                <v-col cols="4">
                  <div class="mt-2">Cara Pengangkutan</div>
                </v-col>
                <v-col cols="7">
                  <v-text-field
                    outlined
                    dense
                    disabled
                    v-model="caraPengangkutan"
                    placeholder="Cara Pengangkutan"
                    :rules="[
                      (value) => {
                        return genericRequiredRule(value, 'Cara Pengangkutan');
                      },
                    ]"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row no-gutters>
                <v-col cols="4">
                  <div class="mt-2">Pelabuhan Muat/Tempat Muat</div>
                </v-col>
                <v-col cols="7">
                  <v-text-field
                    outlined
                    dense
                    v-model="pelabuhanMuat"
                    placeholder="Lokasi Penimbunan (Nama Kapal)"
                    :rules="[
                      (value) => {
                        return genericRequiredRule(value, 'Pelabuhan');
                      },
                    ]"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row no-gutters>
                <v-col cols="4">
                  <div class="mt-2 pr-1">
                    Tanggal Perkiraan Pemasukan ke PLB/Pemuatan ke Sarana
                    Pengangkut
                  </div>
                </v-col>
                <v-col cols="7">
                  <v-menu
                    v-model="datepicker_tgl_perkiraan"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        prepend-inner-icon="mdi-calendar-month-outline"
                        append-icon="mdi-chevron-down"
                        placeholder="Pilih Tanggal"
                        v-model="tanggalPerkiraan"
                        :rules="[
                          (value) => {
                            return genericRequiredRule(
                              value,
                              'Tanggal Perkiraan'
                            );
                          },
                        ]"
                        dense
                        outlined
                        clearable
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="tanggalPerkiraan"
                      scrollable
                      no-title
                      @input="datepicker_tgl_perkiraan = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
            </v-col>
            <v-col lg="6">
              <div class="mb-6">
                <h4>
                  Sarana Pengankut yang akan Mengangkut Barang ke Luar Daerah
                  Pabean
                </h4>
              </div>
              <v-row no-gutters>
                <v-col cols="4">
                  <div class="mt-2">Nama</div>
                </v-col>
                <v-col cols="7">
                  <v-text-field
                    outlined
                    dense
                    v-model="namaPengangkutKeLuar"
                    placeholder="Nama"
                    :rules="[
                      (value) => {
                        return genericRequiredRule(value, 'Nama');
                      },
                    ]"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col cols="4">
                  <div class="mt-2">Voyage/FLight/Nopol</div>
                </v-col>
                <v-col cols="7">
                  <v-text-field
                    outlined
                    dense
                    v-model="voyage"
                    placeholder="Nomor"
                    :rules="[
                      (value) => {
                        return genericRequiredRule(value, 'Voyage');
                      },
                    ]"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col cols="4">
                  <div class="mt-2">Call Sign</div>
                </v-col>
                <v-col cols="7">
                  <v-text-field
                    outlined
                    dense
                    v-model="callSign"
                    placeholder="Call Sign"
                    :rules="[
                      (value) => {
                        return genericRequiredRule(value, 'Call Sign');
                      },
                    ]"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-form>
</template>

<script>
import { FieldRequired } from "@/mixins/ValidationRules";
export default {
  name: "FormBCF",
  mixins: [FieldRequired],
  components: {
    ProgressLinear: () => import("@/components/ProgressLinear"),
  },
  data() {
    return {
      datepicker_tgl: false,
      datepicker_tgl_perkiraan: false,
    };
  },
  computed: {
    loadingAddNewBCF() {
      return this.$store.state.bcf.loading.loadingAddNewBCF;
    },
    loadingGetPO() {
      return this.$store.state.bcf.loading.loadingGetPO;
    },
    loadingGetBarang() {
      return this.$store.state.bcf.loading.loadingGetBarang;
    },
    listNomorPO() {
      return this.$store.state.bcf.listNomorPO;
    },
    listBarang() {
      return this.$store.state.bcf.listBarang;
    },
    tanggal: {
      get() {
        return this.$store.state.bcf.addNewBCF.tanggal;
      },
      set(value) {
        this.$store.commit("bcf/SET_ADD_NEW_BCF", { key: "tanggal", value });
      },
    },
    penanggungJawab: {
      get() {
        return this.$store.state.bcf.addNewBCF.penanggungJawab;
      },
      set(value) {
        this.$store.commit("bcf/SET_ADD_NEW_BCF", {
          key: "penanggungJawab",
          value,
        });
      },
    },
    jabatan: {
      get() {
        return this.$store.state.bcf.addNewBCF.jabatan;
      },
      set(value) {
        this.$store.commit("bcf/SET_ADD_NEW_BCF", { key: "jabatan", value });
      },
    },
    nomorFormBcf3315: {
      get() {
        return this.$store.state.bcf.addNewBCF.nomorFormBcf3315;
      },
      set(value) {
        this.$store.commit("bcf/SET_ADD_NEW_BCF", {
          key: "nomorFormBcf3315",
          value,
        });
      },
    },
    lampiran: {
      get() {
        return this.$store.state.bcf.addNewBCF.lampiran;
      },
      set(value) {
        this.$store.commit("bcf/SET_ADD_NEW_BCF", { key: "lampiran", value });
      },
    },
    npwp: {
      get() {
        return this.$store.state.bcf.addNewBCF.npwp;
      },
      set(value) {
        this.$store.commit("bcf/SET_ADD_NEW_BCF", { key: "npwp", value });
      },
    },
    alamat: {
      get() {
        return this.$store.state.bcf.addNewBCF.alamat;
      },
      set(value) {
        this.$store.commit("bcf/SET_ADD_NEW_BCF", { key: "alamat", value });
      },
    },
    nama: {
      get() {
        return this.$store.state.bcf.addNewBCF.nama;
      },
      set(value) {
        this.$store.commit("bcf/SET_ADD_NEW_BCF", { key: "nama", value });
      },
    },
    lokasiPLB: {
      get() {
        return this.$store.state.bcf.addNewBCF.lokasiPLB;
      },
      set(value) {
        this.$store.commit("bcf/SET_ADD_NEW_BCF", { key: "lokasiPLB", value });
      },
    },
    caraPengangkutan: {
      get() {
        return this.$store.state.bcf.addNewBCF.caraPengangkutan;
      },
      set(value) {
        this.$store.commit("bcf/SET_ADD_NEW_BCF", {
          key: "caraPengangkutan",
          value,
        });
      },
    },
    pelabuhanMuat: {
      get() {
        return this.$store.state.bcf.addNewBCF.pelabuhanMuat;
      },
      set(value) {
        this.$store.commit("bcf/SET_ADD_NEW_BCF", {
          key: "pelabuhanMuat",
          value,
        });
      },
    },
    tanggalPerkiraan: {
      get() {
        return this.$store.state.bcf.addNewBCF.tanggalPerkiraan;
      },
      set(value) {
        this.$store.commit("bcf/SET_ADD_NEW_BCF", {
          key: "tanggalPerkiraan",
          value,
        });
      },
    },
    namaPengangkutKeLuar: {
      get() {
        return this.$store.state.bcf.addNewBCF.namaPengangkutKeLuar;
      },
      set(value) {
        this.$store.commit("bcf/SET_ADD_NEW_BCF", {
          key: "namaPengangkutKeLuar",
          value,
        });
      },
    },
    voyage: {
      get() {
        return this.$store.state.bcf.addNewBCF.voyage;
      },
      set(value) {
        this.$store.commit("bcf/SET_ADD_NEW_BCF", { key: "voyage", value });
      },
    },
    callSign: {
      get() {
        return this.$store.state.bcf.addNewBCF.callSign;
      },
      set(value) {
        this.$store.commit("bcf/SET_ADD_NEW_BCF", { key: "callSign", value });
      },
    },
    status: {
      get() {
        return this.$store.state.bcf.addNewBCF.status;
      },
      set(value) {
        this.$store.commit("bcf/SET_ADD_NEW_BCF", { key: "status", value });
      },
    },
    poId: {
      get() {
        return this.$store.state.bcf.addNewBCF.poId;
      },
      set(value) {
        this.$store.commit("bcf/SET_ADD_NEW_BCF", { key: "poId", value });
      },
    },
  },
  watch: {
    poId: {
      handler(val) {
        (async () => {
          await this.$store.dispatch("bcf/fetchGetBarang", val);
        })();
      },
      deep: true,
    },
  },
  methods: {
    handleCloseDialog() {
      this.$emit("handleBuatBaru");
      this.$refs.formBCF.reset();
    },
    handleSubmit() {
      const getRef = this.$refs.formBCF.validate();
      if (getRef) {
        this.$store.dispatch("bcf/addNewBCF").then((res) => {
          console.log(res);
          if (res.success) {
            this.$swal.fire("Berhasil!", "Berhasil menambahkan.", "success");
            this.$store.dispatch("bcf/fetchGetAllBCF");
            this.handleCloseDialog();
          } else {
            this.$swal.fire("Gagal!", "Gagal menambahkan.", "error");
          }
        });
      }
    },
  },
  created() {
    this.$store.dispatch("bcf/fetchGetPO");
    this.$store.commit("bcf/SET_ADD_NEW_BCF", {
      key: "caraPengangkutan",
      value: "Laut",
    });
    console.log("yeah");
  },
};
</script>

<style lang="scss" scoped>
.delete-icon {
  font-size: 1.5em;
  cursor: pointer;
}
.delete-icon:hover {
  color: #000;
}
.delete-container {
  padding: 0.5em !important;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
