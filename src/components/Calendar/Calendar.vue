<template>
  <div class="container">
    <VCalendar locale="es" expanded class="calendar" title-position="left" />
  </div>
</template>

<script setup></script>

<style scoped>
.container {
  margin: 1rem auto;
  width: min(600px, 90%);
}

/* .card {
  width: 100%;
  aspect-ratio: 1/1;
  box-shadow: none;
  margin: 0;
  border-radius: 0;
  border: 1px solid black;
} */
</style>
