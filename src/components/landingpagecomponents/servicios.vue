<script setup>
import HeaderComponent from './HeaderComponent.vue';
import FooterComponent from './FooterComponent.vue';
</script>
<template>
  <header>
    <HeaderComponent></HeaderComponent>
  </header>
  <section id="banner">
    <div class="contenido-banner">
      <h1><span>¿Qué es Redcorp?</span></h1>
      <br />
      <p>
        Redcorp es una plataforma web y móvil que ofrece servicios a empresas que requieran una
        mejor organización y comunicación entre sus empleados de distintas áreas, promoviendo grupos
        de trabajo y eficiencia del desarrollo, mediante un interfaz similar al de una red social.
        Nuestro objetivo son las empresas que busquen una aplicación web para administrar de mejor
        forma la red de empleados y la gestión de grupos de trabajo.
      </p>
    </div>
  </section>

  <section id="contenedor_precios">
    <div class="container__planes">
      <div class="planes">
        <div class="texto">
          <h1>Servicios</h1>
        </div>

        <div class="container-card">
          <div class="card">
            <figure>
              <img src="./jpg/1.jpg" />
            </figure>
            <div class="contenido-card">
              <p>
                Personalización del servicio según la empresa del cliente, sin perder las
                funcionalidades principales de la marca.
              </p>
            </div>
          </div>

          <div class="card">
            <figure>
              <img src="./jpg/2.jpg" />
            </figure>
            <div class="contenido-card">
              <p>
                Gestión de personal mediante un interfaz de búsqueda retornando el perfil del
                empleado correspondiente. Interfaz de inicio que muestra las publicaciones,
                novedades y proyectos a futuro de la empresa, así mismo un cronograma de
                actividades. Gestión de secciones apartadas correspondientes a cada área, para los
                grupos de trabajos que se deseen crear, las cuales contarán con herramientas
                virtuales dependiendo el enfoque del grupo de trabajo en cuestión.
              </p>
            </div>
          </div>

          <div class="card">
            <figure>
              <img src="./jpg/3.jpg" />
            </figure>
            <div class="contenido-card">
              <p>
                Interfaz de inicio que muestra las publicaciones, novedades y proyectos a futuro de
                la empresa, así mismo un cronograma de actividades.
              </p>
            </div>
          </div>

          <div class="card">
            <figure>
              <img src="./jpg/4.jpg" />
            </figure>
            <div class="contenido-card">
              <p>
                Gestión de secciones apartadas correspondientes a cada área, para los grupos de
                trabajos que se deseen crear, las cuales contarán con herramientas virtuales
                dependiendo el enfoque del grupo de trabajo en cuestión.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="pregunta">
    <div class="container__pregunta">
      <div class="planes">
        <div class="texto2">
          <h1>Sobre el producto</h1>
        </div>

        <div class="video">
          <div class="seccion_video">
            <div class="videoYoutube">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/DYPGJ6qnFes"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div class="bot">
          <RouterLink to="/contacto">
            <input type="button1" value="Contáctanos" />
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
  <footer>
    <FooterComponent></FooterComponent>
  </footer>
</template>

<style>
#banner {
  padding: 0 20px;
  background-image: url(./png/fondoServicios.png);
  height: 60vh;
  background-size: cover;
  background-position: top;
}

.contenido-banner {
  color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-content: center;
}

.contenido-banner h1 {
  font-size: 42px;

  font-weight: 400;
  padding: 10px 0px;
  font-weight: bold;
  font-family: 'Roboto Slab', sans-serif;
}

.contenido-banner p {
  font-size: 19px;
  margin-right: 200px;
  margin-left: 200px;
  padding: 10px 0px;
  line-height: 30px;
  font-family: 'Roboto Flex', sans-serif;
}

.contenido-banner h3 span {
  font-weight: 600;
  line-height: 25px;
}

.texto {
  margin-top: 50px;
  text-align: center;
  font-family: 'Roboto Slab', sans-serif;
  font-size: 30px;
}

.video {
  width: 100%;
  padding: 60px;
}

.video .seccion_video {
  max-width: 800px;
  height: auto;
  margin: auto;
}

.video .seccion_video .videoYoutube {
  position: relative;
  height: 500px;

  margin: 15px;
}

.video .seccion_video .videoYoutube iframe {
  position: absolute;
  height: 0;
  width: 100%;
  height: 100%;
}

#pregunta {
  height: 900px;
}

.container__pregunta {
  align-content: center;
  justify-content: center;
}

.texto2 {
  margin-top: 100px;
  text-align: center;
  font-family: 'Roboto Slab', sans-serif;
  font-size: 30px;
}

#pregunta .bot {
  margin: 50px 0px;
  margin-left: 40px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#pregunta .bot input {
  width: 180px;
  align-content: center;
  cursor: pointer;
  transition: all 300ms;
  object-fit: center;
  flex-wrap: wrap;
  font-size: 18px;
  font-family: 'Roboto Condensed';
  text-align: center;
  background-color: #c9725b;
  color: white;
  border: none;
  border-radius: 100px;
  padding: 18px 40px;
}

#pregunta input:hover {
  background-color: #22242e;
  color: white;
  border: 0px solid #22242e;
  cursor: pointer;
}

.container-card {
  width: 100%;
  display: flex;
  max-width: 1300px;
  margin: auto;
  margin-top: 50px;
}
.title-cards {
  width: 100%;
  max-width: 1280px;
  margin: auto;
  padding: 20px;
  margin-top: 50px;
  text-align: center;
  color: #7a7a7a;
}
.card {
  width: 100%;
  margin: 20px;
  border-radius: 6px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
  transition: all 400ms ease-out;
  cursor: default;
  flex-direction: column;
}
.card:hover {
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.4);
  transform: translateY(-3%);
}
.card img {
  width: 100%;
  height: 210px;
}
.card .contenido-card {
  padding: 15px;
  text-align: center;
}

.card .contenido-card p {
  line-height: 1.8;
  color: #6a6a6a;
  font-size: 17px;
  margin-bottom: 5px;
  font-family: 'Roboto Condensed';
}
.card .contenido-card a {
  display: inline-block;
  padding: 10px;
  margin-top: 10px;
  text-decoration: none;
  color: #2fb4cc;
  border: 1px solid #2fb4cc;
  border-radius: 4px;
  transition: all 400ms ease;
  margin-bottom: 5px;
}
.card .contenido-card a:hover {
  background: #2fb4cc;
  color: #fff;
}
@media only screen and (min-width: 320px) and (max-width: 768px) {
  .container-card {
    flex-wrap: wrap;
  }
  .card {
    margin: 15px;
  }
}

@media screen and (max-width: 1000px) {
  .container-card {
    flex-wrap: wrap;
  }
  .card {
    align-items: center;
  }
  .texto2 {
    margin-top: 100px;
  }

  .contenido-banner p {
    margin-right: 0px;
    margin-left: 0px;
  }
}

@keyframes move-vector {
  0% {
    transform: translateY(15px);
  }
  50% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(15px);
  }
}

@media screen and (max-width: 1200px) {
  .container__banner .text {
    max-width: 100%;
    text-align: center;
    align-items: center;
  }
}

@media screen and (max-width: 670px) {
  .contenido-banner p {
    margin-right: 0px;
    margin-left: 0px;
  }
}

@media screen and (max-width: 507px) {
  .contenido-banner h1 {
    margin-top: 100px;
    font-size: 30px;
  }

  .contenido-banner p {
    font-size: 15px;
  }
}
</style>
