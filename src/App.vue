<template>
  <div id="app">
    <h1>Todo app</h1>
    <hr>
    <TodoList
            v-bind:todos="todos"
            @remove-todo="removeTodo"
    />
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import TodoList from '@/components/TodoList.vue'
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
  components: {
    TodoList
    //HelloWorld
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(t => t.id != id);
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
