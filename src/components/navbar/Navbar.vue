<template>
    <div>
      <ul class="navbar">
        <div v-if="!logged">
          <li><router-link to="/login">LogIn</router-link></li>
          <li>|</li>
          <li><router-link to="/signup">Register</router-link></li>
        </div>
        <div v-if="logged">
          <li><router-link :to="{ name: 'profile', params: { uid: user.uid }}">{{user.email}}</router-link></li>
          <li>|</li>
          <li v-on:click="logOut">LogOut</li>
        </div>
      </ul>
    </div>
</template>

<script>
  import firebase from 'firebase'
    export default {
      name: 'Navbar',
      props:['user', 'logged'],
      data() {
          return {

          }
      },
      methods:{
        logOut:function(){
          firebase.auth().signOut()
            .then(r=>{
              this.$router.push('/login')
            })
        }
      }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .navbar{
    border-bottom: 1px solid #2d3e4f;
    box-sizing: border-box;
    padding: 1% 3%;
    width: 100%;
    height: 50px;
  }
  .navbar div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .navbar li{
    list-style: none;
    cursor: pointer;
    color:#2d3e4f;
    margin-right: 5px;
  }
  .navbar a{
    text-decoration: none;
    color: #2d3e4f;
  }


</style>
