<template>
  <q-btn-dropdown>
    <div class="row no-wrap q-pa-md">
      <div class="column">
        <div class="text-h6 q-mb-md">Actions</div>
        <q-list>
          <q-item v-ripple clickable to="/dashboard">
            <q-item-section avatar>
              <q-icon name="dashboard" />
            </q-item-section>
            <q-item-section>
              <q-item-label> Open dashboard </q-item-label>
            </q-item-section>
          </q-item>
          <q-item v-ripple clickable to="/mediums">
            <q-item-section avatar>
              <q-icon name="web" />
            </q-item-section>
            <q-item-section>
              <q-item-label> Manage mediums </q-item-label>
            </q-item-section>
          </q-item>
          <q-item v-ripple clickable to="/account">
            <q-item-section avatar>
              <q-icon name="manage_accounts" />
            </q-item-section>
            <q-item-section>
              <q-item-label> Manage account </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </div>

      <q-separator vertical inset class="q-mx-lg" />

      <div class="column items-center">
        <q-avatar size="xl" icon="account_circle">
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
          @click="onLogoutClicked"
        />
      </div>
    </div>
  </q-btn-dropdown>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";

export default {
  name: "AccountDropdown",
  props: {
    onLogout: { type: Function, required: true },
  },
  setup(props) {
    const $q = useQuasar();

    function onLogoutClicked() {
      $q.dialog({
        title: "Confirm",
        message: "Would you like to log out?",
        cancel: true,
      }).onOk(props.onLogout);
    }
    return {
      onLogoutClicked,
    };
  },
};
</script>
