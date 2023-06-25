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

    <section class="herramientas">
      <label>Herramientas</label>
      <pv-divider class="divider" />

      <ul>
        <router-link to="/VisionGeneral" class="link " ><img class="iconos" src="./images/v_g.png"> Visión General</router-link>
        <router-link to="/trabajadores" class="link "><img class="iconos" src="./images/secc.png">Secciones</router-link>
        <router-link to="/section" class="link"><img class="iconos" src="./images/herr.png">herramientas</router-link>
        <router-link to="/section" class="link"><img class="iconos" src="./images/comunicados.png">Comunicados</router-link>
        <router-link to="/trabajadores" class="link"> <img class="iconos" src="./images/list.png">Lista de trabajadores de areas</router-link>
        <router-link to="/section" class="link"><img class="iconos" src="./images/prog.png">Progreso de Empleados</router-link>
      </ul>
    </section>

    <section class="interacciones">
      <div>
        <label>Interacciones</label>
        <pv-divider class="divider" />
        <ul>
          <a> <img class="iconos" src="./images/chats.png">Chats</a>
          <a> <img class="iconos" src="./images/not.png">Notificaciones</a>
          <a> <img class="iconos" src="./images/coments.png">Comentarios</a>
        </ul>
      </div>
    </section>

    <section class="interacciones">
      <div>
        <label>Log Out</label>
        <pv-divider class="divider" />
        <div>
          <AlertaCerrarSesion/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AlertaCerrarSesion from "../AlertNotification/AlertaCerrarSesion.vue";
export default {
  name: 'SideBar',
  components: {AlertaCerrarSesion},
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.link {
  color: #7da4ca;
}

.iconos {
  max-width: 30px;
  max-height: 30px;
  color: #7da4ca;
}

.sidebar {
  width: 18vw;
  height: 100%;
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
  justify-content: space-between;
  border-radius: 35px;
  height: 80px;
  width: auto;
}

.perfil div {
  margin-left: 20px;
  margin-right: 30px;
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
  display: flex;
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
  display: flex;
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
  display: flex;
  align-items: center;
}

button:hover {
  background-color: rgba(55, 81, 118, 0.5);
}

@media screen and (max-width: 768px) {
  .sidebar {
    width: 100%;
    height: auto;
  }

  .perfil {
    flex-direction: column;
    align-items: center;
  }

  .perfil div {
    margin: 10px 0;
    text-align: center;
  }

  .perfil img {
    margin-bottom: 10px;
  }

  .herramientas,
  .interacciones {
    width: 100%;
    margin: 20px 0;
  }

  .herramientas label,
  .interacciones label {
    font-size: 1.3em;
  }
}

@media screen and (max-width: 576px) {
  .sidebar {
    padding: 10px;
    text-align: center;
  }

  .perfil img {
    width: 50px;
    height: 50px;
  }

  .perfil div {
    margin: 5px 0;
  }

  .herramientas ul a,
  .interacciones ul a {
    font-size: 1em;
  }

  button {
    font-size: 1.2em;
  }
}
</style>
