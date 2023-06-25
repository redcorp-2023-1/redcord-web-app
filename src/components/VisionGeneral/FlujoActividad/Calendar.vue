<template>
  <div class="card">
    <pv-calendar v-model="date" inline showWeek :events="events" :eventColor="getEventColor" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const date = ref();

const events = [
  { title: "Reunión", date: new Date(2023, 5, 10) },
  { title: "Presentación", date: new Date(2023, 5, 15) },
  { title: "Proyecto final", date: new Date(2023, 5, 20) },
];

const getEventColor = (event) => {
  // Personaliza el color de los eventos según tus necesidades
  return event.title === "Reunión" ? "#FFC107" : "#00B0FF";
};
</script>

<style>
.card {
  width: 500px;
  height: 500px;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.v-event {
  border-radius: 4px;
  padding: 2px;
  margin-bottom: 2px;
  color: #fff;
  font-size: 12px;
}

.v-event-title {
  font-weight: bold;
}

.v-event-meeting {
  background-color: #FFC107;
}

.v-event-presentation {
  background-color: #00B0FF;
}
</style>
