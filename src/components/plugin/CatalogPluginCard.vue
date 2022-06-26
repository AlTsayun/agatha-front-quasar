<template>
  <PluginOverviewCard :plugin="plugin">
    <q-separator v-if="$slots.default" />
    <q-card-actions v-if="enable" align="between">
      <q-btn
        push
        :label="isDisabled ? 'Enabled' : 'Enable'"
        :disable="isDisabled"
        @click="onClick()"
      />
      <DetailsLinkButton :link="plugin.fullPage" />
    </q-card-actions>
    <q-card-actions v-else align="right">
      <DetailsLinkButton :link="plugin.fullPage" />
    </q-card-actions>
  </PluginOverviewCard>
</template>

<script>
import PluginOverviewCard from "components/plugin/PluginOverviewCard.vue";
import DetailsLinkButton from "components/DetailsLinkButton.vue";

export default {
  name: "CatalogPluginCard",
  components: { PluginOverviewCard, DetailsLinkButton },
  props: {
    plugin: { type: Object, required: true },
    enable: { type: Function, default: null },
  },
  setup() {
    return {};
  },
  data(props) {
    return {
      isDisabled: props.plugin.name != "Device",
    };
  },
  methods: {
    onClick() {
      this.isDisabled = !this.isDisabled;
    },
  },
};
</script>
