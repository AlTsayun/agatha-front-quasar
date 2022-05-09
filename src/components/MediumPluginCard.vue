<template>
  <PluginOverviewCard :plugin="plugin">
    <q-separator v-if="$slots.default" />
    <q-card-actions align="between">
      <DetailsLinkButton :link="plugin.fullPage" />
      <q-btn flat icon="delete" color="negative" @click="onRemoveClicked" />
    </q-card-actions>
  </PluginOverviewCard>
</template>

<script>
import { useQuasar } from "quasar";
import PluginOverviewCard from "components/PluginOverviewCard.vue";
import DetailsLinkButton from "components/DetailsLinkButton.vue";

export default {
  name: "MediumPluginCard",
  components: { PluginOverviewCard, DetailsLinkButton },
  props: {
    plugin: { type: Object, required: true },
    remove: { type: Function, required: true },
  },
  setup() {
    const $q = useQuasar();

    function onRemoveClicked() {
      $q.dialog({
        title: "Confirm",
        message: "Would you like to remove that plugin from current medium?",
        cancel: true,
      }).onOk(this.remove);
    }

    return { onRemoveClicked };
  },
};
</script>
