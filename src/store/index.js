import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const storeData = {
  state: {
    todos: [
      {id: 1, title: 'Viec 1', completed: true},
      {id: 2, title: 'Viec 2', completed: false},
      {id: 3, title: 'Viec 3', completed: true},
      {id: 3, title: 'Viec 4', completed: true},
    ],
    auth: {
      isAuthenticated: true
    }
  },
  getters: {
    doneTodos: state => state.todos.filter(todo => todo.completed),
    progress: (state, getters) => {
      const doneTodos = getters.doneTodos
      return Math.round(doneTodos.length / state.todos.length * 100)
    }
  }
}

const store = new Vuex.Store(storeData)

export default store