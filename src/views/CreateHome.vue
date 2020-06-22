<template>
  <div style="text-align: center">
    <router-link :to="{ name: 'CreateClass' }">	
      <v-btn class="btn-1" depressed color="blue">
          班级
      </v-btn> 
    </router-link>	
    <br><br>
    <router-link :to="{ name: 'CreateExam' }">	
      <v-btn class="btn-1" depressed color="blue" >
        试卷
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
