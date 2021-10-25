<template>
  <div class="it-inventory-card">
    <v-card-title class="it-inventory-card-title"
      >Dashboard Overview</v-card-title
    >
    <v-row no-gutters>
      <DisplayCount
        v-for="list in totalReport"
        :key="list.status"
        :jumlahExport="list.Export"
        :jumlahImport="list.Import"
        :status="list.status"
      ></DisplayCount>
    </v-row>

    <v-row no-gutters class="pt-4">
      <v-col class="px-2" cols="12" lg="8" sm="12">
        <v-row no-gutters align="center">
          <v-col lg="10">
            <v-card-title class="it-inventory-card-title">
              Lists Inventory Merah
            </v-card-title>
          </v-col>
          <v-col lg="2">
            <v-select
              class="filter_lists_merah"
              v-model="type"
              outlined
              dense
              :items="filterListsJalurMerah"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col class="px-2" cols="12" lg="4" sm="12">
        <v-card-title class="it-inventory-card-title">
          Inventory
        </v-card-title>
      </v-col>
    </v-row>
    <lists-inventory-merah ref="tableMerah" :type="type" />
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    DisplayCount: () => import("@/components/dashboard/DisplayCount"),
    ListsInventoryMerah: () =>
      import("@/components/dashboard/ListsInventoryMerah"),
  },
  data() {
    return {
      filterListsJalurMerah: ["All", "Import", "Export"],
      type: "All",
    };
  },
  watch: {
    type(val) {
      if (val) this.optionsTableMerah.type = val;
    },
  },
  computed: {
    totalReport() {
      return this.$store.state.report.totalReport;
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
    if (this.totalReport.length < 3) {
      this.fetchData();
    }
  },
  methods: {
    async fetchData() {
      await this.$store.dispatch("fetchReportByStatus", "hijau");
      await this.$store.dispatch("fetchReportByStatus", "kuning");
      await this.$store.dispatch("fetchReportByStatus", "merah");
    },
  },
};
</script>
<style lang="scss" scope>
.filter_lists_merah {
  & fieldset {
    border-color: #d8dcf2 !important;
  }

  & .v-select__selection {
    color: #8d8ac7;
  }

  & .v-text-field__details {
    display: none !important;
  }
}
</style>
