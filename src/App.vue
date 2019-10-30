<template>
  <div id="app">
    <Header @searchTriggered="updateSearchTerm" />
    <Todos :searchTerm="searchTerm" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Header from './components/Header.vue';
import Todos from './components/Todos.vue';

export default Vue.extend({
  name: 'app',

  components: {
    Header,
    Todos
  },

  data() {
    return {
      searchTerm: ''
    };
  },

  methods: {
    updateSearchTerm(term: string) {
      this.searchTerm = term;
    }
  }
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');

@import './styles/variables';

#app {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $darkGrey;

  margin: 1.5rem 1rem;
}
</style>
