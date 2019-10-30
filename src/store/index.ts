import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

import { Todo } from '@/models/Todo';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence<{ todos: Todo[] }>({
  storage: window.localStorage
});

export default new Vuex.Store({
  plugins: [
    vuexLocal.plugin
  ],

  state: {
    todos: [] as Todo[]
  },

  mutations: {
    addTodo(state, newTodo: Todo) {
      if (!newTodo.id) newTodo.id = `vfea-${new Date().getTime()}`;

      state.todos = [
        ...state.todos,
        newTodo
      ];
    },

    setTodo(state, updatedTodo: Todo) {
      const todoIndex = state.todos.map(todo => todo.id).indexOf(updatedTodo.id);

      let newState = [...state.todos];

      newState.splice(todoIndex, 1, updatedTodo);

      state.todos = newState;
    }
  },

  actions: {
    addNewTodo({ commit }, todo) {
      commit('addTodo', todo);
    },

    updateTodo({ commit }, todo) {
      commit('setTodo', todo);
    }
  }
});
