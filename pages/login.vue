<template>
  <div class="login-page" :style="color">
    <form class="login-form" @submit.prevent="userLogin">
      <div >
        <basic-section label="Password" >
          <input type="password" v-model="password" />
        </basic-section>


      </div>
      <div>
        <button type="submit">
          <span v-if="!error">LOGIN</span>
          <span v-else>PASSWORD IS INCORRECT</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import BasicSection from '@/components/resume/sections/BasicSection'
export default {
  components:{
    BasicSection
  },
  data() {
    return {
      password:'',
      error:false
    }
  },
  methods: {
    async userLogin() {
      try {
        let response = await this.$auth.loginWith('local', { data: {password:this.password} })
        let token = response.data.token
        let date = new Date()
        date.setTime(date.getTime() + 60*60*24*7)
        let cookie = "token=" + token + "; expires=" + date.toUTCString() + "; path=/"
        document.cookie = cookie;
        this.$router.push("/main/edit")
      } catch (err) {
        this.error = true;
        this.password = ''
        setTimeout(() => {
          this.error = false;
        }, 4000)
      }
    }
  },
  computed:{
    color(){
      return "--main-color: " + (this.error ? "#ff5555" : "#15EA7E");
    }
  }
}
</script>

<style>

  :root {
        --headings-font: 'Poppins', sans-serif;
        --primary-font: 'Titillium Web', serif;
  }
  .login-page{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: whitesmoke;
  }

  .login-form{
    background-color: white;
    padding: 30px;
    box-shadow: 2px 2px 10px rgba(0,0,0,0.15);
    border: 1px solid #ddd;
    width: 300px;
  }

  .login-form input{
    margin-top: 5px;
    padding: 5px;
    font-family: var(--headings-font);
    width: 100%;
  }

  input:focus{
    outline: none;
  }

  button{
    border: 1px solid #ddd;
    padding: 5px;
    margin-top: 10px;
  }

  button:active{
    background-color: var(--main-color);

  }

  button:focus{
    outline: none;
  }


</style>
