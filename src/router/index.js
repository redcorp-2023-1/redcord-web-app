import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../components/landingpagecomponents/index.vue';
import Register from '../components/Register.vue';
import LogIn from '../components/LogIn.vue';
import Verification from '../components/verification.vue';
import Section from '../components/Seccion/seccion.component.vue';
import Trabajadores from '../components/trabajadores/lista_trabajadores.vue';
import trabajadoresCard from '../components/trabajadores/trabajadores-card.vue';

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
  { path: '/section', component: Section },
  {path:'/trabajadores',component: Trabajadores},
  {path:'/Trabajador/:id/:nombre/:correo/:area/:foto/',component:trabajadoresCard,props:true,name: "Trabajador"}
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
