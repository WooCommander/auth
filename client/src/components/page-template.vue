<template>
  <div class="page-template">
    <div class="page-template-header">
      <slot name="header"></slot>
    </div>
    <div class="page-template-body" v-if="visibleBody">
      <slot name="body" />
    </div>
    <div class="page-template-footer" v-if="visibleFooter">
      <slot name="footer" />
    </div>
  </div>
</template>
<script lang="ts">
import { Comment } from "vue";
import { Options, Vue, Prop } from "vue-property-decorator";

@Options({ name: "page-template" })
export default class PageTemplate extends Vue {
  // @Prop({ type: Boolean, default: false }) showBack: boolean;
  // routerBack() {
  //   this.$router.back();
  // }
  visibleBody = true;
  visibleFooter = true;
  beforeUpdate() {
    // console.log("!!this.$slots.body", !!this.$slots.body);
    // console.log("!!this.$slots.footer", !!this.$slots.footer);

    this.visibleBody =
      this.$slots.body().findIndex((o) => o.type !== Comment) !== -1;
    this.visibleFooter =
      this.$slots.footer().findIndex((o) => o.type !== Comment) !== -1;
  }
}
</script>
<style lang="less" >
.page-template {
  background: white;
  width: 100%;
  // padding: 0 26px 30px 30px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;

  .page-template-header {
    background: #f3f4fa;
    display: flex;
    justify-content: space-between;
    padding: 21px 24px;
    align-items: center;
    border-radius: 4px 4px 0px 0px;
    max-height: 62px;
    color: #253238;
    .table-title {
      text-transform: uppercase;
    }
    .buttons {
      display: flex;
      margin-left: auto;
      gap: 5px;
      span {
        margin-left: 5px;
      }
    }
  }
  &.sprav {
    .page-template-body {
      padding: 0px;
      .form-block {
        margin-bottom: 0;
        padding: 30px 24px;

        border-bottom: 1px solid #f3f4fa;
      }
      .form-block-header {
        background: #f3f4fa;
        height: 60px;
        display: flex;
        align-items: center;
        text-transform: uppercase;
        padding-left: 24px;
        font-weight: 700;
        // border-radius: 4px 4px 0 0;
      }
      .p2430 {
        padding: 30px 24px 0 24px;
      }
      .item {
        padding-bottom: 15px;
        .label {
          color: #90a4af;
          font-size: 14px;
        }
        .data {
          color: #253238;
        }
      }
      .about {
        margin: 0px 24px 24px 24px;
        border: 1px solid #f3f4fa;
        border-radius: 4px;
      }
    }
  }
  .page-template-body {
    padding: 30px 50px;
    border-left: 1px solid #f3f4fa;
    border-right: 1px solid #f3f4fa;
  }
  .page-template-footer {
    border-top: 1px solid #f3f4fa;
    padding: 30px 50px 25px 50px;
    border: 1px solid #f3f4fa;
  }
}
// .routerBack {
//   margin-right: 10px;
// }
</style>
