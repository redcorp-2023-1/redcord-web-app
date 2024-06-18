<template>
  <pv-message v-if="showMessage" :severity="messageType" closable>
      {{ messageText }}
    </pv-message>
  <div class="container">
    <h2>Crea un nuevo usuario</h2>
    <form class="form" @submit.prevent="submitForm">
      <div class="form-group-inline">
        <div class="form-group">
          <label for="name">Nombre:</label>
          <input type="text" id="name" v-model="user.name" required />
        </div>
        <div class="form-group">
          <label for="last_name">Apellido:</label>
          <input type="text" id="last_name" v-model="user.last_name" required />
        </div>
      </div>
      <div class="form-group">
        <label for="dni">DNI:</label>
        <input
          type="text"
          id="dni"
          v-model="user.dni"
          @input="validateDNI"
          pattern="\d{8}"
          required
        />
        <p v-if="dniError" class="error-message">El DNI debe tener exactamente 8 dígitos numéricos.</p>
      </div>
      <div class="form-group">
        <label for="email">Dirección de correo electrónico:</label>
        <input type="email" id="email" v-model="user.email" required />
      </div>
      <div class="form-group">
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="user.password" required />
      </div>
      <div class="form-group">
        <label for="area">Área:</label>
        <select id="area" v-model="user.area" required>
          <option v-for="item in areaList" :key="item" :value="item">{{ item }}</option>
        </select>
        <p v-if="areaError" class="error-message">Área no válida.</p>
      </div>
      <div class="form-group">
        <label for="cargo">Cargo:</label>
        <select id="cargo" v-model="user.cargo" required>
          <option v-for="item in cargoList" :key="item" :value="item">{{ item }}</option>
        </select>
        <p v-if="cargoError" class="error-message">Cargo no válido.</p>
      </div>
      <div class="form-group">
        <label for="roles">Roles:</label>
        <select id="roles" v-model="user.roles" required>
          <option v-for="item in rolesList" :key="item" :value="item">{{ item }}</option>
        </select>
        <p v-if="rolesError" class="error-message">Cargo no válido.</p>
      </div>
      <button
        type="submit"
        :disabled="isFormEmpty  || dniError || areaError || cargoError || rolesError"
        class="btn-register"
      >
        Continuar
      </button>
    </form>
    
  </div>
</template>
  
<script>
    import { TrabajadorApiService } from '../services/trabajadores-api.service';
    import { AuthApiService } from '../services/AuthUser.service';

    export default {
        name: 'CrearUsuarioComponent',
        data() {
        return {
            user: {
              name: '',
              last_name: '',
              dni: '',
              email: '',
              password: '',
              area: '',
              cargo: '',
              photo: 'https://cdn-icons-png.flaticon.com/512/1077/1077063.png',
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
            rolesList: ['user', 'admin'],
            areaListId: 'areaList',
            cargoListId: 'cargoList',
            dniError: false,
            areaError: false,
            cargoError: false,
            rolesError: false,
            workersService: new TrabajadorApiService(),
            authService: new AuthApiService(),
            messageType: '', // Puedes definir tipos como 'success', 'info', 'warning', 'error' según tu librería
            messageText: '',
            showMessage: false
        };
        },
        computed: {
            isFormEmpty() {
                return (
                this.user.name === '' ||
                this.user.last_name === '' ||
                this.user.email === '' ||
                this.user.password === '' ||
                this.user.dni === '' ||
                this.user.area === '' ||
                this.user.cargo === '' ||
                this.user.roles === ''
                );
            },
        },
        methods: {

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
            validateRoles() {
                this.rolesError = !this.rolesList.includes(this.user.roles);
            },
            async submitForm() {
              this.validateDNI();
              this.validateArea();
              this.validateCargo();
              this.validateRoles();
              if (!this.isFormEmpty && !this.dniError && !this.areaError && !this.cargoError) {
                await this.createProfile();
              }
            },
            async createProfile() {
              try {
                const response = await this.authService.postTrabajador(this.user);
                
                if (response.user_id != '') {
                  // Mostrar mensaje de éxito
                  this.showMessage = true;
                  this.messageType = 'success';
                  this.messageText = 'Usuario creado exitosamente';

                  // Aquí podrías redirigir a otra página, etc.
                }
              } catch (error) {
                console.error('Error creando el perfil:', error);
                // Mostrar mensaje de error
                this.showMessage = true;
                this.messageType = 'error';
                this.messageText = 'Error creando el perfil';
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

input[type='email'],
input[type='password'],
input[type='text'],
select#roles,
select#cargo,
select#area {
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