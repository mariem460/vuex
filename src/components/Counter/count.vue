<template>
    <p class="lead mb-4">{{this.$store.getters.getCount}}</p>
</template>
<script>
    export default{
        computed:{
            computedValue(){
                return this.$store.getters.getCount
            }
        }
    }
</script>