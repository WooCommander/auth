<template>
  <footer>
    <slot>
      <div class="footer-logo">
        <p><b>Содержание и ремонт автодорог</b></p>
        <h1>МУП «Тираспольское ДРСУ»</h1>
      </div>
      <div class="footer-content">
        <p>
          <a class="footer-link" href="tel:53390572">(533) 9-05-72</a> -
          Оперативно-дежурная служба (в период с 1.11 по 15.03 круглосуточно)
        </p>

        <p>
          <a class="footer-link" href="tel:53365671">(533) 6-56-71</a> - Служба
          безопасности
        </p>
        <p>
          <a class="footer-link" href="tel:53397022">(533) 9-70-22</a> - ПТО
        </p>
        <p>
          Email
          <a class="footer-link" href="mailto:tdrsu@idknet.com"
            >tdrsu@idknet.com</a
          >
        </p>
      </div>
      <div class="">@2021</div>
    </slot>
  </footer>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
export default class LayoutFooter extends Vue {}
</script>

<style lang="less">
footer {
  padding: 32px;
  background-color: #3d3d3d;
  flex: 0 0 auto;
  font-size: 0.8em;
  text-align: left;
  line-height: 1.5em;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #fff;
  .footer-logo {
    margin-bottom: 10px;
    // border: #ffd422 1px solid;
    border-radius: 4px;
    background: #ffd422;
    color: #3d3d3d;
    width: fit-content;
    padding: 0 10px 10px 10px;
  }
  .footer-content {
    height: auto;
    padding-bottom: 10px;
    border-bottom: 1px solid #636363;
  }
  .tel {
    color: #ffd422;
  }
  a.footer-link {
    color: #ffd422;
    &:hover {
      text-decoration: unset;
    }
  }
}
</style>