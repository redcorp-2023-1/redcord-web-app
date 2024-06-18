<template>
  <section>
    <h4>Grupos</h4>

    <div class="group" v-for="group in groups" :key="group.id">
      <i class="pi pi-users" />
      <p>{{ group.name }}</p>
    </div>
  </section>
</template>

<script>
import { TeamService } from '../services/team.service';

export default {
  name: 'Groups',
  data() {
    return {
      groups: [],
      teamApiService: new TeamService(),
    };
  },
  async mounted() {
    await this.fetchGroups();
  },
  methods: {
    async fetchGroups() {
      try {
        const employeeId = localStorage.getItem('id_employee');
        if (!employeeId) {
          throw new Error('Employee ID not found in localStorage');
        }

        const response = await this.teamApiService.GetTeamsByIdEmployee(employeeId);
        this.groups = response.data;
      } catch (error) {
        console.error('Error getting groups:', error);
      }
    },
  },
};
</script>

<style scoped>
section {
  width: 100%;
}

h4 {
  color: #6a5dc4;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 16px;
}

.group {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 26px;
}

i {
  width: 40px;
  height: 40px;
  /* border-radius: 50%; */
  display: grid;
  place-content: center;
  font-size: 30px;
  color: #c9725b;
}

p {
  margin: 0;
  text-decoration: underline;
  font-weight: 600;
  font-size: 16px;
}
</style>
