<template>

<div class="px-4 py-5 my-5 text-center">
    <h1 class="display-5 fw-bold">Count</h1>
    <count></count>
    <div class="col-lg-6 mx-auto">
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
  

        <button 
          type="button" 
          class="btn btn-primary btn-lg px-4 gap-3"
          @click="add"
        >+</button>
      
        <button 
          type="button" 
          class="btn btn-outline-secondary btn-lg px-4"
          @click="sub"
        >-</button>
        <button 
        type="button" 
        class="btn btn-outline-secondary btn-lg px-4"
        @click="getPrize"
      >get Prize</button>

      </div>
    </div>
  </div>

</template>


<script>
  import count from './count.vue'
export default {
  components:{ 
    count

  },
  computed:{
    prize(){
      return this.$store.getters.getPrize
    }

  },
  methods:{
    add(){
      this.$store.commit('add')
    },
    sub(){
     
      this.$store.commit('sub')
     
    },
    getPrize(){
      alert(this.$store.getters.getPrize)
    }

  }
  
}
</script>