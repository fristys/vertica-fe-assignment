<template>
  <header>
    <!-- App logo -->
    <div class="logo">
      <img src="/assets/logo.svg" alt="Todo list" />
    </div>

    <!-- Search input/form -->
    <div class="search-form">
      <input
        type="search"
        name="todo-search"
        id="todo-search"
        placeholder="search task"
        v-model="searchTerm"
        @input="search" />
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Header',

  data() {
    return {
      searchTerm: ''
    };
  },

  methods: {
    search() {
      this.$emit('searchTriggered', this.searchTerm);
    }
  }
});
</script>

<style scoped lang="scss">
@import '../styles/variables';

header {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-bottom: 2rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  .logo {
    flex: 1;
    margin-bottom: .5rem;
    
    @media screen and (min-width: 768px) {
      margin-bottom: 0;
    }
  }

  .search-form {
    input {
      border-radius: 5px;
      padding: 1rem 1.5rem;
      border: 1px solid $lightGrey;
    }
  }
}
</style>
