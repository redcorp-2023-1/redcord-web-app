<template>
    <div>
      <pv-message v-if="showMessage" :severity="messageType" closable>
        {{ messageText }}
      </pv-message>
      <div class="container">
        <h2>Crea nueva tarea</h2>
        <form class="form" @submit.prevent="submitForm">
          <div class="form-group-inline">
            <div class="form-group">
              <label for="name">Nombre de tarea:</label>
              <input type="text" id="name" v-model="task.name" required />
            </div>
            <div class="form-group">
              <label for="description">Descripción:</label>
              <input type="text" id="description" v-model="task.description" required />
            </div>
          </div>
          <div class="form-group">
            <label for="startDate">Fecha de inicio (dd/mm/yyyy):</label>
            <input type="text" id="startDate" v-model="task.startDate" required />
            <p v-if="initialDateError" class="error-message">{{ messageText }}</p>
          </div>
          <div class="form-group">
            <label for="finalDate">Fecha de fin (dd/mm/yyyy):</label>
            <input type="text" id="finalDate" v-model="task.finalDate" required />
            <p v-if="finalDateError" class="error-message">{{ messageText }}</p>
          </div>
          <button
            type="submit"
            :disabled="isFormEmpty || initialDateError || finalDateError"
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
  
  export default {
    name: 'AñadirTareaComponent',
    data() {
      return {
        task: {
          name: '',
          description: '',
          startDate: '',
          finalDate: '',
          isCompleted: false,
        },
        initialDateError: false,
        finalDateError: false,
        taskservice: new TaskService(),
        messageType: '',
        messageText: '',
        showMessage: false
      };
    },
    computed: {
      isFormEmpty() {
        return (
          this.task.name === '' ||
          this.task.description === '' ||
          this.task.initialDate === '' ||
          this.task.finalDate === ''
        );
      },
    },
    methods: {
      validateDates() {
        const datePattern = /^\d{2}\/\d{2}\/\d{4}$/;

        // Validar el formato de la fecha de inicio
        if (!datePattern.test(this.task.startDate)) {
        this.initialDateError = true;
        this.showMessage = true;
        this.messageType = 'warning';
        this.messageText = 'Formato de fecha de inicio inválido. Use dd/mm/yyyy';
        return false;
        } else {
        this.initialDateError = false;
        }

        // Validar el formato de la fecha de fin
        if (!datePattern.test(this.task.finalDate)) {
        this.finalDateError = true;
        this.showMessage = true;
        this.messageType = 'warning';
        this.messageText = 'Formato de fecha de fin inválido. Use dd/mm/yyyy';
        return false;
        } else {
        this.finalDateError = false;
        }

        // Dividir las fechas en día, mes y año
        const [dayI, monthI, yearI] = this.task.startDate.split('/');
        const [dayF, monthF, yearF] = this.task.finalDate.split('/');

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
        const datesValid = this.validateDates();

        if (!this.isFormEmpty && datesValid) {
        await this.createTarea();
        }
    },
      async createTarea() {
        try {
          const response = await this.taskservice.postTask(this.task);
          if (response.status === 201) {
            // Mostrar mensaje de éxito
            this.showMessage = true;
            this.messageType = 'success';
            this.messageText = 'Tarea creada exitosamente';
          }
        } catch (error) {
          console.error('Error creando la tarea:', error);
          // Mostrar mensaje de error
          this.showMessage = true;
          this.messageType = 'error';
          this.messageText = 'Error creando la tarea';
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