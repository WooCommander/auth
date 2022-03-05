<template>
  <header class="admin-header"></header>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
export default class AdminLayoutHeader extends Vue {}
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