<template>
  <ul class="tagList">
    <li class="tag" v-for="tag in $page.frontmatter.tags" :key="tag.name"><a href="">{{tag.name}}</a></li>
  </ul>
</template>

<script>
  export default {
    name: 'PostTag'
  }
</script>

<style lang="scss" scoped>
  .tagList {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 30px;
    a {
      color: inherit;
      margin-right: 10px;
      text-decoration: none;
      border-bottom: 1px solid;
    }
  }
</style>