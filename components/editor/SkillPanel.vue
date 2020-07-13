<template>
    <div id="skill-panel">
        <skills style="height: 100%" title="All Skills" :skills="skills"/>
        <div class="drop-message" v-if="skills.length === 0">
          Drag and drop skills between the skill section and the list above.
        </div>
    </div>
</template>
<script>
import Skill from '../resume/sections/skills/Skill'
import Skills from '../resume/sections/Skills'
import draggable from "vuedraggable";
export default {
    components:{
        draggable,
        Skills
    },
    props:{
        // skills:Array
    },
    data(){
        return {
            skills:[]
        };
    }
}
</script>
<style scoped>
  .drop-message{
    text-align: center;
    color: #888;
  }
</style>
