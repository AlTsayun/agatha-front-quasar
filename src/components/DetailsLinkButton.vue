<template>
  <q-btn
    v-if="link.isExternal"
    flat
    label="Visit page"
    color="primary"
    :href="link.path"
    target="_blank"
  />
  <q-btn v-else flat color="primary" label="Open details" :to="link.path" />
</template>

<script>
export default {
  name: "DetailsLinkButton",
  props: { link: { type: Object, required: true } },
  setup() {
    return {};
  },
};
</script>
