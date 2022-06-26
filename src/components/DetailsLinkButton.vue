<template>
  <q-btn
    v-if="link.isExternal"
    flat
    :label="minimal ? '' : actionText"
    color="primary"
    :href="link.path"
    target="_blank"
    icon-right="launch"
  >
    <q-tooltip v-if="minimal"> {{ actionText }} </q-tooltip>
    <slot />
  </q-btn>
  <q-btn
    v-else
    flat
    color="primary"
    :label="minimal ? '' : actionText"
    icon-right="call_made"
    :to="link.path"
  >
    <q-tooltip v-if="minimal"> {{ actionText }} </q-tooltip>
    <slot />
  </q-btn>
</template>

<script>
export default {
  name: "DetailsLinkButton",
  props: {
    link: { type: Object, required: true },
    minimal: { type: Boolean, default: false },
  },
  setup(props) {
    let actionText;
    if (props.link.isExternal) {
      actionText = "Visit page";
    } else {
      actionText = "Open details";
    }
    return { actionText };
  },
};
</script>
