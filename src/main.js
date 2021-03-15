import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// Vant 桌面端
import "@vant/touch-emulator";

import { Button, NavBar, Tabbar, TabbarItem, NumberKeyboard, Field } from "vant";
//import "./theme/index.less";

createApp(App)
  .use(router)
  .use(Button)
  .use(NavBar).use(Tabbar).use(TabbarItem).use(NumberKeyboard).use(Field)
  .mount("#app");
