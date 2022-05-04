<template>
  <Bar
    v-if="pluginChart.type == 'bar'"
    :chart-options="chartOptions"
    :chart-data="barChartData"
    :chart-id="123"
  />
  <Line
    v-else-if="pluginChart.type == 'line'"
    :chart-options="chartOptions"
    :chart-data="lineChartData"
    :chart-id="1234"
  />
  <Doughnut
    v-else-if="pluginChart.type == 'doughnut'"
    :chart-options="chartOptions"
    :chart-data="doughnutChartData"
    :chart-id="12345"
  />
  <Pie
    v-else-if="pluginChart.type == 'pie'"
    :chart-options="chartOptions"
    :chart-data="doughnutChartData"
    :chart-id="123456"
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
      barChartData: {
        labels: ["January", "February", "March"],
        datasets: [{ data: [40, 20, 12] }],
      },
      lineChartData: {
        labels: ["January", "February", "March"],
        datasets: [
          {
            label: "My First Dataset",
            data: [40, 60, 12],
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      },
      doughnutChartData: {
        labels: ["January", "February", "March"],
        datasets: [{ data: [40, 20, 12] }],
      },
      chartOptions: {
        responsive: true,
      },
    };
  },
};
</script>
