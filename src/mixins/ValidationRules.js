export const FieldRequired = {
  data() {
    return {
      genericRequiredRule: (value, msg) => !!value || `${msg} harus diisi`,
      genericMinRule: (value, msg) => value >= 0 || `${msg} is required`,
    };
  },
};
