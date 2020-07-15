<template>
  <div id="properties-panel">
    <section-header>
      Properties
    </section-header>
    <h5>Display Name</h5>
    <input class="prop" type="text" v-model="resume.name" />

    <h5>
      URL
      <button @click="saveToDB()" class="btn save-button">
        <span v-if="saving">Saving ...</span>
        <span v-else>Save</span>
      </button>
    </h5>
    {{ baseUrl }}/<input class="inline" style="display: inline-block; width: 100px" type="text" v-model="resume.slug" />


    <h5>Role</h5>
    <input class="prop" type="text" v-model="resume.role" />

    <h5>Color</h5>
    <div class="color-picker">
      <chrome-picker style="margin-top: 15px" v-model="color"/>

    </div>
    <h5 style="margin-top: 20px">
      <a :title="dirty ? 'Save before exporting' : ''" :class="{disabled:dirty}" :href="dirty ? '' : `/api/resume/${resume.slug}?download`" target="_blank" class="link">Export as JSON</a>
    </h5>
    <h5 style="margin-top: 20px">
      <a @click="$refs.fileImport.click()" href="#" class="link">Import from JSON</a>
    </h5>
    <input @change="uploadFile" ref="fileImport" type="file" style="display:none" />
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
  methods:{
    async saveToDB(){
      this.saving = true;
      let slug = this.resume.slug
      await this.$store.dispatch("resume/save")
      this.saving = false
      if(this.$route.params.slug !== slug){
        this.$router.push(`/${slug}/edit`)
      }
    },
    async uploadFile(){
      let slug = this.resume.slug
      let file = this.$refs.fileImport.files[0];
      console.log(file)
      let reader = new FileReader();
      reader.readAsText(file, "UTF-8");
      reader.onload = (event) => {
        let contents = event.target.result;
        try{
          let resume = JSON.parse(contents)
          resume.slug = slug
          this.$store.commit("resume/set", resume)
          this.$store.commit("resume/setDirty")
        }catch(e){
          console.error(e)
        }
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

  .btn{
    background-color: var(--main-color);
    border: 2px solid var(--main-color)
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
</style>
