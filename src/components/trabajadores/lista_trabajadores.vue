<template>
  <div class="content">
    <div class="table">
      <table class="minimalist-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Área</th>
            <th>Ver</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="trabajador in trabajadores" :key="trabajador.id">
            <td>
              <div class="table-cell">
                <img :src="trabajador.photo" alt="" />
                <span>{{ trabajador.name }}</span>
              </div>
            </td>
            <td>{{ trabajador.email }}</td>
            <td>
              <div class="table-cell">
                <div class="circle"></div>
                <spam>{{ trabajador.area }}</spam>
              </div>
            </td>
            <td>
              <button class="profile-button">Ver Perfil</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { TrabajadorApiService } from '../services/trabajadores-api.service';
import Trabajador from './trabajadores-card.vue';

export default {
  name: 'trabajadores',
  components: { Trabajador, SideBar },
  data() {
    return {
      trabajadores: [],
      trabajadoresService: new TrabajadorApiService(),
    };
  },

  async beforeMount() {
    try {
      const response = await this.trabajadoresService.getAllTrabajadores();
      this.trabajadores = response.data;
      console.log(this.trabajadores);
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style>
.content {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.table {
  flex-grow: 1;
  margin-right: 20px;
  padding: 20px;
}

.minimalist-table {
  width: 100%;
  border-collapse: collapse;
}

.minimalist-table th,
.minimalist-table td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.6);
  text-decoration: underline;
}
td {
  font-size: 1.3rem;
  color: black;
}

.table-cell {
  display: flex;
  align-items: center;
}
.circle {
  width: 20px;
  height: 20px;
  background: green;
  border-radius: 50%;
  margin-right: 5px;
}
.table-cell img {
  width: 30px;
  height: 30px;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  margin-right: 10px;
}

.profile-button {
  padding: 8px 13px;
  background-color: #c9725b;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1rem;
  color: white;
  font-weight: 500;
  text-decoration: underline;
}
.profile-button:hover {
  background-color: #22242e;
}
</style>
