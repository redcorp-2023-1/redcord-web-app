<template>
    <main>
        <SideBar></SideBar>
        <div class="edit-profile-container">
            <h2>Editar Perfil</h2>
            <form class="form" @submit.prevent="submitForm">
                <div class="form-group-inline">
                    <div class="form-group">
                        <label for="name">Nombre:</label>
                        <input type="text" id="name" v-model="user.name" required />
                    </div>
                    <div class="form-group">
                        <label for="lastname">Apellido:</label>
                        <input type="text" id="lastname" v-model="user.last_name" required />
                    </div>
                </div>
                <div class="form-group">
                    <label for="dni">DNI:</label>
                    <input type="text" id="dni" v-model="user.dni" required @input="validateDNI" />
                    <p v-if="dniError" class="error-message">El DNI debe tener exactamente 8 dígitos numéricos.</p>
                </div>
                <div class="form-group">
                    <label for="email">Dirección de correo electrónico:</label>
                    <input type="email" id="email" v-model="user.email" required />
                </div>
                <div class="form-group">
                    <label for="area">Área:</label>
                    <input type="text" id="area" v-model="user.area" :list="areaListId" required @blur="validateArea" />
                    <datalist :id="areaListId">
                        <option v-for="item in areaList" :key="item" :value="item"></option>
                    </datalist>
                    <p v-if="areaError" class="error-message">Área no válida.</p>
                </div>
                <div class="form-group">
                    <label for="cargo">Cargo:</label>
                    <input type="text" id="cargo" v-model="user.cargo" :list="cargoListId" required @blur="validateCargo" />
                    <datalist :id="cargoListId">
                        <option v-for="item in cargoList" :key="item" :value="item"></option>
                    </datalist>
                    <p v-if="cargoError" class="error-message">Cargo no válido.</p>
                </div>
                <div class="form-group">
                    <label for="photo">URL de la Foto:</label>
                    <input type="text" id="photo" v-model="user.photo" required />
                </div>
                <div class="form-group">
                    <button
                    type="submit"
                    :disabled="isFormEmpty || dniError || areaError || cargoError"
                    class="btn-update"
                        >
                        Actualizar
                    </button>
                </div>
                
            </form>
        </div>
    </main>
    
  </template>
  
  <script>
  import SideBar from './SideBar.vue';
  import { TrabajadorApiService } from '../services/trabajadores-api.service';
  
  export default {
    name: 'EditProfile',
    data() {
      return {
        user: {
          name: '',
          last_name: '',
          dni: '',
          email: '',
          area: '',
          cargo: '',
          photo: ''
        },
        areaList: [
            'Area de Sistemas',
            'Finanzas y Contabilidad',
            'Recursos Humanos',
            'Marketing y Ventas',
            'Producción',
            'Desarrollo de Software',
            'Administración',
        ],
        cargoList: [
          'Supervisor',
          'Ejecutiva de ventas',
          'Gerente',
          'Especialista Digital',
          'Analista Financiero',
          'Desarrollador',
          'Reclutamiento',
          'Coordinador',
          'Representante',
          'Analista',
          'Junior',
        ],
        areaListId: 'areaList',
        cargoListId: 'cargoList',
        dniError: false,
        areaError: false,
        cargoError: false,
        workersService: new TrabajadorApiService(),
      };
    },
    computed: {
      isFormEmpty() {
        return (
          this.user.name === '' ||
          this.user.lastname === '' ||
          this.user.email === '' ||
          this.user.dni === '' ||
          this.user.area === '' ||
          this.user.cargo === '' ||
          this.user.photo === ''
        );
      },
    },
    methods: {
      async fetchUserProfile() {
        const idEmployee = localStorage.getItem('id_employee');
        try {
          const response = await this.workersService.getById(idEmployee); // Assuming this method fetches the user's profile
          this.user = response.data;
        } catch (error) {
          console.error('Error fetching user profile:', error);
        }
      },
      validateDNI() {
        const dniPattern = /^\d{8}$/;
        this.dniError = !dniPattern.test(this.user.dni);
      },
      validateArea() {
        this.areaError = !this.areaList.includes(this.user.area);
      },
      validateCargo() {
        this.cargoError = !this.cargoList.includes(this.user.cargo);
      },
      async submitForm() {
        this.validateDNI();
        this.validateArea();
        this.validateCargo();
        if (!this.isFormEmpty && !this.dniError && !this.areaError && !this.cargoError) {
          await this.updateProfile();
        }
      },
      async updateProfile() {
        const idEmployee = localStorage.getItem('id_employee');
        try {
          await this.workersService.updateTrabajador(idEmployee,this.user); // Assuming this method updates the user's profile
          this.$router.push('/Perfil'); // Redirect to the profile page after successful update
        } catch (error) {
          console.error('Error updating profile:', error);
        }
      },
    },
    mounted() {
      this.fetchUserProfile();
    },
  };
  </script>
  
  <style>
  .edit-profile-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #22242e;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    
  }
  
  h2 {
    margin-bottom: 20px;
    text-align: center;
  }
  label {
  color: #6a5dc4;
}
  .form-group-inline {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 5px;
  }
  
  .form-group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-bottom: 5px;
}
  
  .form-group:last-child {
    margin-right: 0;
  }
  
  .error-message {
    color: red;
    font-size: 0.9rem;
  }
  input[type='email'],
input[type='password'],
input[type='text'] {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 20px;
  background-color: #f4f4f4;
  margin-bottom: auto;
}
  .btn-update {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #6c63ff;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
  }
  
  .btn-update:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  </style>
  