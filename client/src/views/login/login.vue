<template>
  <div class="login">
    <div class="wrap">
      <div class="login__form">
        <h2>Login</h2>
        <bs-row>
          <!-- <bs-col>User name</bs-col>
          <bs-col><tirscript3-input /></bs-col> -->
          <!-- <bs-col> -->
          <ui-input-box v-model="login"></ui-input-box>
          <!-- </bs-col> -->
        </bs-row>
        <bs-row>
          <!-- <bs-col>Password</bs-col> -->
          <!-- <bs-col> -->
          <!-- <tirscript3-input type="password" /> -->
          <ui-input-box v-model="password"></ui-input-box>
          <!-- </bs-col> -->
        </bs-row>
        <bs-row>
          <bs-col>
            <tirscript3-button active>Login</tirscript3-button>
          </bs-col>
          <bs-col>
            <tirscript3-button>Cancel</tirscript3-button>
          </bs-col>
        </bs-row>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-property-decorator";
import InputBoxModel from "../components/inputBoxModel";
import UiInputBox from "../components/ui-input-box.vue";
// import { FORGOTPESSWORD, ENTERPRISES } from "@/router/routerNames";
@Options({
  emits: ["goToAdmin"],
  components: { UiInputBox },
})
export default class LoginPageComponent extends Vue {
  username = "";
  // password = "";
  errorMessage: string = "";
  wrong: boolean = false;
  isshowEye = false;
  login: InputBoxModel;
  password: InputBoxModel;

  created() {
    this.login = new InputBoxModel({
      Name: "User name",
      Value: "",
      Type: "text",
      Requared: true,
    });
    this.password = new InputBoxModel({
      Name: "Password",
      Value: "",
      Type: "password",
      Requared: true,
    });
  }
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
<style lang="less">
.login {
  display: flex;
  height: 100vh;
  background: url("../../assets/img/bg.jpg");
  background-size: cover;
  .wrap {
    margin: auto;
    .login__form {
      // background: #ccc;
      min-width: 400px;
      -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
      -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
      box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
      background: rgba(34, 60, 80, 0.8);
      border-radius: 10px;
      border: 1px solid #ccc;
      padding: 40px;
      color: #fff;
      box-sizing: border-box;
      h2 {
        padding: 0;
        margin: 0 0 30px;
      }
    }
  }
}

.tirscript-input {
  .form-control {
    padding: 0.2em;
    background: #fff;
  }
  input.form-control {
  }
}
</style>