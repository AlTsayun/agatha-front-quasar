<template>
  <q-page padding>
    <q-toolbar>
      <q-breadcrumbs>
        <q-breadcrumbs-el label="Home" icon="home" to="/" />
        <q-breadcrumbs-el label="Meduims" icon="apps" to="/" />
        <q-breadcrumbs-el>
          <q-btn-dropdown rounded>
            <template #label>
              <q-icon class="q-mr-sm" name="web" size="xs" />
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
        </q-breadcrumbs-el>
      </q-breadcrumbs>
      <q-btn icon="update" round class="q-ml-md"></q-btn>
    </q-toolbar>
    <div class="row q-pa-md">
      <PluginOutputCard
        v-for="plugin in plugins"
        :key="plugin.name"
        class="q-ma-sm"
        :plugin="plugin"
      />
    </div>
  </q-page>
</template>

<script>
import PluginOutputCard from "components/PluginOutputCard.vue";

export default {
  name: "DashboardPage",
  components: { PluginOutputCard },
  data() {
    return {
      mediums: ["medium1", "medium2"],
      selectedMediumIndex: 0,
      plugins: [
        {
          name: "plugin1",
          chart: {
            type: "bar",
            data: {},
            isDataLoaded: false,
          },
        },
        {
          name: "plugin2",
          chart: {
            type: "line",
            data: {},
            isDataLoaded: false,
          },
        },
        {
          name: "plugin3",
          chart: {
            type: "doughnut",
            data: {},
            isDataLoaded: false,
          },
        },
        {
          name: "plugin4",
          chart: {
            type: "pie",
            data: {},
            isDataLoaded: false,
          },
        },
      ],
    };
  },

  methods: {
    onMediumDropdownClicked(e) {
      this.selectedMediumIndex = this.mediums.indexOf(e);
    },
  },
};
</script>
