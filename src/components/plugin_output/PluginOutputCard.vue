<template>
  <q-card class="q-pa-sm">
    <q-card-section horizontal>
      <div class="text-h6">{{ plugin.name }}</div>
      <div v-if="plugin.tooltip">
        <q-chip dense>
          ?
          <q-tooltip> {{ plugin.tooltip }} </q-tooltip>
        </q-chip>
      </div>
      <slot name="toolbar-section" />
    </q-card-section>
    <q-card-section>
      <slot />
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "PluginOutputCard",
  props: { plugin: { type: Object, required: true } },
  setup() {
    return {};
  },
};
</script>
