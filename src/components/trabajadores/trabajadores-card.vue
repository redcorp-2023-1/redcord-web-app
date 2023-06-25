<template>
  <div class="datos">
    <div>{{ id }}</div>
    <div>{{ nombre }}</div>
    <div>{{ email }}</div>
    <div>{{ area }}</div>
    <img :src="photo" />
  </div>
</template>

<script>
export default {
  name: 'Trabajador',
  props: {
    id: {
      type: Number,
      required: true,
    },
    nombre: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
    photo: {
      type: Image,
      required: true,
    },
  },
  data() {
    return {};
  },

  beforeMount() {
    this.id = this.$route.params.id;
    this.nombre = this.$route.params.nombre;
    this.email = this.$route.params.email;
    this.area = this.$route.params.area;
    this.photo = this.$route.params.photo;
  },
};
</script>

<style>
.datos {
  display: flex;
  flex-direction: column;
}
</style>
