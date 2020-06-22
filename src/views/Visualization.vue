<template>
  <div class="add-group container z-depth-1"> 
    <h2 class="center-align indigo-text">班级表现</h2>
        <div class="field exam">
        <label for="exam">试卷:</label>
        <select name="exam" id="exam" 
        v-model="selected_exam" >
            <option value="" disabled selected>选一个试卷</option>
            <option v-for="exam in exam_datas" :value="exam.name" :key="exam.id">
                {{ exam.name }}
            </option>
        </select>
         <v-divider></v-divider>
      </div>
      
      <div class="field class">
          <label for="class">班级:</label>
          <select name="class" id="class" 
        v-model="selected_class" >
            <option value="" disabled selected>选一个班级</option>
            <option v-for="class_data in class_datas"
                v-bind:key="class_data.name" v-bind:value="class_data.name">{{class_data.name}}
            </option>
        </select>
      </div>
      
      
      <div class="field center-align">
        <p
          v-if="feedback"
          class="red-text"
        >{{ feedback }}</p>
        <button class="btn pink" @click="visualization">制造图表</button>
      </div>
      
    
    <h2>New vs Returning Visitors</h2>
    <BarChart v-if="loaded" :data="visitors" :styles="styles"/>
  </div>
</template>

<script>
import db from "@/firebase/init";

import BarChart from "../components/BarChart";

export default {

  name: "Visualization",
  components: {

    BarChart
  },
  data() {
    return {
      class_datas:[],
      feedback: null,
      selected_exam:null,
      selected_class:null,
      exam_datas:[],
      loaded: false,
      pageViews: null,
      pageViewsByCategory: null,
      visitors: null,
      styles: {
        width: "650px",
        height: "400px",
        position: "relative"
      },
     
      students_marks:[],
      students: [],

    };
  },
  methods: {
    
    visualization() {
        db.collection("students")
        .where('name', '==', 'b1')
        .get()
        .then(doc => {
            this.students.push({ ...doc.data(), id: doc.id });

          });
    
       // var text = "";
    
        let data = [{"date":"1","new":1},{"date":"1","new":1}]
        this.visitors = data;
        this.loaded = true;
    },
    add(stu) {
      this.students.push(stu);
    }

  },
  created() {
    db.collection("class")
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        this.class_datas.push({ ...doc.data(), id: doc.id });
      });
    });  
    db.collection("exams")
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        this.exam_datas.push({ ...doc.data(), id: doc.id });
      });
    });
     
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