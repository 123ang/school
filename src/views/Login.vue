<template>
 <div class="login container z-depth-1" style="background-color:white">
  <h2 
    class="center-align black-text" 
    style=" 
    font-weight: bold;
    text-decoration: underline;">
    登录
  </h2>
  
      <div class="field email mx-4">
        <label style="" for="email">邮箱:</label>
        <input type="email" id="email" v-model="email">
      </div>
      <div class="field password mx-4">
        <label style="font-weight:bold" for="password">密码:</label>
        <input type="password" id="password" v-model="password">
      </div>
     
      <div class="field center-align">
      <v-row>
        <v-col style="margin-bottom: 20px;">
          <button v-on:click.prevent="login(email,password)" class="btn1 btn-large btn-extended grey lighten-4 black-text"  type="submit">登录</button>
        </v-col>
        <v-col>
          <button v-on:click="register" class="btn1 btn-large btn-extended grey lighten-4 black-text" >注册</button>
        </v-col>
      </v-row>
      </div>
  
</div>
     
</template>

<script>
import store from "../store";
import router from "../router";
import firebase from "firebase";
export default {
  data() {
    return {
      email: null,
      password: null
    };
  },
  methods: {
    login: function(email, password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(
          firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              store.commit("IsLoggedIn", true);
              store.commit("Email", user.email);
              router.push("/home");
            } else {
               router.push("/");
            }
          })
        );

      event.preventDefault();
    },
      register: function(){
        this.$router.push("/Register");
      },
   
  }
};
</script>

<style>
label{
  font-weight:bold;
  color: black;
}
.btn1 {
  font-weight:bold;
}

.field {
    margin-left: 20%;
    margin-right: 20%;
    margin-top: 20px;
}

</style>