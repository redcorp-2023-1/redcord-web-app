<template>
  <div class="container">
    <div class="left-section">
      <img src="../assets/logo.png" alt="logo" class="logo" />
      <div class="left-content">
        <p class="company-description">
          Descubre el mundo de la productividad para mejorar tu rutina laboral.
        </p>
        <img src="../assets/icono2.png" alt="icon" class="icon" />
      </div>
    </div>
    <div class="right-section">
      <div class="header">
        <a href="#" class="link">¿No eres miembro?</a>
        <RouterLink to="/register" class="link">Registrate ahora</RouterLink>
      </div>
      <h2>Iniciar sesión Redcorp</h2>
      <form class="form">
        <div class="form-group">
          <label for="email">Dirección de correo electrónico:</label>
          <input type="email" id="email" required />
        </div>
        <div class="form-group">
          <label for="password">Contraseña:</label>
          <input type="password" id="password" required />
        </div>
        <button @click="$router.push('/section')" class="btn-login">Iniciar sesión</button>
        <div class="forgot-password">
          <a href="#" class="contra">¿Se te olvidó la contraseña?</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LogIn',
};
</script>

<style scoped>
/* Estilos para el contenedor principal */
.container {
  display: flex;
  align-items: normal;
  height: 100vh;
  background-color: #9f5454;
  margin: 0 auto;
}

/* Estilos para la sección izquierda */
.left-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 20px;
  background-color: #9f5454;
  color: white;
}

.logo {
  width: 150px;
  height: 150px;
  object-fit: contain;
}

.left-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}



.company-description {
  font-size: 1.2rem;
  text-align: justify;
  margin: 20px 0;
  max-width: 80%;
}

.icon {
  width: 400px;
  height: 400px;
  object-fit: contain;
  animation: pulse 2s infinite;
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

/* Estilos para la sección derecha */
.right-section {
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: inherit;
  width: 50%;
  height: 100%;
  padding: 20px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

/* Estilos para la parte derecha en dispositivos móviles */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }

  .left-section {
    display: none;
  }

  .right-section {
    width: 100%;
  }
  .form {
    align-items: center;
  }
  .form-group {
    width: 80%;
    margin-bottom: 15px;
  }
  input[type='email'],
  input[type='password'] {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 20px;
    background-color: #efeef5;
    margin-bottom: 10px;
  }
  button.btn-login {
    padding: 10px 30px;
  }
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 100px;
}

.link {
  color: #665075;
  font-size: 1rem;
  text-decoration: none;
  margin: 0 10px;
}

h2 {
  color: #000000;
  font-size: 2rem;
  margin-bottom: 20px;
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
  width: 100%;
  margin-bottom: 20px;
}

label {
  color: #000000;
  font-size: 1.1rem;
  margin-bottom: 10px;
}

input[type='email'],
input[type='password'] {
  width: 50%;
  padding: 10px;
  border: none;
  border-radius: 20px;
  background-color: #efeef5;
  margin-bottom: 10px;
}

button.btn-login {
  background-color: #c9725b;
  color: white;
  font-size: 1.2rem;
  padding: 10px 50px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button.btn-login:hover {
  background-color: #7d3b3b;
}

input {
  color: #1a1a1a;
}

.contra {
  color: #665075;
  margin-top: 10px;
  text-decoration: none;
}

.forgot-password {
  margin-top: 15px;
}
</style>
