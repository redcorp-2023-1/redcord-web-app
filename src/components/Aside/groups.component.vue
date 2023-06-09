<template>
  <section>
    <h4>Grupos</h4>

    <div class="group" v-for="group in groups" :key="group.id">
      <i class="pi pi-users" />

      <p>{{ group.name }}</p>
    </div>
  </section>
</template>

<script setup>
defineProps({
  groups: Array,
});
</script>

<style scoped>
section {
  width: 100%;
}

h4 {
  color: #6a5dc4;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 16px;
}

.group {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 26px;
}

i {
  width: 40px;
  height: 40px;
  /* border-radius: 50%; */
  display: grid;
  place-content: center;
  font-size: 30px;
  color: #c9725b;
}

p {
  margin: 0;
  text-decoration: underline;
  font-weight: 600;
  font-size: 16px;
}
</style>
