<template>
  <SimpleOverviewCard
    :title="plugin.name"
    :description="plugin.description"
    :image="plugin.image"
    subtitle="by John Doe"
  >
    <q-card-actions align="right">
      <q-btn flat color="primary"> Open details </q-btn>
    </q-card-actions>
  </SimpleOverviewCard>
</template>

<script>
import { ref } from "vue";
import SimpleOverviewCard from "./SimpleOverviewCard.vue";
export default {
  name: "SensorOverviewCard",
  components: { SimpleOverviewCard },
  props: { plugin: { type: Object, required: true } },
  setup() {
    return {};
  },
  data() {
    return {
      sensors: [
        {
          name: "Visitors counter",
          image: "https://cdn.quasar.dev/img/parallax2.jpg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          fullPage: {
            isExternal: false,
            path: "/1",
          },
        },
        {
          name: "Time spent",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          fullPage: {
            isExternal: false,
            path: "/1",
          },
        },
      ],
    };
  },
};
</script>
