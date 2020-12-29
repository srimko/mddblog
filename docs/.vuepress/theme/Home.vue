<template>
  <div class="theme-container home">
    <Header />
    <main>
      <Aside />
      <ArticleList />
    </main>
    <Footer />
    <div class="bg-round round-1"></div>
    <div class="bg-round round-2"></div>
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

  .home {
    min-height: 100vh;
    position: relative;
    overflow: hidden;
  }

  @keyframes move1 {
    0% {
      transform: translate(-30%, 0);
    }
    10% {
      transform: translate(-10%, 0);
    }
    20% {
      transform: translate(-13%, 10%);
    }
    100% {
      transform: translate(-30%, 0%);
    }
  }
  @keyframes move2 {
    0% {
      transform: translate(40%, 80%);
    }
    10% {
      transform: translate(45%, 82%);
    }
    20% {
      transform: translate(47%, 70%);
    }
    100% {
      transform: translate(40%, 80%);
    }
  }

  .bg-round {
    position: absolute;
    border-radius: 50%;
    z-index: -1;

    &.round-1 {
      bottom: -50%;
      width: 760px;
      height: 760px;
      transform: translate(-30%, 0);
      background-color: rgba(87, 181, 206, 0.66);
      filter: blur(35px);
      animation: move1 5s 2;
    }
    &.round-2 {
      top: -50%;
      right: 0;
      width: 500px;
      height: 500px;
      transform: translate(40%, 80%);
      background-color: rgba(87, 206, 115, 0.56);
      filter: blur(45px);
      animation: move2 5s 2;
    }
  }
</style>