<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <div class="q-pa-md">
        <q-toolbar class="bg-primary text-white">
          <q-btn flat rounded to="/">
            <q-avatar square>
              <img
                alt="Agatha logo"
                src="~assets/agatha_logo_transparent.png"
              />
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
          <HeaderAuthDivision />
        </q-toolbar>
      </div>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import HeaderAuthDivision from "components/HeaderAuthDivision.vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    HeaderAuthDivision,
  },

  setup() {
    // const isLoggedIn = ref(false);

    return {
      // essentialLinks: linksList,
      // leftDrawerOpen,
      // toggleLeftDrawer() {
      // leftDrawerOpen.value = !leftDrawerOpen.value;
      // },
    };
  },
});
</script>
