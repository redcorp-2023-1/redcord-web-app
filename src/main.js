import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';

import { router } from './router';

import 'primevue/resources/themes/lara-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import './style.css';

import App from './App.vue';

import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Row from 'primevue/row';
import Toolbar from 'primevue/toolbar';
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import Divider from 'primevue/divider';
import Dialog from 'primevue/dialog';
import Calendar from 'primevue/calendar';
import Chart from 'primevue/chart';
import InputText from 'primevue/inputtext';
import Sidebar from 'primevue/sidebar';

const app = createApp(App);

app.component('pv-button', Button);
app.component('pv-datatable', DataTable);
app.component('pv-column', Column);
app.component('pv-columnGroup', ColumnGroup);
app.component('pv-row', Row);
app.component('pv-toolbar', Toolbar);
app.component('pv-splitter', Splitter);
app.component('pv-splitterpanel', SplitterPanel);
app.component('pv-divider', Divider);
app.component('pv-dialog', Dialog);
app.component('pv-chart', Chart);
app.component('pv-calendar', Calendar);
app.component('pv-chart', Chart);
app.component('pv-input-text', InputText);
app.component('pv-sidebar', Sidebar);

app.use(PrimeVue);
app.use(router);
app.use(VCalendar);
app.mount('#app');
