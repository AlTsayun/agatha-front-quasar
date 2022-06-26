<template>
  <q-badge :color="getBadgeColor(dynamics)" outline rounded>
    <template v-if="dynamics.type == 'number'">
      {{ (dynamics.delta < 0 ? "-" : "+") + Math.abs(dynamics.delta) }}
    </template>
    <template v-if="dynamics.type == 'time'">
      {{
        (dynamics.delta < 0 ? "-" : "+") + formatTime(Math.abs(dynamics.delta))
      }}
    </template>
  </q-badge>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PluginGrowthBadge",
  props: { dynamics: { type: Object, required: true } },
  setup() {
    return {};
  },
  methods: {
    getBadgeColor(dynamics) {
      if (dynamics.delta == 0) {
        return "grey";
      }
      if (dynamics.delta > 0) {
        return dynamics.isGrowthPositive ? "green" : "red";
      } else {
        return !dynamics.isGrowthPositive ? "green" : "red";
      }
    },
    formatTime(sec) {
      let date = new Date(sec * 1000);
      let seconds = date.getUTCSeconds();
      let minutes = date.getUTCMinutes();
      let hours = date.getUTCHours();

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      return `${hours != 0 ? hours + ":" : ""}${minutes}:${seconds}`;
    },
  },
});
</script>
