<template>
    <div class="section-header">
        <h3>
            <slot></slot>
        </h3>
    </div>
</template>
<script>
export default {
}
</script>

<style scoped>
    h3{
        border-bottom: 6px solid var(--main-color);
        font-family: var(--headings-font);
        text-transform: uppercase;
        line-height: 1.2em;
        margin-bottom: 5px;
    }

</style>