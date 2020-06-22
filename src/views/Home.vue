<template>
  <div style="text-align: center">
    <router-link :to="{ name: 'CreateHome' }">	
      <v-btn class="btn-1" depressed color="blue">
          创建
      </v-btn> 
    </router-link>	
    <br><br>
    <router-link :to="{ name: 'UploadHome' }">	
      <v-btn class="btn-1" depressed color="blue" >
        输入
      </v-btn> 
    </router-link>	
    <br><br>
    <router-link :to="{ name: 'Visualization' }">	
      <v-btn class="btn-1" depressed color="blue" >
          总结
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
