import { createApp } from "vue";
import App from "./App.vue";

let app = createApp(App);
app.config.errorHandler = (err) => {
  alert(err);
};

/**
 * If you are using Vue to enhance server-rendered HTML
 * and only need Vue to control specific parts of a large page,
 * avoid mounting a single Vue application instance on the entire page.
 *  Instead, create multiple small application instances and mount them on the elements they are responsible for.
 */
app.mount("#app");
