<template>
  <section class="articleList">
    <Article />
  </section>
</template>

<script>
import Article from './Article'

export default {
  name: 'ArticleList',
  components: {
    Article
  }
}
</script>

<style lang="scss">
  .articleList {
    width: 50%;
    padding-bottom: 40px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    h3 {
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

    .excerpt {
      margin-bottom: 30px;
    }

    footer {
      display: flex;
      justify-content: space-between;

      .more {
        color: inherit;
        text-decoration: none;
        border-bottom: 1px solid;
      }
    }
  }
</style>