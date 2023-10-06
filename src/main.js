import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import VueRouter from "vue-router";
import Routes from "./routes/routes";

Vue.use(VueRouter);

const router = new VueRouter({ routes: Routes });

axios.defaults.baseURL = "http://localhost:3000";

new Vue({
  el: "#app",
  render: h => h(App),
  router: router
});
