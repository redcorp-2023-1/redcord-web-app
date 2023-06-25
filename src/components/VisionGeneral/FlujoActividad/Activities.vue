<template>
  <div class="card">
    <h2>Actividades</h2>
    <div class="circles">
      <div class="circle upcoming">
        <h3>Próximo</h3>
      </div>
      <div class="circle pending">
        <h3>Pendiente</h3>
      </div>
      <div class="circle recent">
        <h3>Reciente</h3>
      </div>
    </div>
  </div>
</template>

<style>
.card {
  width: 300px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.circles {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e0e0e0;
}

.circle h3 {
  font-size: 14px;
  font-weight: normal;
  margin-top: 5px;
}

.upcoming {
  background-color: #FFC107;
}

.pending {
  background-color: #FF5722;
}

.recent {
  background-color: #4CAF50;
}
</style>
