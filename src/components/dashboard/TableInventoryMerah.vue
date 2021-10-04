<template>
  <v-data-table
    :headers="headers"
    :items="data"
    :items-per-page="5"
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
      data: [
        {
          jenisInventory: "PLB - BC 4.1",
          tanggalAjuan: "12-11-2013",
          pengirim: "Emelina",
          penerima: "Paton",
          status: "merah",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
