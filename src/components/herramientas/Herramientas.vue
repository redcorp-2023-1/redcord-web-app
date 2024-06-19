<template>
  <div class="main-container">
    <div class="button-container">
      <button @click="createNewUser">Crear Nuevo Usuario</button>
      <button @click="createTask">Crear Tareas</button>
      <button @click="createNewProject">Crear Nuevo Proyecto</button>
      <button @click="createNewTeam">Crear Nuevo Equipo</button>
    </div>
    <div class="content-container">
      <CrearUsuarioComponent v-if="currentComponent === 'createNewUser'" />
      <AñadirTareaComponent v-if="currentComponent === 'createTask'" />
      <AñadirProyectoComponent v-if="currentComponent === 'createNewProject'" />
      <CrearEquipoComponent v-if="currentComponent === 'createNewTeam'" />
    </div>
  </div>
</template>

<script>
import CrearUsuarioComponent from './CrearUsuarioComponent.vue';
import AñadirProyectoComponent from './AñadirProyectoComponent.vue';
import AñadirTareaComponent from './AñadirTareaComponent.vue';
import CrearEquipoComponent from './CrearEquipoComponent.vue';
export default {
  name: 'Herramientas',
  components: {
    CrearUsuarioComponent,
    AñadirProyectoComponent,
    AñadirTareaComponent,
    CrearEquipoComponent
  },
  data() {
    return {
      currentComponent: null
    };
  },
  methods: {
    assignUser() {
      this.currentComponent = 'assignUser';
    },
    createNewUser() {
      this.currentComponent = 'createNewUser';
    },
    createTask() {
      this.currentComponent = 'createTask';
    },
    createNewProject() {
      this.currentComponent = 'createNewProject';
    },
    createNewTeam() {
      this.currentComponent = 'createNewTeam';
    }
  }
}
</script>

<style>
.main-container {
  display: flex;
}

.button-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 200px;
  margin: 20px;
}

.button-container button {
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.button-container button:hover {
  background-color: #0056b3;
}

.content-container {
  flex-grow: 1;
  padding: 20px;
  border-left: 1px solid #ddd;
}
</style>