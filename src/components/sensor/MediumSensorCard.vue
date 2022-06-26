<template>
  <SensorOverviewCard :sensor="sensor">
    <q-separator v-if="$slots.default" />
    <EditEnableInput
      v-model="sensorUrl"
      class="q-pa-md q-pb-xl"
      label="Scribe URL"
      placeholder="http://example.com"
      hint="Url where data from that sensor will go to"
      prepend-icon="link"
    />
    <q-separator />
    <q-card-actions align="right">
      <DetailsLinkButton :link="sensor.fullPage" />
    </q-card-actions>
  </SensorOverviewCard>
</template>

<script>
import SensorOverviewCard from "components/sensor/SensorOverviewCard.vue";
import DetailsLinkButton from "components/DetailsLinkButton.vue";
import EditEnableInput from "components/EditEnableInput.vue";

export default {
  name: "MediumSensorCard",
  components: { SensorOverviewCard, DetailsLinkButton, EditEnableInput },
  props: {
    sensor: { type: Object, required: true },
  },
  setup() {},
  data() {
    return {
      sensorUrl: "http://localhost:8081/",
      third: true,
    };
  },
};
</script>
