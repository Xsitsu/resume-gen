<template>
  <div id="properties-panel">


    <section-header>
      Properties
    </section-header>
    <h5>Display Name</h5>
    <input class="prop" type="text" v-model="resume.name" />

    <h5>
      URL

    </h5>
    {{ baseUrl }}/<input class="inline" style="display: inline-block; width: 100px" type="text" v-model="resume.slug" />


    <h5>Role</h5>
    <input class="prop" type="text" v-model="resume.role" />

    <h5>Color</h5>
    <div class="color-picker" style="margin-bottom: 20px">
      <chrome-picker style="margin-top: 15px" v-model="color"/>

    </div>



  </div>
</template>

<script>
import SectionHeader from '@/components/resume/layout/SectionHeader'
import { Chrome} from 'vue-color';
export default {
  components:{
    SectionHeader,
    'chrome-picker':Chrome
  },
  data(){
    return {
      saving:false
    }
  },
  computed:{
    resume(){
      return this.$store.state.resume.resume
    },
    dirty(){
      return this.$store.state.resume.dirty
    },
    baseUrl(){
      return `${window.location.protocol}//${window.location.host}`
    },
    color:{
      get(){
        return this.$store.state.resume.resume.color || "#000"
      },
      set({hex}){
        this.$store.state.resume.resume.color = hex
      }
    }
  },

  mounted(){

  }
}
</script>

<style scoped>
  input.prop{
    width: 100%;
    font-size: 0.9em;
    padding: 5px;
  }
  input.inline{
    font-size: 16px;
    outline: none;
    border: none;
    border-bottom: 2px solid var(--main-color)
  }
  input:focus{
    outline: none;
  }

  

  a.link{
    color: black;
    cursor: pointer;
  }

  a.link:hover{
    color: var(--main-color)
  }

  a.link.disabled{
    color: #ccc;
  }

  .save-button{
    float: right;

  }



  btn:active{
    background: white;
  }

  .btn:focus{
    outline: none;
  }



  .color-picker{
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
  }

  .color-range{
    width: 200px;

  }

  .color-label{
    font-size: 0.7em;;
  }

  .inline-block{
    display: inline-block;
  }


</style>
