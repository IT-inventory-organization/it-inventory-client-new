<template lang="">
    <v-card height="95vh">
        
        <v-card-title>
        <v-row no-gutters align-content="center" justify="space-between">
            <span class="headline font-weight-bold">PO-0001</span>
            <span @click="handleViewClose" style="cursor: pointer"><v-icon>mdi-close</v-icon></span>
        </v-row>
        </v-card-title>

        <v-container >
            <v-row no-gutters align-content="center" class="card-subtitle">
                <v-col cols="4">
                    <span class="subtitle headline font-weight-bold">PURCHASE ORDER</span>
                </v-col>
                <v-col cols="3">
                    <span >TANGGAL</span>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col cols="4">
                    
                </v-col>
                <v-col cols="3" class="tanggal">
                    01-01-2021
                </v-col>
            </v-row>
            <v-row no-gutters class="subtitle">
                <v-col cols="2">
                    <span>Purchase Order No.</span>
                </v-col>
                <v-col cols="1">
                    <strong>PO-00001</strong>
                </v-col>
            </v-row>

            <v-row no-gutters class="subtitle card-subtitle">
                <v-col cols="12" class="list-title">
                    KAPAL PEMBELI
                </v-col>
                <v-col cols="12" class="list-item">
                    Value
                </v-col>
                <v-col cols="12" class="list-title">
                    KAPAL PEMILIK
                </v-col>
                <v-col cols="12" class="list-item">
                    Value
                </v-col>
            </v-row>

            <v-row no-gutters class="card-subtitle">
                <table>
                    <tr>
                        <th>Kode Barang</th>
                        <th>Item Deskripsi</th>
                        <th>Satuan Kemasan</th>
                        <th>Quantity</th>
                        <th>Harga Satuan</th>
                        <th>Jumlah</th>
                    </tr>
                    <tr>
                        <td>Cell Content</td>
                        <td>Cell Content</td>
                        <td>Cell Content</td>
                        <td>Cell Content</td>
                        <td>Cell Content</td>
                        <td>Cell Content</td>
                    </tr>
                </table>
            </v-row>
        </v-container>
        <v-card-actions height="100%" class="card-subtitle">
          <v-row no-gutters justify="space-between">
            <v-col cols="8">
              Remarks
              <v-text-field
                    outlined
                    dense
                    v-model="remarks"
                    placeholder="Remarks"
                    disabled
                    :rules="[
                    (value) => {
                        return genericRequiredRule(value, 'Remarks');
                    },
                    ]"
                ></v-text-field>
            </v-col>
            <v-col cols="3"  style="background: #F8F8F8; padding: 0.5em 0.3em;">
              Jumlah Total
              <div style="font-size: 1.25em; display: flex; justify-content: space-between; padding: 0.5em;">
                <strong>TOTAL</strong>
                <strong>325.00</strong>
              </div>
            </v-col>
          </v-row>
        </v-card-actions>
    </v-card>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        handleViewClose() {
            this.$emit("handleBuatBaru");
        }
    }
    
}
</script>
<style scoped>
    .subtitle {
        padding-left: 0.8rem;;
    }

    .card-subtitle {
        margin-top: 3em;
        align-items: flex-end;
    }

    .tanggal {
        color: #697D95;
    }

    .list-title {
        font-weight: 400;
        margin-top: 1em;
    }

    .list-item {
        color: #697D95;
    }

    table {
        border-collapse: collapse;
        width: 100%;
        box-shadow: inset -1px 0px 0px #EAEAEA, inset 1px 0px 0px #EAEAEA, inset 0px 1px 0px #EAEAEA;
    }

    th, td {
        color: #848484;
        padding: 1em 1.1em !important;
        text-align: left;;
    }
</style>