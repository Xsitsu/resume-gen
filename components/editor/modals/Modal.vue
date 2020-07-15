<template>
  <div v-show="value" class="modal">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props:{
    value:Boolean
  },
  methods:{
    hide(){
      this.$emit("update:value", false)
    },

  }
}
</script>

<style scoped>

</style>
