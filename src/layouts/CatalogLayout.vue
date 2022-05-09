<template>
  <DrawerScrollAreaLayout>
    <template #drawerScrollArea>
      <q-list padding>
        <TitleCaptionLinkItem
          title="Plugins"
          caption="Discover available plugins"
          link="/catalog/plugins"
        />
        <TitleCaptionLinkItem
          title="Sensors"
          caption="Learn more about provided sensors"
          link="/catalog/sensors"
        />
      </q-list>
    </template>
  </DrawerScrollAreaLayout>
</template>

<script>
import { defineComponent, ref } from "vue";
import TitleCaptionLinkItem from "src/components/TitleCaptionLinkItem.vue";
import DrawerScrollAreaLayout from "src/layouts/DrawerScrollAreaLayout.vue";

export default defineComponent({
  name: "MediumsLayout",

  components: {
    DrawerScrollAreaLayout,
    TitleCaptionLinkItem,
  },

  setup() {
    return {
      drawerLeft: ref(true),
    };
  },
});
</script>
