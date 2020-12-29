<template> 
  <div class="theme-container">
    <Header />
    <main>
      <Content/>
    </main>
  </div>
</template>

<script>
  import Header from './partials/Header.vue'

  export default {
  components: { Header },
    name: 'Layout'
  }
</script>

<style lang="scss" scoped>

</style>