import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import Tirscript3Components from "tirscript3-components"
import Tirscript3InputComponent from 'tirscript3-input';
const app = createApp(App)
app.use(store)
app.use(router)
// app.component("tirscript3-input", Tirscript3InputComponent)
import regComponents from "./regComponents";
regComponents(app);
app.mount("#app");
// const x = Tirscript3Components
