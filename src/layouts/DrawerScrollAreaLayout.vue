<template>
  <q-layout view="hHh LpR fFf">
    <MainHeader />
    <q-drawer v-model="drawerLeft" bordered>
      <q-scroll-area class="fit">
        <slot name="drawerScrollArea"></slot>
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

export default defineComponent({
  name: "DrawerScrollAreaLayout",

  components: {
    MainHeader,
  },

  setup() {
    return {
      drawerLeft: ref(true),
    };
  },
});
</script>
