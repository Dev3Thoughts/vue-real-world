import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // state
  state: {
    user: {
      id: 'abc1234',
      name: 'Bobby Jones'
    },
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ]
  },
  todos: [
    {
      id: 1,
      text: '...',
      done: true
    },
    {
      id: 2,
      text: '...',
      done: false
    },
    {
      id: 3,
      text: '...',
      done: true
    },
    {
      id: 4,
      text: '...',
      done: false
    }
  ],
  mutations: {},
  actions: {},
  getters: {
    catLength: state => {
      return state.categories.length
    },
    doneTodo: state => {
      return state.todos.filter(todo => todo.done)
    },
    activeTodosCount: state => {
      return state.todos.filter(todo => !todo.done).length
    }
  }
})
