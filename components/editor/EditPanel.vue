<template>
    <div id="edit-panel">
        <div class="container">
          <client-only>
            <PropertiesPanel />
          </client-only>
          <SkillPanel  :skills="$store.state.editor.skills"/>
        </div>
    </div>
</template>
<script>
import SkillPanel from './SkillPanel'
import PropertiesPanel from './PropertiesPanel'
import SectionHeader from '../resume/layout/SectionHeader'
export default {
    components:{
        SkillPanel,
        SectionHeader,
        PropertiesPanel,
    },
    data(){
        return {
            panel:"skills"
        }
    },
    methods:{
        setPanel(panel){
            this.panel = panel;
        }
    },
    computed:{
      skills:{
        get(){

        },
        set(val){}
      }
    }
}
</script>

<style scoped>
    #edit-panel{
        background: white;
        border-right: 1px solid #ddd;
        width: 340px;

        /* position: fixed; */
        left: 0;
        top: 0;
        height: 100vh;

    }

    .navbar{
        height: 50px;
        width: 100%;
        border-bottom: 1px solid #ddd;
        padding: 5px;
    }

    .btn{
        border: 1px solid #ddd;
        height: 40px;
    }

    .btn:active{
        outline: none;
    }

    .container{
      padding: 15px;
    }

    .container > div{
      margin-bottom: 20px;

    }
</style>
