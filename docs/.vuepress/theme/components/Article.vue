<template>
  <div class="article">
    <h3>Daily Intégration - D3 <span class="date">10 Dec 20</span></h3>
    <p class="excerpt">Aujourd’hui j’intègre une maquette simple uniquement avec HTML, CSS. Comme outil de production j’utilise parcel
    </p>
    <footer>
      <TagList />
      <a href="#" class="more">Voir plus</a>
    </footer>
  </div>
</template>

<script>
import TagList from './TagList'

  export default {
    name: 'Article',
    components: {
      TagList,
    }
  }
</script>

<style lang="scss" scoped>

</style>