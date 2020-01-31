<template>
  <v-app id="inspire">
    <component :is="layout">
      <router-view />
    </component>
  </v-app>
</template>

<script>
import MainLayout from "@/layouts/MainLayout";
import EmptyLayout from "@/layouts/EmptyLayout";

export default {
  computed: {
    timer() {
      return this.$store.state.timer;
    },
    layout() {
      return (this.$route.meta.layout || "empty") + "-layout";
    }
  },
  mounted() {
    try {
      this.$store.dispatch("GET_TIMER_DATA");
    } catch (e) {
      throw e;
    }
  },
  components: {
    EmptyLayout,
    MainLayout
  }
};
</script>
