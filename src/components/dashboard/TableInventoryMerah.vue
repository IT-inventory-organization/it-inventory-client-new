<template>
  <v-data-table
    :headers="headers"
    :items="reportInventoryMerah.data"
    :options.sync="optionsTableMerah"
    :server-items-length="reportInventoryMerah.data_size"
    no-data-text="Data not available"
    no-results-text="Data not available"
    class="it-inventory-simple-table"
  >
    <template v-slot:[`item.status`]="{ item }">
      <approval-badge :status="item.status"></approval-badge>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: "TableInventoryMerah",
  components: {
    ApprovalBadge: () => import("@/components/ApprovalBadge"),
  },
  data() {
    return {
      headers: [
        {
          text: "Jenis Inventory",
          value: "jenisInventory",
        },
        { text: "Tanggal Ajuan", value: "tanggalAjuan" },
        { text: "Pengirim", value: "pengirim" },
        { text: "Penerima", value: "penerima" },
        { text: "Jalur", value: "status", sortable: false },
      ],
    };
  },
  watch: {
    optionsTableMerah: {
      handler() {
        this.fetchData();
      },
      deep: true,
    },
  },
  methods: {
    fetchData() {
      this.$store.dispatch("fetchReportInventoryMerah", this.optionsTableMerah);
    },
  },
  computed: {
    reportInventoryMerah() {
      return this.$store.state.report.reportInventoryMerah;
    },
    optionsTableMerah: {
      get() {
        return this.$store.state.report.optionsTableMerah;
      },
      set(val) {
        this.$store.commit("SET_OPTIONS_TABLE_MERAH", val);
      },
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style lang="scss" scoped></style>
