<template>
  <div id="app">
    <h1>Todo app</h1>
    <hr>
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <router-view/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import TodoList from '@/components/TodoList.vue'
import AddTodo from '@/components/AddTodo'

export default {
  name: 'App',
  data() {
    return {
      todos: [
        {id: 1, title: 'Купить хлеб', completed: false},
        {id: 2, title: 'Купить молоко', completed: false},
        {id: 3, title: 'Купить яйца', completed: false},
      ]
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
            .then(response => response.json())
            .then(json => this.todos = json)
  },
  components: {
    TodoList,
    AddTodo
    //HelloWorld
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(t => t.id != id);
    },
    addTodo(todo){
      this.todos.push(todo);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
