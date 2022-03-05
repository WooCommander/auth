<template>
  <div class="admin-layout">
    <admin-layout-header />
    <div class="main">
      <div class="container">
        <div class="navigation">
          <ul>
            <li>
              <span class="icon"></span>
              <span class="title"><h2>ТДРСУ</h2></span>
            </li>
            <li>
              <span class="icon"></span>
              <span class="title">Главная</span>
            </li>
            <li>
              <span class="icon"></span>
              <span class="title">Пользователи</span>
            </li>
            <li>
              <span class="icon"></span>
              <span class="title">Категории</span>
            </li>
            <li>
              <span class="icon"></span>
              <span class="title">Статьи</span>
            </li>
            <li>
              <span class="icon"></span>
              <span class="title">Настройки</span>
            </li>
            <li>
              <span class="icon"></span>
              <span class="title">Выход</span>
            </li>
          </ul>
        </div>
        <slot></slot>
      </div>
    </div>
    <admin-layout-footer />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";
import adminLayoutHeader from "./admin-layout-header.vue";
import adminLayoutFooter from "./admin-layout-footer.vue";

@Options({
  components: {
    adminLayoutHeader,
    adminLayoutFooter,
  },
})
export default class AdminLayout extends Vue {}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
}
.admin-layout {
  display: flex;
  flex-direction: column;
  height: 100%;

  .main {
    flex: 1 0 auto;
    padding: 40px;
    // border: 1px solid #ccc;
    .container {
      display: block;
      .navigation {
        text-align: left;
      }
    }
  }
}
</style>

