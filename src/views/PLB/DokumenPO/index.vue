<template>
  <div>
    <v-row>
      <v-col cols="12" class="text-center">
        <div class="headline font-weight-medium">
          Pilih Dokumen BCF 3.3.14
        </div>
      </v-col>
    </v-row>
    <v-row justify="center" class="mt-5">
      <v-col cols="4" style="position:relative">
        <label class="it-inventory-select-po__label">-Pilih Dokumen-</label>
        <v-select
          outlined
          :rules="[
            (value) => {
              return genericRequiredRule(value, 'Pilih Dokumen PO');
            },
          ]"
          single-line
          :items="itemDokumenBCF"
          item-text="bcf"
          multiple
          hide-details
          class="it-inventory-select-po"
          v-model="selectedDokumenBCF"
          append-icon="mdi-chevron-down"
        >
        </v-select>
      </v-col>
    </v-row>
    <v-row
      justify="center"
      class="mt-5"
      v-for="(item, index) in selectedDokumenBCF"
      :key="index"
    >
      <v-col cols="4" style="position:relative">
        <v-text-field
          outlined
          :value="item"
          class="it-inven-dokumen-po__item"
          readonly
          hide-details
          append-icon="mdi-check"
        >
        </v-text-field>
        <div class="it-inven-dokumen-po__items-action">
          <div @click.prevent="handleView">
            <Icon
              class="mx-2 it-inven-dokumen-po__items-action__item"
              icon="fluent:apps-list-detail-20-regular"
            />
          </div>
          <div @click.prevent="handleDelete(item)">
            <Icon
              class="mx-2 it-inven-dokumen-po__items-action__item"
              icon="octicon:trash-24"
            />
          </div>
        </div>
      </v-col>
    </v-row>

    <v-row no-gutters style="justify-content: flex-end" class="my-12">
      <button type="submit" class="btn_save" @click.prevent="handleSubmit">
        <span>Selanjutnya</span>
        <img src="@/assets/icons/ic_bulletnext.svg" />
      </button>
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
    itemDokumenBCF() {
      return this.$store.state.plb.itemDokumenBCF;
    },
    selectedDokumenBCF: {
      get() {
        return this.$store.state.plb.selectedDokumenBCF;
      },
      set(value) {
        this.$store.commit("SET_SELECTED_DOKUMEN_BCF", value);
      },
    },
  },
  methods: {
    handleDelete(value) {
      this.$store.commit("DELETE_SELECTED_DOKUMEN_BCF", value);
    },
    handleView() {
      alert("View");
    },
    handleSubmit() {
      this.$store.commit("SET_STEPPER", 2);
      return true;
    },
  },
  created() {
    this.$store.dispatch("getDokumenBCF");
  },
};
</script>

<style lang="scss" scoped>
.it-inven-dokumen-po__item {
  ::v-deep {
    .v-input__slot {
      fieldset {
        border-color: #0c66cf !important;
      }
      input {
        color: #0c66cf !important;
      }
      i {
        color: #0c66cf !important;
      }
    }
  }
}

.it-inven-dokumen-po__items-action {
  position: absolute;
  right: -80px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  &__item {
    font-size: 24px;
    cursor: pointer;
  }
}

.it-inventory-select-po {
  ::v-deep {
    .v-select__selection {
      display: none !important;
    }
  }

  &__label {
    position: absolute;
    top: 50%;
    left: 25px;
    transform: translateY(-50%);
  }
}
</style>
