<template>
  <q-page class="flex justify-center">
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
              :remove="onRemovePlugin"
            />
            <AddOverviewCard add-page="/" class="q-ma-sm" />
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
            <OpenDetailsOverviewCard
              v-for="sensor in sensors"
              :key="sensor.name"
              class="q-ma-sm"
              :item="sensor"
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
import OpenDetailsOverviewCard from "src/components/OpenDetailsOverviewCard.vue";
import MediumPluginCard from "src/components/MediumPluginCard.vue";
import AddOverviewCard from "components/AddOverviewCard.vue";

export default {
  name: "MediumsPage",
  components: {
    EditEnableInput,
    AddOverviewCard,
    OpenDetailsOverviewCard,
    MediumPluginCard,
  },
  data() {
    return {
      mediumUrl: ref("http://loacalhost:8081/"),
      mediumName: ref("Medium example"),
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
                path: "/1",
              },
            },
            {
              name: "Networker",
              fullPage: {
                isExternal: true,
                path: "/2",
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
            path: "/1",
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
                path: "/1",
              },
            },
            {
              name: "Networker",
              fullPage: {
                isExternal: true,
                path: "/2",
              },
            },
          ],
        },
      ],
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
  methods: {
    onRemovePlugin(plugin) {
      console.log("confirmed");
    },
  },
};
</script>
