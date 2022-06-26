<template>
  <q-page padding>
    <q-toolbar>
      <div class="row items-center">
        <q-breadcrumbs class="q-ma-sm">
          <q-breadcrumbs-el label="Home" icon="home" to="/" />
          <q-breadcrumbs-el label="Meduims" icon="apps" to="/mediums" />
          <q-breadcrumbs-el>
            <MediumDropdown />
          </q-breadcrumbs-el>
        </q-breadcrumbs>
        <q-btn icon="update" round class="q-ma-sm" @click="reload" />
      </div>
    </q-toolbar>

    <div class="q-pa-md">
      <q-card>
        <q-card-section class="row items-center justify-center q-pa-md q-ma-sm">
          <template
            v-for="(plugin, index) in getImmediatePlugins(selectedTimeFrame)"
          >
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
            v-for="plugin in getChartPlugins(selectedTimeFrame)"
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
import ChartPluginOutputCard from "components/plugin_output/ChartPluginOutputCard.vue";
import ImmediatePluginOutputCard from "components/plugin_output/ImmediatePluginOutputCard.vue";
import MediumDropdown from "components/MediumDropdown.vue";

export default {
  name: "DashboardPage",
  components: {
    ImmediatePluginOutputCard,
    ChartPluginOutputCard,
    MediumDropdown,
  },
  data() {
    return {
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
    reload() {
      console.log(this.selectedTimeFrame);
    },
    getImmediatePlugins(timeFrame) {
      var visitors;
      var uniqueVisitors;
      var declines;
      var averageVisit;
      var dynamics;
      let positiveDynamics = (dynamics = {
        statement: "Positive",
        description: "Both new visitors and time spent increased.",
      });
      let normalDynamics = (dynamics = {
        statement: "Normal",
        description: "New visitors increased but time spent decreased.",
      });
      let negativeDynamics = (dynamics = {
        statement: "Negative",
        description: "Both new visitors and time spent did not increased.",
      });

      if (timeFrame == "today") {
        visitors = {
          delta: 120,
          number: 2543,
        };
        uniqueVisitors = {
          delta: 76,
          number: 154,
        };
        declines = {
          delta: 15,
          number: 149,
        };
        averageVisit = {
          delta: 4,
          seconds: 10 + 60 * 12,
        };
        dynamics = positiveDynamics;
      }
      if (timeFrame == "yesterday") {
        visitors = {
          delta: 3,
          number: 3123,
        };
        uniqueVisitors = {
          delta: 3,
          number: 142,
        };
        declines = {
          delta: -4,
          number: 498,
        };
        averageVisit = {
          delta: -5,
          seconds: 60 * 11 + 12,
        };
        dynamics = normalDynamics;
      }
      if (timeFrame == "week") {
        visitors = {
          delta: 27,
          number: 25104,
        };
        uniqueVisitors = {
          delta: 13,
          number: 852,
        };
        declines = {
          delta: 15,
          number: 3198,
        };
        averageVisit = {
          delta: 15,
          seconds: 60 * 11 + 34,
        };
        dynamics = positiveDynamics;
      }
      if (timeFrame == "month") {
        visitors = {
          delta: 46,
          number: 102354,
        };
        uniqueVisitors = {
          delta: 3,
          number: 3408,
        };
        declines = {
          delta: -467,
          number: 15337,
        };
        averageVisit = {
          delta: -12,
          seconds: 60 * 11 + 28,
        };
        dynamics = normalDynamics;
      }
      if (timeFrame == "year") {
        visitors = {
          delta: 0,
          number: 1280635,
        };
        uniqueVisitors = {
          delta: 0,
          number: 40122,
        };
        declines = {
          delta: 0,
          number: 261101,
        };
        averageVisit = {
          delta: 0,
          seconds: 60 * 11 + 22,
        };
        dynamics = negativeDynamics;
      }
      return [
        {
          name: "Visitors",
          type: "number",
          tooltip: "Number of visitors today",
          data: {
            dynamics: {
              delta: visitors.delta,
              type: "number",
              isGrowthPositive: true,
            },
            number: visitors.number,
          },
        },
        {
          name: "Unique Visitors",
          type: "number",
          tooltip: "Number of unique visitors today",
          data: {
            dynamics: {
              delta: uniqueVisitors.delta,
              type: "number",
              isGrowthPositive: true,
            },
            number: uniqueVisitors.number,
          },
        },
        {
          name: "Declines",
          type: "number",
          tooltip: "Number of declines today",
          data: {
            dynamics: {
              delta: declines.delta,
              type: "number",
              isGrowthPositive: false,
            },
            number: declines.number,
          },
        },
        {
          name: "Average visit",
          tooltip: "Time spent on average by visitors for the last 24 hours",
          type: "time",
          data: {
            dynamics: {
              delta: averageVisit.delta,
              type: "time",
              isGrowthPositive: true,
            },
            seconds: averageVisit.seconds,
          },
        },
        {
          name: "Dynamics",
          tooltip: "Detected via latest tendencies",
          type: "text",
          data: {
            statement: dynamics.statement,
            description: dynamics.description,
          },
        },
      ];
    },
    getChartPlugins(timeFrame) {
      var visitors;
      var declines;
      var device;

      let dayLabels = [
        "02:00",
        "04:00",
        "06:00",
        "08:00",
        "10:00",
        "12:00",
        "14:00",
        "16:00",
        "18:00",
        "20:00",
        "22:00",
        "24:00",
      ];
      let weekLabels = ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sun"];
      let monthLabels = [
        "1",
        "3",
        "5",
        "7",
        "9",
        "11",
        "13",
        "15",
        "17",
        "19",
        "21",
        "23",
        "25",
        "27",
        "29",
        "31",
      ];
      let yearLabels = [
        "Jan",
        "Feb",
        "Arp",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      if (timeFrame == "today") {
        visitors = {
          labels: dayLabels,
          data: [102, 39, 363, 513, 720, 806],
        };
        declines = {
          labels: dayLabels,
          data: [9, 6, 15, 35, 40, 44],
        };
        device = {
          data: [1628, 661, 254],
        };
      }
      if (timeFrame == "yesterday") {
        visitors = {
          labels: dayLabels,
          data: [30, 22, 14, 26, 117, 250, 436, 504, 503, 611, 489, 121],
        };
        declines = {
          labels: dayLabels,
          data: [4, 1, 3, 4, 26, 47, 66, 102, 74, 88, 63, 20],
        };
        device = {
          data: [1874, 937, 312],
        };
      }
      if (timeFrame == "week") {
        visitors = {
          labels: weekLabels,
          data: [3335, 3573, 3614, 3707, 3821, 3123],
        };
        declines = {
          labels: weekLabels,
          data: [543, 551, 540, 506, 560, 498],
        };
        device = {
          data: [16569, 6778, 1757],
        };
      }
      if (timeFrame == "month") {
        visitors = {
          labels: monthLabels,
          data: [3, 2, 14, 26, 117, 250],
        };
        declines = {
          labels: monthLabels,
          data: [
            1306, 1278, 1264, 1240, 1315, 1296, 1266, 1270, 1284, 1249, 1274,
            1295,
          ],
        };
        device = {
          data: [40, 20, 12],
        };
      }
      if (timeFrame == "year") {
        visitors = {
          labels: yearLabels,
          data: [
            98154, 102372, 103532, 105659, 108621, 108370, 109321, 108817,
            108331, 108939, 109505, 109014,
          ],
        };
        declines = {
          labels: yearLabels,
          data: [
            21658, 21442, 20907, 21563, 22007, 21773, 21593, 22784, 21365,
            22106, 21885, 22018,
          ],
        };
        device = {
          data: [16569, 6778, 1757],
        };
      }

      return [
        {
          name: "Visitors by period",
          tooltip: "Count of visitors in before period",
          chart: {
            type: "bar",
            data: {
              labels: visitors.labels,
              datasets: [
                {
                  label: "Visitors",
                  data: visitors.data,
                  backgroundColor: "pink",
                },
              ],
            },
            isDataLoaded: false,
          },
        },
        {
          name: "Declines by period",
          chart: {
            type: "line",
            data: {
              labels: declines.labels,
              datasets: [
                {
                  label: "Declines",
                  data: declines.data,
                  borderColor: "lightblue",
                  backgroundColor: "lightblue",
                },
              ],
            },
            isDataLoaded: false,
          },
        },
        {
          name: "Device",
          chart: {
            type: "doughnut",
            data: {
              labels: ["Mobile", "PC", "Tablet"],
              datasets: [
                {
                  data: device.data,
                  backgroundColor: [
                    "rgb(255, 99, 132)",
                    "rgb(54, 162, 235)",
                    "rgb(255, 205, 86)",
                  ],
                },
              ],
            },
            isDataLoaded: false,
          },
        },
      ];
    },
  },
};
</script>
