<template>
  <div>
    <div class="preview-content__subtitle">
      C. LIST BARANG
    </div>
    <v-simple-table dense class="preview-content__table">
      <template v-slot:default>
        <thead>
          <tr>
            <th v-for="(item, index) in headers" :key="index">
              {{ item.text }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in data" :key="index">
            <td>{{ item.kodeBarang }}</td>
            <td>{{ item.namaBarang }}</td>
            <td>{{ item.uraian }}</td>
            <td>{{ item.nettoBruttoVolume }}</td>
            <td>{{ item.satuanKemasan }}</td>
            <td>{{ item.stock }}</td>
            <td>{{ item.nilaiPabeanHargaPenyerahan }}</td>
            <td>{{ item.posTarif }}</td>
            <td>{{ item.bm }}</td>
            <td>{{ item.ppn }}</td>
            <td>{{ item.ppnbm }}</td>
            <td>{{ item.cukai }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  name: "ListBarang",
  data() {
    return {
      headers: [
        {
          text: "Kode Barang",
        },
        {
          text: "Nama Barang",
        },
        {
          text: "Uraian",
        },
        {
          text: "Neto, Brutto, Volume",
        },
        { text: "Satuan Kemasan" },
        { text: "Stock" },
        {
          text: "Nilai Pabean, Harga Penyerahan",
        },
        { text: "Pos Tarif" },
        { text: "BM" },
        { text: "PPN" },
        { text: "PPNBM" },
        { text: "Cukai" },
      ],
      data: [
        {
          kodeBarang: 1111,
          namaBarang: "test",
          uraian: "lorem ipsum",
          nettoBruttoVolume: 1000,
          satuanKemasan: 10,
          stock: 10,
          nilaiPabeanHargaPenyerahan: 10,
          posTarif: 9,
          bm: 2,
          ppn: 1,
          ppnbm: 3,
          cukai: 8,
        },
        {
          kodeBarang: 112,
          namaBarang: "test",
          uraian: "lorem ipsum dolor sit amet bla bla bla",
          nettoBruttoVolume: 1000,
          satuanKemasan: 10,
          stock: 10,
          nilaiPabeanHargaPenyerahan: 10,
          posTarif: 9,
          bm: 2,
          ppn: 1,
          ppnbm: 3,
          cukai: 8,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/preview_document";
</style>
