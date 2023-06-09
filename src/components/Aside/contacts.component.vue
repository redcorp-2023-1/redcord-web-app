<template>
  <section>
    <h4>Contactos</h4>

    <div class="contact" v-for="contact in contacts" :key="contact.id">
      <img :src="contact.imageUrl" :alt="contact.name" />

      <p>{{ contact.name }}</p>

      <div class="counter" v-if="contact.notifications">
        {{ contact.notifications }}
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  contacts: Array,
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

.contact {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 26px;
}

img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

p {
  margin: 0;
  text-decoration: underline;
  font-weight: 600;
  font-size: 16px;
}

.counter {
  margin-left: auto;
  height: 24px;
  width: 24px;
  background-color: #9f5454;
  border-radius: 50%;
  color: white;
  display: grid;
  place-content: center;
}
</style>
