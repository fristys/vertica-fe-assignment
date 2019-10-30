<template>
  <form @submit="addTodo" novalidate="true">
    <div class="form-contain">
      <!-- Title -->
      <div class="form-control">
        <label for="title">Title</label>

        <input type="text" name="title" id="title"
              placeholder="Title..."
              v-model="todo.title" />
      </div>

      <!-- Description -->
      <div class="form-control">
        <label for="description">Description</label>
        
        <textarea name="description" id="description" cols="30" rows="10"
                  placeholder="Description..."
                  v-model="todo.description"></textarea>
      </div>

      <!-- Category -->
      <div class="form-control">
        <label for="category">Category</label>
        
        <select name="category" id="category" v-model="todo.category">
          <option v-for="category in categories"
                  :key="category"
                  :value="category">
            {{ category | capitalize }}
          </option>
        </select>
      </div>

      <div class="form-control actions">
        <input type="submit" value="Add">
        <button class="cancel" @click="cancel">Cancel</button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import Vue from 'vue';
import { Todo } from '@/models/Todo';

export default Vue.extend({
  name: 'Todo',

  data() {
    return {
      categories: ['work', 'home', 'school', 'misc.'],

      todo: {
        title: '',
        description: '',
        done: false,
        category: 'home'
      }
    }
  },

  computed: {
    formValid(): boolean {
      return !!this.todo.title;
    }
  },
 
  methods: {
    addTodo(e: Event) {
      if (e) e.preventDefault();
      if (!this.formValid) return;

      this.$store.dispatch('addNewTodo', this.todo);
      this.$emit('close');
    },

    cancel(e: Event) {
      if (e) e.preventDefault();

      this.$emit('close');
    }
  },

  filters: {
    capitalize: (value: string) => {
      if (!value || typeof value !== 'string') return '';
      
      return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
    }
  }
});
</script>

<style scoped lang="scss">
@import '../styles/variables';

form {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0, .15);

  .form-contain {
    background: #FFF;
    padding: 2rem;
    border-radius: 5px;
  }

  .form-control {
    margin-bottom: .5rem;

    &:last-child {
      margin-bottom: 0;
    }

    &.actions {
      margin-top: 2rem;
    }

    label {
      color: $mediumGrey;
      display: block;
      margin-bottom: .5rem;
    }

    input[type="text"] {
      padding: .5rem;
    }

    input[type="submit"], .cancel {
      background: $blue;
      color: #FFF;
      border: 0;
      padding: .5rem 1rem;
      border-radius: 5px;
    }

    .cancel {
      background: $mediumGrey;
      margin-left: 1rem;
    }
  }
}
</style>
