<template>
  <q-page class="flex flex-center" padding>
    <div class="full-width" style="max-width: 300px">
      <h5 class="q-my-md text-center">Sign up</h5>
      <q-card>
        <q-form>
          <q-card-section>
            <EmailInput />
            <PasswordInput />
            <q-checkbox label="Stay logged in" :model-value="true" />
          </q-card-section>
          <q-btn label="Sign up" class="full-width" color="primary"> </q-btn>
        </q-form>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import EmailInput from "components/EmailInput.vue";
import PasswordInput from "components/PasswordInput.vue";

export default defineComponent({
  name: "SignupPage",
  components: { EmailInput, PasswordInput },
});
</script>
