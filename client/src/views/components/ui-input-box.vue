<template>
  <div class="ui-input-box">
    <input type="text" name="" required="" />
    <label>{{ value.Name }}</label>
  </div>
</template>
<script lang="ts">
class InputModel {
  Name: string;
  Value: string;
  Type: string = "text";
  Requared: boolean;
}
import { Vue, Prop, Options } from "vue-property-decorator";
@Options({
  name: "InputBox",
  emits: [],
})
export default class InputBox extends Vue {
  @Prop({ default: () => new InputModel() }) value: InputModel;

  created() {}
  mounted() {}
}
</script>
<style lang="scss">
.ui-input-box {
}
</style>