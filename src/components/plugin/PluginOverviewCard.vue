<template>
  <SimpleOverviewCard
    :title="plugin.name"
    :description="plugin.description"
    :image="plugin.image"
    :subtitle="plugin.subtitle"
  >
    <q-card-section horizontal class="column items-stretch">
      <SensorsExpansionItem :sensors="plugin.sensors" />
    </q-card-section>

    <q-separator />
    <slot />
  </SimpleOverviewCard>
</template>

<script>
import SimpleOverviewCard from "components/SimpleOverviewCard.vue";
import SensorsExpansionItem from "components/SensorsExpansionItem.vue";

export default {
  name: "PluginOverviewCard",
  components: { SimpleOverviewCard, SensorsExpansionItem },
  props: { plugin: { type: Object, required: true } },
  setup() {
    return {};
  },
};
</script>
