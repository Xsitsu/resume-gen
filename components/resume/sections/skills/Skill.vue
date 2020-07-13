<template>
    <div>
        <h5 class="skill">
            {{ name }}
            <span v-if="level" class="proficiency-level">
                <span class="proficiency-bar" :style="{width:(level*20)+'%'}"></span>
            </span>
        </h5>
        <div class="subskill-list">
            <div class="subskill text" v-for="subskill in sub" :key="subskill">
                {{ subskill }}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        name:String,
        level:Number,
        sub:Array
    }
}
</script>
<style scoped>
    .proficiency-level{
        background-color: white;
        display: inline;
        border: 1px solid var(--main-color);
        border-radius: 500em;
        float:right;
        width: 60px;
        position: relative;
        padding: 1px;
        margin-top: 5px;
    }

    .proficiency-bar{
        float: left;
        background-color: var(--main-color);
        height: 6px;
        border-radius: 500em;
        position: relative;
    }

    .subskill-list{
        padding-left: 20px;

        border-left: 1px solid var(--main-color);
    }

    .subskill{
        text-transform: uppercase;
        font-size: 0.8em;
        line-height: 1.2em;
    }

    .skill{
        cursor: grab;
    }

    .skill:hover{
        color: var(--main-color);
        /* text-decoration: underline; */
    }
</style>
