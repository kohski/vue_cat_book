<template>
  <div class="access">
    <h1>Access</h1>
    <input type="text" v-model="message">
    <p>{{ message }}</p>
    <button @click="countUp">count up</button>
    <p>{{ counter }}</p>
    <ul>
      <li v-for="todo in todos" v-bind:key="todo.id">
        <p>{{ todo.title }}</p>
        <p>
          <span>{{ todo.userId }}</span> =>
          <span>{{ todo.id }}</span>
        </p>
        <hr>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data: function(){
    return {
      message:"timtim",
      counter: 0,
      todos:[]
    }
  },
  created: function(){
    axios.get('https://jsonplaceholder.typicode.com/todos').then(res => {
      this.todos = res.data
    })
  },
  methods: {
    countUp(){
      this.counter++
    }
  }
}
</script>

<style>
  .access{
    background-color: #FFaacc;
  }
  li{
    list-style: none;
  }
</style>
