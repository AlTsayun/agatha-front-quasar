<template>
  <q-card-section>
    {{ pluginExtention.data }}
    <template v-if="pluginLink">
      <DetailsLinkButton :link="pluginLink" />
    </template>
  </q-card-section>
</template>

<script>
import DetailsLinkButton from "components/DetailsLinkButton.vue";

export default {
  name: "PluginExtendedSection",
  components: { DetailsLinkButton },
  props: {
    pluginExtention: { type: Object, required: true },
    pluginLink: { type: String, default: null },
  },
  setup() {
    return {};
  },
};
</script>
