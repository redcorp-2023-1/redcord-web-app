<template>
  <div class="card">
    <pv-chart type="bar" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const chartData = ref({
  labels: ['Febrero', 'Marzo', 'Junio', 'Julio'],
  datasets: [
    {
      label: 'Actividades',
      data: [540, 325, 702, 620],
      backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
      borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
      borderWidth: 1
    }
  ]
});
const chartOptions = ref({
  scales: {
    y: {
      beginAtZero: true
    }
  }
});
</script>
