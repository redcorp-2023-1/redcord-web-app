<template>
  <header>
    <h2>
      {{ $route.meta.title || '' }}
    </h2>

    <span class="p-input-icon-left responsive-hide">
      <i class="pi pi-search" />
      <pv-input-text v-model="search" placeholder="Buscar" />
    </span>

    <div class="actions">
      <i class="pi pi-users responsive-hide" />
      <i class="pi pi-bell responsive-hide" />
      <i class="pi pi-cog responsive-hide" />

      <img :src="trabajador.photo" :alt="trabajador.name" v-if="trabajador.photo"/>
    </div>
  </header>
</template>

<script>
import { TrabajadorApiService } from '../services/trabajadores-api.service';

export default {
  name: 'Toolbar',
  data() {
    return {
      search: '',
      trabajador: {},
      trabajadorApiService: new TrabajadorApiService(),
    };
  },
  async mounted() {
    await this.fetchTrabajador();
  },
  methods: {
    async fetchTrabajador() {
      try {
        const employeeId = localStorage.getItem('id_employee');
        if (!employeeId) {
          throw new Error('Employee ID not found in localStorage');
        }
        const response = await this.trabajadorApiService.getById(employeeId);
        this.trabajador = response.data;
      } catch (error) {
        console.error('Error getting trabajador:', error);
      }
    },
  },
};
</script>

<style scoped>
header {
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  border-bottom: 1px solid lightgray;
}

h2 {
  color: #7da4ca;
  font-size: 36px;
  font-weight: 600;
  margin: 0;
}

.actions {
  display: flex;
  align-items: center;
  gap: 50px;
}

.actions i {
  font-size: 20px;
}

img {
  height: 45px;
  width: 40px;
  border-radius: 50%;
}

@media (max-width: 600px) {
  .responsive-hide {
    display: none;
  }
}
</style>
