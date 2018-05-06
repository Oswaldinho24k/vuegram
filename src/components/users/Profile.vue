<template>
  <div class="background">
    <div class="card">
      <div class="content">
        <img
          class="img"
          :src="user.image?user.image:'https://png.icons8.com/ios/1600/user-male-circle-filled.png'"
          alt=""
          >
        <div class="text">
          <h3>{{user.displayName}}</h3>
          <h5>{{user.email}}</h5>
          <p>Bio</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import firebase from 'firebase'
    export default {
        name: 'Profile',
        data() {
            return {
              user:{}
            }
        },
      beforeMount(){
          console.log(this.$route.params.uid)
        firebase.database().ref(`/users/${this.$route.params.uid}`).on('value', res=>{
          console.log(res.val())
          this.user=res.val()
        })


      },
      methods:{

      }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .background{
    width:100%;
    /*height: 100vh;*/
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card{
    border-radius: 5px;
    box-shadow: 0 1px 1px 1px rgba(0,0,0,.5);
    height: auto;
    width:50%;
  }
  .content{
    padding: 2%;
    width: 100%;
    display: flex;
  }
  .text{
    text-align: center;
    width: 50%;
  }
  .img{
    border-radius: 50%;
    width: 200px;
    height: 200px;
  }

</style>
