
<template>
    <div>
      <div v-for="e in errors">{{e}}</div>
      <h1>Registration</h1>
      <form action="" v-on:submit="signUp">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="user.email"><br>
        <label for="pass">Password</label>
        <input type="password" id="pass" v-model="user.password"><br>
        <label for="pass2">Repit Password</label>
        <input type="password" id="pass2" v-model="user.password2"><br>
        <button type="submit">SignUp</button>
      </form>
    </div>

</template>

<script>
  import firebase from 'firebase'
    export default {
        name: 'Registration',
        data() {
            return {
              user:{
                email:'',
                password:'',
                password2:''
              },
              errors:[],
            }
        },

      methods:{
          saveUser:function(user){
            firebase.database().ref(`/users/${user.uid}`).set(user)
              .then(r=>{
                console.log(r)

              })
              .catch(e=>{console.log(e)})
          },

          signUp:function(e){
            e.preventDefault();
            this.errors=[];
            if(this.password!==this.password2){
              this.errors.push('No coinciden las contraseñas')
            }else{
              firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password)
                .then(r=>{
                  console.log(r);
                  let user = {
                    uid:r.uid,
                    email:r.email,
                    displayName:r.displayName,
                    image:r.photoURL
                  };
                  this.saveUser(user);
                  this.$router.push(`/profile/${r.uid}`)
                }).catch(e=>{
                console.log(e);
                this.errors.push(e.message)
              })
            }


          }
      }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
