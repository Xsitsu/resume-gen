<template>
    <div class="column" :style="{ 'flex-basis': width - 1  + '%'}">
        <slot></slot>
    </div>
</template>
<script>
export default {
    props:{
        width:Number
    },
    data(){
        return {

        }
    }
}
</script>

<style scoped>
    .column{
        
    }
</style>