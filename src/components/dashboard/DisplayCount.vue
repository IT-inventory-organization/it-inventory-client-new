<template>
  <div class="it-inventory-box mt-4">
    <v-row align="center">
      <v-col lg="10">
        <div class="display-1 font-weight-bold">Jumlah Kapal</div>
      </v-col>
      <v-col lg="2 text-right">
        <div class="display-2 font-weight-bold" style="color: #2ED477">
          {{jumlahKapal}}
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "DislayCount",
  computed: {
    jumlahKapal(){
    return this.$store.state.dashboard.jumlahKapal;

    }
  }
};
</script>

<style lang="scss" scoped></style>
