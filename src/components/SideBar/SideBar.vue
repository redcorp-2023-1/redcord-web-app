<template>
  <div>
    <button class="menuSide" v-if="!showSidebar" @click="toggleSidebar">
      <img src="./images/menuSidebar.png" alt="">
    </button>
    <div class="overlay" v-if="showSidebar" @click="toggleSidebar"></div>

    <div class="sidebar" :class="{ 'active': showSidebar }">
      <img src="./images/LogoRedcorp.png" />

      <div class="perfil">
        <img src="./images/men.jpg" />
        <div>
          <h3>{{ name }}</h3>
          <p>{{ cargo }}</p>
        </div>
      </div>

      <section class="herramientas">
        <label>Herramientas</label>
        <pv-divider class="divider" />

        <ul>
          <router-link to="/VisionGeneral" class="link"><img class="iconos" src="./images/v_g.png">Visión General</router-link>
          <router-link to="/trabajadores" class="link"><img class="iconos" src="./images/secc.png">Secciones</router-link>
          <router-link to="/section" class="link"><img class="iconos" src="./images/herr.png">Herramientas</router-link>
          <router-link to="/section" class="link"><img class="iconos" src="./images/comunicados.png">Comunicados</router-link>
          <router-link to="/trabajadores" class="link"><img class="iconos" src="./images/list.png">Lista de trabajadores de áreas</router-link>
          <router-link to="/section" class="link"><img class="iconos" src="./images/prog.png">Progreso de Empleados</router-link>
        </ul>
      </section>

      <section class="interacciones">
        <div>
          <label>Interacciones</label>
          <pv-divider class="divider" />
          <ul>
            <a><img class="iconos" src="./images/chats.png">Chats</a>
            <a><img class="iconos" src="./images/not.png">Notificaciones</a>
            <a><img class="iconos" src="./images/coments.png">Comentarios</a>
          </ul>
        </div>
      </section>

      <section class="interacciones">
        <div>
          <label>Log Out</label>
          <pv-divider class="divider" />
          <div>
            <AlertaCerrarSesion />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import AlertaCerrarSesion from "../AlertNotification/AlertaCerrarSesion.vue";
import { TrabajadorApiService } from '../services/trabajadores-api.service';

export default {
    name: 'SideBar',
    data() {
        return {
            showSidebar: false,
            trabajardorService: new TrabajadorApiService(),
            trabajador_data:[],
            name:'',
            cargo:''
        };
    },
    methods: {
        cerrarsesion()
        {
            localStorage.removeItem('id_employee')
            localStorage.removeItem('token')
            localStorage.removeItem('access')
            
            this.$router.push('/')
        },
        toggleSidebar() {
            this.showSidebar = !this.showSidebar;
        },
        async Get_trabajador()
        {
            this.trabajador_data = await this.trabajardorService.getById(localStorage.getItem('id_employee'))
            this.name =this.trabajador_data.data.name
            this.cargo = this.trabajador_data.data.cargo
            console.log(this.trabajador_data.data)
        }

    },
    beforeMount()
    {

        this.Get_trabajador();
    },
    beforeCreate()
    {
        if(!window.localStorage.getItem('token'))
        {
            this.$router.push('/login')
        }
    }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.link {
  color: #7da4ca;
}

.menuSide {
  width: 50px;
  display: none;
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

.sidebar.active {
  transform: translateX(0);
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
  object-fit: cover;
  object-position: center;
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

@media (max-width: 1000px) {
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    transform: translateX(-100%);
    transition: transform 0.3s ease-out;
  }

  .menuSide {
    display: flex;
    align-items: flex-start;
    width: 65px;
    background: #c7c7c7;
    margin: 5px;
  }

  .menuSide img {
    width: 50px;
  }
}
</style>

