<template>
  <q-badge :color="getBadgeColor(dynamics)" outline rounded
    >{{ (dynamics.delta < 0 ? "" : "+") + dynamics.delta }}
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
      return dynamics.delta > 0 && dynamics.isGrowthPositive ? "green" : "red";
    },
  },
});
</script>
