<template>
  <q-header elevated>
    <div class="q-pa-md">
      <q-toolbar class="bg-primary text-white">
        <q-btn flat rounded to="/">
          <q-avatar square>
            <img alt="Agatha logo" src="~assets/agatha_logo_transparent.png" />
          </q-avatar>
        </q-btn>
        <q-toolbar-title>Agatha Web Data</q-toolbar-title>

        <!-- <q-btn flat round dense>
            <q-avatar>
              <img
                src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
              />
            </q-avatar>
          </q-btn> -->

        <q-btn flat label="Catalog" rounded to="/catalog" />
        <HeaderAuthDivision />
      </q-toolbar>
    </div>
  </q-header>
</template>

<script>
import { defineComponent } from "vue";
import HeaderAuthDivision from "components/HeaderAuthDivision.vue";

export default defineComponent({
  name: "MainHeader",

  components: {
    HeaderAuthDivision,
  },

  setup() {
    return {};
  },
});
</script>
