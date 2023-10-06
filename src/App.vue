<template>
  <div>
    <app-header id="header"></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Questions from "./components/Homepage.vue";
import NumberChart from "./components/NumberChart.vue";

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-questions": Questions,
    "number-chart": NumberChart,
  },
  data() {
    return {};
  },
};
</script>

<style>
body {
  background-color: ivory;
}
#header {
  display: block;
  margin: auto;
}
app-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
