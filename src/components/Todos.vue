<template>
  <div>
    <!-- Todos -->
    <Todo v-for="todo of todos" :key="todo.id" :value="todo" />

    <!-- Add button -->
    <div class="add-button" v-if="!formOpen">
      <button class="add" @click="formOpen = true">+</button>
    </div>

    <!-- Add form -->
    <AddForm v-else @close="formOpen = false" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

import Todo from './Todo.vue';
import AddForm from './AddForm.vue';

export default Vue.extend({
  name: 'Todos',

  props: {
    searchTerm: String
  },

  components: {
    Todo,
    AddForm
  },

  data() {
    return {
      formOpen: false
    };
  },

  computed: {
    ...mapState({
      todos(state: any) {
        if (!this.searchTerm || !this.searchTerm.length) return state.todos;

        return state.todos.filter((todo: any) => todo.title.toLowerCase().indexOf(this.searchTerm) !== -1);
      }
    })
  },
});
</script>

<style scoped lang="scss">
@import '../styles/variables';

.add-button {
  position: fixed;
  bottom: .5rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
}

button {
  cursor: pointer;
  border: 0;
  background: $blue;
  color: #FFF;
  font-size: 2.5rem;
  text-align: center;
  padding: 0;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
}
</style>
