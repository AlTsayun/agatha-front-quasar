<template>
  <DrawerScrollAreaLayout>
    <template #drawerScrollArea>
      <q-list padding>
        <TitleCaptionLinkItem
          title="example.com"
          caption="Medium example"
          link="/mediums/1"
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
