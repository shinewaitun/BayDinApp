<template>
  <div class="grid-container">
    <div class="column" v-for="(number, index) in numbers" :key="index">
      <router-link
        :to="'/answers/' + questionNo + '/' + convertNumber(number)"
        id="link-text"
      >
        <button class="number-button">{{ number }}</button>
      </router-link>
    </div>
  </div>
</template>
  
  <script>
import axios from "axios";

export default {
  methods: {
    convertNumber(number) {
      let convertedValue;
      switch (number) {
        case "၁":
          return 1;
          break;
        case "၂":
          return 2;
          break;
        case "၃":
          return 3;
          break;
        case "၄":
          return 4;
          break;
        case "၅":
          return 5;
          break;
        case "၆":
          return 6;
          break;
        case "၇":
          return 7;
          break;
        case "၈":
          return 8;
          break;
        case "၉":
          return 9;
          break;
        case "၁၀":
          return 10;
          break;
      }
    },
  },
  data() {
    return {
      numbers: [],
      answerNo: "",
      questionNo: this.$route.params.question,
    };
  },
  created() {
    axios
      .get("/number_chart")
      .then((res) => {
        this.numbers = res.data;
      })
      .catch((err) => console.log(err));
  },
};
</script>
  
  <style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(8, auto);
  gap: 5px;
}

.column {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.number-button {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: burlywood;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
}

.number-button:hover {
  background-color: rgb(185, 153, 111);
}

#link-text {
  text-decoration: none;
}
</style>