<template>
  <v-container>
    <v-timeline dense clipped>
      <v-timeline-item
        class="mb-4"
        color="#0C66CF"
        icon-color="grey lighten-2"
        small
        v-for="item in data"
        :key="item.id"
      >
        <v-row justify="space-between">
          <v-col cols="7" class="inventory-type">
            {{ item.inventoryType }}
          </v-col>
          <v-col class="text-right date-time" cols="5">
            {{ item.tanggal }}
          </v-col>
        </v-row>
        <v-row justify="space-between">
          <v-col cols="4" class="header">
            Nomor Dokumen
          </v-col>
          <v-col cols="4" class="header">
            Quantity
          </v-col>
          <v-col cols="4" class="header">
            Balance
          </v-col>
        </v-row>
        <v-row justify="space-between">
          <v-col cols="4" class="pl-0">
            <div class="rounded-corners">
              {{ item.nomorDokumen }}
            </div>
          </v-col>
          <v-col cols="4" class="pl-0">
            <div class="rounded-corners">
              {{ item.quantity }}
            </div>
          </v-col>
          <v-col cols="4" class="pl-0">
            <div class="rounded-corners">
              {{ item.balance }}
            </div>
          </v-col>
        </v-row>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>
<script>
export default {
  props: ['data']
};
</script>

<style scoped>
.inventory-type {
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 28px;
  color: #1e1e1e;
}
.date-time {
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 140%;
  color: #999999;
}
.header {
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 140%;
  display: flex;
  align-items: center;
  color: #1e1e1e;
}
.rounded-corners {
  border-radius: 50px;
  border: 1px solid #999999;
  padding: 15px;
  font-family: SF Pro Text;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  display: flex;
  align-items: center;
  color: #313751;
}
</style>
