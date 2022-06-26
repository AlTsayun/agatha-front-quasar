<template>
  <q-btn-dropdown rounded>
    <template #label>
      <q-icon class="q-mr-sm" name="store" size="xs" />
      {{ mediums[selectedMediumIndex] }}
    </template>
    <q-list>
      <q-item
        v-for="medium of mediums"
        :key="medium"
        v-close-popup
        clickable
        @click="onMediumDropdownClicked(medium)"
      >
        <q-item-section>
          <q-item-label>{{ medium }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>

<script>
export default {
  name: "MediumDropdown",
  props: {
    // onSelected: { type: Function, required: true },
  },
  setup() {
    return {};
  },
  data() {
    return {
      mediums: ["example.com"],
      selectedMediumIndex: 0,
    };
  },
  methods: {
    onMediumDropdownClicked(e) {
      this.selectedMediumIndex = this.mediums.indexOf(e);
    },
  },
};
</script>
