import { createApp } from 'vue';
import PrimeVue from 'primevue/config';

import { router } from './router';

import 'primevue/resources/themes/lara-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import './style.css';
import App from './App.vue';

const app = createApp(App);

app.use(PrimeVue);
app.use(router);
app.mount('#app');
