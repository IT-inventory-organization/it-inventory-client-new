<template>
  <div class="preview-container">
    <div class="preview-content">
      <div class="preview-content__title">
        PEMBERITAHUAN PABEAN PEMASUKAN/PENGELUARAN BARANG<br />
        DARI KAWASAN PABEAN
      </div>

      <data-pengajuan />

      <data-pemberitahuan />

      <list-barang />
    </div>
  </div>
</template>

<script>
export default {
  name: "PreviewDocument",
  components: {
    DataPengajuan: () =>
      import("@/components/Document/PreviewDocument/DataPengajuan"),
    DataPemberitahuan: () =>
      import("@/components/Document/PreviewDocument/DataPemberitahuan"),
    ListBarang: () =>
      import("@/components/Document/PreviewDocument/ListBarang"),
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/preview_document";
</style>
