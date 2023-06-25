<template>
  <div class="card flex justify-content-center">
    <pv-button class="Button-inicar" label="Show" @click="visible = true">
      <img class="iconos" src="./images/out.png" /> Cerrar sesión
    </pv-button>

    <pv-dialog v-model:visible="visible" modal header="Cerrar Sesión" :style="{ width: '30vw' }">
      <p>
        ¿Está seguro que desea cerrar sesión? Si lo hace, no podrá acceder a la plataforma hasta que
        inicie sesión de nuevo.
      </p>
      <template #footer>
        <pv-button label="Cancelar" icon="pi pi-times" @click="visible = false" text />
        <pv-button label="Cerra la sesión" icon="pi pi-check" @click="cerrarSesion" autofocus />
      </template>
    </pv-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const visible = ref(false);
const router = useRouter();

const cerrarSesion = () => {
  // Realizar acciones de cierre de sesión si es necesario

  // Redireccionar a la página principal
  router.push('/');
};
</script>
<style scoped>
.iconos {
  max-width: 30px;
  max-height: 30px;
  color: #7da4ca;
}

button-iniciar important {
  margin-top: 25px;
  font-weight: bold;
  background: #22242e;
  font-size: 1.4em;
  padding: 5px;
  border-radius: 20px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
pv-butttoover {
  background-color: rgba(55, 81, 118, 0.5);
}
</style>
