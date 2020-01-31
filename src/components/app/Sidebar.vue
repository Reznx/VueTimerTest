<template>
  <v-navigation-drawer v-model="value" app clipped>
    <v-list dense>
      <v-list-item link v-for="(link, ind) in links" :key="ind" :to="link.url">
        <v-list-item-action>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ link.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  data: () => ({
    links: [
      { url: "/", icon: "mdi-home", name: "Главная" },
      { url: "/east", icon: "mdi-home", name: "Западный таймер" },
      { url: "/west", icon: "mdi-contact-mail", name: "Восточный таймер" }
    ]
  })
};
</script>

<style></style>
