<template>

  <div class="navbar">
    <nav class="nav-extended">
      <div class="nav-content">
        <v-row>
          <v-col>
          <router-link :to="{ name: 'Home' }">
            <h1>学校</h1>
          </router-link>
          </v-col>
          <v-toolbar-title>
     
          <v-col>
          <v-btn       
            text
            large
            color="black"
            height="80"
            v-if="isLoggedIn"
            v-on:click="home"
          >主页</v-btn>

          <v-btn         
            text
            large
            color="black"
            height="80"
            v-if="!isLoggedIn"
            v-on:click="register"
          >注册</v-btn>

          <v-btn       
            text
            large
            color="black"
            height="80"
            v-if="!isLoggedIn"
            v-on:click="login"
          >登录</v-btn>
        
            <v-btn        
            text
            large
            color="black"
            height="80"
            v-if="isLoggedIn"
            v-on:click="logout"
          >退出</v-btn>
          </v-col>
          </v-toolbar-title>
        </v-row>
      </div>
    </nav>
  </div>

</template>


<script>
import store from "../store";
import firebase from "firebase";
export default {
  name: "Navbar",
  data() {
    return {
      
    };
  },

  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/");
        });
      store.commit("IsLoggedIn", false);
    },
    home: function() {
        this.$router.push("/home");
    },
    login: function() {
        this.$router.push("/");
    },
    register: function() {
        this.$router.push("/register");
    },
   
  },
  computed: {
    UserEmail() {
      return this.$store.state.Email;
    },
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
  }
};
</script>

<style>
.btn {
  font-weight:bold;
}
</style>