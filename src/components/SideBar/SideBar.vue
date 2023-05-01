<template>
  <div class="sidebar">
    <img src="./images/LogoRedcorp.png" />

    <div class="perfil">
      <img src="./images/men.jpg" />
      <div>
        <h3>Martin Liberman</h3>
        <p>Jefe de proyectos</p>
      </div>
    </div>

    <seccton class="herramientas">
      <label>Herramientas</label>
      <ul>
        <a>Visión General</a>
        <a>Secciones</a>
        <a>herramientas</a>
        <a>Comunicados</a>
        <a>Lista de trabajadores de areas</a>
        <a>Progreso de Empleados</a>
      </ul>
    </seccton>
    <seccton class="interacciones">
      <div>
        <label>Interacciones</label>
        <ul>
          <a>Chats</a>
          <a>Notificaciones</a>
          <a>Comentarios</a>
        </ul>
      </div>
    </seccton>

    <button @click="$router.push('/')">Cerrar sesión</button>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.sidebar {
  width: 18vw;
  height: 100vh;
  overflow: auto;
  background: #22242e;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sidebar img {
  width: 160px;
  height: 80px;
  margin: 10px;
}

.perfil {
  background: #303341;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 35px;
  height: 80px;
  min-width: min-content;
  padding: 10px;
}
.perfil div {
  margin-left: 10px;
}
.perfil img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}

.herramientas {
  margin-top: 30px;
  font-weight: bold;
  width: 90%;
}
.herramientas label {
  color: #6a5dc4;
  font-size: 1.3em;
}
.herramientas ul {
  color: #7da4ca;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
}
.herramientas ul a {
  font-size: 1.1em;
  margin-top: 10px;
  padding: 5px;
  border-radius: 10px;
}

.herramientas ul a:hover {
  background: #375176;
}

.interacciones {
  margin-top: 30px;
  font-weight: bold;
  width: 90%;
}
.interacciones label {
  color: #6a5dc4;
  font-size: 1.3em;
}
.interacciones ul {
  color: #7da4ca;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
}
.interacciones ul a {
  font-size: 1.1em;
  margin-top: 10px;
  padding: 5px;
  border-radius: 10px;
}
.interacciones ul a:hover {
  background: #375176;
}

button {
  margin-top: 25px;
  font-weight: bold;
  color: #6a5dc4;
  background: transparent;
  font-size: 1.4em;
  padding: 10px;
  border-radius: 10px;
  border: none;
}
button:hover {
  background: #375176;
}
</style>
