<template>
  <q-card class="q-pa-sm">
    <q-card-section horizontal>
      <div class="text-h6">hello</div>
      <q-space />
      <q-btn icon="question_mark" round dense />
    </q-card-section>
    <slot />
  </q-card>
</template>

<script>
import ChartCanvas from "components/ChartCanvas.vue";

export default {
  name: "MediumPluginsCard",
  // components: { ChartCanvas },
  // props: { plugin: { type: Object, required: true } },
  setup() {
    return {};
  },
};
</script>
