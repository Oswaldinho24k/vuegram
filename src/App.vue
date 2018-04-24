<template>
  <div id="app">
    <navbar :user="user" :logged="logged"></navbar>
    <router-view :user="user"/>
  </div>
</template>

<script>
import Navbar from "./components/navbar/Navbar.vue";
import firebase from 'firebase'
export default {
  components: {Navbar},
  data(){
    return{
      user:{},
      logged:false
    }
  },
  name: 'App',
  beforeMount(){
    firebase.auth().onAuthStateChanged(user=>{
      if(user){
        this.user=user;
        this.logged=true;
      }else{
        this.logged=false;

      }
    })

  }
}
</script>

<style>
#app {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
