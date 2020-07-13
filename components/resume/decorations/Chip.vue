<template>
    <div class="chip">
        {{ label }}
    </div>
</template>

<script>
export default {
    props:{
        label:String
    }
}
</script>
<style scoped>
    .chip{
        display: inline;
        border: 1px solid var(--main-color);
        font-size: 0.6em;
        padding: 0 4px;
        border-radius: 500em;
        margin-left: 3px;
        line-height: 1.5em;
        text-transform: uppercase;
        font-family: var( --primary-font);
        font-weight: bold;
    }
</style>