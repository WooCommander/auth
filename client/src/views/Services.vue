<template>
  <layout>
    <div class="servivces">
      <h1>This is an about page</h1>
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
export default class Services extends Vue {}
</script>
<style lang="scss">
</style>
