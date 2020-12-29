<template>
  <article>
    <h3><a :href="article.path">{{article.frontmatter.title}}</a> <span class="date">{{article.frontmatter.date}}</span></h3>
    <p class="excerpt">{{article.frontmatter.description}}</p>
    <footer>
      <TagList :tags="article.frontmatter.tags" />
      <a href="#" class="more">Voir plus</a>
    </footer>
  </article>
</template>

<script>
import TagList from './TagList'

  export default {
    name: 'Article',
    components: {
      TagList,
    },
    props: ['article']
  }
</script>

<style lang="scss" scoped>
  article {
    padding-bottom: 40px;
    margin-bottom: 40px;
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