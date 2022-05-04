<template>
  <q-btn-dropdown>
    <div class="row no-wrap q-pa-md">
      <div class="column">
        <div class="text-h6 q-mb-md">Actions</div>
        <q-list>
          <q-item v-ripple clickable to="/dashboard">
            <q-item-section avatar>
              <q-icon name="apps" />
            </q-item-section>
            <q-item-section>
              <q-item-label> Open dashboard </q-item-label>
            </q-item-section>
          </q-item>
          <q-item v-ripple clickable>
            <q-item-section avatar>
              <q-icon name="apps" />
            </q-item-section>
            <q-item-section>
              <q-item-label> Open dashboard </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </div>

      <q-separator vertical inset class="q-mx-lg" />

      <div class="column items-center">
        <q-avatar size="72px" icon="account_circle">
          <!-- <img src="https://cdn.quasar.dev/img/boy-avatar.png" /> -->
        </q-avatar>

        <div class="text-subtitle1 q-mt-md q-mb-xs">John Doe</div>

        <q-btn
          v-close-popup
          color="primary"
          label="Logout"
          push
          size="sm"
          icon="logout"
        />
      </div>
    </div>
  </q-btn-dropdown>
</template>

<script>
import { ref } from "vue";

export default {
  name: "AccountDropdown",
  setup() {
    return {
      mobileData: ref(false),
      bluetooth: ref(false),
    };
  },
};
</script>
