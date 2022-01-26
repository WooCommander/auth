<template>
  <!-- <layout>
    <router-view></router-view>
  </layout> -->
  <router-view></router-view>
</template>
<script lang="ts">
import { Vue, Options } from "vue-property-decorator";
import layout from "./layout/layout.vue";
@Options({
  components: { layout },
})
export default class App extends Vue {}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
