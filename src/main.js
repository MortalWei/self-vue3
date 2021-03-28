import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// Vant 桌面端
import "@vant/touch-emulator";

import {
  Button,
  NavBar,
  Tabbar,
  TabbarItem,
  NumberKeyboard,
  Field,
  Overlay,
  Icon,
  Loading,
  Tag,
  Divider,
  Card,
  Cell,
  CellGroup
} from "vant";
//import "./theme/index.less";

createApp(App)
  .use(router)
  .use(Button)
  .use(NavBar).use(Tabbar).use(TabbarItem).use(NumberKeyboard).use(Field)
  .use(Overlay)
  .use(Icon)
  .use(Loading)
  .use(Tag)
  .use(Divider)
  .use(Card)
  .use(Cell)
  .use(CellGroup)
  .mount("#app");
