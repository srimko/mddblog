<template>
  <h1>{{$page.frontmatter.title}} <span class="date">{{$page.frontmatter.date}}</span></h1>
</template>

<script>
  export default {
    name: 'PostTitle'
  }
</script>

<style lang="scss" scoped>
  h1 {
      display: flex;
      justify-content: space-between;

      font-family: 'Merriweather', serif;
      font-size: 30px;
      line-height: 38px;
      margin-bottom: 30px;

      .date {
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 16px;
        line-height: 20px;
        font-weight: normal;
      }
    }
</style>