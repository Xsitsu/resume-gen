<template>
  <div>
    <style>
      :root {
         {{ color }};
      }
      .banana{
        border: 1px solid yellow;
      }
    </style>
  </div>
</template>

<script>
export default {
  props:{
    color:String
  }
}
</script>
