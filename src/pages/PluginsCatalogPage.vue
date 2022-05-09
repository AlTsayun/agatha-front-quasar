<template>
  <q-page padding>
    <div class="q-pa-md">
      <div class="row items-start">
        <PluginOverviewCard
          v-for="plugin in plugins"
          :key="plugin.name"
          class="q-ma-sm"
          :plugin="plugin"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import PluginOverviewCard from "src/components/PluginOverviewCard.vue";

export default {
  name: "MediumsPage",
  components: {
    PluginOverviewCard,
  },
  data() {
    return {
      plugins: [
        {
          name: "Visitors counter",
          image: "https://cdn.quasar.dev/img/parallax2.jpg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          fullPage: {
            isExternal: true,
            path: "https://quasar.dev",
          },
          sensors: [
            {
              name: "Time detector",
              fullPage: {
                isExternal: true,
                path: "https://quasar.dev",
              },
            },
            {
              name: "Clicker",
              fullPage: {
                isExternal: true,
                path: "https://quasar.dev",
              },
            },
            {
              name: "Scroll position",
              fullPage: {
                isExternal: false,
                path: "sensors/1",
              },
            },
            {
              name: "Networker",
              fullPage: {
                isExternal: true,
                path: "sensors/2",
              },
            },
          ],
        },
        {
          name: "Time spent",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          fullPage: {
            isExternal: false,
            path: "plugins/1",
          },
        },
      ],
    };
  },
};
</script>
