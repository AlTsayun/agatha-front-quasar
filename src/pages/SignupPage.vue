<template>
  <q-page class="flex flex-center" padding>
    <div class="full-width" style="max-width: 300px">
      <h5 class="q-my-md text-center">Sign up</h5>
      <q-card>
        <q-form>
          <q-card-section>
            <EmailInput
              v-model="email"
              :rules="[
                (val) =>
                  !isEmailAlreadyRegistered(val) ||
                  'Account with that email is already registered',
              ]"
            />
            <q-input v-model="firstName" label="First name" />
            <q-input v-model="lastName" label="Last name" />
            <PasswordInput v-model="password" />
            <PasswordInput
              v-model="passwordConfirmation"
              label="Repeat Password"
              :lazy-rules="false"
              :rules="[(val) => val == password || 'Must be same as password']"
            />
            <q-checkbox label="Stay logged in" :model-value="true" />
          </q-card-section>
          <q-btn
            label="Sign up"
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
  name: "SignupPage",
  components: { EmailInput, PasswordInput },
  data() {
    return {
      email: ref("address@gmail.com"),
      firstName: ref("firstName"),
      lastName: ref("lastName"),
      password: ref("password"),
      passwordConfirmation: ref("password"),
    };
  },
  methods: {
    isEmailAlreadyRegistered(email) {
      return email == "admin@gmail.com";
    },
  },
});
</script>
