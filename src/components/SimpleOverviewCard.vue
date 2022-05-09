<template>
  <q-card style="width: 300px">
    <template v-if="image">
      <q-img :src="image">
        <div class="absolute-bottom text-h6">{{ title }}</div>
      </q-img>
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
export default {
  name: "SimpleOverviewCard",
  props: {
    image: { type: String, default: null },
    title: { type: String, required: true },
    subtitle: { type: String, default: null },
    description: { type: String, required: true },
  },
  setup() {
    return {};
  },
  data() {
    return {};
  },
};
</script>
