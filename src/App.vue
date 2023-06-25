<template>
  <MainLayout v-if="$route.meta.title">
    <RouterView />
  </MainLayout>

  <RouterView v-else />
</template>

<script setup>
import MainLayout from './layouts/MainLayout.vue';
</script>

<style scoped>
main {
  display: flex;
}
</style>
