<template> 
  <div class="theme-container post">
    <Header />
    <main>
      <Content />
    </main>
  </div>
</template>

<script>
  import Header from './partials/Header'
  export default {
    name: 'Post',
    components: {
      Header
    }
  }
</script>

<style lang="scss" scoped>
  main {
    display: flex;
    .content__default {
      max-width: 700px;
      margin: auto;
    }
  }
</style>