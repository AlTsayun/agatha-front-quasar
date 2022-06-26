<template>
  <q-page class="flex justify-center q-pa-lg">
    <div class="full-width" style="max-width: 1100px">
      <q-list bordered class="rounded-borders">
        <q-expansion-item
          expand-separator
          icon="storefront"
          label="Details"
          caption="Description and fine tunning"
          :content-inset-level="1"
          default-opened
        >
          <q-card>
            <q-card-section>
              <q-list>
                <q-item>
                  <q-item-section>
                    <EditEnableInput
                      v-model="mediumName"
                      label="Name"
                      placeholder="My super medium"
                      hint="Enter name of medium which is used as label"
                      prepend-icon="bookmark_border"
                    />
                  </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section>
                    <EditEnableInput
                      v-model="mediumDescription"
                      label="Description"
                      placeholder="Short description"
                      hint="Enter noticable medium info"
                      prepend-icon="description"
                    />
                  </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section>
                    <EditEnableInput
                      v-model="mediumUrl"
                      label="URL"
                      placeholder="http://example.com"
                      hint="Enter url of medium"
                      prepend-icon="web"
                    />
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item
          expand-separator
          icon="query_stats"
          label="Plugins"
          caption="List of plugins to display analysis"
          :content-inset-level="1"
        >
          <div class="row justify-center items-start">
            <MediumPluginCard
              v-for="plugin in plugins"
              :key="plugin.name"
              class="q-ma-sm"
              :plugin="plugin"
              :on-remove="
                () => {
                  onRemovePlugin(plugin);
                }
              "
            />
            <AddOverviewCard add-page="/catalog/plugins" class="q-ma-sm" />
          </div>
        </q-expansion-item>

        <q-expansion-item
          expand-separator
          icon="person_search"
          label="Sensors"
          caption="List of sensors used to colect user actions"
          :content-inset-level="1"
        >
          <div class="row justify-center items-start">
            <MediumSensorCard
              v-for="sensor in sensors"
              :key="sensor.name"
              class="q-ma-sm"
              :sensor="sensor"
            />
          </div>
        </q-expansion-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import EditEnableInput from "components/EditEnableInput.vue";
import MediumSensorCard from "components/sensor/MediumSensorCard.vue";
import MediumPluginCard from "components/plugin/MediumPluginCard.vue";
import AddOverviewCard from "components/AddOverviewCard.vue";

export default {
  name: "MediumsPage",
  components: {
    EditEnableInput,
    AddOverviewCard,
    MediumSensorCard,
    MediumPluginCard,
  },
  data() {
    return {
      mediumUrl: ref("http://loacalhost:8081/"),
      mediumName: ref("example.com"),
      mediumDescription: ref("Medium example"),
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
  methods: {
    onRemovePlugin(plugin) {
      console.log(plugin);
    },
  },
};
</script>
