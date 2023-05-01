<template>
  <div class="container">
    <div class="left-section">
      <img src="../assets/logo.png" alt="logo" class="logo">
      <p class="description">
        Descubre el mundo de la productividad para mejorar tu rutina laboral.
      </p>
      <img src="../assets/icono7.png" alt="icon" class="icon">
    </div>
    <div class="right-section">
      <div class="header">
        <a href="#" class="link">¿Ya eres miembro?</a>
        <a href="#" class="link">Iniciar sesión</a>
      </div>
      <h2>Registrate en Redcorp</h2>
      <form class="form">
        <div class="form-group">
          <label for="verification-code">Ingrese código de verificación:</label>
          <input type="text" id="verification-code" required class="verification-input">
        </div>
        <button class="btn-create-account">Crear una cuenta</button>
      </form>
      <div class="verification">
        <img src="../assets/icono6.png" alt="icon" class="message-icon">
        <p>Se enviará un código de verificación de acceso a su correo ingresado</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Verification",
};
</script>

<style scoped>
/* estilos para el contenedor principal */
.container {
  display: flex;
  align-items: normal;
  height: 100vh;
  background-color: #665075;
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
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 10%;
  padding: 20px;
  background-color: white;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
}
a{
  color:#665075;
}
input[type="text"]
 {
  width: 60%;
  padding: 5px;
  border: none;
  border-radius: 20px;
  background-color: #F4F4F4;
  margin-bottom:auto;
  color:black;
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

button.btn-create-account{
  background-color: #C9725B;
  color: white;
  font-size: 1.2rem;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.form-group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-bottom: 5px;
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
label {
  color: #000000;
  font-size: 1rem;
  margin-bottom: 10px;
  text-align-all: left;
}
input.verification-code{
  color:black;
}
</style>
