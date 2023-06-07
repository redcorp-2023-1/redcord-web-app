<template>
  <div class="main-layout">
    <SideBar />
    <div class="main-content">
      <Toolbar />
      <main>
        <section class="scroll">
          <slot />
        </section>
        <Aside />
      </main>
    </div>
  </div>
</template>

<script setup>
import Toolbar from '../components/Toolbar/toolbar.component.vue';
import Aside from '../components/Aside/aside.component.vue';
import SideBar from '../components/SideBar/Sidebar.vue';
</script>

<style scoped>
.main-layout,
main {
  display: flex;
}

.main-layout {
  height: 100vh;
}

.main-content {
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
</style>
