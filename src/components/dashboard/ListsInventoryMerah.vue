<template>
  <v-row no-gutters>
    <v-col class="pa-2" cols="12" lg="8" sm="12">
      <div class="it-inventory-box">
        <TableInventoryMerah />
      </div>
    </v-col>
    <v-col class="pa-2" cols="12" lg="4" sm="12">
      <div class="it-inventory-box"><inventory-chart></inventory-chart></div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ListsInventoryMerah",
  components: {
    TableInventoryMerah: () =>
      import("@/components/dashboard/TableInventoryMerah"),
    InventoryChart: () => import("@/components/dashboard/InventoryChart"),
  },
};
</script>

<style lang="scss" scoped></style>
