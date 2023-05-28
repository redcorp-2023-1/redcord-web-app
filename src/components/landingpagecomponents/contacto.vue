<script setup>
import FooterComponent from './FooterComponent.vue';
import HeaderComponent from './HeaderComponent.vue';


</script>
<template>
    <header>
        <HeaderComponent></HeaderComponent>
    </header>
    <section id="banner">
      <div class="contenido-banner">
        <h1><span>Contáctanos</span></h1>
        <br />
        <p>
          Si desea obtener más información sobre nuestros servicios, de la plataforma o cualquier
          otro tema en especial, no dude en contáctarnos.
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
      </div>
    </section>

    <section>
      <div class="columIcon">
        <div class="row2">
          <img src="png/mapIcon.png" width="30" height="30" alt="map" />
          <label class="mapa">Lima, Perú</label>
        </div>
        <div class="row2">
          <img src="png/emailIcon.png" width="30" height="30" alt="mail" />
          <label class="email">redcorp@corporation.com</label>
        </div>
        <div class="row2">
          <img src="png/phoneIcon.png" width="30" height="30" alt="phone" />
          <label class="phone">555-5555</label>
        </div>
      </div>
    </section>
    <footer>
        <FooterComponent></FooterComponent>
    </footer>
</template>

<style>
</style>