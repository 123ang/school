<template>
  <div class="add-group container z-depth-1"> 
    <h2 class="center-align indigo-text">创建新班级</h2>
    <form @submit.prevent="addClass">
      <div class="field title">
        <label for="title">班级名字:</label>
        <input
          type="text"
          name="title"
          v-model="title"
        >
      </div>
      
      <div
        v-for="(mem, index) in members"
        class="field member"
        :key="index"
      >
        <label for="member">同学名字:</label>
        <input
          type="text"
          name="member"
          v-model="members[index]"
        >
        <i
          class="material-icons delete"
          @click="deleteMember(mem)"
        >delete</i>
      </div>
      <div class="field add-member">
        <label for="add-member">添加同学 (按 tab 键来添加):</label>
        <v-row>
          <v-col cols="10"> 
          <input
            type="text"
            name="add-member"
            @keydown.tab.prevent="addMember"
            v-model="another"
          >
        </v-col>
        <v-col cols="2">
          <v-btn class="mx-2" fab dark small color="pink" @click.prevent="addMember">
            <v-icon dark>mdi-plus</v-icon>
          </v-btn>
        </v-col>
        </v-row>
      </div>
      <div class="field center-align">
        <p
          v-if="feedback"
          class="red-text"
        >{{ feedback }}</p>
        <button class="btn pink">创建班级</button>
      </div>
    </form>
  </div>
</template>

<script>
import db from "@/firebase/init";
export default {
  name: "CreateClass",
  data() {
    return {
      title: null,
      members: [],
      another: null,
      feedback: null,
    };
  },
  methods: {
    addClass() {
      if (this.title) {
        this.feedback = null;
        //save Meeting to firestore
        db.collection("class")
          .add({
            name: this.title,
            students: this.members,
          })
          .then(() => {
            for (var index = 0; index < this.members.length; ++index) {
              console.log(this.members[index])
              db.collection("students")
              .add({
                name: this.members[index],
              }) 
            }
            
            
            
            this.$router.push({ name: "CreateHome" });
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.feedback = "你必须输入班级名字";
      }
    },
    addMember() {
      if (this.another) {
        this.members.push(this.another);
        this.another = null;
        this.feedback = null;
      } else {
        this.feedback = "你必须输入同学名字才能添加";
      }
    },
    deleteMember(mem) {
      this.members = this.members.filter(member => {
        return member != mem;
      });
    }
  },
  computed: {
    UserEmail() {
      return this.$store.state.Email;
    }
  }
};
</script>

<style>
.add-meeting {
  margin-top: 60px;
  padding: 20px;
  max-width: 500px;
}
.add-meeting h2 {
  font-size: 2em;
  margin: 20px auto;
}
.add-meeting .field {
  margin: 20px auto;
  position: relative;
}
.add-meeting .delete {
  position: absolute;
  right: 0;
  bottom: 16px;
  color: #aaa;
  font-size: 1.4em;
  cursor: pointer;
}
</style>