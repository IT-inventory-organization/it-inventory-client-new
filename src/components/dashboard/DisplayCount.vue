<template>
  <v-col class="pa-2" cols="12" md="4" sm="12">
    <div class="it-inventory-box">
      <v-row no-gutters>
        <v-col class="it-inventory-count-export">
          <div class="it-inventory-count-title">Export</div>
          <div class="it-inventory-count-number">{{ jumlahExport }}</div>
        </v-col>
        <v-col class="it-inventory-count-import">
          <div class="it-inventory-count-title">Import</div>
          <div class="it-inventory-count-number">{{ jumlahImport }}</div>
        </v-col>
      </v-row>
      <approval-badge :status="status"></approval-badge>
    </div>
  </v-col>
</template>

<script>
export default {
  name: "DsiplayCount",
  props: ["jumlahExport", "jumlahImport", "status"],
  components: {
    ApprovalBadge: () => import("@/components/ApprovalBadge"),
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/display_count.scss";
</style>
