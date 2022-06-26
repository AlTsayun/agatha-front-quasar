<template>
  <q-page class="flex flex-center q-pa-lg">
    <div class="full-width" style="max-width: 1400px">
      <MainAboutCard />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import MainAboutCard from "components/MainAboutCard.vue";

export default defineComponent({
  name: "IndexPage",
  components: { MainAboutCard },
});
</script>
