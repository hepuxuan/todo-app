<template>
  <div>
    <h3>{{todo.title}}</h3>
    <p>{{todo.description}}</p>
    <p v-if="!todo.description">No description</p>
    <button v-if="!todo.finished" v-on:click="finishTodo">Done</button>
  </div>
</template>

<script>
export default {
  name: 'todo-item',
  props: ['todo'],
  methods: {
    finishTodo() {
      this.$store.commit('finishTodo', this.todo.id);
    },
  },
};
</script>

<style scoped>

</style>
