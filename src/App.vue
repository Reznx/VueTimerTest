<template>
  <v-app id="inspire">
    <component :is="layout">
      <router-view :loading="loading" />
    </component>
  </v-app>
</template>

<script>
import MainLayout from "@/layouts/MainLayout";
import EmptyLayout from "@/layouts/EmptyLayout";

export default {
  data: () => ({
    loading: false
  }),
  computed: {
    layout() {
      return (this.$route.meta.layout || "empty") + "-layout";
    }
  },
  async mounted() {
    try {
      this.loading = true;
      await this.$store.dispatch("GET_TIMER_DATA");
      this.loading = false;
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
