<template>
  <q-layout view="hHh LpR fFf">
    <MainHeader />
    <q-drawer v-model="drawerLeft" bordered>
      <q-scroll-area class="fit">
        <q-list padding>
          <MediumItem title="medium1" caption="medium1 caption" />
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <q-page-sticky position="top-left" :offset="[18, 18]">
        <q-btn
          fab
          round
          dense
          :icon="drawerLeft ? 'keyboard_arrow_left' : 'keyboard_arrow_right'"
          @click="drawerLeft = !drawerLeft"
        >
        </q-btn>
      </q-page-sticky>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import MainHeader from "components/MainHeader.vue";
import MediumItem from "components/MediumItem.vue";

export default defineComponent({
  name: "MediumsLayout",

  components: {
    MainHeader,
    MediumItem,
  },

  setup() {
    // const isLoggedIn = ref(false);

    return {
      drawerLeft: ref(true),
    };
  },
});
</script>
