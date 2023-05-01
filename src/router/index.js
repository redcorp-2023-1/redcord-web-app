import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../components/landingpagecomponents/index.vue';
import Register from '../components/Register.vue';
import LogIn from '../components/LogIn.vue';
import Verification from '../components/verification.vue';
import Section from '../components/Seccion/seccion.component.vue';

const routes = [
  {
    path: '/',
    component: LandingPage,
  },
  {
    path: '/login',
    component: LogIn,
  },
  {
    path: '/register',
    component: Register,
  },
  { path: '/verification', component: Verification },
  { path: '/home', component: Section },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
