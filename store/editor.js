export const
state = () => ({
  skills:[]
})

export const mutations = {
  setSkills(state, skills){
    state.skills = {...state.skills, ...skills }
  }
}
