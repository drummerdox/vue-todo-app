<template>
    <div>
        <h2>Todo app</h2>
        <router-link to="/">Home</router-link>
        <AddTodo @add-todo="addTodo"/>
        <hr>
        <select v-model="filter">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="not-completed">Not-completed</option>
        </select>
        <Loader v-if="loading"></Loader>
        <TodoList
                v-else-if="filteredTodos.length"
                v-bind:todos="filteredTodos"
                @remove-todo="removeTodo"
        />
        <p v-else>No todos</p>
        <!--<img alt="Vue logo" src="./assets/logo.png">-->
        <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    </div>
</template>

<script>
    //import HelloWorld from './components/HelloWorld.vue'
    import TodoList from '@/components/TodoList.vue'
    import AddTodo from '@/components/AddTodo'
    import Loader from '@/components/Loader'

    export default {
        name: 'Todos',
        data() {
            return {
                todos: [],
                loading: true,
                filter: 'all',
            }
        },
        mounted() {
            fetch('https://jsonplaceholder.typicode.com/todos')
                .then(response => response.json())
                .then(json => {
                    setTimeout(() => {
                        this.todos = json;
                        this.loading = false
                }, 1000)
                // .then(json => {
                //     this.todos = json;
                //     this.loading = false
                 })
        },
        components: {
            TodoList,
            AddTodo,
            Loader
            //HelloWorld
        },
        methods: {
            removeTodo(id) {
                this.todos = this.todos.filter(t => t.id != id);
            },
            addTodo(todo){
                this.todos.push(todo);
            }
        },
        // watch: {
        //     filter(value) {
        //
        //     }
        // }
        computed: {
            filteredTodos() {
                if (this.filter === 'all') {
                    return this.todos;
                }

                if (this.filter === 'completed') {
                    return this.todos.filter(t => t.completed === true);
                }

                if (this.filter === 'not-completed') {
                    return this.todos.filter(t => t.completed === false);

                }
            }
        }
    }
</script>

<style scoped>

</style>