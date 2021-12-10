<template>
  <v-card height="114vh" >
    <v-card-title>
      <v-row no-gutters align-content="center">
        <v-col cols="10">
          <span class="headline font-weight-bold">BCF 3.3.15</span>
        </v-col>
        <v-col cols="2">
          <div class="d-flex">
            <button
              @click="handleCloseDialog"
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
      <v-form ref="initialReport" @submit.prevent="handleSubmit">
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
                    placeholder="Pilih PO"
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
                        v-model="tanggal"
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
                            v-bind="attrs"
                            v-on="on"
                        ></v-text-field>
                        </template>
                        <v-date-picker
                        scrollable
                        no-title
                        @input="tanggal = false"
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
                        v-model="noPurchaseOrder"
                        placeholder="Nomor"
                        :rules="[
                        (value) => {
                            return genericRequiredRule(value, 'Nomor');
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
                    <div class="mt-2">{{`Penanggung \n Jawab`}}</div>
                    </v-col>
                    <v-col cols="7">
                    <v-text-field
                        outlined
                        dense
                        v-model="kapalPemilik"
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
                        v-model="kapalPemilik"
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
                        v-model="noPurchaseOrder"
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
              <v-col lg="5">
                  <v-row no-gutters>
                    <v-col cols="4">
                    <div class="mt-2">NPWP</div>
                    </v-col>
                    <v-col cols="7">
                    <v-text-field
                        outlined
                        dense
                        v-model="getNpwp"
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

              <v-col lg="5">
                  <v-row no-gutters>
                    <v-col cols="4">
                    <div class="mt-2">Alamat</div>
                    </v-col>
                    <v-col cols="7">
                    <v-text-field
                        outlined
                        dense
                        v-model="address"
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
              <v-col lg="5">
                  <v-row no-gutters>
                    <v-col cols="4">
                    <div class="mt-2">Nama</div>
                    </v-col>
                    <v-col cols="7">
                    <v-text-field
                        outlined
                        dense
                        v-model="name"
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

              <v-col lg="5">
                  <v-row no-gutters>
                    <v-col cols="4">
                    <div class="mt-2">Lokasi PLB</div>
                    </v-col>
                    <v-col cols="7">
                    <v-text-field
                        outlined
                        dense
                        v-model="location"
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
            <v-col cols="4" style="padding: 0 1em 0 0;">Jenis</v-col>
            <v-col cols="2" style="padding: 0 0 0 1em;">Ex. HS 4 Digit</v-col>
            <v-col cols="2" style="padding: 0 1em;">Persyaratan Expor</v-col>
            <v-col cols="2" style="padding: 0 0 0 1em;">Perkiraan Jumlah</v-col>
            <v-col cols="2" style="padding: 0 0 0 1em;">Satuan</v-col>
          </v-row>

          <div v-for="(input, k) in inputs" :key="k">
            <v-row no-gutters>
              <!-- <v-col cols="2" style="padding: 0 1em 0 0;">
                <v-select
                    outlined
                    dense
                    v-model="input.kode_barang"
                    placeholder="Pilih Kode Barang"
                    :rules="[
                    (value) => {
                        return genericRequiredRule(value, 'Kode Barang');
                    },
                    ]"
                ></v-select>
              </v-col> -->
              <v-col cols="4" style="padding: 0 1em 0 0;">
                <v-text-field
                    outlined
                    dense
                    v-model="input.item_deskripsi"
                    placeholder="Minyak Mentah"
                    :rules="[
                    (value) => {
                        return genericRequiredRule(value, 'Jenis');
                    },
                    ]"
                ></v-text-field>
              </v-col>
              <v-col cols="2" style="padding: 0 1em;">
                <v-text-field
                    outlined
                    dense
                    v-model="inputs.example"
                    placeholder="1234"
                    :rules="[
                    (value) => {
                        return genericRequiredRule(value, 'Example');
                    },
                    ]"
                ></v-text-field>
              </v-col>
              <v-col cols="2" style="padding: 0 1em;">
                <v-text-field
                    outlined
                    dense
                    v-model="inputs.harga_satuan"
                    placeholder="-"
                    type="number"
                    default=0
                    :rules="[
                    (value) => {
                        return genericRequiredRule(value, 'Harga Satuan');
                    },
                    ]"
                ></v-text-field>
              </v-col>
              <v-col cols="2" style="padding: 0 0 0 1em;">
                <v-text-field
                    outlined
                    dense
                    v-model="inputs.jumlah"
                    placeholder="0"
                    type="number"
                    :rules="[
                    (value) => {
                        return genericRequiredRule(value, 'Jumlah');
                    },
                    ]"
                ></v-text-field>
              </v-col>
              <v-col cols="2" style="padding: 0 0 0 1em;">
                <v-text-field
                    outlined
                    dense
                    v-model="inputs.jumlah"
                    placeholder="Barel"
                    type="number"
                    :rules="[
                    (value) => {
                        return genericRequiredRule(value, 'Satuan');
                    },
                    ]"
                ></v-text-field>
              </v-col>
              <v-col cols="1" style="padding: 0 0 0 1em;" class="delete-container">
                <div @click.prevent="remove(k)" v-show="k|| ( !k && inputs.length > 1)">
                <Icon 
                    icon="octicon:trash-24"
                    class="delete-icon"
                  />
                </div>
              </v-col>
            </v-row>
          </div>

          <v-spacer></v-spacer>

          <v-row no-gutters width="100%">
              <v-col lg="6">
                  <v-row no-gutters>
                    <v-col cols="4">
                    <div class="mt-2">Cara Pengangkutan</div>
                    </v-col>
                    <v-col cols="7">
                    <v-text-field
                        outlined
                        dense
                        v-model="kapalPemilik"
                        placeholder="Laut"
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
                        v-model="kapalPemilik"
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
                    <div class="mt-2 pr-1">Tanggal Perkiraan Pemasukan ke PLB/Pemuatan ke Sarana Pengangkut</div>
                    </v-col>
                    <v-col cols="7">
                    <v-menu
                        v-model="tanggal"
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
                            v-bind="attrs"
                            v-on="on"
                        ></v-text-field>
                        </template>
                        <v-date-picker
                        scrollable
                        no-title
                        @input="tanggal = false"
                        ></v-date-picker>
                    </v-menu>
                    </v-col>
                  </v-row>
              </v-col>
              <v-col lg="6">
                  <div class="mb-6">
                    <h4>Sarana Pengankut yang akan Mengangkut Barang ke Luar Daerah Pabean</h4> 
                  </div>
                  <v-row no-gutters>
                    <v-col cols="4">
                    <div class="mt-2">Nama</div>
                    </v-col>
                    <v-col cols="7">
                    <v-text-field
                        outlined
                        dense
                        v-model="kapalPemilik"
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
                        v-model="kapalPemilik"
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
                        v-model="kapalPemilik"
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
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { FieldRequired } from "@/mixins/ValidationRules";
import { Icon } from "@iconify/vue2";
export default {
  name: "FormBCF",
  mixins: [FieldRequired],
  components: {
    Icon,
  },
  data() {
    return {
      inputs: [
        {
          kode_barang: "",
          item_deskripsi: "",
          quantity: "",
          harga_satuan: "",
          jumlah: ""
        },
      ],
    remarks: ""
    }
  },
  computed: {
    //gonna change it
      getNpwp: {
        get() {
            return this.$store.state.po.po_baru.kapal_pemilik
        },
        set(value) {
            this.$store.commit("SET_PO_BARU", {
                key: "NPWP",
                value
            })
        }
      },
    name: {
      get() {
          return this.$store.state.po.po_baru.kapal_pemilik
      },
      set(value) {
          this.$store.commit("SET_PO_BARU", {
              key: "Nama",
              value
          })
      }
    },
    location: {
      get() {
          return this.$store.state.po.po_baru.kapal_pemilik
      },
      set(value) {
          this.$store.commit("SET_PO_BARU", {
              key: "Lokasi PLB",
              value
          })
      }
    },
    address: {
      get() {
        return this.$store.state.po.po_baru.no_purchase_order;
      },
      set(value) {
        this.$store.commit("SET_PO_BARU", {
          key: "Alamat",
          value,
        });
      },
    },
    kapalPembeli: {
      get() {
        return this.$store.state.po.po_baru.kapal_pembeli;
      },
      set(value) {
        this.$store.commit("SET_PO_BARU", {
          key: "kapal_pembeli",
          value,
        });
      },
    },
    tanggal: {
      get() {
        return this.$store.state.po.po_baru.tanggal;
      },
      set(value) {
        this.$store.commit("SET_PO_BARU", {
          key: "tanggal",
          value,
        });
      },
    },
    
  },
  methods: {
    add () {
      this.inputs.push({
        kode_barang: "",
        item_deskripsi: "",
        quantity: "",
        harga_satuan: "",
        jumlah: ""
      })
    },
    remove (index) {
      this.inputs.splice(index, 1)
    },
    handleCloseDialog() {
      this.$emit("handleBuatBaru");
      this.inputs = [
        {
          kode_barang: "",
          item_deskripsi: "",
          quantity: "",
          harga_satuan: "",
          jumlah: ""
        },
      ],
      this.remarks= ""
    },
    handleSubmit() {
      const getRef = this.$refs.initialReport.handleValidate();
      if (getRef) {
        this.$router.push("/bcf/add");
      } else {
        return false;
      }
    },
    
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
