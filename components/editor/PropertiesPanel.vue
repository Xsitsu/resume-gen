<template>
  <div id="properties-panel">
    <section-header>
      Properties
    </section-header>
    <h5>Display Name</h5>
    <input class="prop" type="text" v-model="resume.resumeName" />

    <h5>URL</h5>
    {{ baseUrl }}/<input class="inline" style="display: inline-block; width: 100px" type="text" v-model="resume.slug" />
    <button @click="saveToDB()" class="save-button">SAVE</button>

    <h5>Role</h5>
    <input class="prop" type="text" v-model="resume.role" />

    <h5>Color</h5>
    <div class="color-picker">
      <chrome-picker style="margin-top: 15px" v-model="color"/>
      <!-- <div>
        <div class="color-label">
          Saturation {{ color.saturation }}
        </div>
        <input class="color-range" v-model="color.saturation" type="range" />
      </div>
      <div>
        <div class="color-label">
          Luminosity {{ color.luminosity }}
        </div>
        <input class="color-range" v-model="color.luminosity" type="range" />
      </div> -->
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

    }
  },
  computed:{
    resume(){
      return this.$store.state.resume.resume
    },
    baseUrl(){
      return `${window.location.protocol}//${window.location.host}`
    },
    color:{
      get(){
        return this.$store.state.resume.resume.color
      },
      set({hex}){
        this.$store.state.resume.resume.color = hex
      }
    }
  },
  methods:{
    onColorChange(h){
      this.color.hue = h
    },
    async saveToDB(){
      let results = await this.$axios.post("/api/resume", this.$store.state.resume.resume)
      console.log(results)
    }
  },
  watch:{
    // resume:{
    //   handler(n,o){
    //     console.info("RESUME UPDATED")
    //     // this.saveToDB()
    //   },
    //   deep:true
    // }
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

  .save-button{
    float: right;
    background-color: var(--main-color);
    border: 2px solid var(--main-color)
  }

  .save-button:active{
    background: white;
  }

  button:focus{
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
