<template>
  <q-input
    label="Password"
    :type="shown ? 'text' : 'password'"
    :rules="[
      (val) => (val && val.length > 7) || 'Please type at least 8 symbols',
      ...rules,
    ]"
  >
    <template #append>
      <q-icon
        :name="shown ? 'visibility_off' : 'visibility'"
        class="cursor-pointer"
        @click="shown = !shown"
      />
    </template>
  </q-input>
</template>

<script>
import { ref } from "vue";
export default {
  name: "PasswordInput",
  props: {
    visible: { type: Boolean, default: false },
    rules: {
      type: Array,
      default: () => [],
    },
  },
  data(props) {
    return {
      shown: ref(props.visible),
    };
  },
};
</script>
