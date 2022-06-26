<template>
  <q-page class="flex flex-center" padding>
    <div class="full-width" style="max-width: 300px">
      <h5 class="q-my-md text-center">Account</h5>
      <q-card>
        <q-form>
          <q-card-section>
            <EmailInput v-model="email" disable />
            <q-input v-model="firstName" label="First name" />
            <q-input v-model="lastName" label="Last name" />
            <PasswordInput v-model="password" />
            <PasswordInput
              v-model="passwordConfirmation"
              label="Repeat Password"
              :lazy-rules="false"
              :rules="[(val) => val == password || 'Must be same as password']"
            />
          </q-card-section>
          <q-btn
            label="Save"
            class="full-width"
            color="primary"
            type="submit"
          />
        </q-form>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import EmailInput from "components/EmailInput.vue";
import PasswordInput from "components/PasswordInput.vue";

export default defineComponent({
  name: "AccountPage",
  components: { EmailInput, PasswordInput },
  data() {
    return {
      email: ref("admin@gmail.com"),
      firstName: ref("John"),
      lastName: ref("Doe"),
      password: ref("password"),
      passwordConfirmation: ref("password"),
    };
  },
});
</script>
