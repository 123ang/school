<template>

  <div class="register container z-depth-1" style="background-color:white">
    <h2 
    class="center-align black-text" 
    style=" 
    font-weight: bold;
    text-decoration: underline;">
    注册
    </h2>
    <form>
     
      <div class="field email">
        <label for="email">邮箱:</label>
        <input
          type="email"
          id="email"
          v-model="email"
        >
      </div>
      <div class="field password"> 
        <label for="password">密码:</label>
        <input
          type="password"
          id="password"
          v-model="password"
        >
      </div>
      <div class="field center-align">
        <button
          v-on:click.prevent="register()"
          class="btn btn-large btn-extended grey lighten-4 black-text"
        >Register</button>
      </div>
    </form>
  </div>

</template>

<script>

import firebase from "firebase";
export default {
  name: "register",
  data: function() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    register: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(cred => {
          return (

            cred.user
              .sendEmailVerification()
              .then(function() {
                alert(
                  "请登录你的邮箱，然后点击提供的链接."
                );
                // Email sent.
              })
              .catch(function(error) {
                // An error happened.
                console.log(error);
              })
          );
        })
        .then(
          firebase
            .auth()
            .signOut()
            .then(() => {
              // alert(
              // "Please login into your mail and verify your email by clicking the link provided and login in again."
              //);
              this.$router.push("/");
            }),
          err => {
            alert(err.message);
            this.$router.push("/Register");
          }
        );
    }
  }
};
</script>

<style>
select {
  display: inline-block;
  border-bottom: 1px solid #9e9e9e;
}
label {
  font-weight: bold;
  color: black;
}
h2 {
  font-size: calc(20px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
}
</style>