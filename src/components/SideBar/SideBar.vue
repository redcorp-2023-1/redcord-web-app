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
        <a> <img class="iconos" src="./images/v_g.png"> Visión General</a>
        <a> <img class="iconos" src="./images/secc.png ">Secciones</a>
        <a> <img class="iconos" src="./images/herr.png">herramientas</a>
        <a> <img class="iconos" src="./images/comunicados.png">Comunicados</a>
        <a> <img class="iconos" src="./images/list.png">Lista de trabajadores de areas</a>
        <a> <img class="iconos" src="./images/prog.png">Progreso de Empleados</a>
      </ul>
    </seccton>
    <seccton class="interacciones">
      <div>
        <label>Interacciones</label>
        <ul>
          <a> <img class="iconos" src="./images/chats.png">Chats</a>
          <a> <img class="iconos" src="./images/not.png">Notificaciones</a>
          <a> <img class="iconos" src="./images/coments.png">Comentarios</a>
        </ul>
      </div>
    </seccton>

    <button @click="$router.push('/')"> <img class="iconos" src="./images/out.png">
        Cerrar sesión</button>
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

.iconos{
    max-width:30px;
    max-height:30px;
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
    justify-content:space-between;
    border-radius: 35px;
    height: 80px;
    width: auto;
}
.perfil div {
  margin-left: 20px;
    margin-right:30px;
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
  font-size: 1.5em;
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
    display:flex;
    align-items: center;
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
  font-size: 1.5em;
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
    display:flex;
    align-items: center;
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
    display:flex;
    align-items: center;
}
button:hover {
    background-color: rgba(55, 81, 118, 0.5);
}

</style>
