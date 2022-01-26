<template>
  <div class="layout">
    <layout-header />
    <div class="main">
      <slot></slot>
    </div>
    <layout-footer />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";
import layoutHeader from "./layout-header.vue";
import layoutFooter from "./layout-footer.vue";

@Options({
  components: {
    layoutHeader,
    layoutFooter,
  },
})
export default class layout extends Vue {}
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
.layout {
  display: flex;
  flex-direction: column;
  height: 100%;

  .main {
    flex: 1 0 auto;
    padding: 40px;
    // border: 1px solid #ccc;
  }
}
</style>

