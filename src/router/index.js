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
    path: '/section',
    component: Section,
    meta: { title: 'Secciones' },
  },
  {
    path: '/trabajadores',
    component: Trabajadores,
    meta: { title: 'Trabajadores' },
  },
  {
    path: '/Trabajador/:id/:nombre/:correo/:area/:foto/',
    component: trabajadoresCard,
    props: true,
    name: 'Trabajador',
    meta: { title: 'Trabajador' },
  },
  {
    path: '/blog',
    component: blog,
    meta: { title: 'Blog' },
  },
  {
    path: '/conocenos',
    component: conocenos,
    meta: { title: 'Conocenos' },
  },
  {
    path: '/contacto',
    component: contacto,
    meta: { title: 'Contacto' },
  },
  {
    path: '/planes',
    component: planes,
    meta: { title: 'Planes' },
  },
  {
    path: '/servicios',
    component: servicios,
    meta: { title: 'Servicios' },
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
