<template>
  <q-card class="q-pa-sm">
    <q-card-section horizontal>
      <div class="text-h6">{{ plugin.name }}</div>
      <q-space />
      <q-btn icon="question_mark" round dense />
    </q-card-section>
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
  </q-card>
</template>

<script>
import ChartCanvas from "components/ChartCanvas.vue";

export default {
  name: "PluginOutputCard",
  components: { ChartCanvas },
  props: { plugin: { type: Object, required: true } },
  setup() {
    return {};
  },
};
</script>
