<template>
  <div class="about">
    <h1>This is an EastTimer page {{ eastTimer }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    eastTimer: {
      type: Object,
      required: true
    }
  },
  data: () => ({})
};
</script>
