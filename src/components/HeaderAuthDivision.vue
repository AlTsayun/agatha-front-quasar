<template>
  <div v-if="isLoggedIn">
    <!-- <q-btn flat round>
      <q-avatar v-if="false" color="secondary">
        <q-img> </q-img>
      </q-avatar>
      <q-avatar v-else icon="face" />
    </q-btn> -->
    <AccountDropdown flat unelevated rounded no-icon-animation icon="face" />
  </div>
  <div v-else>
    <q-btn-group flat rounded>
      <q-btn flat rounded label="Log in" to="/login" icon="login" />
      <q-btn flat rounded label="Sign up" to="/signup" icon="account_circle" />
    </q-btn-group>
    <!-- <q-btn flat label="Log out" icon="logout" /> -->
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import AccountDropdown from "components/AccountDropdown.vue";

export default defineComponent({
  name: "HeaderAuthDivision",
  components: {
    AccountDropdown,
  },
  setup() {
    const isLoggedIn = ref(false);
    return {
      isLoggedIn,
    };
  },
});
</script>
