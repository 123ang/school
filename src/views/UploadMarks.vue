<template>
  <div class="add-group container z-depth-1"> 
    <h2 class="center-align indigo-text">输入分数</h2>
    
      <div class="field exam">
        <label for="exam">试卷:</label>
        <select name="exam" id="exam" 
        v-model="selected_exam" @change="onChangeExam($event)">
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
        v-model="selected_class" @change="onChange($event)">
            <option value="" disabled selected>选一个班级</option>
            <option v-for="class_data in class_datas"
                v-bind:key="class_data.name" v-bind:value="class_data.name">{{class_data.name}}
            </option>
        </select>
      </div>
      
      <div class="field student">
          <label for="student">学生:</label>
          <select name="student" id="student" 
        v-model="selected_student">
            <option value="" disabled selected>选一个学生</option>
            <option v-for="(stu, index) in students" :key="index"
                 v-bind:value="stu">{{stu}}
            </option>
        </select>
      </div>
      
    <div class="field exam_mark" >
          <label for="exam_mark">分数:</label>
            <div v-for="(m, index) in total_marks" :key="index"
                 v-bind:value="m">
                 <v-row>
                 <v-col>
                    {{index+1}} :  
                </v-col>
                <v-col>
                    <input
                        type="text"
                        :name="'mark'+ index" 
                        v-model="mark[index]"
                    >
                </v-col>
                <v-col>/ {{ m }}</v-col>
                </v-row>
            </div>
      </div>
        <div style="text-align:center">
            <button class="btn pink" @click="saveMark()">输入分数</button>
        </div>
  </div>
  
</template>

<script>
import db from "@/firebase/init";
export default {
  name: "UploadMarks",
  data() {
    return {
      exam: null,
      exam_datas:[],
      class_datas:[],
      members: [],
      another: null,
      feedback: null,
      selected_exam:null,
      selected_class: null,
      selected_student:null,
      students:[],
      total_marks:[],
      mark:[],
    };
  },
  methods: {
    onChange(event) {
       
        db.collection("class")
        .where('name', '==', event.target.value)
        .get()
        .then(snapshot => {
        snapshot.forEach(doc => {
            this.students = doc.data().students;
        })
        });
    },
    onChangeExam(event) {
       
        db.collection("exams")
        .where('name', '==', event.target.value)
        .get()
        .then(snapshot => {
        snapshot.forEach(doc => {
            this.total_marks = doc.data().total_marks;
        });
        });
    },
    saveMark() {
        const name = this.selected_exam;
        db.collection("students")
        .where('name', '==', this.selected_student)
        .get()
        .then(snapshot => {
        snapshot.forEach(doc => {
            
           db.collection("students")
            .doc(doc.id)
            .update({
                [name]: this.mark,
               
            })
            .then(() => {
            this.$router.replace({ name: "UploadMarks" });
            this.mark = []
            })
            .catch(err => {
            console.log(err);
            });
        });
        });
        
        
        
      
    }
  },
  created() {
    db.collection("exams")
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        this.exam_datas.push({ ...doc.data(), id: doc.id });
      });
    });
    db.collection("class")
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        this.class_datas.push({ ...doc.data(), id: doc.id });
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
select {
    display: block;
}
</style>