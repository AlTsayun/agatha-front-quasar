<template>
  <SimpleOverviewCard
    :title="item.name"
    :description="item.description"
    :image="item.image"
    subtitle="by John Doe"
  >
    <slot />
    <q-separator v-if="$slots.default" />
    <q-card-actions align="left">
      <DetailsLinkButton :link="item.fullPage" />
    </q-card-actions>
  </SimpleOverviewCard>
</template>

<script>
import SimpleOverviewCard from "components/SimpleOverviewCard.vue";
import DetailsLinkButton from "components/DetailsLinkButton.vue";

export default {
  name: "OpenDetailsOverviewCard",
  components: { SimpleOverviewCard, DetailsLinkButton },
  props: { item: { type: Object, required: true } },
  setup() {
    return {};
  },
  data() {
    return {};
  },
};
</script>
