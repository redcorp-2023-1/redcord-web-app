<template>
  <div class="main-layout">
    <SideBar />
    <div class="main-contentlayout">
      <Toolbar />
      <main>
        <section class="scroll">
          <slot />
        </section>
        <Aside class="aside" />
      </main>
    </div>

    <pv-button class="sidebar-button" icon="pi pi-arrow-left" @click="showAside = true" />

    <pv-sidebar v-model:visible="showAside" position="right">
      <Aside />
    </pv-sidebar>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import Toolbar from '../components/Toolbar/toolbar.component.vue';
import Aside from '../components/Aside/aside.component.vue';
import SideBar from '../components/SideBar/SideBar.vue';

const showAside = ref(false);
</script>

<style scoped>
.main-layout,
main {
  display: flex;
}

.main-layout {
  height: 100vh;
  position: relative;
}

.main-contentlayout {
  flex: 1 1 auto;
  height: 100%;
}

main {
  height: calc(100% - 100px);
}

.scroll {
  flex: 1 1 auto;
  height: 100%;
  overflow-y: auto;
}

.sidebar-button {
  display: none;
  position: fixed;
  right: 10px;
  bottom: 10px;
  opacity: 40%;
}

@media (max-width: 600px) {
  .sidebar-button {
    display: block;
  }

  .aside {
    display: none;
  }
}
</style>
