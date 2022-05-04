<template>
  <q-page class="flex flex-center" padding>
    <div class="full-width" style="max-width: 300px">
      <h5 class="q-my-md text-center">Login</h5>
      <q-card>
        <q-form>
          <q-card-section>
            <EmailInput />
            <PasswordInput />
            <q-checkbox label="Remember me" :model-value="true" />
          </q-card-section>
          <q-btn label="Login" class="full-width" color="primary"> </q-btn>
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
  name: "LoginPage",
  components: { EmailInput, PasswordInput },
});
</script>
