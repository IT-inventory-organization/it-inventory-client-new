<template>
  <div>
    <div
      v-if="status === 'diterima'"
      class="it-inventory-actions-status it-inventory-actions-status__approve"
    >
      <p>Disetujui</p>
    </div>
    <div
      v-if="status === 'perbaikan'"
      class="it-inventory-actions-status it-inventory-actions-status__revision"
    >
      <p>Perbaikan</p>
    </div>
    <div
      v-if="status === 'menunggu'"
      class="it-inventory-actions-status it-inventory-actions-status__waiting"
    >
      <p>Menunggu</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatusListTable",
  props: ["status"],
};
</script>

<style lang="scss" scoped></style>
