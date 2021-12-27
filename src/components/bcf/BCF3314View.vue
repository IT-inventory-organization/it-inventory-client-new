<template>
  <v-card>
    <template slot="progress">
      <progress-linear />
    </template>
    <v-card-title>
      <div class="d-flex justify-end align-center" style="width: 100%">
        <v-btn color="#000000" outlined class="mr-4" @click="handlePrint">
          <Icon icon="fluent:print-48-regular" style="font-size: 24px" />
          Print
        </v-btn>
        <div @click="handleViewClose" style="cursor: pointer">
          <Icon icon="ep:close" style="font-size: 24px" />
        </div>
      </div>
    </v-card-title>
    <div class="px-6 py-5" style="display: flex; justify-content: center">
      <PreviewBCF3114 />
    </div>
  </v-card>
</template>

<script>
import { Icon } from "@iconify/vue2";
export default {
  components: {
    Icon,
    PreviewBCF3114: () => import("@/components/Document/PreviewBCF3114"),
  },
  data() {
    return {};
  },
  methods: {
    handleViewClose() {
      this.$emit("handleViewBCF3314");
    },
    handlePrint() {
      this.$store.commit("bcf/SET_PRINT_BCF3314", true);
    },
  },
};
</script>
<style scoped>
.subtitle {
  padding-left: 0.8rem;
}

.card-subtitle {
  margin-top: 3em;
  align-items: flex-end;
}

.tanggal {
  color: #697d95;
}

.list-title {
  font-weight: 400;
  margin-top: 1em;
}

.list-item {
  color: #697d95;
}

table {
  border-collapse: collapse;
  width: 100%;
  box-shadow: inset -1px 0px 0px #eaeaea, inset 1px 0px 0px #eaeaea,
    inset 0px 1px 0px #eaeaea;
}

th,
td {
  color: #848484;
  padding: 1em 1.1em !important;
  text-align: left;
}
</style>
