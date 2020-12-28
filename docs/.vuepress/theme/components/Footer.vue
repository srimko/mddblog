<template> 
  <footer>
    <p>Made with ❤️ by Srimko</p>
    <ul class="social">
      <li class="social linkedin">
        <a href="#"><img src="../../public/img/linkedin.svg" alt=""> </a>
        </li>
      <li class="social github">
        <a href="#"><img src="../../public/img/github.svg" alt=""></a>
        </li>
      <li class="ml"><a href="#">Mention légales</a></li>
    </ul>
  </footer> 
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style lang="scss" scoped>
  footer {
    display: flex;
    justify-content: space-between;
    padding: 0 45px;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;

    .social {
      display: flex;
      align-items: center;
      li {
        margin-right: 15px;
      }
      a {
        border: 0;
        img {
          vertical-align: middle;
        }
      }
    }
  }
</style>