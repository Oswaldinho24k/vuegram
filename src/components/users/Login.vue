<template>
    <div>
      <div v-for="e in errors">{{e}}</div>
      <h1>LogIn</h1>
      <h4>Social LogIn</h4>
      <button v-on:click="wGoogle">Google</button>
      <button v-on:click="wGithub">Github</button>
      <button v-on:click="wFacebook">Facebook</button>
      <h4>Traditional LogIn</h4>
      <form action="" v-on:submit="logIn">
        <label for="email">E-mail</label>
        <input type="email" id="email" v-model="user.email"><br>
        <label for="password">Password</label>
        <input type="password" id="password" v-model="user.password"><br>
        <button type="submit">LogIn</button>
      </form>
    </div>

</template>

<script>
  import firebase from 'firebase'
    export default {
        name: 'Login',
        data() {
            return {
              user:{
                email:'',
                password:''
              },
              errors:[],
            }
        },
      methods:{
        saveUser:function(r){
          let user = {
            uid:r.user.uid,
            email:r.user.email,
            displayName:r.user.displayName,
            image:r.user.photoURL
          };
          firebase.database().ref(`/users/${user.uid}`).set(user)
            .then(r=>{
              console.log(r)

            })
            .catch(e=>{console.log(e)})
        },
        wGoogle:function(){
          const provider = new firebase.auth.GoogleAuthProvider();
          firebase.auth().signInWithPopup(provider).then((r) =>{
            this.saveUser(r);
            this.$router.push(`/profile/${r.user.uid}`)
          }).catch(e=>{
            this.errors.push(e.message)
          })
        },
        wFacebook:function(){
          const provider = new firebase.auth.FacebookAuthProvider();
          firebase.auth().signInWithPopup(provider).then((r) =>{
            this.saveUser(r);
            this.$router.push(`/profile/${r.user.uid}`)
          }).catch(e=>{
            this.errors.push(e.message)
          })
        },
        wGithub:function(){
          const provider = new firebase.auth.GithubAuthProvider();
          firebase.auth().signInWithPopup(provider).then((r) =>{
            this.saveUser(r);
            this.$router.push(`/profile/${r.user.uid}`)
          }).catch(e=>{
            this.errors.push(e.message)
          })
        },
        logIn:function(e){
          this.errors=[];
          e.preventDefault()
          firebase.auth().signInWithEmailAndPassword(this.user.email, this.user.password)
            .then(r=>{
              console.log(r)
              this.$router.push(`/profile/${r.uid}`)
            }).catch(e=>{
              console.log(e)
            this.errors.push(e.message)
          })
        }
      }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
