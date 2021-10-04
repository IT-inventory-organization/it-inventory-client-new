<template>
  <div class="it-inventory-card">
    <v-card-title class="it-inventory-card-title">
      Create New {{ page }}
    </v-card-title>
  </div>
</template>

<script>
export default {
  name: "CreateDocument",
  data() {
    return {
      page: "PLB",
    };
  },
  created() {
    console.log(this.$route.path);
  },
};
</script>

<style lang="scss" scoped></style>
