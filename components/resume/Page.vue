<template>
    <div :class='{page:true, loaded:isLoaded}'>
        <slot></slot>
    </div>
</template>

<script>
import { type } from 'os'
export default {
    props:{
        loaded:Boolean
    },
    computed:{
        isLoaded(){
            return typeof this.loaded == "undefined" || !!this.loaded
        }
    }
}
</script>

<style scoped>
    .page{
        box-sizing: border-box;
        width: 8.5in;
        height: 11in;
        position: relative;
        margin: 15px auto;
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        padding: 20px;
        background-color: white;
        margin-top: 20px;
        overflow: hidden;
    }


    .page > *{
        transition-duration: 1s;
        transition-property: opacity;
        opacity: 1;

    }

    .page.loaded > *{
        opacity: 1;
    }

    

    @media print{
        .page{
            box-shadow: none !important;
            width: auto;
            margin: 0;
        }
    }
</style>