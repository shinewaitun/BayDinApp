<template>
  <div class="container">
    <input id="search" type="text" placeholder="ရှာရန်..." v-model="search" />
    <ul>
      <li v-for="(question, index) in (!search ? paginatedQuestions : filterQuestions)" :key="index">
        <router-link :to="'/' + question.questionNo" id="link-text">
          {{ question.questionName }}
        </router-link>
      </li>
    </ul>
    <div class="pagination">
      <span v-if="!search">
        <span v-if="currentPage <= 3 && currentPage >= 1">
        <button @click="previousPage" :disabled="currentPage == 1">Previous</button>
        <button @click="currentPage = 1" :class="currentPage == 1 ? 'btn btn-primary' : ''">1</button>
        <button @click="currentPage = 2" :class="currentPage == 2 ? 'btn btn-primary' : ''">2</button>
        <button @click="currentPage = 3" :class="currentPage == 3 ? 'btn btn-primary' : ''">3</button>
        <button @click="currentPage = 4">4</button>
        <button>.....</button>
        <button @click="currentPage = totalPages-2">{{ totalPages-2 }}</button>
        <button @click="currentPage = totalPages-1">{{ totalPages-1 }}</button>
        <button @click="currentPage = totalPages">{{ totalPages }}</button>
        <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
      </span>
      <span v-if="currentPage <= totalPages && currentPage > totalPages - 3">
        <button @click="previousPage" :disabled="currentPage == 1">Previous</button>
        <button @click="currentPage = 1">1</button>
        <button @click="currentPage = 2">2</button>
        <button @click="currentPage = 3">3</button>
        <button>.....</button>
        <button @click="currentPage = totalPages-3" :class="currentPage == totalPages-3 ? 'btn btn-primary' : ''">{{ totalPages-3 }}</button>
        <button @click="currentPage = totalPages-2" :class="currentPage == totalPages-2 ? 'btn btn-primary' : ''">{{ totalPages-2 }}</button>
        <button @click="currentPage = totalPages-1" :class="currentPage == totalPages-1 ? 'btn btn-primary' : ''">{{ totalPages-1 }}</button>
        <button @click="currentPage = totalPages" :class="currentPage == totalPages ? 'btn btn-primary' : ''">{{ totalPages }}</button>
        <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
      </span>
      <span v-if="(currentPage > 3 && currentPage <= totalPages-3)">
        <button @click="previousPage" :disabled="currentPage === 1">Previous</button>
        <button @click="currentPage = 1">1</button>
        <button>.....</button>
        <button @click="currentPage = currentPage-2">{{ currentPage-2 }}</button>
        <button @click="currentPage = currentPage-1">{{ currentPage-1 }}</button>
        <button :class="currentPage? 'btn btn-primary' : ''">{{ currentPage }}</button>
        <button @click="currentPage = currentPage+1">{{ currentPage+1 }}</button>
        <button @click="currentPage = currentPage+2">{{ currentPage+2 }}</button>
        <button>.....</button>
        <button @click="currentPage = totalPages">{{ totalPages }}</button>
        <button @click="nextPage" :disabled="currentPage == totalPages">Next</button>
      </span>
      </span>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      questions: [],
      search: "",
      currentPage: 1,
      itemsPerPage: 5,
    };
  },
  created() {
    axios
      .get("/")
      .then((res) => {
        this.questions = res.data;
      })
      .catch((err) => console.log(err));
  },
  computed: {
    filterQuestions: function () {
      return this.questions.filter((question) => {
        return question.questionName.match(this.search);
      });
    },
    paginatedQuestions: function () {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.questions.slice(startIndex, endIndex);
    },
    totalPages: function () {
      return Math.ceil(this.questions.length / this.itemsPerPage);
    },
  },
  methods: {
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
  },
};
</script>

<style scoped>
#search {
  width: 99%;
  height: 5vh;
  margin: 5px;
  border: 1px solid black;
  border-radius: 5px;
}
ul {
  list-style: none;
}

li {
  background-color: aliceblue;
  border: 1px solid black;
  border-radius: 5px;
  padding: 15px;
  margin: 1px;
  transition: transform 0.2s ease-in-out;
}

li:hover {
  text-decoration: none;
  cursor: pointer;
  transform: scale(1.03);
}

#link-text {
  text-decoration: none;
  color: black;
}

.pagination {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pagination button {
  padding: 5px 10px;
  margin: 0 5px;
  border: 1px solid #ccc;
  cursor: pointer;
}

.pagination button:disabled {
  cursor: not-allowed;
}
</style>
