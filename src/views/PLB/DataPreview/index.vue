<template>
  <div class="d-flex flex-column align-center justify-center">
    <preview-document />
  </div>
</template>

<script>
export default {
  name: "DataPreview",
  components: {
    PreviewDocument: () =>
      import("@/components/Document/PreviewDocument/index"),
  },
  methods: {},
  computed: {
    reportId() {
      return this.$store.state.plb.reportId;
    },
  },
  created() {
    console.log(this.reportId);
    this.$store.dispatch("previewPLB", this.reportId);
  },
};
</script>

<style lang="scss" scoped></style>
