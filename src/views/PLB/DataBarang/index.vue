<template>
  <div>
    <v-row no-gutters>
      <v-col lg="9" md="9"><div class="text-h6">List Barang</div></v-col>
      <v-col lg="3" md="3" style="display:flex; justify-content: flex-end">
        <button @click.prevent="handleOpenFormDataBarang" class="btn">
          <v-icon left>mdi-plus-box-outline</v-icon> Tambah List Data Barang
        </button>
      </v-col>
    </v-row>

    <div class="it-inventory-box mt-8">
      <v-data-table
        :headers="headers"
        :items="listBarang"
        :items-per-page="10"
        class="it-inventory-simple-table"
      >
        <template v-slot:[`item.no`]="props">
          {{ (props.index += 1) }}
        </template>
        <template v-slot:[`item.status`]="{ item }">
          <approval-badge :status="item.status"></approval-badge>
        </template>
        <template v-slot:[`item.action`]="props">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="it-inventory-actions-btn"
                outlined
                v-bind="attrs"
                v-on="on"
              >
                Actions
                <v-icon right>
                  mdi-chevron-down
                </v-icon>
              </v-btn>
            </template>

            <v-list class="it-inventory-actions-list">
              <v-list-item @click.prevent="handleEdit(props.item, props.index)">
                <v-list-item-title>
                  <Icon
                    icon="ph:pencil-line-light"
                    class="v-icon--left it-inventory-action-list__icon"
                  />
                  Edit
                </v-list-item-title>
              </v-list-item>
              <v-list-item @click.prevent="handleDelete(props.item)">
                <v-list-item-title>
                  <Icon
                    icon="octicon:trash-24"
                    class="v-icon--left it-inventory-action-list__icon"
                  />
                  Delete
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </v-data-table>
    </div>

    <v-row no-gutters style="justify-content: flex-end" class="my-12">
      <button type="submit" class="btn_save" @click.prevent="handleSubmit">
        <span>Selanjutnya</span>
        <img src="@/assets/icons/ic_bulletnext.svg" />
      </button>
    </v-row>
    <v-dialog
      persistent
      v-model="formDataBarang"
      width="50%"
      max-width="1200px"
    >
      <form-data-barang
        :isEdit="isEdit"
        :editedIndex="editedIndex"
        @handleCloseFormDataBarang="handleCloseFormDataBarang"
      />
    </v-dialog>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue2";
export default {
  name: "DataBarang",
  components: {
    Icon,
    FormDataBarang: () => import("@/views/PLB/DataBarang/FormDataBarang"),
  },
  data() {
    return {
      isEdit: false,
      formDataBarang: false,
      editedIndex: null,
      headers: [
        {
          text: "No",
          value: "no",
          sortable: false,
        },
        {
          text: "Pos Tarif",
          value: "posTarif",
          sortable: false,
        },
        {
          text: "Uraian",
          value: "uraian",
          sortable: false,
        },
        {
          text: "Neto, Brutto, Volume",
          value: "nettoBruttoVolume",
          sortable: false,
        },
        { text: "Satuan Kemasan", value: "satuanKemasan", sortable: false },
        {
          text: "Nilai Pabean, Harga Penyerahan",
          value: "nilaiPabeanHargaPenyerahan",
          sortable: false,
        },
        { text: "BM", value: "bm", sortable: false },
        { text: "PPN", value: "ppn", sortable: false },
        { text: "PPNBM", value: "ppnbm", sortable: false },
        { text: "Cukai", value: "cukai", sortable: false },
        { text: "Action", value: "action", sortable: false },
      ],
    };
  },
  computed: {
    listBarang() {
      return this.$store.state.plb.listBarang;
    },
  },
  methods: {
    handleOpenFormDataBarang() {
      this.formDataBarang = true;
      this.isEdit = false;
    },
    handleCloseFormDataBarang() {
      this.formDataBarang = false;
    },
    handleDelete(item) {
      this.$store.commit("DELETE_LIST_BARANG", item);
    },
    handleEdit(item, index) {
      this.editedIndex = index;
      this.handleSetDataBarang("kodeBarang", item.kodeBarang);
      this.handleSetDataBarang("namaBarang", item.namaBarang);
      this.handleSetDataBarang("uraian", item.uraian);
      this.handleSetDataBarang("nettoBruttoVolume", item.nettoBruttoVolume);
      this.handleSetDataBarang("satuanKemasan", item.satuanKemasan);
      this.handleSetDataBarang("stock", item.stock);
      this.handleSetDataBarang("posTarif", item.posTarif);
      this.handleSetDataBarang(
        "nilaiPabeanHargaPenyerahan",
        item.nilaiPabeanHargaPenyerahan
      );
      this.handleSetDataBarang("bm", item.bm);
      this.handleSetDataBarang("ppn", item.ppn);
      this.handleSetDataBarang("ppnbm", item.ppnbm);
      this.handleSetDataBarang("ppn", item.ppn);
      this.handleSetDataBarang("cukai", item.cukai);
      this.formDataBarang = true;
      this.isEdit = true;
    },
    handleSetDataBarang(key, value) {
      this.$store.commit("SET_DATA_BARANG", {
        key,
        value,
      });
    },
    handleSubmit() {
      if (this.listBarang.length > 0) {
        this.$store.dispatch("saveDataBarang", this.$store.state.plb.listBarang);
        // TODO: please add error handle for input data barang if error
        this.$store.commit("SET_STEPPER", 4);
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
