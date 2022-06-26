<template>
  <SensorOverviewCard :sensor="sensor">
    <q-separator v-if="$slots.default" />
    <q-card-actions align="right">
      <DetailsLinkButton :link="sensor.fullPage" />
    </q-card-actions>
  </SensorOverviewCard>
</template>

<script>
import SensorOverviewCard from "components/sensor/SensorOverviewCard.vue";
import DetailsLinkButton from "components/DetailsLinkButton.vue";

export default {
  name: "CatalogSensorCard",
  components: { SensorOverviewCard, DetailsLinkButton },
  props: {
    sensor: { type: Object, required: true },
  },
  setup() {},
};
</script>
