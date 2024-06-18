<template>
    <div>
      <pv-message v-if="showMessage" :severity="messageType" closable>
        {{ messageText }}
      </pv-message>
      <div class="container">
        <h2>Crea nuevo proyecto</h2>
        <form class="form" @submit.prevent="submitForm">
          <div class="form-group-inline">
            <div class="form-group">
              <label for="name">Nombre de proyecto:</label>
              <input type="text" id="name" v-model="project.name" required />
            </div>
            <div class="form-group">
              <label for="description">Descripción:</label>
              <input type="text" id="description" v-model="project.description" required />
            </div>
          </div>
          <div class="form-group">
            <label for="initialDate">Fecha de inicio (dd/mm/yyyy):</label>
            <input type="text" id="initialDate" v-model="project.initialDate" required />
            <p v-if="initialDateError" class="error-message">{{ messageText }}</p>
          </div>
          <div class="form-group">
            <label for="finalDate">Fecha de fin (dd/mm/yyyy):</label>
            <input type="text" id="finalDate" v-model="project.finalDate" required />
            <p v-if="finalDateError" class="error-message">{{ messageText }}</p>
          </div>
          <div class="form-group">
            <label for="State">Estado del proyecto:</label>
            <select id="State" v-model="project.state" required>
              <option v-for="item in StateList" :key="item" :value="item">{{ item }}</option>
            </select>
            <p v-if="StateError" class="error-message">Estado no válido.</p>
          </div>
          <button
            type="submit"
            :disabled="isFormEmpty || StateError || initialDateError || finalDateError"
            class="btn-register"
          >
            Continuar
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { TrabajadorApiService } from '../services/trabajadores-api.service';
  import { ProjectService } from '../services/project.service';
  
  export default {
    name: 'AñadirProyectoComponent',
    data() {
      return {
        project: {
          name: '',
          description: '',
          initialDate: '',
          finalDate: '',
          state: '',
        },
        StateList: [
          'In Revision',
          'To Do',
          'Completed',
          'In Progress'
        ],
        StateError: false,
        initialDateError: false,
        finalDateError: false,
        workersService: new TrabajadorApiService(),
        projectService: new ProjectService(),
        messageType: '',
        messageText: '',
        showMessage: false
      };
    },
    computed: {
      isFormEmpty() {
        return (
          this.project.name === '' ||
          this.project.description === '' ||
          this.project.initialDate === '' ||
          this.project.finalDate === '' ||
          this.project.state === ''
        );
      },
    },
    methods: {
      validateState() {
        this.StateError = !this.StateList.includes(this.project.state);
      },
      validateDates() {
        const datePattern = /^\d{2}\/\d{2}\/\d{4}$/;

        // Validar el formato de la fecha de inicio
        if (!datePattern.test(this.project.initialDate)) {
        this.initialDateError = true;
        this.showMessage = true;
        this.messageType = 'warning';
        this.messageText = 'Formato de fecha de inicio inválido. Use dd/mm/yyyy';
        return false;
        } else {
        this.initialDateError = false;
        }

        // Validar el formato de la fecha de fin
        if (!datePattern.test(this.project.finalDate)) {
        this.finalDateError = true;
        this.showMessage = true;
        this.messageType = 'warning';
        this.messageText = 'Formato de fecha de fin inválido. Use dd/mm/yyyy';
        return false;
        } else {
        this.finalDateError = false;
        }

        // Dividir las fechas en día, mes y año
        const [dayI, monthI, yearI] = this.project.initialDate.split('/');
        const [dayF, monthF, yearF] = this.project.finalDate.split('/');

        // Crear objetos de fecha
        const initialDate = new Date(yearI, monthI - 1, dayI);
        const finalDate = new Date(yearF, monthF - 1, dayF);

        // Verificar que la fecha de inicio sea menor que la fecha de fin
        if (initialDate >= finalDate) {
        this.showMessage = true;
        this.messageType = 'warning';
        this.messageText = 'La fecha de fin debe ser posterior a la fecha de inicio.';
        return false;
        }

        // Si todo está bien, ocultar el mensaje y devolver true
        this.showMessage = false;
        this.messageText = '';
        return true;
    },
    async submitForm() {
        this.validateState();
        const datesValid = this.validateDates();

        if (!this.isFormEmpty && !this.StateError && datesValid) {
        await this.createProject();
        }
    },
      async createProject() {
        try {
          const response = await this.projectService.postProject(this.project);
          if (response.status === 201) {
            // Mostrar mensaje de éxito
            this.showMessage = true;
            this.messageType = 'success';
            this.messageText = 'Proyecto creado exitosamente';
          }
        } catch (error) {
          console.error('Error creando el proyecto:', error);
          // Mostrar mensaje de error
          this.showMessage = true;
          this.messageType = 'error';
          this.messageText = 'Error creando el proyecto';
        }
      },
    },
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
  select#State{
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