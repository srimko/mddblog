<template>
  <a :href="tag.link">{{tag.name}}</a>
</template>

<script>
export default {
  props: ['tag']
}
</script>

<style lang="scss" scoped>
  a {
    color: inherit;
    margin-right: 10px;
    text-decoration: none;
    border-bottom: 1px solid;
  }
</style>