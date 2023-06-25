<template>
  <div class="inbox">
    <div class="header">
      <h2>Bandeja de entrada</h2>
    </div>
    <div class="email-list">
      <div class="email-item" v-for="email in emails" :key="email.id">
        <div class="sender">{{ email.sender }}</div>
        <div class="subject">{{ email.subject }}</div>
        <div class="date">{{ email.date }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emails: [
        {
          id: 1,
          sender: "John Doe",
          subject: "Hola",
          date: "2023-06-04"
        },
        {
          id: 2,
          sender: "Jane Smith",
          subject: "Reunión",
          date: "2023-06-03"
        },
        // Agrega más correos electrónicos aquí...
      ]
    };
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
