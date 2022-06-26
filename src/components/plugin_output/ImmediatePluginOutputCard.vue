<template>
  <PluginOutputCard :plugin="plugin" style="max-width: 300px">
    <div v-if="plugin.type == 'number'" class="text-h4">
      {{ plugin.data.number }}

      <PluginGrowthBadge :dynamics="plugin.data.dynamics" />
    </div>
    <div v-else-if="plugin.type == 'time'" class="text-h4">
      {{ formatTime(plugin.data.seconds) }}

      <PluginGrowthBadge :dynamics="plugin.data.dynamics" />
    </div>
    <div v-else-if="plugin.type == 'percent'" class="text-h4">
      {{ formatPercent(plugin.data.fraction) }}

      <PluginGrowthBadge :dynamics="plugin.data.dynamics" />
    </div>
    <div v-else-if="plugin.type == 'text'" class="column">
      <div class="text-h4">
        {{ plugin.data.statement }}
      </div>
      <div v-if="plugin.data.description" class="text-caption">
        {{ plugin.data.description }}
      </div>
    </div>
  </PluginOutputCard>
</template>

<script>
import PluginOutputCard from "components/plugin_output/PluginOutputCard.vue";
import PluginGrowthBadge from "components/PluginGrowthBadge.vue";

export default {
  name: "ImmediatePluginOutputCard",
  components: { PluginOutputCard, PluginGrowthBadge },
  props: { plugin: { type: Object, required: true } },
  setup() {
    return {};
  },
  methods: {
    formatTime(sec) {
      let date = new Date(sec * 1000);
      let seconds = date.getUTCSeconds();
      let minutes = date.getUTCMinutes();
      let hours = date.getUTCHours();

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      return `${hours != 0 ? hours + ":" : ""}${minutes}:${seconds}`;
    },
    formatPercent(fraction) {
      return `${+(fraction * 100).toFixed(2)} %`;
    },
  },
};
</script>
