<template>
  <div>
    <Navbar v-model="isOpen" />
    <Header @toggle="isOpen = !isOpen" />

    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="text-center">
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2020</span>
    </v-footer>
  </div>
</template>

<script>
import Header from "@/components/app/Header";
import Navbar from "@/components/app/Navbar";

export default {
  name: "main",
  props: {
    source: String
  },
  data: () => ({
    isOpen: false
  }),
  components: {
    Header,
    Navbar
  }
};
</script>

<style></style>
