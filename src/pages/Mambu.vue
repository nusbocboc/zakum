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

const baseURL = "https://razerhackathon.sandbox.mambu.com/api/settings/iddocumenttemplates"

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
      const res = await axios.get(baseURL, {
        auth: {
          username: 'Team64',
          password: 'pass2782956C9' 
        },
        headers: {
          key: "Content-Type",
					value: "application/json",
					type: "text"
        }, data
      }).then(function(response) {
        console.log('Authenticated');
      }).catch(function(error) {
        console.log('Error');
      });
    }
  }
      
      // this.todos = [...this.todos, res.data]

      // this.todoName = ''
  //   }
  // }
}
</script>