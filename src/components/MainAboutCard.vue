<template>
  <q-card>
    <q-card-section>
      <div class="row">
        <div class="col-8">
          <h4 class="text-h4 text-center">Where your data flows?</h4>
          <h2 class="text-h5">
            Explore your web site from the use side. See where clients come
            from, what pages they do visit most and much more.
          </h2>
          <div class="row">
            <div class="justify-center">
              <q-btn
                label="Learn more"
                no-caps
                color="primary"
                rounded
                size="xl"
                center
              >
              </q-btn>
            </div>
          </div>
        </div>
        <div class="col-4">
          <q-img
            alt="Agatha logo"
            src="~assets/agatha_labelled_logo_transparent.png"
            :fit="contain"
            style="max-width: 600px; max-height: 1000px"
          />
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "MainAboutCard",
  setup() {
    return {};
  },
};
</script>
