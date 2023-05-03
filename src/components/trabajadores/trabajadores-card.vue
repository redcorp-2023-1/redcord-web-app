<template>
    <div class="datos">
      <div>{{ id }}</div>
      <div>{{ nombre }}</div>
      <div>{{ correo }}</div>
      <div>{{ area }}</div>
      <img src={{foto}}>
    </div>
</template>
  

<script>

  export default {
        name: "Trabajador",
        props:  {
        id: {
        type: Number,
        required: true
        },
        nombre: {
        type: String,
        required: true
        },
        correo: {
        type: String,
        required: true
        },
        area: {
        type: String,
        required: true
        },
        foto: {
        type: Image,
        required: true}
     },
    data(){
        return{
           
            

        }
    },
   
    beforeMount() {
        
        

    }


  };

</script>





<style>

    .datos{
        display: flex;
        flex-direction: column;
    }

</style>