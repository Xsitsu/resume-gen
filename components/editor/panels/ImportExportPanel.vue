<template>
  <div id="import-export-panel">
    <section-header>
      File
    </section-header>
    <div class="flex"  style="margin-bottom: 20px;padding-top: 5px;">

      <button
        :title="dirty ? 'Save before exporting' : ''"
        :class="{disabled:dirty}"
        :href="dirty ? '' : `/api/resume/${resume.slug}?download`"
        target="_blank"
        class="btn">
          Export
      </button>


      <button @click="$refs.fileImport.click()" href="#" class="btn">
        Import
      </button>

      <input @change="uploadFile" ref="fileImport" type="file" style="display:none" />
      <button @click="saveToDB()" class="btn save-button">
        <span v-if="saving">Saving ...</span>
        <span v-else>Save</span>
      </button>
    </div>
  </div>
</template>

<script>
import SectionHeader from '@/components/resume/layout/SectionHeader'
export default {
  components:{
    SectionHeader
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

  },
  methods:{

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
}
</script>

<style scoped>
  .flex{
    display: flex;
    justify-content: space-between;
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

  .btn{
    background-color: transparent;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 0.9em;
    line-height: 0.9em;
    padding: 5px;
    font-family: var(--headings-font);
    text-transform: uppercase;
    width: 90px;
    box-shadow: 1px 1px 5px rgba(0,0,0,0.2);
    cursor: pointer;
    transition-property: transform, background-color;
    transition-duration: 0.2s;
  }

  .btn *{
    font-family: var(--headings-font);
  }

  .btn:hover{
    background-color: var(--main-color);
    border: 1px solid var(--main-color);
    /* transform: scale(1.02); */
  }

  .btn:active{
    outline: none;
  }
</style>
