<template>
  <v-card>
    <v-card-title>
      <v-row no-gutters align-content="center" justify="space-between">
        <span class="text-h6">Tambah/Kurangi Stock</span>
        <span style="cursor: pointer" @click.prevent="handleDialog"
          ><v-icon>mdi-close</v-icon></span
        >
      </v-row>
    </v-card-title>
    <v-card-text>
      <form class="my-4">
        <v-row no-gutters>
          <v-text-field outlined single-line type="number"> </v-text-field>
        </v-row>
        <v-row no-gutters style="justify-content: flex-end;">
          <v-btn
            type="submit"
            fill
            class="it_inven_create_btn"
            style="width: 200px"
            >Save</v-btn
          >
        </v-row>
      </form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "updatestock",
};
</script>

<style lang="scss" scoped></style>
