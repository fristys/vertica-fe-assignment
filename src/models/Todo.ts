export interface Todo {
  id?: string;
  title: string;
  description: string;
  done: boolean;
  category: 'work' | 'home' | 'school' | 'misc.'
}