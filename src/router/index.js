import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../components/landingpagecomponents/index.vue';
import Register from '../components/Register.vue';
import LogIn from '../components/LogIn.vue';
import Verification from '../components/verification.vue';
import Section from '../components/Seccion/seccion.component.vue';
import Trabajadores from '../components/trabajadores/lista_trabajadores.vue';
import trabajadoresCard from '../components/trabajadores/trabajadores-card.vue';
import blog from '../components/landingpagecomponents/blog.vue';
import conocenos from '../components/landingpagecomponents/conocenos.vue';
import contacto from '../components/landingpagecomponents/contacto.vue';
import planes from '../components/landingpagecomponents/planes.vue';

import servicios from '../components/landingpagecomponents/servicios.vue';
import SelectCargo from '../components/selectCargo.vue';
import AlertaCerrarSesion from '../components/AlertNotification/AlertaCerrarSesion.vue';
import VisionGeneral from '../components/VisionGeneral/VisionGeneral.vue';

import Calendar from '../components/Calendar/Calendar.vue';
import communiques from '../components/communiques/communiques.vue';
import Perfil from '../components/SideBar/Perfil.vue';
import Herramientas from '../components/herramientas/Herramientas.vue'

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
  {
    path: '/verification',
    component: Verification,
  },
  {
    path: '/comunicados',
    component: communiques,
    meta: { title: 'Comunicados' },
  },
  {
    path: '/section',
    component: Section,
    meta: { title: 'Secciones' },
  },
  {
    path: '/calendar',
    component: Calendar,
    meta: { title: 'Calendario' },
  },
  {
    path: '/trabajadores',
    component: Trabajadores,
    meta: { title: 'Trabajadores' },
  },
  {
    path: '/Trabajador/:id',
    component: trabajadoresCard,
    props: true,
    name: 'Trabajador',
    meta: { title: 'Trabajador' },
  },
  {
    path: '/blog',
    component: blog,
  },
  {
    path: '/conocenos',
    component: conocenos,
  },
  {
    path: '/contacto',
    component: contacto,
  },
  {
    path: '/planes',
    component: planes,
  },
  {
    path: '/servicios',
    component: servicios,
  },
  {
    path: '/selectCargo',
    component: SelectCargo,
  },
  {
    path: '/Perfil',
    component: Perfil,
    meta: { title: 'Perfil' },
  },
  {
    path: '/Herramientas',
    component: Herramientas,
    meta: { title: 'Herramientas' },
  },
  {
    path: '/AlertaCerrarSesion',
    component: AlertaCerrarSesion,
  },
  {
    path: '/VisionGeneral',
    component: VisionGeneral,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
