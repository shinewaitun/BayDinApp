<template>
  <div>
    <div id="answer">
      <div class="text-center result">{{ result }}</div>
    </div>
    <div id="retry-btn">
      <router-link :to="'/'">
        <button class="retry-btn btn btn-secondary">နောက်တစ်ခုထပ်မေးမယ်</button>
      </router-link>
    </div>
  </div>
</template>
  
  <script>
import axios from "axios";

export default {
  data() {
    return {
      question: this.$route.params.question,
      answer: this.$route.params.answer,
      result: "",
    };
  },
  created() {
    axios
      .get("/answers/" + this.question + "/" + this.answer)
      .then((res) => {
        console.log(res);
        this.result = res.data.answerResult;
        console.log(this.answer);
      })
      .catch((err) => console.log(err));
  },
};
</script>
  
  <style scoped>
#answer,#retry-btn {
  align-items: center;
  width: auto;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#answer.result {
  display: inline-block;
}
.retry-btn {
  display: inline-block;
}
</style>
  