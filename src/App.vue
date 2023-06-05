<template>
  <Toolbar />
  <main>
    <div>
      <RouterView />
    </div>
    <Aside />
  </main>
</template>

<script setup>
import Toolbar from './components/Toolbar/toolbar.component.vue';
import Aside from './components/Aside/aside.component.vue';
</script>

<style scoped>
main {
  display: flex;
}
</style>
