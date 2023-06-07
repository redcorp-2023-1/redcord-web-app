<template>
  <aside>
    <span class="p-input-icon-left input">
      <i class="pi pi-search" />
      <pv-input-text v-model="search" placeholder="Buscar" />
    </span>

    <Contacts />

    <Groups />
  </aside>
</template>

<script setup>
import { ref } from 'vue';

import Contacts from './contacts.component.vue';
import Groups from './groups.component.vue';

const search = ref('');
</script>

<style scoped>
aside {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 24px 0;
  gap: 24px;
}
</style>
