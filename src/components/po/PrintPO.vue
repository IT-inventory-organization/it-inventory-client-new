<template>
  <div id="dokumenPO" style="padding:1rem">
    <div style="border: 1px solid black; padding: 20px 16px; font-size:14px">
      <h3>{{ reportId.nomorPO }}</h3>
      <br />
      <h3>PURCHASE ORDER</h3>
      <table>
        <tr>
          <td style="width:180px;">Tanggal</td>
          <td valign="top">:</td>
          <td valign="top">{{ reportId.tanggalPurchaseOrder }}</td>
        </tr>
        <tr>
          <td valign="top">No. Purchase Order</td>
          <td valign="top">:</td>
          <td valign="top">{{ reportId.nomorPO }}</td>
        </tr>
        <tr>
          <td valign="top">Kapal Penjual</td>
          <td valign="top">:</td>
          <td valign="top">{{ reportId.kapalPenjual }}</td>
        </tr>
      </table>

      <br />
      <table style="border-collapse: collapse; width: 100%" border="1">
        <thead>
          <tr>
            <th>Kode Barang</th>
            <th>Item Deskripsi</th>
            <th>Satuan Kemasan</th>
            <th>Quantity</th>
            <th>Harga Satuan</th>
            <th>Jumlah</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(barangPO, key) in reportId.barangPOs" v-bind:key="key">
            <td>{{ barangPO.kodeBarang }}</td>
            <td>{{ barangPO.itemDeskripsi }}</td>
            <td>{{ barangPO.satuanKemasan }}</td>
            <td>{{ barangPO.quantity }}</td>
            <td>{{ barangPO.hargaSatuan }}</td>
            <td>{{ barangPO.jumlah }}</td>
          </tr>
        </tbody>
      </table>
      <br />
      <div style="display:flex; justify-content:space-between;">
        <table>
          <tr>
            <td valign="top">Remarks</td>
            <td valign="top">:</td>
            <td valign="top" style="width:200px">
              {{ reportId.remarks }}
            </td>
          </tr>
        </table>

        <h3>Jumlah Total = {{ reportId.jumlahTotal }}</h3>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Kode Barang",
          value: "kodeBarang",
        },
        {
          text: "Item Deskripsi",
          value: "itemDeskripsi",
        },
        {
          text: "Satuan Kemasan",
          value: "satuanKemasan",
        },
        {
          text: "Quantity",
          value: "quantity",
        },
        {
          text: "hargaSatuan",
          value: "hargaSatuan",
        },
      ],
    };
  },
  methods: {
    handleViewClose() {
      this.$emit("dialogPurchaseOrderPrint");
      this.$store.commit("SET_PRINT_PO", false);
    },
    print() {
      if (this.loadingReportId) {
        this.$htmlToPaper("dokumenPO");
      }
      this.handleViewClose();
    },
  },
  computed: {
    loadingReportId() {
      return this.$store.state.po.loading.loadingReportId;
    },
    isPrint() {
      return this.$store.state.po.isPrint;
    },
    reportId() {
      return this.$store.state.po.reportId;
    },
  },
  watch: {
    isPrint: function(val) {
      if (val) {
        this.print();
      }
    },
  },
};
</script>
