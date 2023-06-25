<template>
  <div class="container">
    <div class="left-section">
      <img src="../assets/logo.png" alt="logo" class="logo" />
      <p class="description">
        Descubre el mundo de la productividad para mejorar tu rutina laboral.
      </p>
      <img src="../assets/icono7.png" alt="icon" class="icon" />
    </div>
    <div class="right-section">
      <div class="header">
        <a href="#" class="link">¿Ya eres miembro?</a>
        <RouterLink to="/login" class="link">Iniciar sesión</RouterLink>
      </div>
      <h2>Registrate en Redcorp</h2>
      <form class="form">
        <div class="form-group">
          <label for="verification-code">Ingrese código de verificación:</label>
          <input type="text" id="verification-code" required class="verification-input" />
        </div>
        <button class="btn-create-account">Crear una cuenta</button>
      </form>
      <div class="verification">
        <img src="../assets/icono6.png" alt="icon" class="message-icon" />
        <p>Se enviará un código de verificación de acceso a su correo ingresado</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Verification',
};
</script>

<style scoped>
/* Estilos para el contenedor principal */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #665075;
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
  background-color: #665075;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  animation: fadeInLeft 1s;
}

.logo {
  width: 150px;
  height: 150px;
  object-fit: contain;
}

.description {
  color: White;
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
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  padding: 20px;
  background-color: white;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  animation: fadeInRight 1s;
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
}

h2 {
  color: #000000;
  font-size: 1.2rem;
  margin-bottom: 15px;
  text-align: center;
}

.form-group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-bottom: 15px;
}

label {
  color: #000000;
  font-size: 1rem;
  margin-bottom: 10px;
}

input[type='text'] {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 20px;
  background-color: #f4f4f4;
  margin-bottom: auto;
}

button.btn-create-account {
  background-color: #c9725b;
  color: white;
  font-size: 1.2rem;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
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
    border-radius: 10px;
  }
}

/* Animaciones */
</style>
