<template>
    <div class="row">
      <h1>Admin</h1>
      <hr />
      <div class="col-sm-5">
        <p>
          <strong>
          {{this.$store.getters.getCount}}
          </strong>
        </p>

        <div>
          <label class="form-label">By how much</label>
          <input 
            type="number" 
            class="form-control" 
            v-model="amount"
          >
        </div>
        <br/>

        <button type="button" class="btn btn-primary"   @click="addAdmin">
          +
        </button>
        <button type="button" class="btn btn-outline-secondary"   @click="subAdmin">
          -
        </button>
      </div>
    </div>
</template>


<script>

export default {
    data(){
      return {
        amount:1
      }
    },
    methods:{
      addAdmin(){
        this.$store.commit('add', {valyeToadd: this.amount})
      },
      subAdmin(){
        this.$store.commit('sub',  {valyeToadd: this.amount})
      }
    }
}
</script>