<template>
  <div>
    <v-row no-gutters>
      <v-col lg="9" md="9"><div class="text-h6">List Dokumen</div></v-col>
      <v-col lg="3" md="3" style="display:flex; justify-content: flex-end">
        <button class="btn mr-6">
          <v-icon left>mdi-tray-arrow-down</v-icon> Import CSV
        </button>
        <button @click.prevent="handleModal" class="btn">
          <v-icon left>mdi-plus-box-outline</v-icon> Add
        </button>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="it-inventory-box">
          <v-data-table
            :headers="headers"
            :items="data"
            :items-per-page="5"
            class="it-inventory-simple-table"
          >
            <template v-slot:[`item.status`]="{ item }">
              <approval-badge :status="item.status"></approval-badge>
            </template>
            <template v-slot:[`item.action`]>
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="table_menu_actions"
                    color="#95c0f9"
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

                <v-list>
                  <v-list-item>
                    <v-list-item-title>
                      <v-icon left>mdi-pencil-outline </v-icon>
                      Edit
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>
                      <v-icon left>mdi-content-copy </v-icon>
                      Copy
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>
                      <v-icon left>mdi-trash-can-outline</v-icon>
                      Delete
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </template>
          </v-data-table>
        </div>
      </v-col>
    </v-row>

    <v-row no-gutters class="mt-5" style="justify-content: flex-end">
      <button type="submit" class="btn_save" @click.prevent="handleSubmit">
        <span>Next</span> <img src="@/assets/icons/ic_bulletnext.svg" />
      </button>
    </v-row>

    <!-- Modal -->
    <v-dialog v-model="dialog" persistent max-width="800px">
      <form-data-barang @handleModal="handleModal" />
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "TableBarang",
  components: {
    FormDataBarang: () => import("@/views/plb_ppftz/DataBarang/FormDataBarang"),
  },
  data() {
    return {
      dialog: false,
      headers: [
        {
          text: "No",
          value: "id",
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
          text: "Neto, Bruto, Volume",
          value: "nettoBrutoVolume",
          sortable: false,
        },
        { text: "Satuan Kemasan", value: "satuanKemasan", sortable: false },
        {
          text: "Nilai Pabean, Harga Penyerahan",
          value: "nilaiPabeanHargaPenyerahan",
          sortable: false,
        },
        { text: "Hs Code", value: "hsCode", sortable: false },
        { text: "Action", value: "action", sortable: false },
      ],
      data: [
        {
          id: 12212,
          posTarif: "331122122323",
          uraian: "Dignissimos libero vitae repellendus sed consequatur enim.",
          nettoBrutoVolume: "123321.67",
          satuanKemasan: 12345,
          nilaiPabeanHargaPenyerahan: 100923,
          hsCode: 45123,
        },
        {
          id: 12112,
          posTarif: "331122222323",
          uraian: "Dignissimos libero vitae repellendus sed consequatur enim.",
          nettoBrutoVolume: "123321.67",
          satuanKemasan: 12335,
          nilaiPabeanHargaPenyerahan: 1120923,
          hsCode: 45223,
        },
      ],
    };
  },
  methods: {
    handleModal() {
      this.dialog = !this.dialog;
    },
    handleSubmit() {
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
          this.$emit("handleSubmitStepper");
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.v-list-item {
  cursor: pointer;
  min-height: 40px;
  & .v-list-item__title {
    color: #95c0f9 !important;
    i {
      color: #95c0f9 !important;
      font-size: 1rem;
    }
  }
  &:hover {
    background-color: rgba($color: #000000, $alpha: 0.1);
  }
}
</style>
