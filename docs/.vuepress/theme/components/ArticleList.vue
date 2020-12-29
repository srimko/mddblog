<template>
  <section class="articleList">
    <Article v-for="article in getPosts" :key="article.frontmatter.key" :article="article"/>
  </section>
</template>

<script>
import Article from './Article'

export default {
  name: 'ArticleList',
  components: {
    Article
  },
  computed:  {
    getPosts: function () {
      let pages = this.$site.pages

      let posts = pages.filter(page => {
        if(page.regularPath.includes('posts'))
          return page.regularPath
      });
      
      return posts
    }
  }
}
</script>

<style lang="scss">
  .articleList {
    width: 50%;
  }
</style>