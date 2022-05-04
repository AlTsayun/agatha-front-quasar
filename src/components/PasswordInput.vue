<template>
  <q-input
    v-model="password"
    label="Password"
    :type="isPwd ? 'password' : 'text'"
  >
    <template #append>
      <q-icon
        :name="isPwd ? 'visibility_off' : 'visibility'"
        class="cursor-pointer"
        @click="isPwd = !isPwd"
      />
    </template>
  </q-input>
</template>

<script>
import { ref } from "vue";

export default {
  name: "PasswordInput",
  setup() {
    return {
      password: ref(""),
      isPwd: ref(true),
    };
  },
};
</script>
