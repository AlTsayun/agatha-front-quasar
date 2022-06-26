<template>
  <q-page padding>
    <div class="q-pa-md">
      <div class="row items-start">
        <CatalogPluginCard
          v-for="plugin in plugins"
          :key="plugin.name"
          class="q-ma-sm"
          :plugin="plugin"
          enable="true"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import CatalogPluginCard from "components/plugin/CatalogPluginCard.vue";

export default {
  name: "PluginsCatalogPage",
  components: {
    CatalogPluginCard,
  },
  data() {
    return {
      plugins: [
        {
          name: "Visitors by period",
          image: "https://i.postimg.cc/FsCXSfQv/image.png",
          subtitle: "Diagram",
          description:
            "This plugin makes a bar diagram that describes number of visitors, who attended your web site. The diagram is splitted into periods for convenience.",
          fullPage: {
            isExternal: false,
            path: "/catalog/plugins/1",
          },
          sensors: [
            {
              name: "Visit detector",
              fullPage: {
                isExternal: false,
                path: "/catalog/sensors/1",
              },
            },
          ],
        },
        {
          name: "Declines by period",
          image: "https://i.postimg.cc/SRknHHSQ/image.png",
          subtitle: "Diagram",
          description:
            "In order to show declines statistics displays line diagram that describes number of visitors, who attended your web site for too little time. If the visit lasts less than 10 sec, it is considered rejected. The diagram is splitted into periods for convenience.",
          fullPage: {
            isExternal: false,
            path: "/catalog/plugins",
          },
          sensors: [
            {
              name: "Visit detector",
              fullPage: {
                isExternal: false,
                path: "/catalog/sensors/1",
              },
            },
          ],
        },
        {
          name: "Device",
          image: "https://i.postimg.cc/15LQtwFw/image.png",
          subtitle: "Diagram",
          description:
            "Pie-styled diagram that is used to make assumption about users platform. Among displayed are: Mobile, Tablet and PC. They take a precentage share in overall users.",
          fullPage: {
            isExternal: false,
            path: "/catalog/plugins/2",
          },
          sensors: [
            {
              name: "Device detector",
              fullPage: {
                isExternal: false,
                path: "/catalog/sensors/2",
              },
            },
          ],
        },
        {
          name: "Visitors",
          subtitle: "Short",
          description:
            "Displays number of visitors for the selected period. The badge shows by how much visitors is the current period more popular.",
          fullPage: {
            isExternal: false,
            path: "/catalog/plugins/3",
          },
          sensors: [
            {
              name: "Visit detector",
              fullPage: {
                isExternal: false,
                path: "/catalog/sensors/1",
              },
            },
          ],
        },
        {
          name: "Unique Visitors",
          subtitle: "Short",
          description:
            "Displays number of unique visitors for the selected period. Uniqueness is approximate. The badge shows by how much unique visitors is the current period more popular.",
          fullPage: {
            isExternal: false,
            path: "/catalog/plugins/4",
          },
          sensors: [
            {
              name: "Visit detector",
              fullPage: {
                isExternal: false,
                path: "/catalog/sensors/1",
              },
            },
          ],
        },
        {
          name: "Declines",
          subtitle: "Short",
          description:
            "Displays number of declines for the selected period. If user spends less than 10 sec on the page visit is considered declined. The badge shows by how much the indicated value changed.",
          fullPage: {
            isExternal: false,
            path: "/catalog/plugins/5",
          },
          sensors: [
            {
              name: "Visit detector",
              fullPage: {
                isExternal: false,
                path: "/catalog/sensors/1",
              },
            },
          ],
        },
        {
          name: "Average visit",
          subtitle: "Short",
          description:
            "Shows how much time user spends on your web site in average. Additionally badge with increase or decrease label is displayed. That badge shows difference from the value of previous period.",
          fullPage: {
            isExternal: false,
            path: "/catalog/plugins/6",
          },
          sensors: [
            {
              name: "Visit detector",
              fullPage: {
                isExternal: false,
                path: "/catalog/sensors/1",
              },
            },
          ],
        },
        {
          name: "Dynamics",
          image: "https://i.postimg.cc/ncM3WWCG/image.png",
          subtitle: "Short",
          description:
            "Shows how much time user spends on your web site in average. Additionally badge with increase or decrease label is displayed. That badge shows difference from the value of previous period.",
          fullPage: {
            isExternal: false,
            path: "/catalog/plugins/6",
          },
          sensors: [
            {
              name: "Visit detector",
              fullPage: {
                isExternal: false,
                path: "/catalog/sensors/1",
              },
            },
          ],
        },
      ],
    };
  },
};
</script>
