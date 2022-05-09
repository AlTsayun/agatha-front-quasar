<template>
  <q-card
    v-ripple
    class="cursor-pointer q-hoverable column justify-around items-center"
    style="width: 300px; height: 200px"
    @click="$router.push(addPage)"
  >
    <span class="q-focus-helper"></span>
    <q-card-section>
      <div>
        <q-icon name="add" size="xl" />
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "AddOverviewCard",
  props: {
    addPage: { type: String, required: true },
  },
};
</script>
