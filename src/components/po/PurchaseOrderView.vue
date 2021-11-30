<template lang="">
    <v-card height="85vh">
        
        <v-card-title>
        <v-row no-gutters align-content="center" justify="space-between">
            <span class="headline font-weight-bold">PO-0001</span>
            <span @click="handleViewClose" style="cursor: pointer"><v-icon>mdi-close</v-icon></span>
        </v-row>
        </v-card-title>

        <v-container >
            <v-row no-gutters align-content="center" justify="space-between" >
                <v-col cols="5">
                    <span class="headline font-weight-bold">PURCHASE ORDER</span>
                </v-col>
            </v-row>
        </v-container>
        <v-card-actions>
            
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
    
</style>