<template>
  <PluginOutputCard :plugin="plugin">
    <template #toolbar-section>
      <q-space />
      <DetailsLinkButton
        :link="{ path: '', isExternal: false }"
        minimal
        rounded
      />
    </template>
    <q-card-section v-if="!plugin.chart.isDataLoaded" horizontal>
      <q-card-section>
        <ChartCanvas :plugin-chart="plugin.chart" />
      </q-card-section>
    </q-card-section>
    <q-card-section v-else class="flex flex-center q-pa-xl">
      <q-circular-progress
        class="q-ma-xl"
        indeterminate
        color="secondary"
        track-color="grey-3"
        size="xl"
      />
    </q-card-section>
  </PluginOutputCard>
</template>

<script>
import ChartCanvas from "components/ChartCanvas.vue";
import PluginOutputCard from "components/plugin_output/PluginOutputCard.vue";
import DetailsLinkButton from "components/DetailsLinkButton.vue";

export default {
  name: "ChartPluginOutputCard",
  components: { PluginOutputCard, ChartCanvas, DetailsLinkButton },
  props: { plugin: { type: Object, required: true } },
  setup() {
    return {};
  },
  data() {
    return { extended: false };
  },
};
</script>
