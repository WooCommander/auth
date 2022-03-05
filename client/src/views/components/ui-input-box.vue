<template>
  <div class="ui-input-box">
    <input
      :type="modelValue.Type"
      :required="modelValue.Required"
      v-model="modelValue.Value"
    />
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
  margin: 0 0 30px;
  input {
    width: 100%;
    padding: 0.5em;
    color: #fff;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    background: transparent;
    &:focus ~ label,
    &:valid ~ label {
      top: -20px;
      left: 0;
      color: #03a9f4;
      font-size: 0.85em;
    }
  }
  label {
    position: absolute;
    left: 0;
    top: 0;
    padding: 0.5em 0;
    color: #fff;
    pointer-events: none;
    transition: 0.5s;
  }
}
</style>