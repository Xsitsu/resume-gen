<template>
    <div class="experience section">
        <section-header>
            {{ title }}
        </section-header>
        <div v-for='job in data' class='job' :key="job.title + job.to">
            <h5>{{ job.title }} &middot; {{ job.company }} &middot; {{ job.from }} - {{ job.to }}</h5>
            
            <p>{{ job.description }}</p>
            <ul class="results">
                <li v-for="r in job.results"><span>{{ r }}</span></li>
            </ul>
            <div>
                <h6 class="inline-header" v-if="job.technologies">Used:</h6>
                <chip :label="tech" v-for="tech in job.technologies" />
            </div>
        </div>
    </div>
</template>
<script>
import SectionHeader from '../layout/SectionHeader'
import Chip from '../decorations/Chip'
export default {
    props:{
        data:Array,
        title:{
            default:"Experience",
            type:String
        }
    },
    components:{
        SectionHeader,
        Chip
    }
}
</script>

<style scoped>
    .job{
        margin-bottom: 15px;
    }
    h6{
        font-size: 0.8em;
        line-height: 01.2em;
        display: inline-block;
        margin: 0;
    }

    p{
        margin-bottom: 5px;
    }

    ul.results{
        margin-top: 0;
        margin-bottom: 5px;
    }

   
</style>