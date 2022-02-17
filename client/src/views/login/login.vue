<template>
  <div class="login">
    <bs-row
      ><bs-col>Login<tirscript3-input /></bs-col
    ></bs-row>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-property-decorator";
// import { FORGOTPESSWORD, ENTERPRISES } from "@/router/routerNames";
@Options({
  emits: ["goToAdmin"],
})
export default class LoginPageComponent extends Vue {
  username = "";
  password = "";
  errorMessage: string = "";
  wrong: boolean = false;
  isshowEye = false;

  async enterPage() {
    //найти регулярное выражение для телефона, почитать про директивы
    // if (this.username.length == 0 || this.password.length == 0) {
    //   this.errorMessage = "Пароль или телефон не введен";
    //   this.wrong = true;
    // }
    // if (this.username.length > 0 && this.password.length > 0) {
    //   let res = await this.$api.AuthService.login({
    //     username: this.username,
    //     password: this.password,
    //   });
    //   if (res.IsSuccess) {
    //     this.$router.push({ name: ENTERPRISES });
    //     this.$store.state.CurrentUser = this.username;
    //     // console.log("res",res);
    //   } else {
    //     this.wrong = true;
    //     this.errorMessage = res.StatusText;
    //   }
    // }
  }

  forgot() {
    // this.$router.push({ name: FORGOTPESSWORD });
  }
  goToAdmin() {
    // this.$router.push({ name: this.Users });
  }
  ShowPassword() {
    var x = document.getElementById("password") as HTMLInputElement;
    if (x.type === "password") {
      this.isshowEye = true;
      x.type = "text";
    } else {
      x.type = "password";
      this.isshowEye = false;
    }
  }
}
</script>
<style scoped >
</style>