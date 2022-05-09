<template>
  <Bar
    v-if="pluginChart.type == 'bar'"
    :chart-options="chartOptions"
    :chart-data="pluginChart.data"
    :chart-id="'q'"
  />
  <Line
    v-else-if="pluginChart.type == 'line'"
    :chart-options="chartOptions"
    :chart-data="pluginChart.data"
    :chart-id="'qw'"
  />
  <Doughnut
    v-else-if="pluginChart.type == 'doughnut'"
    :chart-options="chartOptions"
    :chart-data="pluginChart.data"
    :chart-id="'qwe'"
  />
  <Pie
    v-else-if="pluginChart.type == 'pie'"
    :chart-options="chartOptions"
    :chart-data="pluginChart.data"
    :chart-id="'qwer'"
  />
</template>

<script>
import { Bar, Line, Doughnut, Pie } from "vue-chartjs";
import Chart from "chart.js/auto";

export default {
  name: "ChartCanvas",
  components: { Bar, Line, Doughnut, Pie },
  props: {
    pluginChart: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      chartOptions: {
        responsive: true,
      },
    };
  },
};
</script>
