<template>
  <div>
    <pv-message v-if="showMessage" :severity="messageType" closable>
      {{ messageText }}
    </pv-message>
    <div class="container">
      <h2>Crear nueva asignación</h2>
      <form class="form" @submit.prevent="submitForm">
        <div class="form-group-inline">
          <div class="form-group">
            <label for="name">Nombre de asignación:</label>
            <input type="text" id="name" v-model="team.name" required />
          </div>
          <div class="form-group">
            <label for="description">Descripción:</label>
            <input type="text" id="description" v-model="team.description" required />
          </div>
        </div>
        <div class="form-group">
          <label for="employee">Lista de Empleados:</label>
          <select id="employee" v-model="team.id_Employee" required>
            <option v-for="item in employeeList" :key="item.id" :value="item.id">{{ item.name }}</option>
          </select>
          <p v-if="employeeError" class="error-message">Empleado no válido.</p>
        </div>
        <div class="form-group">
          <label for="project">Lista de Proyectos:</label>
          <select id="project" v-model="team.id_Project" required>
            <option v-for="item in projectList" :key="item.id" :value="item.id">{{ item.name }}</option>
          </select>
          <p v-if="projectError" class="error-message">Proyecto no válido.</p>
        </div>
        <div class="form-group">
          <label for="task">Lista de Tareas:</label>
          <select id="task" v-model="team.id_Task" required>
            <option v-for="item in taskList" :key="item.id" :value="item.id">{{ item.name }}</option>
          </select>
          <p v-if="taskError" class="error-message">Tarea no válida.</p>
        </div>
        <button
          type="submit"
          :disabled="isFormEmpty || taskError || employeeError || projectError"
          class="btn-register"
        > 
          Continuar
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { TaskService } from '../services/task.service';
import { ProjectService } from '../services/project.service';
import {TrabajadorApiService} from '../services/trabajadores-api.service';
import { TeamService } from '../services/team.service';

export default {
  name: 'CrearEquipoComponent',
  data() {
    return {
      team: {
        name: '',
        description: '',
        id_Employee: 0,
        id_Project: 0,
        id_Task: 0,
      },
      employeeList: [],
      projectList: [],
      taskList: [],
      employeeError: false,
      projectError: false,
      taskError: false,
      taskService: new TaskService(),
      projectService: new ProjectService(),
      workerService: new TrabajadorApiService(),
      teamService: new TeamService(),
      messageType: '',
      messageText: '',
      showMessage: false,
      responseTask: [],
      responseProject: [],
      responseEmployee: []
    };
  },
  computed: {
    isFormEmpty() {
      return (
        this.team.name === '' ||
        this.team.description === '' ||
        this.team.id_Employee === 0 ||
        this.team.id_Project === 0 ||
        this.team.id_Task === 0
      );
    },
  },
  methods: {
    validateEmployee() {
      this.employeeError = !this.employeeList.some(employee => employee.id === this.team.id_Employee);
    },
    validateProject() {
      this.projectError = !this.projectList.some(project => project.id === this.team.id_Project);
    },
    validateTask() {
      this.taskError = !this.taskList.some(task => task.id === this.team.id_Task);
    },
    async submitForm() {
      this.validateEmployee();
      this.validateProject();
      this.validateTask();

      if (!this.isFormEmpty && !this.employeeError && !this.projectError && !this.taskError) {
        await this.createTeam();
      }
    },
    async uploadLists() {
      const responseTask = await this.taskService.getAllTasks();
      this.taskList = responseTask.data.map(task => ({ id: task.id, name: task.name }));
      
      const responseProject = await this.projectService.getAllProjects();
      this.projectList = responseProject.data.map(project => ({ id: project.id, name: project.name }));

      const responseEmployee = await this.workerService.getAllTrabajadores();
      this.employeeList = responseEmployee.data.map(employee => ({ id: employee.id, name: `${employee.name} - ${employee.cargo}` }));

      console.log(this.taskList);
      console.log(this.projectList);
      console.log(this.employeeList);
    },
    async createTeam() {
      try {
        console.log(this.team);
        const response = await this.teamService.crearteam(this.team); // Reemplaza this.yourPostService.createTeam por el servicio de tu API
        if (response.status === 201) {
          // Mostrar mensaje de éxito
          this.showMessage = true;
          this.messageType = 'success';
          this.messageText = 'Asignación creada exitosamente';
        }
      } catch (error) {
        console.error('Error creando la asignación:', error);
        // Mostrar mensaje de error
        this.showMessage = true;
        this.messageType = 'error';
        this.messageText = 'Error creando la asignación';
      }
    },
  },
  mounted() {
    this.uploadLists();
  }
};
</script>
    
  <style scoped>
  /* estilos para el contenedor principal */
  .container {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  /* estilos para la sección derecha */
  
  h2 {
    color: #000000;
    font-size: 1.2rem;
    margin-bottom: 15px;
    text-align: center;
  }
  
  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin-bottom: 5px;
  }
  
  label {
    color: #000000;
    font-size: 1rem;
    margin-bottom: 0 px;
  }
  
  input[type='text'],
  select#task,
  select#employee,
  select#project{
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 20px;
    background-color: #f4f4f4;
    margin-bottom: 1rem;
  }
  
  button.btn-register {
    background-color: #c9725b;
    color: white;
    font-size: 1.2rem;
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  .btn-register {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  .btn-register:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
  .form-group-inline {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 5px;
  }
  
  .verification {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }
  
  .message-icon {
    margin-right: 10px;
    width: 25px;
    height: 25px;
    object-fit: contain;
  }
  
  .verification p {
    font-size: 14px;
    margin: 0;
  }
  
  p {
    color: black;
  }
  </style>