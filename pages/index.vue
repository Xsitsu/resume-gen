<template>
    <transition name="fade">
        <Resume v-if="loaded" v-bind="$store.state.resume.resume"/>
    </transition>
</template>

<script>
import Resume from '@/components/resume/Resume'
import DATA from '@/data.js'
export default {
    components:{
        Resume
    },
    data(){
        return {
            loaded:false
        }
    },
    mounted(){
        // setTimeout(()=>{
            this.$store.commit("resume/set", DATA);
            console.log("RESUME", this.$store.state.resume)
            this.loaded = true;
        // }, 2000);
    }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
