import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../components/landingpagecomponents/index.vue';
import Register from '../components/Register.vue';
import LogIn from '../components/LogIn.vue';
import Verification from '../components/verification.vue';
import Section from '../components/Seccion/seccion.component.vue';
import Trabajadores from '../components/trabajadores/lista_trabajadores.vue';
import trabajadoresCard from '../components/trabajadores/trabajadores-card.vue';
import blog from'../components/landingpagecomponents/blog.vue';
import conocenos from '../components/landingpagecomponents/conocenos.vue';
import contacto from '../components/landingpagecomponents/contacto.vue';
import planes from '../components/landingpagecomponents/planes.vue';
import servicios from '../components/landingpagecomponents/servicios.vue'
import SelectCargo from "../components/selectCargo.vue";
import AlertaCerrarSesion from "../components/AlertNotification/AlertaCerrarSesion.vue";
import VisionGeneral from "../components/VisionGeneral/VisionGeneral.vue";

const routes = [
  {path: '/',component: LandingPage,},
  {path: '/login',component: LogIn, },
  {path: '/register',component: Register,},
  { path: '/verification', component: Verification },
  { path: '/section', component: Section },
  { path: '/trabajadores', component: Trabajadores },
  {path: '/Trabajador/:id/:nombre/:correo/:area/:foto/',component: trabajadoresCard,props: true,name: 'Trabajador',},
  {path:'/blog',component:blog},
  {path:'/conocenos',component:conocenos},
  {path:'/contacto',component:contacto},
  {path:'/planes',component:planes},
  {path:'/servicios',component:servicios},
  {path: '/selectCargo', component: SelectCargo},
  {path: '/AlertaCerrarSesion', component: AlertaCerrarSesion},
  {path: '/VisionGeneral', component: VisionGeneral},

];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
