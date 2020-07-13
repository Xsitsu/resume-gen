<template>
    <transition name="fade">
        <Resume v-if="loaded" v-bind="$store.state.resume.resume"/>
    </transition>
</template>

<script>
import Resume from '@/components/resume/Resume'
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
      let slug = this.$route.params.slug
      console.log(slug)
      this.$store.dispatch("resume/load", slug)
      this.loaded = true;

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
