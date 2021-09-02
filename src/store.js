import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

 export const store = new Vuex.Store({
  state: {
    message: "",
    name: "World"
  },
  mutations: {
    setMessage (state, message) {
      state.message = message;
    },
    setName (state, name){
        state.name = name;
    }
  },
  actions: {
      loadGreetingMessage (context){
        axios.get("/api/message?name=" + this.state.name).then(response => {
          console.log(response.data);
          context.commit("setMessage", response.data.text);
        });
        
      }
  }
});