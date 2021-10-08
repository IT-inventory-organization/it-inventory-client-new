<template>
  <div class="preview-container">
    <preview-dokumen />
  </div>
</template>

<script>
export default {
  name: "DataPreview",
  components: {
    PreviewDokumen: () => import("@/components/plb_ppftz/PreviewDokumen"),
  },
};
</script>

<style lang="scss" scoped>
.preview-container {
  width: max-content;
  margin: 3rem auto;
  border: 1px solid #d8dcf2;
  border-radius: 10px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
}
</style>
