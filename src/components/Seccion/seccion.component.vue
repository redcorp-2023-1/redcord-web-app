<template>
  <main>
    <SideBar />

    <div class="SeccionesActuales">
      <div class="title">Secciones Actuales</div>

      <div class="filter">
        <span class="filter-text">Filtrar</span>
        <select name="Input" id="input" class="Options-dropdown">
          <option value="Option">Todas las secciones</option>
        </select>
      </div>

      <div class="content">
        <div class="card">
          <SeccionCardComponent />
          <div class="line"></div>
        </div>

        <div class="card">
          <SeccionCardComponent />
          <div class="line"></div>
        </div>

        <div class="card">
          <SeccionCardComponent />
          <div class="line"></div>
        </div>

        <div class="card">
          <SeccionCardComponent />
          <div class="line"></div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import SeccionCardComponent from './seccion.card.component.vue';
import SideBar from '../SideBar/SideBar.vue';
</script>

<style scoped>
main {
  display: flex;
}

.SeccionesActuales {
  background-color: rgb(240, 240, 240);
  color: dimgrey;
  border-radius: 10px;
  min-height: 100vh;
  position: relative;
  flex: 1 1 auto;
}
.title {
  border-bottom: 1px solid slategrey;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
}
.filter {
  border-bottom: 1px solid slategrey;
  line-height: 40px;
  display: flex;
  padding: 5px 60px;
}
.filter-text {
  font-size: 20px;
}
.Options-dropdown {
  margin-left: 15px;
  background-color: white;
  color: black;
  border-radius: 20px;
  height: 30px;
  width: 150px;
  text-align: center;
  margin-top: 5px;
}
.content {
  position: relative;
  align-items: center;
  justify-content: center;
}
.card {
  padding: 12px 30px 5px;
}
.line {
  margin-top: 10px;
  height: 0;
  border: 1px solid darkgrey;
}
</style>
