<template>
  <q-card style="width: 300px">
    <template v-if="image">
      <q-dialog v-model="card">
        <div style="width: 500px; max-width: 80vw">
          <q-img :src="image" />
        </div>
      </q-dialog>
      <q-item clickable class="no-padding" @click="card = true">
        <q-img :src="image">
          <div class="absolute-bottom text-h6">{{ title }}</div>
        </q-img>
      </q-item>
    </template>
    <template v-else>
      <q-card-section>
        <div class="text-h6">{{ title }}</div>
      </q-card-section>
      <q-separator />
    </template>

    <template v-if="subtitle">
      <q-card-section>
        <div class="text-subtitle2">{{ subtitle }}</div>
      </q-card-section>
    </template>

    <q-card-section class="text-body2"> {{ description }} </q-card-section>

    <q-separator v-if="$slots.default" />
    <slot />
  </q-card>
</template>

<script>
import { ref } from "vue";

export default {
  name: "SimpleOverviewCard",
  props: {
    image: { type: String, default: null },
    title: { type: String, required: true },
    subtitle: { type: String, default: null },
    description: { type: String, required: true },
  },
  setup() {
    return {
      card: ref(false),
    };
  },
  data() {
    return {};
  },
};
</script>
