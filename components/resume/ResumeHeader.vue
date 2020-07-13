<template>
<div class="resume-header">
    <i-circle :size="100">{{ initials }}</i-circle>
    <div class="right-header">
        <h1>{{ applicant }}</h1>
        <h3 class="">{{ role }}</h3>
        <h3 class=""><a class="no-decorate" :href="website">{{ website }}</a></h3>
    </div>
</div>
</template>

<script>
import ICircle from './decorations/ICircle'
export default {

    props:{
        applicant:String,
        role:String,
        website:String,
    },
    components:{
        ICircle
    },
    computed:{
        initials(){
            if(this.applicant){
                let name = this.applicant.split(" ");
                return name[0][0] + name[1][0];
            }else{
                return "";
            }
        },
    }
    
}
</script>

<style scoped>
    h1,h2,h3,h4,h5,h6{
        text-transform: uppercase;
        font-family: var(--headings-font);
        margin-top:0;
    }

    

    h3{
        line-height: 0.9em;
    }

    .right-header{
        float: right;
        display: inline;
        text-align: right;
    }

    .resume-header{
        margin-bottom: 15px;
    }
</style>