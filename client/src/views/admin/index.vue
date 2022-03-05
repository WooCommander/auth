<template>
  <admin-layout>
    <div class="admin-index"></div>
  </admin-layout>
</template>
<script lang="ts">
import { Vue, Prop, Options } from "vue-property-decorator";
import AdminLayout from "@/layout/admin/admin-layout.vue";
@Options({
  name: "AdminIndexPage",
  emits: [],
  components: { AdminLayout },
})
export default class AdminIndexPage extends Vue {
  created() {}
  mounted() {}
}
</script>
<style lang="scss">
.admin-index {
}
</style>