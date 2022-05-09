<template>
  <q-page padding>
    <q-toolbar>
      <div class="row">
        <q-breadcrumbs class="q-ma-md">
          <q-breadcrumbs-el label="Home" icon="home" to="/" />
          <q-breadcrumbs-el label="Meduims" icon="apps" to="/mediums" />
          <q-breadcrumbs-el>
            <q-btn-dropdown rounded>
              <template #label>
                <q-icon class="q-mr-sm" name="web" size="xs" />
                {{ mediums[selectedMediumIndex] }}
              </template>
              <q-list>
                <q-item
                  v-for="medium of mediums"
                  :key="medium"
                  v-close-popup
                  clickable
                  @click="onMediumDropdownClicked(medium)"
                >
                  <q-item-section>
                    <q-item-label>{{ medium }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </q-breadcrumbs-el>
        </q-breadcrumbs>
        <q-btn icon="update" round class="q-ma-md" @click="reload" />
      </div>
    </q-toolbar>

    <div class="q-pa-md">
      <q-card>
        <q-card-section class="row items-center justify-center q-pa-md q-ma-sm">
          <template v-for="(plugin, index) in immediatePlugins">
            <template v-if="index > 0">
              <q-separator :key="plugin.name" vertical inset="sm"></q-separator>
              <ImmediatePluginOutputCard
                :key="plugin.name + '12'"
                flat
                class="q-ma-sm"
                :plugin="plugin"
              />
            </template>
            <ImmediatePluginOutputCard
              v-else
              :key="plugin.name + '12'"
              flat
              class="q-ma-sm"
              :plugin="plugin"
            />
          </template>
        </q-card-section>
      </q-card>
      <div class="column items-center">
        <q-btn-toggle
          v-model="selectedTimeFrame"
          class="q-ma-md"
          rounded
          toggle-color="primary"
          :options="selectedTimeFrameOptions"
        />
        <!-- <q-btn icon="event" round color="primary">
          <q-popup-proxy
            cover
            transition-show="scale"
            transition-hide="scale"
            @before-show="updateProxy"
          >
            <q-date v-model="proxyDate" today-btn range />
          </q-popup-proxy>
        </q-btn> -->
        <div class="row justify-center">
          <ChartPluginOutputCard
            v-for="plugin in plugins"
            :key="plugin.name"
            class="q-ma-sm"
            :plugin="plugin"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import ChartPluginOutputCard from "components/ChartPluginOutputCard.vue";
import ImmediatePluginOutputCard from "components/ImmediatePluginOutputCard.vue";

export default {
  name: "DashboardPage",
  components: { ImmediatePluginOutputCard, ChartPluginOutputCard },
  data() {
    return {
      proxyDate: ref({ from: "2020/07/08", to: "2020/07/17" }),
      mediums: ["medium1", "medium2"],
      selectedMediumIndex: 0,
      plugins: [
        {
          name: "plugin1",
          chart: {
            type: "bar",
            data: {
              labels: ["January", "February", "March"],
              datasets: [{ data: [40, 20, 12] }],
            },
            isDataLoaded: false,
          },
        },
        {
          name: "plugin2",
          chart: {
            type: "line",
            data: {
              labels: ["January", "February", "March"],
              datasets: [
                {
                  label: "My First Dataset",
                  data: [40, 60, 12],
                  fill: false,
                  borderColor: "rgb(75, 192, 192)",
                  // tension: 0.1,
                },
              ],
            },
            isDataLoaded: false,
          },
        },
        {
          name: "plugin3",
          chart: {
            type: "doughnut",
            data: {
              labels: ["January", "February", "March"],
              datasets: [{ data: [40, 20, 12] }],
            },
            isDataLoaded: false,
          },
        },
        {
          name: "plugin4",
          chart: {
            type: "pie",
            data: {
              labels: ["Red", "Blue", "Yellow"],
              datasets: [
                {
                  data: [300, 50, 100],
                  backgroundColor: [
                    "rgb(255, 99, 132)",
                    "rgb(54, 162, 235)",
                    "rgb(255, 205, 86)",
                  ],
                  hoverOffset: 4,
                },
              ],
            },
            isDataLoaded: false,
          },
        },
      ],
      immediatePlugins: [
        {
          name: "Visitors",
          type: "number",
          tooltip: "Number of visitors today",
          data: {
            dynamics: {
              delta: 0.05,
              isGrowthPositive: true,
            },
            number: 123,
          },
        },
        {
          name: "Declines",
          type: "number",
          tooltip: "Number of declines today",
          data: {
            dynamics: {
              delta: 0.05,
              isGrowthPositive: false,
            },
            number: 123,
          },
        },
        {
          name: "Average visit",
          tooltip: "Time spent on average by visitors for the last 24 hours",
          type: "time",
          // seconds
          data: {
            dynamics: {
              delta: 0.05,
              isGrowthPositive: true,
            },
            seconds: 10 + 60 * 12 + 10 * 60 * 60,
          },
        },
        {
          name: "Income",
          type: "percent",
          // 0 to 1
          data: {
            dynamics: {
              delta: 0.05,
              isGrowthPositive: false,
            },
            percent: 0.51116,
          },
        },
        {
          name: "Dynamics",
          tooltip: "Detected via latest tendencies",
          type: "text",
          data: {
            statement: "Positive",
            description: "Both new visitors and time spent increased.",
          },
        },
      ],
      selectedTimeFrame: ref("today"),
      selectedTimeFrameOptions: [
        { label: "Today", value: "today" },
        { label: "Yesterday", value: "yesterday" },
        { label: "Week", value: "week" },
        { label: "Month", value: "month" },
        { label: "Year", value: "year" },
      ],
    };
  },

  methods: {
    onMediumDropdownClicked(e) {
      this.selectedMediumIndex = this.mediums.indexOf(e);
    },

    reload() {
      console.log(this.selectedTimeFrame);
    },
  },
};
</script>
