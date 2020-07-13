<template>
    <div class="circle" :style="{height:size + 'px', width:size + 'px',fontSize: (size/25) + 'em'}">
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        size:Number,
    }
}
</script>

<style scoped>
    .circle{
        position: relative;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border-radius: 500em;
        border: 4px solid var(--main-color);
        font-family: var(--headings-font);
        background-color: var(--main-color);
        user-select: none;
        cursor: pointer;
        transition: transform 70ms;

    }

    
</style>