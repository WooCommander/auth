<template>
  <layout>
    <div class="news">
      <h1>This is an news page</h1>
    </div>
  </layout>
</template>
<script lang="ts">
import { Options, Vue } from "vue-property-decorator";
import layout from "../layout/layout.vue"; // @ is an alias to /src

@Options({
  components: {
    layout,
  },
})
export default class News extends Vue {}
</script>
<style lang="scss">
</style>
