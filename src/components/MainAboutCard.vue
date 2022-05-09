<template>
  <q-card>
    <q-card-section>
      <div class="row">
        <q-list class="col-8 column items-stretch justify-between">
          <q-item class="flex flex-center">
            <q-item-label class="text-h4">
              Where your data flows?
            </q-item-label>
          </q-item>
          <q-item class="text-h5">
            Explore your web site from the use side. See where clients come
            from, what pages they do visit most and much more.
          </q-item>
          <q-item class="flex flex-center">
            <q-btn
              label="Learn more"
              no-caps
              color="primary"
              rounded
              size="xl"
              center
            />
          </q-item>
        </q-list>
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
