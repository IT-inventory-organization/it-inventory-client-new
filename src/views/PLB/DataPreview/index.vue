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
};
</script>

<style lang="scss" scoped></style>
