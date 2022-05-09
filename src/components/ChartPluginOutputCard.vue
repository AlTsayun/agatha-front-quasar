<template>
  <PluginOutputCard :plugin="plugin">
    <div v-if="!plugin.chart.isDataLoaded">
      <ChartCanvas :plugin-chart="plugin.chart" />
    </div>
    <div v-else class="flex flex-center q-pa-xl">
      <q-circular-progress
        class="q-ma-xl"
        indeterminate
        color="secondary"
        track-color="grey-3"
        size="xl"
      />
    </div>
  </PluginOutputCard>
</template>

<script>
import ChartCanvas from "components/ChartCanvas.vue";
import PluginOutputCard from "components/PluginOutputCard.vue";

export default {
  name: "ChartPluginOutputCard",
  components: { PluginOutputCard, ChartCanvas },
  props: { plugin: { type: Object, required: true } },
  setup() {
    return {};
  },
};
</script>
