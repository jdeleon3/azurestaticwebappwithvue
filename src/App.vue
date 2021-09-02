<template>
  <div>
    <div>Hello {{ message }}</div>
    <input v-model="newName" type="text">
    <button @click="changeNameInMessage">Change Name</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: "App",
  data() {
    return {
      newName: null
    };
  },
  computed: {
    ...mapState(['message','name'])
  },
  methods: {
    ...mapActions(['loadGreetingMessage']),
    changeNameInMessage(){
      this.$store.commit('setName',this.newName);
      this.loadGreetingMessage();
    }
  },
  async mounted() {
    this.loadGreetingMessage();
  }
};
</script>
