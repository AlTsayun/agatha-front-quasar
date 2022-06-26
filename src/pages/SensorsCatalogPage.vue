<template>
  <q-page padding>
    <div class="q-pa-md">
      <div class="row items-start">
        <CatalogSensorCard
          v-for="sensor in sensors"
          :key="sensor.name"
          class="q-ma-sm"
          :sensor="sensor"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import CatalogSensorCard from "components/sensor/CatalogSensorCard.vue";

export default {
  name: "SensorsCatalogPage",
  components: {
    CatalogSensorCard,
  },
  data() {
    return {
      sensors: [
        {
          name: "Visit detector",
          subtitle: "average",
          description:
            "Collects info about user visit including time and unique identifier.",
          fullPage: {
            isExternal: false,
            path: "/catalog/sensors/1",
          },
        },
        {
          name: "Device detector",
          subtitle: "average",
          description:
            "Saves simple identifier, that describes user platform. It can be Mobile, Tablet or PC.",
          fullPage: {
            isExternal: false,
            path: "/catalog/sensors/2",
          },
        },
      ],
    };
  },
};
</script>
