<template>
  <nav>
    <ul class="menu">
      <li>MDD <span>Développeur Front-End</span></li>
      <li>Accueil</li>
      <li>À propos</li>
      <li>Showroom</li>
      <li ><a href="#" class="btn">Contactez-moi</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
  nav {
   padding: 30px 45px;
   margin-bottom: 100px;
  }
  .menu {
    display: flex;
    align-items: center;

    font-size: 24px;
    line-height: 32px;
    font-weight: 400;


    li {
      margin-right: 35px;
      &:nth-child(1) {
        margin-right: auto;
        font-size: 36px;
        line-height: 47px;
        font-weight: bold;
        span {
          font-size: 16px;
          line-height: 20px;
          opacity: 0.7;
          display: block;
          font-weight: normal;
        }
      }

      &:last-child {
        margin-left: auto;
        margin-right: 0;
      }
    }
  }
</style>