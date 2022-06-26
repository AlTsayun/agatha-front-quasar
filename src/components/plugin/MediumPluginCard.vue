<template>
  <PluginOverviewCard :plugin="plugin">
    <q-separator v-if="$slots.default" />
    <q-card-actions align="between">
      <q-toggle
        v-model="shown"
        checked-icon="dashboard"
        unchecked-icon="visibility_off"
      >
        <q-tooltip>
          <template v-if="shown">Plugin shown on dashboard</template>
          <template v-else>Plugin hidden from dashboard</template>
        </q-tooltip>
      </q-toggle>

      <q-btn
        flat
        icon="visibility"
        style="width: 100px"
        to="/dashboard"
        :disable="!shown"
      >
        <q-tooltip>Show this plugin output</q-tooltip>
      </q-btn>
    </q-card-actions>
    <q-card-actions align="between">
      <DetailsLinkButton :link="plugin.fullPage" />
      <q-btn flat icon="delete" color="negative" @click="onRemoveClicked">
        <q-tooltip>Remove plugin from medium</q-tooltip>
      </q-btn>
    </q-card-actions>
  </PluginOverviewCard>
</template>

<script>
import { useQuasar } from "quasar";
import PluginOverviewCard from "components/plugin/PluginOverviewCard.vue";
import DetailsLinkButton from "components/DetailsLinkButton.vue";

export default {
  name: "MediumPluginCard",
  components: { PluginOverviewCard, DetailsLinkButton },
  props: {
    plugin: { type: Object, required: true },
    onRemove: { type: Function, required: true },
  },
  setup(props) {
    const $q = useQuasar();

    function onRemoveClicked() {
      $q.dialog({
        title: "Confirm",
        message: "Would you like to remove that plugin from current medium?",
        cancel: true,
      }).onOk(props.onRemove);
    }
    return { onRemoveClicked };
  },
  data() {
    return { shown: true };
  },
};
</script>
