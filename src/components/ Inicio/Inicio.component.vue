<template>
  <div class="container">
    <div class="Bandeja-Entrada">
      <div class="container-header">
        Bandeja de entrada
        <div class="border"></div>
      </div>
      <div class="Bandeja-Entrada-content">
        <img src="../../assets/images/person-logo.png" alt="person-img" class="person-img" />
        <img src="../../assets/images/person-logo.png" alt="person-img" class="person-img" />
        <img src="../../assets/images/add.png" alt="Add-img" class="add-img" />
        Invita a tus compañeros de equipo y comienza a colaborar
      </div>
    </div>

    <div class="Flujo-Actividades">
      <div class="container-header">
        Flujo de actividades
        <div class="border"></div>
      </div>
      <div class="Flujo-Actividades-content">
        <div class="Calendario">
          <button class="Calendario-button">Calendario</button>
          <img src="../../assets/images/calendar.png" alt="calendar-img" class="calendario-img" />
        </div>
        <div class="Actividades-container">
          <button class="Actividades-button">Actividades</button>
          <div class="Actividades-options">
            <button class="Actividades-options-buttons">Proximo</button>
            <button class="Actividades-options-buttons">Pendiente</button>
            <button class="Actividades-options-buttons">Reciente</button>
          </div>
        </div>
      </div>
    </div>

    <div class="Progreso-Actividades">
      <div class="container-header">
        Progreso de actividades
        <div class="border"></div>
      </div>
      <div class="Progreso-Actividades-content">
        <img src="../../assets/images/graphs.png" alt="graphs-img" class="Progreso-img" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Inicio.component',
};
</script>

<style scoped>
.container {
  width: 800px;
  background-color: white;
  color: dimgrey;
  border-radius: 10px;
  height: 500px;
  position: relative;
}
.container-header {
  font-weight: bold;
  font-size: 28px;
  color: black;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 15px;
}
.border {
  border: 1px solid darkgrey;
  width: 90%;
  margin-top: 5px;
}
.Bandeja-Entrada-content {
  background-color: lightgrey;
  border-radius: 20px;
  height: 60px;
  width: 725px;
  text-align: center;
  margin-top: 15px;
  margin-left: 5vh;
  color: black;
  align-items: center;
}
.person-img {
  margin-top: 0;
  height: auto;
  width: 40px;
  margin-left: 5px;
}
.add-img {
  height: auto;
  width: 50px;
  margin-left: 5px;
}
.Flujo-Actividades-content {
  display: flex;
  height: 150px;
  justify-content: space-evenly;
}
.Calendario {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
}
.Calendario-button {
  background-color: #7da4ca;
  border-radius: 10px;
  height: 33px;
  width: 100px;
  padding: 0;
  font-size: 15px;
  color: black;
}
.calendario-img {
  height: auto;
  width: 80px;
  margin: 10px;
}
.Actividades-container {
  width: 400px;
  background-color: #7da4ca;
  border-radius: 60px;
  margin: 10px;
}
.Actividades-button {
  background-color: #9f5454;
  border-radius: 40px;
  font-size: 15px;
  margin: 15px;
  color: black;
}
.Actividades-options-buttons {
  background-color: #eb5a47;
  border-radius: 40px;
  padding-top: 4px;
  padding-bottom: 4px;
  font-size: 15px;
  margin: 5px;
}
.Progreso-img {
  height: auto;
  width: 450px;
}
</style>
