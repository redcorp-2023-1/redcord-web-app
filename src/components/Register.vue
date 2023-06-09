<template>
  <div class="container">
    <div class="left-section">
      <img src="../assets/logo.png" alt="logo" class="logo" />
      <p class="description">
        Descubre el mundo de la productividad para mejorar tu rutina laboral.
      </p>
      <img src="../assets/icono3.png" alt="icon" class="icon" />
    </div>
    <div class="right-section">
      <div class="header">
        <a href="#" class="link">Ya eres miembro</a>
        <RouterLink to="/login" class="link">Iniciar sesión</RouterLink>
      </div>
      <h2>Regístrate en RedCorp</h2>
      <form class="form">
        <div class="form-group-inline">
          <div class="form-group">
            <label for="name">Nombre:</label>
            <input type="text" id="name" v-model="name" required />
          </div>
          <div class="form-group">
            <label for="lastname">Apellido:</label>
            <input type="text" id="lastname" v-model="lastname" required />
          </div>
        </div>
        <div class="form-group">
          <label for="email">Dirección de correo electrónico:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">Contraseña:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <div class="form-group">
          <label for="confirm-password">Ingrese nuevamente la contraseña:</label>
          <input type="password" id="confirm-password" v-model="confirmPassword" required />
          <p v-if="passwordMismatch" class="error-message">Las contraseñas no coinciden.</p>
        </div>
        <div class="form-group">
          <label for="area">Area:</label>
          <input type="text" id="area" v-model="area" :list="areaListId" required />
          <datalist :id="areaListId">
            <option v-for="item in areaList" :key="item" :value="item"></option>
          </datalist>
        </div>
        <div class="form-group">
          <label for="cargo">Cargo:</label>
          <input type="text" id="cargo" v-model="cargo" required />
        </div>
        <div class="form-group">
          <label for="roles">Roles</label>
          <input type="text" id="roles" v-model="roles" :list="rolesListId" required />
          <datalist :id="rolesListId">
            <option v-for="item in rolesList" :key="item" :value="item"></option>
          </datalist>
        </div>
        <button
          @click="submitForm"
          ::disabled="isFormEmpty || passwordMismatch"
          class="btn-register"
        >
          Continuar
        </button>
      </form>
      <div class="verification">
        <img src="../assets/icono4.png" alt="icon" class="message-icon" />
        <p>Se enviará un código de verificación de acceso a su correo ingresado</p>
      </div>
    </div>
  </div>
</template>

<script>
import { AuthApiService } from './services/AuthUser.service';

export default {
  name: 'Register',
  data() {
    return {
      name: '',
      lastname: '',
      email: '',
      password: '',
      confirmPassword: '',
      area: '',
      cargo: '',
      roles: '',
      areaList: [
        'Informática',
        'Finanzas y Contabilidad',
        'Recursos Humanos',
        'Marketing y Ventas',
        'Producción',
        'Desarrollo de Software',
        'Administración',
      ],
      areaListId: 'areaList',
      rolesList: ['user', 'admin'],
      rolesListId: 'rolesList',
      authApiService: new AuthApiService(),
    };
  },
  computed: {
    isFormEmpty() {
      return (
        this.name === '' ||
        this.lastname === '' ||
        this.email === '' ||
        this.password === '' ||
        this.confirmPassword === '' ||
        this.area === '' ||
        this.cargo === '' ||
        this.roles === ''
      );
    },
    passwordMismatch() {
      return this.password !== this.confirmPassword;
    },
  },
  methods: {
    submitForm() {
      if (!this.isFormEmpty && !this.passwordMismatch) {
        this.signUp();
        this.$router.push('/verification');
      }
    },
    async signUp() {
      const workerData = {
        name: this.name,
        last_name: this.lastname,
        email: this.email,
        password: this.password,
        area: this.area,
        cargo: this.cargo,
        photo: 'https://i.pinimg.com/222x/57/70/f0/5770f01a32c3c53e90ecda61483ccb08.jpg',
        roles: this.roles,
      };

      try {
        await this.authApiService.postTrabajador(workerData);
      } catch (error) {
        console.error('Error registering worker:', error);
      }
    },
  },
};
</script>

<style scoped>
/* estilos para el contenedor principal */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #7da4ca;
  margin: 0 auto;
}

/* estilos para la sección izquierda */
.left-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  padding: 20px;
  background-color: #7da4ca;
  border-radius: 10px;
  animation: fade-in 0.5s;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}

.logo {
  width: 150px;
  height: 150px;
  object-fit: contain;
}

.description {
  color: #ffffff;
  text-align: center;
  font-size: 1.2rem;
  margin: 30px 0;
}

.icon {
  width: 400px;
  height: 400px;
  object-fit: contain;
  margin-top: 30px;
  animation: pulse 2s infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* estilos para la sección derecha */
.right-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 100%;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
}

.link {
  color: #665075;
  font-size: 1rem;
  text-decoration: none;
  margin: 10px 0px;
}

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
input[type='text'] {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 20px;
  background-color: #f4f4f4;
  margin-bottom: auto;
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

/* Estilos para dispositivos móviles */
@media (max-width: 767px) {
  .container {
    flex-direction: column;
  }

  .left-section {
    display: none;
  }

  .right-section {
    width: 100%;
    padding: 20px;
    border-radius: 10px;
  }
}
</style>
