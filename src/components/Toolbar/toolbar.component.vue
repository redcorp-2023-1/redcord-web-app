<template>
  <header>
    <h2>
      {{ route.meta.title || '' }}
    </h2>

    <span class="p-input-icon-left">
      <i class="pi pi-search" />
      <pv-input-text v-model="search" placeholder="Buscar" />
    </span>

    <div class="actions">
      <i class="pi pi-users" />
      <i class="pi pi-bell" />
      <i class="pi pi-cog" />

      <img src="../../components/SideBar/images/men.jpg" />
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const search = ref('');
</script>

<style scoped>
header {
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  border-bottom: 1px solid lightgray;
}

h2 {
  color: #7da4ca;
  font-size: 36px;
  font-weight: 600;
  margin: 0;
}

.actions {
  display: flex;
  align-items: center;
  gap: 50px;
}

.actions i {
  font-size: 20px;
}

img {
  height: 45px;
  width: 45px;
  border-radius: 50%;
}
</style>
