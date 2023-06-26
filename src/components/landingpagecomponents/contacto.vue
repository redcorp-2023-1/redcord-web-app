<script setup>
import FooterComponent from './FooterComponent.vue';
import HeaderComponent from './HeaderComponent.vue';
</script>
<template>
  <header>
    <HeaderComponent></HeaderComponent>
  </header>
  <section id="banner3">
    <div class="contenido-bannercontacto">
      <h1><span>Contáctanos</span></h1>
      <br />
      <p>
        Si desea obtener más información sobre nuestros servicios, de la plataforma o cualquier otro
        tema en especial, no dude en contáctarnos.
      </p>
      <p>Ingrese sus datos y estableceremos una comunicación prontamente con usted.</p>
    </div>
  </section>

  <section id="contenedor_formulario">
    <div class="Formu">
      <form action="" class="form">
        <div class="form1">
          <h1 class="tituloForm">Ingrese sus datos personales</h1>
          <p></p>
        </div>
        <label for="nombre" class="labelForm">Nombres</label>
        <input type="text" id="nombre" class="form-input" placeholder="Escriba su nombre" />
        <label for="apellido" class="labelForm">Apellidos</label>
        <input type="text" id="apellido" class="form-input" placeholder="Escriba su apellido" />
        <label for="correo" class="labelForm">Correo electrónico</label>
        <input
          type="text"
          id="correo"
          class="form-input"
          placeholder="Escriba su correo electrónico"
        />
        <label for="empresa" class="labelForm">Empresa</label>
        <input
          type="text"
          id="empresa"
          class="form-input"
          placeholder="Escriba la empresa que pertenece"
        />

        <label for="mensaje" class="labelForm">Mensaje</label>

        <div id="mensajeForm">
          <textarea id="mensaje1" placeholder="Escriba su mensaje"></textarea>
        </div>

        <div class="bot">
          <a href="">
            <input type="button" value="Enviar" />
          </a>
        </div>
      </form>
      <div class="columIcon">
        <div class="row2">
          <img src="./png/mapIcon.png" width="30" height="30" alt="map" />
          <label class="mapa">Lima, Perú</label>
        </div>
        <div class="row2">
          <img src="./png/emailIcon.png" width="30" height="30" alt="mail" />
          <label class="email">redcorp@corporation.com</label>
        </div>
        <div class="row2">
          <img src="./png/phoneIcon.png" width="30" height="30" alt="phone" />
          <label class="phone">555-5555</label>
        </div>
      </div>
    </div>
  </section>

  <footer>
    <FooterComponent></FooterComponent>
  </footer>
</template>

<style>
#banner3 {
  padding: 0 20px;
  background-image: url('./jpg/fondoContacto.jpg');
  height: 60vh;
  background-size: cover;
  background-position: top;
}

.contenido-bannercontacto {
  color: #fff;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-content: center;
}

.contenido-bannercontacto h1 {
  font-size: 42px;

  font-weight: 400;
  padding: 10px 0px;
  font-weight: bold;
  font-family: 'Roboto Slab', sans-serif;
}

.contenido-bannercontacto p {
  font-size: 19px;
  margin-right: 200px;
  margin-left: 200px;
  padding: 10px 0px;
  line-height: 30px;
  font-weight: 800;
  font-family: 'Roboto Flex', sans-serif;
}

.contenido-bannercontacto h3 span {
  font-weight: 600;
  line-height: 25px;
}

.texto {
  margin-top: 50px;
  text-align: center;
  font-family: 'Roboto Slab', sans-serif;
  font-size: 30px;
}

#contenedor_formulario {
  margin: 500px;
  padding: 10px 20px;

  box-sizing: border-box;
  margin-top: 50px;
  margin-bottom: 20px;
}

.form {
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}
.Formu {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.Formu .form .form1 .tituloForm {
  font-family: 'Roboto Slab';
  font-size: 28px;
  line-height: 100px;
  width: 450px;
  text-align: center;
}

.Formu .form .labelForm {
  line-height: 40px;
  font-family: 'Roboto Slab';
  font-size: 22px;
  width: 200px;
}

.Formu .form .form-input {
  font-family: 'Roboto Slab';
  font-size: 18px;
  width: 450px;
  padding: 20px;
  border-radius: 100px;
  background-color: #d9d9d9;
  color: black;
  border: none;
}

#mensaje1 {
  display: block;
  font-family: 'Roboto Slab';
  font-size: 18px;

  width: 450px;
  height: 200px;
  border: none;
  border-radius: 50px;
  padding: 25px;
  background-color: #d9d9d9;
  resize: none;
}

#contenedor_formulario .bot {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
}

#contenedor_formulario .bot input {
  text-decoration: none;
  color: white;
  width: 170px;
  font-family: 'Roboto Condensed';
  font-size: 18px;
  text-align: center;
  background-color: #c9725b;
  border-radius: 100px;
  padding: 16px 40px;
  border: none;
}

#contenedor_formulario .bot input:hover {
  background-color: #22242e;
  color: white;
  border: 2px solid #22242e;
  cursor: pointer;
}

.columIcon {
  display: flex;
  max-width: 900px;
  width: 300px;

  flex-direction: column;
}

.row2 {
  margin-top: 20px;
  display: flex;
  font-family: 'Roboto Condensed';
  font-size: 17px;
}

.columIcon .row2 label {
  margin-top: 10px;
  margin-left: 15px;
  color: #7da4ca;
}

@media only screen and (min-width: 320px) and (max-width: 768px) {
  .container-card {
    flex-wrap: wrap;
  }
  .card {
    margin: 15px;
  }

  #contenedor_formulario {
    width: 400px;
    margin: auto;
  }

  #contenedor_formulario .Formu .form .form-input {
    width: 350px;
  }

  #mensaje1 {
    width: 350px;
  }
  .Formu .form .form1 .tituloForm {
    font-family: 'Roboto Slab';
    font-size: 27px;
    line-height: 100px;
    width: 370px;
    text-align: center;
  }

  #contenedor_formulario .bot {
    padding: 20px 100px;
  }
}

@media screen and (max-width: 1000px) {
  .tabla {
    width: 45%;
    max-width: none;
    margin-bottom: 40px;
    flex-grow: initial;
    margin-top: 150px;
  }

  .texto2 {
    margin-top: 100px;
  }

  .contenido-bannercontacto p {
    margin-right: 0px;
    margin-left: 0px;
  }

  #pregunta {
    margin-top: 500px;
  }

  #contenedor_formulario {
    width: 400px;
    margin: auto;
  }

  .columIcon {
    margin: auto;
  }
}
</style>
