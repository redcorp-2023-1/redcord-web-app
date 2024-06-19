<template>
  <div class="profile-container">
    <div class="profile-card">
      <div class="profile-picture">
        <img :src="worker.photo" alt="Profile Picture" />
      </div>
      <div class="profile-info">
        <div class="profile-name">{{ worker.name }} {{ worker.last_name }}</div>
        <div class="profile-email">{{ worker.email }}</div>
        <div class="profile-area">{{ worker.area }}</div>
      </div>
      <div class="profile-cargo">{{ worker.cargo }}</div>
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
      </div>
    </div>
    <div class="content-right">
      <div class="teams-card">
      <div class="teams-employee" v-for="team in teams" :key="team.id">
        <div class="team-name">{{ team.name }}</div>
        <div class="team-description">{{ team.description }}</div>
      </div>
    </div>
    <div class="tasks-card">
      <div class="task" v-for="task in tasks" :key="task.id">
        <div class="task-name">{{ task.name }}</div>
        <div class="task-description">{{ task.description }}</div>
        <div class="task-completed">{{ task.isCompleted ? 'Completed' : 'Incomplete' }}</div>
      </div>
    </div>
    </div>
    
  </div>
</template>

<script>
import { TrabajadorApiService } from '../services/trabajadores-api.service';
import { TeamService } from '../services/team.service';

export default {
  name: 'Trabajador',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      worker: {},
      teams: [],
      tasks: [],
      workersService: new TrabajadorApiService(),
      teamService: new TeamService(),
    };
  },
  created() {
    this.fetchWorkerData();
  },
  methods: {
    async fetchWorkerData() {
      try {
        const response = await this.workersService.getById(this.id);
        this.worker = response.data;

        const teamsRecovered = await this.teamService.GetTeamsByIdEmployee(this.id);
        this.teams = teamsRecovered.data;

        const tasksRecovered = await this.teamService.GetTasksByIdEmployee(this.id);
        this.tasks = tasksRecovered.data;
      } catch (error) {
        console.error('Error fetching worker data:', error);
      }
    },
  },
};
</script>

<style>
.profile-container {
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.table-cell img {
  width: 40px;
  height: 40px;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  margin-right: 10px;
}

.profile-card{
  margin-top: 20px;
  margin-right: 20px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #7da4ca;
  border-radius: 10px;
  margin-bottom: 20px;
  width: 80%;
  max-width: 600px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.content-right {
  display: flex;
  flex-direction: column; /* Apila los elementos verticalmente */
}
.teams-card,
.tasks-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #7da4ca;
  border-radius: 10px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 600px;
  margin-top: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.profile-picture img {
  width: 150px;
  height: 170px;
  border-radius: 50%;
}

.profile-info {
  margin-top: 10px;
  text-align: center;
}

.profile-name {
  font-size: 24px;
  font-weight: bold;
}

.profile-email,
.profile-area {
  color: #6a5dc4;
  margin-top: 5px;
}

.profile-cargo {
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
}

.linea {
  height: 1px;
  width: 80%;
  background-color: #6a5dc4;
  margin: 20px 0;
}

.teams-employee,
.task {
  margin-bottom: 10px;
  width: 100%;
}

.team-name,
.task-name {
  font-size: 18px;
  font-weight: bold;
}

.team-description,
.task-description,
.task-completed {
  color: #6a5dc4;
}

.task-completed {
  margin-top: 5px;
  font-weight: bold;
  color: green;
}

.task-completed::before {
  content: 'Status: ';
  font-weight: bold;
  color: black;
}
</style>
