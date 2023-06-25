<template>
    <main>
      <SideBar></SideBar>
   <div class="vision-general">
        <section class="section">
          <h3>Bandeja de entrada</h3>
          <pv-divider class="divider" />
          <BandejaEntrada></BandejaEntrada>
        </section>
        <section class="section">
          <h3>Flujo de actividad</h3>
          <pv-divider class="divider" />
          <div class="activities-container">
            <div class="calendar-container">
              <Calendar></Calendar>
            </div>
            <div class="activities-list-container">
              <Activities></Activities>
            </div>
          </div>
        </section>
        <section class="section">
          <h3>Progreso de actividad</h3>
          <pv-divider class="divider" />

          <div class="progress-container">
            <div class="circle-graphic-container">
              <GraphicsCircle></GraphicsCircle>
            </div>
            <div class="bar-graphic-container">
              <GraphicsBar></GraphicsBar>
            </div>
          </div>
        </section>
      </div>
    </main>
</template>

<script setup>
import SideBar from '../SideBar/SideBar.vue';
import BandejaEntrada from '../VisionGeneral/BandejaEntrada.vue';
import Calendar from '../VisionGeneral/FlujoActividad/Calendar.vue';
import Activities from './FlujoActividad/Activities.vue';
import GraphicsCircle from '../VisionGeneral/ProgresoActividad/GraphicsCircle.vue';
import GraphicsBar from '../VisionGeneral/ProgresoActividad/GraphicsBar.vue';

</script>

<style scoped>
.vision-general {
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
}

.section {
  margin-bottom: 40px;
}

.section h3 {
  margin-bottom: 20px;
}

.activities-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

}

.calendar-container,
.activities-list-container {
  flex-basis: calc(50% - 10px);
  margin-bottom: 20px;
}

.progress-container {
  display: flex;
  justify-content: space-between;
}

.circle-graphic-container,
.bar-graphic-container {
  flex-basis: calc(50% - 10px);
}
</style>
