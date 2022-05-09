<template>
  <q-layout view="hHh LpR fFf">
    <MainHeader />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import MainHeader from "components/MainHeader.vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    MainHeader,
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
