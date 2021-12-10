<template lang="">
  <v-card height="95vh">
    <v-card-title>
      <v-row no-gutters align-content="center" justify="space-between">
        <span class="headline font-weight-bold mt-2">Inventory Card</span>
        <span @click="handleViewClose" style="cursor: pointer"
          ><v-icon>mdi-close</v-icon></span
        >
      </v-row>
    </v-card-title>

    <v-card-text class="mt-6">
      <v-form ref="initialReport" @submit.prevent="handleSubmit">
        <v-container fluid>
          <v-row no-gutters width="100%">
            <v-col>
              <v-row no-gutters>
                <v-col cols="3">
                  <div class="mt-2">Nama Barang</div>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    outlined
                    dense
                    v-model="kapalPemilik"
                    placeholder="value"
                    disabled
                    :rules="[
                      value => {
                        return genericRequiredRule(value, 'Nama Barang');
                      }
                    ]"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <v-row no-gutters width="100%">
            <v-col>
              <v-row no-gutters>
                <v-col cols="3">
                  <div class="mt-2">Kode Barang</div>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    outlined
                    dense
                    v-model="nomorAdjustment"
                    placeholder="value"
                    disabled
                    :rules="[
                      value => {
                        return genericRequiredRule(value, 'Kode Barang');
                      }
                    ]"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-row no-gutters width="100%">
            <div
              style="align-items: center;display: flex;flex-direction: column;height: 100%;justify-content: center;padding: 8px;"
            >
              <Progress-Vertical />
            </div>
          </v-row>
        </v-container>
      </v-form>
    </v-card-text>
    <v-card-actions height="100%" class="card-subtitle"> </v-card-actions>
  </v-card>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {
    ProgressVertical: () => import('@/components/ProgressVertical')
  },
  methods: {
    handleViewClose() {
      this.$emit('handleBuatBaru');
    }
  }
};
</script>
<style scoped>
.subtitle {
  padding-left: 0.8rem;
}

.card-subtitle {
  margin-top: 3em;
  align-items: flex-end;
}

.tanggal {
  color: #697d95;
}

.list-title {
  font-weight: 400;
  margin-top: 1em;
}

.list-item {
  color: #697d95;
}

table {
  border-collapse: collapse;
  width: 100%;
  box-shadow: inset -1px 0px 0px #eaeaea, inset 1px 0px 0px #eaeaea,
    inset 0px 1px 0px #eaeaea;
}

th,
td {
  color: #848484;
  padding: 1em 1.1em !important;
  text-align: left;
}
</style>
