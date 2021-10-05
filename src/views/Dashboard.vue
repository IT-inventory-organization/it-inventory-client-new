<template>
  <div class="it-inventory-card">
    <v-card-title class="it-inventory-card-title"
      >Dashboard Overview</v-card-title
    >
    <v-row no-gutters>
      <DisplayCount
        v-for="list in lists"
        :key="list.status"
        :jumlahExport="list.export"
        :jumlahImport="list.import"
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
              clearable
              class="filter_lists_merah"
              value="Import"
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
    <lists-inventory-merah />
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
      lists: [
        { export: 450, import: 250, status: "hijau" },
        { export: 320, import: 275, status: "kuning" },
        { export: 140, import: 50, status: "merah" },
      ],
      filterListsJalurMerah: ["Import", "Export"],
    };
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
