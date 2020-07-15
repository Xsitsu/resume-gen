import axios from 'axios'

export const state = () => ({
  resume:{},
  resumeLoaded:false,
  editable:false,
  dirty:false

})

export const mutations = {
  set(state, data){
    console.info("SET RESUME: ", data.name);
    state.resume = {...state.resume, ...data};
  },
  setSkills(state, skills){
    state.skills = {...state.skills, ...skills }
  },
  editable(state, editable){
    state.editable = editable
  },
  setDirty(state){
    state.dirty = true
  },

}

export const actions = {
  async load({commit}, slug){
    let response = await axios.get("/api/resume/" + slug)
    commit("set", response.data)
  },
  async save({state}, slug){
    try{
      let resume = state.resume
      let slug = resume.slug
      let response = await this.$axios.post("/api/resume", resume)
      state.dirty = false

    }catch(e){
      console.error(e)
    }
  }
}

export const getters = {
  isEditable(state){
    return state.editable
  }
}


