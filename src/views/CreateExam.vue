<template>
  <div class="add-group container z-depth-1"> 
    <h2 class="center-align indigo-text">创建新试卷</h2>
    <form @submit.prevent="addGroup">
      <div class="field title">
        <label for="title">试卷名字:</label>
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
        <label for="member">{{ index+1 }}:</label>
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
        <label for="add-member">增加题目 (请按 tab键 增加题目):</label>
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
        <button class="btn pink">创新试卷</button>
      </div>
    </form>
  </div>
</template>

<script>
import db from "@/firebase/init";
export default {
  name: "AddGroup",
  data() {
    return {
      title: null,
      members: [],
      another: null,
      feedback: null,
    };
  },
  methods: {
    addGroup() {
      if (this.title) {
        this.feedback = null;
        //save Meeting to firestore
        db.collection("exams")
          .add({
            name: this.title,
            total_marks: this.members,
          
          })
          .then(() => {
            this.$router.push({ name: "Home" });
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.feedback = "You must enter a Group title";
      }
    },
    addMember() {
      if (this.another) {
        this.members.push(this.another);
        this.another = null;
        this.feedback = null;
      } else {
        this.feedback = "You must enter a value to add another member";
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