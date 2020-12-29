<template>
  <div class="theme-container home">
    <Header />
    <main>
      <Aside />
      <ArticleList />
    </main>
    <Footer />
    <!-- <Content  /> -->
    <!-- <div id="articles">
      <Content slot-key="articles" />
    </div>
    <div id="about">
      <Content slot-key="about" />
    </div> -->
  </div>
</template>

<script>
import Header from './partials/Header'
import Aside from './partials/Aside'
import Footer from './partials/Footer'
import ArticleList from './components/ArticleList'

export default {
  name: 'Home',
  components: {
    Header,
    Aside,
    Footer,
    ArticleList
  }
}
</script>


<style lang="scss">
main {
  display: flex;
  justify-content: space-between;
  padding: 0 45px;
}
</style>