<template>
  <div class="login">
    <div class="wrap">
      <div class="login__form">
        <h3 class="mb-">Вход</h3>
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
        <bs-row class="login__btns">
          <tirscript3-button active @click="onLogin">Ок</tirscript3-button>
          <tirscript3-button>Отмена</tirscript3-button>
        </bs-row>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-property-decorator";
import InputBoxModel from "../components/inputBoxModel";
import UiInputBox from "../components/ui-input-box.vue";

@Options({
  emits: [""],
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
      Name: "Имя пользователя",
      Value: "",
      Type: "text",
      Required: true,
    });
    this.password = new InputBoxModel({
      Name: "Пароль",
      Value: "",
      Type: "password",
      Required: true,
    });
  }
  onLogin() {
    this.$router.push({ name: "adminDefault" });
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
      border: 1px solid rgb(77, 77, 77);
      padding: 40px;
      color: #fff;
      box-sizing: border-box;
      h2 {
        padding: 0;
        margin: 0 0 30px;
      }
      .login__btns {
        justify-content: space-evenly;
      }
    }
  }
  .tirscript-button {
    max-width: 100px;
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