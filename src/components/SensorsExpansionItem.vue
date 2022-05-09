<template>
  <q-expansion-item
    expand-separator
    label="Sensors"
    caption="Sensors used by this plugin"
  >
    <div class="row">
      <template v-for="sensor in sensors">
        <q-chip
          v-if="sensor.fullPage.isExternal"
          :key="sensor.name"
          dense
          clickable
          @click="onExternalSensorClicked(sensor)"
        >
          {{ sensor.name }}
        </q-chip>
        <q-chip
          v-else
          :key="sensor.name"
          dense
          clickable
          @click="$router.push(sensor.fullPage.path)"
        >
          {{ sensor.name }}
        </q-chip>
      </template>
    </div>
  </q-expansion-item>
</template>

<script>
export default {
  name: "SensorsExpansionItem",
  props: { sensors: { type: Array, required: true } },
  setup() {
    return {};
  },
  methods: {
    onExternalSensorClicked(sensor) {
      window.open(sensor.fullPage.path);
    },
  },
};
</script>
