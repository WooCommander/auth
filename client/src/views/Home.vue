<template>
  <layout>
    <div class="home">
      <p style="text-align: center">
        Добро пожаловать на официальный сайт Тираспольского
        дорожно-строительного управления.
      </p>
      <h1 align="center"><strong>МУП «Тираспольского ДРСУ»</strong></h1>
      <p style="text-align: center">
        На нашем сайте вы сможете увидеть краткий отчет о проделанной нами
        работе, узнать контактные номера телефонов, написать отзывы и
        предложения. А также познокомиться с вакансиями и может быть найти новую
        интересную работу.
      </p>
      <p style="text-align: center">График работы с 8.00 до 17.00</p>
      <h2 style="text-align: center">
        <strong>Мы делаем дороги Тирасполя</strong>
      </h2>
    </div>
  </layout>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import layout from "../layout/layout.vue"; // @ is an alias to /src

@Options({
  components: {
    layout,
  },
})
export default class Home extends Vue {}
</script>
<style lang="less">
.home {
}
</style>
