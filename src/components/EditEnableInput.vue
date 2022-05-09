<template>
  <q-input ref="input" :readonly="readonly">
    <template v-if="prependIcon" #prepend>
      <q-icon :name="prependIcon" />
    </template>
    <template #after>
      <q-icon
        :name="readonly ? 'edit' : 'edit_off'"
        class="cursor-pointer"
        @click="editClicked"
      />
    </template>
  </q-input>
</template>

<script>
import { ref } from "vue";

export default {
  name: "EditEnableInput",
  props: {
    prependIcon: { type: String, default: null },
    initialReadonly: { type: Boolean, default: true },
  },
  setup() {
    return {};
  },
  data() {
    return {
      readonly: ref(this.initialReadonly),
    };
  },
  methods: {
    editClicked() {
      this.readonly = !this.readonly;
      if (this.readonly == false) {
        this.$refs.input.select();
      }
    },
  },
};
</script>
