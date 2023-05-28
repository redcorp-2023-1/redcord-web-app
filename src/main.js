import { createApp } from 'vue';
import PrimeVue from 'primevue/config';

import { router } from './router';

import 'primevue/resources/themes/lara-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import './style.css';


import App from './App.vue';

import Button from 'primevue/button'
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   
import Row from 'primevue/row'; 
import Toolbar from 'primevue/toolbar';
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';

const app = createApp(App);

app.component('pv-button', Button)
app.component('pv-datatable', DataTable)
app.component('pv-column', Column)
app.component('pv-columnGroup', ColumnGroup)
app.component('pv-row', Row)
app.component('pv-toolbar',Toolbar)
app.component('pv-splitter',Splitter)
app.component('pv-splitterpanel',SplitterPanel)

app.use(PrimeVue);
app.use(router);
app.mount('#app');
