<template>
  <v-col lg="6" sm="12" md="12">
    <div class="headline font-weight-bold d-flex align-center">
      <Icon icon="lucide:building" style="color: #A6A6A6" class="mr-5" />
      Data Perusahaan
    </div>

    <v-row class="my-12" no-gutters>
      <v-col cols="3" class="mr-2">
        <span class="it-inven-dataperusahaan__label">Nama Perusahaan</span>
      </v-col>
      <v-col cols="7">
        <v-text-field
          value="Nama Perusahaan"
          class="it-inven-dataperusahaan__value"
          v-model="data.namaPerusahaan"
          hide-details
          dense
          disabled
        />
      </v-col>
    </v-row>
    <v-row class="my-12" no-gutters>
      <v-col cols="3" class="mr-2">
        <span class="it-inven-dataperusahaan__label">NPWP</span>
      </v-col>
      <v-col cols="7">
        <v-text-field
          value="0998282827377"
          class="it-inven-dataperusahaan__value"
          v-model="data.npwp"
          hide-details
          dense
          disabled
        />
      </v-col>
    </v-row>
    <v-row class="my-12" no-gutters>
      <v-col cols="3" class="mr-2">
        <span class="it-inven-dataperusahaan__label">Alamat</span>
      </v-col>
      <v-col cols="7">
        <v-textarea
          value="Menara Kadin Indonesia, Lt.28. Jl.H.R.Rasuna Said Blok X-5 Kav. 02/03 Jakarta 12950 PO BOX 5032 JKTM Jakarta 12700"
          hide-details
          class="it-inven-dataperusahaan__value"
          dense
          v-model="data.alamat"
          disabled
          auto-grow
          rows="1"
        >
        </v-textarea>
      </v-col>
    </v-row>
    <v-row class="my-12" no-gutters>
      <v-col cols="3" class="mr-2">
        <span class="it-inven-dataperusahaan__label">Nomor Telepon</span>
      </v-col>
      <v-col cols="7">
        <v-text-field
          value="021 527 4208"
          class="it-inven-dataperusahaan__value"
          hide-details
          v-model="data.nomorTelepon"
          dense
          disabled
        />
      </v-col>
    </v-row>
    <v-row class="my-12" no-gutters>
      <v-col cols="3" class="mr-2">
        <span class="it-inven-dataperusahaan__label">FAX</span>
      </v-col>
      <v-col cols="7">
        <v-text-field
          value="021 527 4208"
          class="it-inven-dataperusahaan__value"
          hide-details
          v-model="data.fax"
          dense
          disabled
        />
      </v-col>
    </v-row>
    <v-row class="my-12" no-gutters>
      <v-col cols="3" class="mr-2">
        <span class="it-inven-dataperusahaan__label">Bidang Usaha</span>
      </v-col>
      <v-col cols="7">
        <v-text-field
          value="PERUSAHAAN MINYAK DAN GAS"
          hide-details
          v-model="data.bidangUsaha"
          class="it-inven-dataperusahaan__value"
          dense
          disabled
        />
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import { Icon } from "@iconify/vue2";
export default {
  name: "DataPerusahaan",
  props: ["data"],
  components: {
    Icon,
  },
};
</script>

<style lang="scss" scoped></style>
