<template>
    <div class="skills">
        <section-header>
            {{ title }}
            <h6 class="section-subheader">{{ subtitle }}</h6>
            <span class="proficiency-header">Experience</span>
        </section-header>
        <div class="skill-list" style="height: 100%; overflow: hidden;">
            <draggable :disabled="!editable" :list="skills" group="skills" handle=".skill" style="height: 100%; padding-bottom: 100px;">

                <skill v-for='skill in skills' v-bind="skill" :key="skill.name"/>

            </draggable>
        </div>
    </div>
</template>
<script>
import SectionHeader from '../layout/SectionHeader'
import Skill from './skills/Skill'
import draggable from "vuedraggable";

export default {
    components:{
        SectionHeader,
        draggable,
        Skill
    },
    props:{
        skills:Array,
        title:{
            default:"Skills",
            type:String
        },
        subtitle:String
    },
    data(){
        return {
            calculating:false
        }
    },

    methods:{
        getFooterTop(){
            let footer = document.querySelector("#p1-footer");
            return footer.getBoundingClientRect().top;
        },
        calcSkills(){
            this.calculating = true;



            let overflowSkills = [];

            this.skills.forEach(function(skill, index){
                let footerTop = this.getFooterTop()
                let node = this.$refs[skill.name][0];
                let skillBottom = node.getBoundingClientRect().bottom;
                let visible = skillBottom < footerTop;

                console.log(skill.name, `${skillBottom} < ${footerTop}`);

                // console.log(skill.name, visible);

                if(!visible){
                    overflowSkills.push(skill);
                }
            }.bind(this))
            this.$emit("update:overflow", overflowSkills);
            this.calculating = false;
        },

    },
    computed:{
      editable(){
          return this.$store.state.resume.editable
        }
    },

    watch:{
        // skills(n){
        //     this.$nextTick(this.calcSkills);
        // },
    },
    mounted(){
        // this.$nextTick(this.calcSkills);
    },

}
</script>

<style scoped>

    .sortable-ghost{
        color: var(--main-color);
    }

    .desc{
        margin-bottom: 10px;
    }



    .skill-list{
        overflow-y: hidden;

    }

    .sub-section{
        transition-duration: 0.2s;
        transition-property: opacity;
        opacity: 0;
    }

    .visible{
        opacity: 1;
    }






    .proficiency-header{
        text-transform: uppercase;
        font-family: var(--headings-font);
        font-size: 0.5em;
        float:right;
        margin-top: 10px;
        margin-bottom: 0px;
    }

    .section-subheader{
        display: inline-block;
        font-size: 0.5em;
    }
</style>
