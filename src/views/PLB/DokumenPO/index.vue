<template>
  <div>
    <v-row>
      <v-col cols="12" class="text-center">
        <div class="headline font-weight-medium">
          Pilih Dokumen PO
        </div>
      </v-col>
    </v-row>
    <v-row justify="center" class="mt-5">
      <v-col cols="4">
        <v-select
          outlined
          :rules="[
            (value) => {
              return genericRequiredRule(value, 'Pilih Dokumen PO');
            },
          ]"
          :items="itemDokumenPO"
          item-text="name"
          multiple
          v-model="selectedDokumenPO"
          placeholder="- Pilih Dokumen PO -"
          append-icon="mdi-chevron-down"
        >
        </v-select>
      </v-col>
    </v-row>
    <v-row justify="center" class="mt-5">
      <v-col cols="4">
        <v-text-field
          v-for="(item, index) in selectedDokumenPO"
          :key="index"
          outlined
          :value="item"
          color="#0C66CF"
          readonly
          append-icon="mdi-check"
        >
          <template v-slot:append-outer>
            <div @click.prevent="handleView">
              <Icon class="mx-2" icon="fluent:apps-list-detail-20-regular" />
            </div>
            <div @click.prevent="handleDelete">
              <Icon class="mx-2" icon="octicon:trash-24" />
            </div>
          </template>
        </v-text-field>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue2";
import { FieldRequired } from "@/mixins/ValidationRules";
export default {
  name: "DokumenPO",
  mixins: [FieldRequired],
  components: {
    Icon,
  },
  computed: {
    itemDokumenPO() {
      return this.$store.state.plb.itemDokumenPO;
    },
    selectedDokumenPO: {
      get() {
        return this.$store.state.plb.selectedDokumenPO;
      },
      set(value) {
        this.$store.commit("SET_SELECTED_DOKUMEN_PO", value);
      },
    },
  },
  methods: {
    handleDelete() {
      alert("Delete");
    },
    handleView() {
      alert("View");
    },
  },
};
</script>

<style lang="scss" scoped></style>
