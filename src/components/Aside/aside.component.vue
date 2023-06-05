<template>
  <aside>
    <span class="p-input-icon-left">
      <i class="pi pi-search" />
      <pv-input-text v-model="search" placeholder="Search" />
    </span>

    <Contacts />
  </aside>
</template>

<script setup>
import { ref } from 'vue';

import Contacts from './contacts.component.vue';

const search = ref('');
</script>

<style scoped>
aside {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
