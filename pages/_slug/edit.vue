<template>
    <div class="editor flex">
        <div style="position: fixed;">
            <EditPanel  />
        </div>
        <div class="flex resume-backer" style="">
            <Resume v-if="resume" v-bind="resume"/>
        </div>
    </div>

</template>

<script>
import Resume from '@/components/resume/Resume'
import EditPanel from '@/components/editor/EditPanel'

export default {
    components:{
        Resume,
        EditPanel
    },
    data(){
        return {
            loaded:false,

        }
    },
    async mounted(){
      let slug = this.$route.params.slug
      this.$store.commit("resume/editable", true)
      await this.$store.dispatch("resume/load", slug)

    },
    computed:{
        allSkills(){
            if(typeof this.$store.state.resume == "object" && "skills" in this.$store.state.resume){
                let allSkills = this.$store.state.resume.skills;
                return allSkills;
            }else{
                return [];
            }
        },
        resume(){
          return this.$store.state.resume.resume
        }
    },
    watch:{
      resume:{
        handler(n){
          console.log("SET DIRTY")
          this.$store.commit("resume/setDirty")
        },
        deep:true
      }
    },
    middleware: 'auth',

}
</script>

<style scoped>


.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.flex{
    display:flex;
}

.resume-backer{
  background-color: whitesmoke;
  flex-grow: 1;
  justify-content: center;
  margin-left: 340px;

}

.noscroll{
    overflow: hidden;
}

.editor{
    height: 100vh;
    flex-flow: row wrap;
    justify-content: space-between;

}

.col{
    display: inline-block;
}

.edit-panel{
    align-self: flex-start;
}
</style>
