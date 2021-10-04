<template>
  <v-card>
    <v-card-title>
      <v-row no-gutters align-content="center" justify="space-between">
        <span class="text-h6">Created New</span>
        <span style="cursor: pointer" @click.prevent="handleDialog"
          ><v-icon>mdi-close</v-icon></span
        >
      </v-row>
    </v-card-title>
    <v-card-text>
      <v-form
        ref="form"
        @submit.prevent="handleSubmit"
        v-model="formValid"
        lazy-validation
      >
        <v-container>
          <v-select
            dense
            v-model="pengajuanSebagai"
            label="Pengajuan Sebagai"
            :items="['Test 1', 'Test 2']"
            outlined
            :rules="requiredRules"
          ></v-select>
          <v-select
            dense
            label="Diajukan Dikantor"
            :items="['Test 1', 'Test 2']"
            outlined
          ></v-select>
          <v-select
            dense
            label="Jenis Pemberitahuan"
            :items="['Test 1', 'Test 2']"
            outlined
          ></v-select>
          <v-select
            dense
            label="Jenis Dokumen BC"
            :items="['Test 1', 'Test 2']"
            outlined
          ></v-select>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <button
            type="submit"
            class="btn_save"
            id="submit-form"
            :disabled="!formValid"
          >
            <span>Next</span> <img src="../../assets/icons/ic_bulletnext.svg" />
          </button>
        </v-card-actions>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "CreateNewModal",
  data() {
    return {
      formValid: false,
      pengajuanSebagai: "",
      diajukanDikantor: "",
      jenisPemberitahuan: "",
      jenisDokumenBC: "",
      requiredRules: [(v) => !!v || `Pengajuan sebagai harus diisi`],
    };
  },
  watch: {
    pengajuanSebagai(val) {
      console.log(val);
    },
  },
  methods: {
    handleDialog() {
      this.$emit("handleModal");
    },
    handleSubmit() {
      this.$refs.form.validate();
      this.$router.push(`${this.$route.path}/add`);
    },
  },
};
</script>

<style lang="scss" scoped>
.btn_save {
  background-color: transparent;
  width: max-content;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  user-select: none;
  span {
    font-size: 1rem;
    color: #9ba1bc;
  }
}
</style>
