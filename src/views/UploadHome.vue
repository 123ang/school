<template>
  <div style="text-align: center">
    <router-link :to="{ name: 'UploadMarks' }">	
      <v-btn class="btn-1" depressed color="blue">
          输入分数
      </v-btn> 
    </router-link>	
    <br><br>
    <router-link :to="{ name: 'UploadExam' }">	
      <v-btn class="btn-1" depressed color="blue" >
        上载试卷
      </v-btn> 
    </router-link>	
    <br><br>
    
    
  </div>
</template>

<script>





export default {
 
 name: "Home",
  data() {
    return {
    }
  },
  methods: {
   

  },

  computed: {
   
    
  }
  
};
</script>


<style>
.btn-1 {
  color: white !important
}

</style>
