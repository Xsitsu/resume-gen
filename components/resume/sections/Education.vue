<template>
    <div class='education'>
        <section-header>Education</section-header>
        <div v-for='degree in data' class='sub-section'>
            <h5>{{ degree.type }} in {{ degree.subject }} &middot; {{ degree.date }} &middot; {{ degree.school }}</h5>
            <!-- <p>{{ degree.summary }}</p> -->
        </div>
    </div>
</template>


<script>
import SectionHeader from '../layout/SectionHeader'
export default {
    components:{
        SectionHeader
    },
    props:{
        data:Array
    }
}
</script>

