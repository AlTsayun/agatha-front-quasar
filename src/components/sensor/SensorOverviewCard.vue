<template>
  <SimpleOverviewCard
    :title="sensor.name"
    :description="sensor.description"
    :image="sensor.image"
    :subtitle="sensor.subtitle"
  >
    <slot />
  </SimpleOverviewCard>
</template>

<script>
import SimpleOverviewCard from "components/SimpleOverviewCard.vue";
export default {
  name: "SensorOverviewCard",
  components: { SimpleOverviewCard },
  props: { sensor: { type: Object, required: true } },
  setup() {
    return {};
  },
};
</script>
