import { createApp } from "vue";
import App from "./App.vue";
import API from "api-swag-core";

API.AdminController.getSysAdminsByPage(1, 10).then();
createApp(App).mount("#app");
