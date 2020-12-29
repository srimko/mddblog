<template> 
  <div>
    <img :src="src" :alt="alt">
  </div>
</template>

<script>
  export default {
    name: 'PostImage',
    props: ['src', 'alt']
  }
</script>

<style lang="scss" scoped>
  div {
    display: flex;
    margin-bottom: 30px;
    img {
      margin: auto;
    }
  }
</style>