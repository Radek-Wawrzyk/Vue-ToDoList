import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    notes: [
      {
        id: 0,
        title: "Buy new Macbook Pro",
        description: "It is a joke, i don't wanna buy this shit! Only WIndows",
        time: new Date(Date.now()).toLocaleString()
      },
    ],
    counterId: 1,
    editModal: false
  },
  getters: {
    notes: state => {
      return state.notes;
    }
  },
  mutations: {
    addNote: (state, note) => {
      state.notes.push({
        id: state.counterId++,
        title: note.title,
        description: note.description,
        time: new Date(Date.now()).toLocaleString()
      })
    },
    editNote: (state, note) => {
     
    },
    removeNote: (state, id) => {
      let array = state.notes;
      array.forEach((note, index) => {
        if (note.id === id) {
          array.splice(index,1);
        }
      });
    }
  }
});