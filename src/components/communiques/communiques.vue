<template>
  <main>
    <div class="container">
      <div class="search-container">
        <label class="search-label">
          <input
            type="text"
            placeholder="Filtrar..."
            class="search-input"
            v-model="searchText"
            @input="searchComunicados"
          />
        </label>
      </div>

      <table>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Times</th>
          <th>Completed</th>
          <th>Active</th>
        </tr>
        <tr v-for="com in comunicados" :key="com.id">
          <td>{{ com.name }}</td>
          <td>{{ com.description }}</td>
          <td class="center">{{ com.initialDate }}<br />to<br />{{ com.finalDate }}</td>
          <td class="center" v-if="!com.isCompleted">Incompleto<br />🟠</td>
          <td class="center" v-if="com.isCompleted">Completo<br />🟢</td>
          <td v-if="com.isActive">Sí ✅</td>
          <td v-if="!com.isActive">No ❌</td>
        </tr>
      </table>
    </div>
  </main>
</template>

<script>
import { TaskApiService } from '../services/Tasks.service';

export default {
  name: 'Comunicados',

  data() {
    return {
      comunicados: [],
      comunicadosOriginales: [],
      searchText: '',
      tasksApiService: new TaskApiService(),
    };
  },

  async beforeMount() {
    try {
      const response = await this.tasksApiService.GetTasksByIdEmployee(
        localStorage.getItem('id_employee')
      );
      this.comunicados = response.data;
      this.comunicadosOriginales = [...this.comunicados];
    } catch (error) {
      console.error('Error al obtener los comunicados:', error);
    }
  },

  methods: {
    searchComunicados() {
      if (this.searchText === '') {
        this.comunicados = [...this.comunicadosOriginales];
      } else {
        this.comunicados = this.comunicadosOriginales.filter(comunicado => {
          const nameMatch = comunicado.name.toLowerCase().includes(this.searchText.toLowerCase());
          const descriptionMatch = comunicado.description
            .toLowerCase()
            .includes(this.searchText.toLowerCase());
          return nameMatch || descriptionMatch;
        });
      }
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.container {
  padding: 10px;
}

h2 {
  color: #7da4ca;
  font-size: 1.9rem;
}

.search-container {
  display: grid;
  place-items: center;
}

.search-label {
  position: relative;
  display: flex;
  align-items: center;
  color: #c9725b;
}

.search-input {
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-repeat: no-repeat;
  background-position: right center;
  background-size: 20px;
  background-image: url('images/lupa.png');
  flex: 1;
  color: #c9725b;
}

table {
  margin: 50px auto;
  width: auto;
  table-layout: fixed;
}
th {
  padding-bottom: 18px;
  text-align: center;
}
td {
  cursor: pointer;
  padding: 0 5px;
}
tr {
  transition: 0.5s;
}
tr:hover {
  background: #7da4ca;
  transform: scale(1.1);
}

table td,
th {
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  padding: 8px;
  text-align: left;
}
.center {
  text-align: center;
}
.table-container tr:nth-child(even) {
  background-color: #f9f9f9;
}
</style>
