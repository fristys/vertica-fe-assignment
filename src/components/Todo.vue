<template>
  <div class="todo">
    <!-- Item header -->
    <header>
      <!-- Checkbox -->
      <div class="checkbox-indicator"
            @click="toggle"
            :class="{ 'checked': value.done }"></div>
      
      <!-- Title -->
      <div class="title" :title="value.title">{{ value.title }}</div>

      <!-- Category -->
      <div class="category" :class="value.category">{{ value.category }}</div>
    </header>

    <!-- Item description -->
    <div class="description">
      {{ value.description }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { Todo } from '@/models/Todo';

export default Vue.extend({
  name: 'Todo',

  props: {
    value: Object as () => Todo
  },
 
  methods: {
    toggle() {
      this.$store.dispatch('updateTodo', { ...this.value, done: !this.value.done });
    }
  }
});
</script>

<style scoped lang="scss">
@import '../styles/variables';

.todo {
  width: 100%;
  box-shadow: 0 5px 10px rgba(0,0,0, .025);
  margin-bottom: 2rem;

  header {
    background: $lightGrey;
    height: 55px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 1.5rem;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    .checkbox-indicator {
      display: block;
      width: 1rem;
      height: 1rem;
      border: 2px solid $mediumGrey;
      border-radius: 50%;
      cursor: pointer;
      margin-right: 1rem;

      &:hover {
        background: $lightBlue;
        border-color: $lightBlue;
      }

      &.checked {
        background: $blue;
        border-color: $blue;

        &:hover {
          background: transparent;
          border-color: $mediumGrey;
        }
      }
    }

    .title {
      flex: 1;
      font-weight: bold;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .category {
      position: relative;
      padding-left: 2rem;
      color: $mediumGrey;

      &:before {
        display: block;
        position: absolute;
        top: .2rem;
        left: .5rem;
        content: '';
        width: .9rem;
        height: .9rem;
        border-radius: 50%;
        background: $mediumGrey;
      }

      &.work {
        &:before {
          background: $lightPink;
        }
      }

      &.home {
        &:before {
          background: $red;
        }
      }

      &.school {
        &:before {
          background: $lightBlue;
        }
      }

      &.misc {
        &:before {
          background: $brown;
        }
      }
    }
  }

  .description {
    padding: 1rem;
    padding-left: 3.5rem;
  }
}
</style>
