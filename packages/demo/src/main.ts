import { createApp } from "vue";
import App from "./App.vue";
import API from "api-swag-core";
console.log(API, "API");

// API.AdminController.getSysAdminsByPage(1, 10).then();
createApp(App).mount("#app");
