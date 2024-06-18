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
          <tr v-for="worker in workers" :key="worker.id">
            <td>
              <div class="table-cell">
                <img :src="worker.photo" alt="" />
                <span>{{ worker.name }}</span>
              </div>
            </td>
            <td>{{ worker.email }}</td>
            <td>
              <div class="table-cell">
                <template v-if="worker.area === 'Area de Sistemas'">
                  <img src="./images/sistemas.png" alt="Area de Sistemas" />
                </template>
                <template v-else-if="worker.area === 'Marketing y Ventas'">
                  <img src="./images/marketing.png" alt="Marketing y Ventas" />
                </template>
                <template v-else-if="worker.area === 'Recursos Humanos'">
                  <img src="./images/humanos.png" alt="Recursos Humanos" />
                </template>
                <template v-else-if="worker.area === 'Finanzas y Contabilidad'">
                  <img src="./images/finanzas.png" alt="Finanzas y Contabilidad" />
                </template>
                <template v-else-if="worker.area === 'Administración'">
                  <img src="./images/administracion.png" alt="Administración" />
                </template>
                <template v-else-if="worker.area === 'Producción'">
                  <img src="./images/produccion.png" alt="Producción" />
                </template>
                <template v-else>
                  <div class="circle"></div>
                </template>
                <button class="area-button">{{ worker.area }}</button>
              </div>
            </td>
            <td>
              <router-link :to="`/Trabajador/${worker.id}`" class="profile-button">Ver Perfil</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { TrabajadorApiService } from '../services/trabajadores-api.service';

export default {
  name: 'trabajadores',
  data() {
    return {
      workers: [],
      workersService: new TrabajadorApiService(),
    };
  },
  async beforeMount() {
    try {
      const response = await this.workersService.getAllTrabajadores();
      this.workers = response.data;
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
  border-bottom: 1px solid #ddd;
  text-align: center; /* Alineación central */
}

th {
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.6);
  text-decoration: underline;
}

td {
  font-size: 14px;
  color: black;
}

.table-cell {
  display: flex;
  align-items: center;
  justify-content: center; /* Centrado */
}

.circle {
  width: 20px;
  height: 20px;
  background: green;
  border-radius: 50%;
  margin-right: 5px;
}

.table-cell img {
  width: 40px;
  height: 40px;
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
  text-decoration: none;
  display: inline-block;
  text-align: center;
}

.profile-button:hover {
  background-color: #22242e;
}

.area-button {
  padding: 5px 10px;
  background-color: #6c63ff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  color: white;
  margin-left: 10px;
}

.area-button:hover {
  background-color: #574b90;
}
</style>

