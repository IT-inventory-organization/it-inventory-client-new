<template>
  <div>
    <div class="display-1 font-weight-bold">Dashboard</div>
    <display-count />
    <list-kapal />
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  components: {
    DisplayCount: () => import("@/components/dashboard/DisplayCount"),
    ListKapal: () => import("@/components/dashboard/ListKapal"),
  },
  created() {
    this.$store.dispatch("getAllReport");
  },
};
</script>

<style lang="scss" scoped></style>
