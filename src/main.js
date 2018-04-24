// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false;

//Firebase conf
const config = {
  apiKey: "AIzaSyDKffDj1yNE5ZMGeESjosOFfnc47qGFl6I",
  authDomain: "fir-firebase-b64eb.firebaseapp.com",
  databaseURL: "https://fir-firebase-b64eb.firebaseio.com",
  projectId: "fir-firebase-b64eb",
  storageBucket: "fir-firebase-b64eb.appspot.com",
  messagingSenderId: "856341620154"
};
firebase.initializeApp(config);

//Router checking if user

// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
//   if(requiresAuth) {
//     next('/login');
//   } else {
//     next();
//   }
// });

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !currentUser) {
    next('/login');
    console.log(currentUser)
  } else if (requiresAuth && currentUser) {
    next();
    console.log(currentUser)
  } else {
    next();
    console.log(currentUser)
  }
});


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
