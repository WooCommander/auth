<template>
  <div class="ui-input-box">
    <input :type="modelValue.Type" name="" required="" />
    <label>{{ modelValue.Name }}</label>
  </div>
</template>
<script lang="ts">
import { Vue, Prop, Options } from "vue-property-decorator";
import InputBoxModel from "./inputBoxModel";
@Options({
  name: "InputBox",
  emits: [],
})
export default class InputBox extends Vue {
  @Prop({}) modelValue: InputBoxModel;

  created() {}
  mounted() {}
}
</script>
<style lang="scss">
.ui-input-box {
  position: relative;
  width: 100%;
  margin: 0 0 15px;
  input {
    width: 100%;
    padding: 0.5em;
  }
  label {
    position: absolute;
    left: 0;
  }
}
</style>