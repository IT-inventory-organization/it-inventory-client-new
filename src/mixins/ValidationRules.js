export const FieldRequired = {
  data() {
    return {
      genericRequiredRule: (value, msg) => !!value || `${msg} harus diisi`,
      genericMinRule: (value, msg) =>
        value > 0 || `${msg} harus lebih besar dari 0`,
      genericNumberRule: (value, msg) => !isNaN(value) || `${msg} harus angka`,
    };
  },
};
