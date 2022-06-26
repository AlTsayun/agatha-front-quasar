<template>
  <q-input
    label="Email"
    placeholder="email@example.com"
    type="email"
    lazy-rules
    :rules="[
      (val) => validateEmail(val) || 'Please type valid email',
      ...rules,
    ]"
  />
</template>

<script>
export default {
  name: "EmailInput",
  props: {
    rules: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    validateEmail(email) {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    },
  },
};
</script>
