<template>
  <div class="container">
    <div class="left-section">
      <img src="../assets/logo.png" alt="logo" class="logo">
      <p class="description">
        Descubre el mundo de la productividad para mejorar tu rutina laboral.
      </p>
      <img src="../assets/icono3.png" alt="icon" class="icon">
    </div>
    <div class="right-section">
      <div class="header">
        <a href="#" class="link">Ya eres miembro</a>
        <a href="#" class="link">Iniciar sesión</a>
      </div>
      <h2>Registrate en RedCorp</h2>
      <form class="form">
        <div class="form-group-inline">
          <div class="form-group">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" required>
          </div>
          <div class="form-group">
            <label for="apellido">Apellido:</label>
            <input type="text" id="apellido" required>
          </div>
        </div>
        <div class="form-group">
          <label for="email">Dirección de correo electrónico:</label>
          <input type="email" id="email" required>
        </div>
        <div class="form-group">
          <label for="password">Contraseña:</label>
          <input type="password" id="password" required>
        </div>
        <div class="form-group">
          <label for="confirm-password">Ingrese nuevamente la contraseña:</label>
          <input type="password" id="confirm-password" required>
        </div>
        <div class="form-group">
          <label for="dni">DNI:</label>
          <input type="text" id="dni" required>
        </div>
        <div class="form-group">
          <label for="ruc">RUC:</label>
          <input type="text" id="ruc" required>
        </div>
        <button class="btn-register">Continuar</button>
      </form>
      <div class="verification">
        <img src="../assets/icono4.png" alt="icon" class="message-icon">
        <p>Se enviará un código de verificación de acceso a su correo ingresado</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Register"
}
</script>

<style scoped>
  /* estilos para el contenedor principal */
.container {
  display: flex;
  align-items: normal;
  height: 90vh;
  background-color: #7DA4CA;
  margin: 0 auto;
}

/* estilos para la sección izquierda */
.left-section {
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 30%;
  height: 100%;
  padding: 20px;
}

.logo {
  width: 150px;
  height: 150px;
  object-fit: contain;
}

.description {
  color: white;
  text-align: center;
  font-size: 1.2rem;
  margin: 30px 0;
}

.icon {
  width: 300px;
  height: 300px;
  object-fit: contain;
  margin: 0 auto;
}

/* estilos para la sección derecha */
.right-section {
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: inherit;
  width: 70%;
  height: 100%;
  padding: 20px;
  background-color: white;
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
  text-align-all: left;
}

input[type="email"],
input[type="password"],
input[type="text"] {
  width: 60%;
  padding: 5px;
  border: none;
  border-radius: 20px;
  background-color: #F4F4F4;
  margin-bottom:auto;
}

button.btn-register {
  background-color: #C9725B;
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
    width: 60%;
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
  p{
    color:black;
  }

</style>
