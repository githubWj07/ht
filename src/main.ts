import { createApp } from "vue";
import {registerApp} from "./global";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'normalize.css'
import 'assets/css/base.less'

import { setupStore } from './store'

const app = createApp(App);
app.use(registerApp);
app.use(store);

setupStore();

app.use(router);

app.mount("#app");


