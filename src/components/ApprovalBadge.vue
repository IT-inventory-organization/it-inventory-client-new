<template>
  <div
    class="it-invent-badge-approval"
    v-bind:style="{ backgroundColor: ColorLine }"
  ></div>
</template>

<script>
export default {
  name: "ApprovalBadge",
  data() {
    return {
      ColorLine: "#DE3D33",
    };
  },
  props: ["status"],
  watch: {},
  created() {
    if (this.status === "hijau") {
      this.ColorLine = "#3CB774";
    } else if (this.status === "kuning") {
      this.ColorLine = "#F9B800";
    } else {
      this.ColorLine = "#DE3D33";
    }
  },
};
</script>

<style lang="scss" scoped>
.it-invent-badge-approval {
  width: max-content;
  min-width: 30px;
  height: 8px;
  border-radius: 8px;
}
</style>
