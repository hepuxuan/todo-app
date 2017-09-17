<template>
  <div id="todo-app">
    <h1>Todo App</h1>
    <div class="todo-wrapper">
      <div class="todo-form">
        <h2>Add new todo</h2>
        <form v-on:submit="addTodo">
          <div class="form-item">
            <label>
              title:
              <input v-model="newTodo.title">
            </label>
            <label>
              description:
              <input v-model="newTodo.description">
            </label>
          </div>
          <div class="form-item">
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
      <div class="todo-list">
        <h2>Todo list:</h2>
        <p v-if="!unfinishedTodos.length">No Item yet</p>
        <ol>
          <li v-for="todo in unfinishedTodos">
            <todo-item :todo="todo"></todo-item>
          </li>
        </ol>
        <h2>Finished list:</h2>
        <p v-if="!finishedTodos.length">No Item yet</p>
        <ol>
          <li v-for="todo in finishedTodos">
            <todo-item :todo="todo"></todo-item>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
import uuid from 'uuid/v4';
import TodoItem from './TodoItem';

export default {
  name: 'todo',
  components: { TodoItem },
  data() {
    return {
      newTodo: {
        title: '',
        description: '',
        finished: false,
      },
    };
  },
  computed: {
    unfinishedTodos() {
      return this.$store.getters.unfinishedTodos;
    },
    finishedTodos() {
      return this.$store.getters.finishedTodos;
    },
  },
  methods: {
    addTodo(e) {
      e.preventDefault();
      const newTodo = {
        ...this.newTodo,
        id: uuid(),
      };
      this.$store.commit('addTodo', newTodo);
      this.newTodo = {
        title: '',
        description: '',
        finished: false,
      };
    },
  },
};
</script>

<style scoped>
h1 {
  border-bottom: solid 1px #dedede;
}
.todo-wrapper {
  display: flex;
}
.todo-wrapper > div {
  flex-grow: 1;
}
.todo-form {
  max-width: 400px;
  padding-right: 24px;
  border-right: solid 1px #dedede;
}
.todo-list {
  padding-left: 24px;
}
li:not(:last-child) {
  padding-bottom: 24px;
  border-bottom: solid 1px #dedede;
}
#todo-app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 960px;
  margin: auto;
}
.form-item {
  margin-bottom: 12px;
}
</style>
