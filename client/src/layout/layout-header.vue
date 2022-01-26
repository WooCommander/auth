<template>
  <header>
    <slot>
      <div class="header-baner">
        <img src="../assets/img/banner.png" />
      </div>
      <div id="nav">
        <router-link to="/">Главная</router-link> |
        <router-link to="/news">Новости</router-link> |
        <router-link to="/about">О предприятии</router-link> |
        <!-- <router-link to="/about">Экстренные службы</router-link> | -->
        <router-link to="/purchase">Закупки</router-link> |
        <router-link to="/jobs">Вакансии</router-link> |
        <router-link to="/services">Услуги</router-link> |
        <router-link to="/contacts">Контакты</router-link>
      </div>
    </slot>
  </header>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
export default class LayoutHeader extends Vue {}
</script>

<style lang="less">
header {
  .header-baner {
    height: auto;
    img {
      width: 100%;
    }
  }
  background-color: #3d3d3d;
  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #fff;

      &.router-link-exact-active {
        color: #ffd422;
      }
    }
  }
}
</style>