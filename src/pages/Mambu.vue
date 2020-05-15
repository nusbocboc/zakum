<template>
  <div id="app">
    <h1>Mambu</h1>

<div id="components-demo">
  <button @click="getID">Click</button>
</div>
    <input type="text" v-model="todoName" @keyup.enter="addTodo">
    <ul>
      <li v-for="todo of todos" :key="todo.id">
        {{todo.name}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

const baseURL = "http://localhost:3002"

export default {
  name: 'app',
  data() {
    return {
      todos: [],
      todoName: ''
    }
  },
  async created() {
    try {
      const res = await axios.get(baseURL)

      this.todos = res.data;
    } catch(e) {
      console.error(e)
    }
  },
  methods: {
    async getID() {
    var config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Basic VGVhbTY0OnBhc3MyNzgyOTU2Qzk="
      }
    }
    try {
      const res = await axios.get(baseURL + "/test");
      console.log(res)
    } catch(e) {
      console.error(e)
    }
  }
  }
}
</script>