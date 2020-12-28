<template>
  <ul class="tagList">
    <li  class="tag" v-for="tag in tags" :key="tag.name">
      <Tag :tag="tag"/>
    </li>
  </ul>
</template>

<script>
import Tag from './Tag'

export default {
  name: 'TagList',
  components: {
    Tag
  },
  data: function () {
    return {
      tags: [
        { name: 'HTML', link: '#' },
        { name: 'CSS', link: '#' },
        { name: 'Vuejs', link: '#' }
      ]
    }
  }
}
</script>

<style lang="scss">
  .tagList {
    display: flex;
    justify-content: flex-start;
  }
</style>