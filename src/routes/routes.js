import Homepage from "../components/Homepage.vue";
import NumberChart from "../components/NumberChart.vue";
import AnswerPage from "../components/AnswerPage.vue";

export default [
  { path: "/", component: Homepage },
  { path: "/:question", component: NumberChart },
  { path: "/answers/:question/:answer", component: AnswerPage }
];
