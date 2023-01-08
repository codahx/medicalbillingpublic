import App from './App.vue';
import router from './router';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'mdb-vue-ui-kit/css/mdb.min.css';
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';
import { Quasar } from 'quasar';
import { createApp } from 'vue';

const app = createApp(App);
app.use(router).mount('#app');
app.use(Quasar);
