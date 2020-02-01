<template>
  <div>
    <Navbar v-model="isOpen" />
    <Sidebar @toggle="isOpen = !isOpen" />

    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="text-center">
            <router-view :eastTimer="eastTimer" />
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
import { mapState } from "vuex";
import Sidebar from "@/components/app/Sidebar";
import Navbar from "@/components/app/Navbar";

export default {
  name: "main",
  props: {
    loading: {
      type: Boolean
    }
  },
  data: () => ({
    isOpen: false,
    currentTime: 5,
    interval: null,
    eastTimer: {},
    westTimer: {}
  }),
  methods: {
    getTime() {
      let [first, second] = this.timer;
      (this.eastTimer = first), (this.westTimer = second);
    },
    startTimer() {
      this.interval = setInterval(() => {
        this.currentTime--;
      }, 1000);
    }
  },
  computed: {
    ...mapState({
      timer: state => state.timer.timers
    })
  },
  watch: {
    currentTime(value) {
      if (value === 0) {
        this.stopTimer();
      }
    }
  },
  mounted() {
    this.startTimer();
  },
  created() {
    this.getTime();
  },
  destroyed() {
    clearTimeout(this.interval);
  },
  components: {
    Sidebar,
    Navbar
  }
};
</script>
