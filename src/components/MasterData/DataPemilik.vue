<template>
  <v-col lg="6" sm="12" md="12">
    <div class="headline font-weight-bold d-flex align-center">
      <Icon
        icon="ant-design:user-outlined"
        style="color: #A6A6A6"
        class="mr-5"
      />
      Data Pemilik
    </div>

    <v-row class="my-12" no-gutters>
      <v-col cols="3" class="mr-2">
        <span class="it-inven-dataperusahaan__label"
          >Nama Pemilik / Penanggung Jawab</span
        >
      </v-col>
      <v-col cols="6">
        <v-text-field
          value="Fletcher Lindgren"
          class="it-inven-dataperusahaan__value"
          hide-details
          v-model="data.namaPemilik"
          dense
          disabled
        />
      </v-col>
    </v-row>
    <v-row class="my-12" no-gutters>
      <v-col cols="3" class="mr-2">
        <span class="it-inven-dataperusahaan__label">Alamat Pemilik</span>
      </v-col>
      <v-col cols="6">
        <v-textarea
          value="Menara Kadin Indonesia, Lt.28. Jl.H.R.Rasuna Said Blok X-5 Kav. 02/03 Jakarta 12950 PO BOX 5032 JKTM Jakarta 12700"
          hide-details
          class="it-inven-dataperusahaan__value"
          v-model="data.alamatPemilik"
          dense
          disabled
          auto-grow
          rows="1"
        >
        </v-textarea>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import { Icon } from "@iconify/vue2";
export default {
  name: "DataPemilik",
  props: ["data"],
  components: {
    Icon,
  },
};
</script>

<style lang="scss" scoped></style>
