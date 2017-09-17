import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
  },
  getters: {
    unfinishedTodos: state => state.todos.filter(todo => !todo.finished),
    finishedTodos: state => state.todos.filter(todo => todo.finished),
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    finishTodo(state, id) {
      this.state.todos.find(todo => todo.id === id).finished = true;
    },
  },
});
