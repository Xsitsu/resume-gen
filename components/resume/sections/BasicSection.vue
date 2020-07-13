<template>
    <div class="section">
        <section-header>
            {{label}}
        </section-header>
        <p>
            {{ text }}
        </p>
    </div>
</template>

<script>
import SectionHeader from '../layout/SectionHeader'
export default {
    props:{
        label:String,
        text:String
    },
    components:{
        SectionHeader
    }
}
</script>