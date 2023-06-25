<template>
  <div class="inbox">
    <div class="header">
      <h2>Bandeja de entrada</h2>
    </div>
    <div class="email-list">
      <div class="email-item">
        <div class="sender">{{ users.name }}</div>
        <div class="subject">{{ users.email }}</div>
        
      </div>
    </div>
  </div>
</template>

<script>
import { TrabajadorApiService } from '../services/trabajadores-api.service';

export default {
  data() {
    return {
      users:[],
      trabajadorApiService:new TrabajadorApiService()
    };
  },
  async beforeMount()
  {
    
    try {
      const response = await this.trabajadorApiService.getById(localStorage.getItem('id_employee'));
      this.users = response.data;
    } catch (error) {
      console.error(error);
    }
  }

};
</script>

<style>
.inbox {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  text-align: center;
  margin-bottom: 20px;
}

.email-list {
  border: 1px solid #ccc;
  border-radius: 4px;
}

.email-item {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.sender {
  flex: 1;
  font-weight: bold;
}

.subject {
  flex: 3;
  margin-left: 10px;
}

.date {
  flex: 1;
  text-align: right;
}
</style>
