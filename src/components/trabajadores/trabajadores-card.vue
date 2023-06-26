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
    </div>
    <div class="linea"></div>
    <div class="teams-card">
      <div class="teams-employee" v-for="team in teams">
        <div class="team-name">{{ team.name }}</div>
        <div class="team-description">{{ team.description }}</div>
      </div>
    </div>
    <div class="linea"></div>
    <div class="tasks-card">
      <div class="task" v-for="task in tasks">
        <div class="task-name">{{ task.name }}</div>
        <div class="task-description">{{ task.description }}</div>
        <div class="task-completed">{{ task.isCompleted }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { TrabajadorApiService } from '../services/trabajadores-api.service';
import { TaskApiService } from '../services/Tasks.service';

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
      worker: [],
      teams: [],
      tasks: [],
      workersService: new TrabajadorApiService(),
      taskApiService: new TaskApiService(),
    };
  },
  created() {
    this.fetchWorker();
  },
  methods: {
    async fetchWorker() {
      try {
        const response = workersService.getById(this.id);
        this.worker = response.data;

        const teamsRecovered = await this.taskApiService.GetTeamsByIdEmployee(this.id);
        this.teams = teamsRecovered.data;

        const tasksRecovered = await this.taskApiService.GetTasksByIdEmployee(this.id);
        this.tasks = tasksRecovered.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style>
.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #ffa500;
}

.profile-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #ffcc99;
  border-radius: 10px;
}

.profile-picture img {
  width: 150px;
  height: 150px;
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

.profile-email {
  color: gray;
}

.profile-area {
  margin-top: 10px;
}

.profile-cargo {
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
}

.linea {
  height: 1px;
  width: 80%;
  background-color: #ccc;
  margin-top: 20px;
  margin-bottom: 20px;
}

.teams-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #e9eb94;
  border-radius: 10px;
}

.teams-employee {
  margin-bottom: 10px;
}

.team-name {
  font-size: 18px;
  font-weight: bold;
}

.team-description {
  color: gray;
}

.tasks-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #cfbd8c;
  border-radius: 10px;
}

.task {
  margin-bottom: 10px;
}

.task-name {
  font-size: 18px;
  font-weight: bold;
}

.task-description {
  color: gray;
}

.task-completed {
  color: green;
}
</style>
