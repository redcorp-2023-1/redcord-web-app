<script setup>
import FooterComponent from './FooterComponent.vue';
import HeaderComponent from './HeaderComponent.vue';
</script>
<template>
  <header>
    <HeaderComponent></HeaderComponent>
  </header>
  <main>
    <div class="container_cover2">
      <div class="cover">
        <div class="text">
          <h1>Conócenos</h1>

          <p>
            Nuestro equipo tiene como misión generar un mejor ambiente de apoyo y comunidad entre
            los trabajadores de una empresa a la que brindamos nuestro servicio, fomentando una
            eficaz gestión de trabajo y desarrollo profesional. Nuestra visión es la del
            reconocimiento de parte de las empresas como la plataforma digital social de excelencia
            para la comunicación y desarrollo profesional entre miembros de la empresa.
          </p>
        </div>
        <div class="svg">
          <img src="./jpg/imgGroup.jpg" alt="" />
        </div>
      </div>
    </div>
  </main>

  <section class="team">
    <div class="team__header">
      <h2>Nuestro equipo</h2>
    </div>
    <div class="team__contenedor">
      <div class="team__caja">
        <div class="caja-top">
          <div class="perfil">
            <div class="perfil-img">
              <img src="./png/Ellipse41.png" />
            </div>

            <div class="name-user">
              <strong>Fabrizzio Castro</strong>
              <span>Ingeniero de Software</span>
            </div>
          </div>
        </div>
      </div>

      <div class="team__caja">
        <div class="caja-top">
          <div class="perfil">
            <div class="perfil-img">
              <img src="./png/Ellipse46.png" />
            </div>

            <div class="name-user">
              <strong>Fabricio Huilca</strong>
              <span>Ingeniero de Software</span>
            </div>
          </div>
        </div>
      </div>

      <div class="team__caja">
        <div class="caja-top">
          <div class="perfil">
            <div class="perfil-img">
              <img src="./png/Ellipse47.png" />
            </div>

            <div class="name-user">
              <strong>Fabio Nicolich</strong>
              <span>Ingeniero de Software</span>
            </div>
          </div>
        </div>
      </div>

      <div class="team__caja">
        <div class="caja-top">
          <div class="perfil">
            <div class="perfil-img">
              <img src="./png/Ellipse48.png" />
            </div>

            <div class="name-user">
              <strong>Leonel Ortega</strong>
              <span>Ingeniero de Software</span>
            </div>
          </div>
        </div>
      </div>

      <div class="team__caja">
        <div class="caja-top">
          <div class="perfil">
            <div class="perfil-img">
              <img src="./png/Ellipse43.png" />
            </div>

            <div class="name-user">
              <strong>Esteban Calderón</strong>
              <span>Ingeniero de Software</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer>
    <FooterComponent></FooterComponent>
  </footer>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container_cover2 {
  width: 100%;
  height: 780px;
  background-image: url(./jpg/fondo2.JPG);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 40px;
}

.cover {
  max-width: 1200px;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.container_cover2 .text {
  max-width: 600px;
  margin-top: 20px;
}

.container_cover2 .text h1 {
  font-size: 42px;
  font-family: 'Roboto Slab', sans-serif;
  color: white;
}

.container_cover2 .text p {
  font-size: 16px;
  font-family: 'Roboto Flex', sans-serif;
  color: white;
  margin-top: 40px;
  line-height: 25px;
}

.container_cover2 .text input {
  padding: 20px;
  width: 200px;
  border: none;
  font-size: 18px;
  font-family: 'Roboto Condensed';
  text-align: center;
  border-radius: 100px;
  margin-top: 80px;
  background-color: #c9725b;
  color: white;
  cursor: pointer;
  transition: all 300ms;
}

.container_cover2 .text input:hover {
  background-color: #22242e;
  color: white;
  border: 0px solid #22242e;
  cursor: pointer;
}

.container_cover2 .text .svg {
  margin-top: 80px;
}

.team {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 800px;
  background-image: url(./jpg/fondo2.JPG);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.team__header {
  margin: 50px 0px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

.team__header h2 {
  font-size: 39px;
  font-family: 'Roboto Slab', sans-serif;
  color: white;
}

.team__contenedor {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
}

.team__caja {
  width: 300px;
  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.5);
  background-color: white;
  padding: 20px;
  margin: 15px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.perfil-img {
  width: 248px;
  height: 229px;
  overflow: hidden;
  justify-content: center;
}

.perfil-img img {
  width: 100%;
  height: 100%;
  object-fit: center;
}

.name-user {
  display: flex;
  flex-direction: column;
  font-size: 36px;
  font-family: 'Roboto Slab', sans-serif;
  color: white;
  margin-top: 15px;
}

.name-user strong {
  color: #22242e;
  font-size: 1.3rem;
}

.name-user span {
  color: #c7c7c7;
  font-size: 1.1rem;
}

.caja-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.texto3 {
  color: rgb(0, 0, 0);
  text-align: center;
  font-family: 'Roboto Slab', sans-serif;
  font-size: 30px;
  padding: 60px;
}

.video_producto {
  width: 100%;
  padding: 60px;
}

.video_producto .seccion_video {
  max-width: 800px;
  height: auto;
  margin: auto;
}

.video_producto .seccion_video .videoYoutube {
  position: relative;
  height: 500px;

  margin: 15px;
}

.video_producto .seccion_video .videoYoutube iframe {
  position: absolute;
  height: 0;
  width: 100%;
  height: 100%;
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

@media screen and (max-width: 1700px) {
  .container_cover2 {
    background-position: 50%;
    background-image: url(./jpg/fondo2.JPG);
  }

  .team {
    height: 800px;
  }

  .team__header {
    margin-top: 10px;
  }
}

@media screen and (max-width: 1500px) {
  .team {
    height: 800px;
  }

  .team__header {
    margin-top: 10px;
  }
}
@media screen and (max-width: 1400px) {
  .team {
    height: 800px;
  }

  .team__header {
    margin-top: 10px;
  }
}
@media screen and (max-width: 1350px) {
  .team {
    height: 800px;
  }

  .team__header {
    margin-top: 10px;
  }
}

@media screen and (max-width: 1350px) {
  .team {
    height: 1000px;
  }

  .team__header {
    margin-top: 10px;
  }
}
@media screen and (max-width: 1250px) {
  .container_cover2 {
    background-image: url(./jpg/fondo2.JPG);
  }

  .container_cover2 {
    background-position: 0px;
  }

  .container_cover2 .svg img {
    width: 500px;
  }

  .team {
    height: 1000px;
  }

  .team__header {
    margin-top: 10px;
  }
}
@media screen and (max-width: 1200px) {
  .container_cover2 {
    background-image: url(./jpg/fondo2.JPG);
  }

  .container_cover2 .svg img {
    display: none;
  }

  .container_cover2 .text {
    max-width: 100%;
    text-align: center;
    align-items: center;
  }

  .container__banner .text {
    max-width: 100%;
    text-align: center;
    align-items: center;
  }

  .team {
    height: 1000px;
  }

  .team__header {
    margin-top: 10px;
  }
}

@media screen and (max-width: 1000px) {
  .team {
    height: 1100px;
  }

  .team__header {
    margin-top: 10px;
  }
}

@media screen and (max-width: 1000px) {
  .team {
    height: 1100px;
  }

  .team__header {
    margin-top: 10px;
  }
}

@media screen and (max-width: 900px) {
  .team {
    height: 1100px;
  }

  .team__header {
    margin-top: 10px;
  }
}

@media screen and (max-width: 850px) {
  .team {
    height: 1100px;
  }

  .team__header {
    margin-top: 10px;
  }
}

@media screen and (max-width: 800px) {
  .team {
    height: 1100px;
  }

  .team__header {
    margin-top: 50px;
  }
}

@media screen and (max-width: 670px) {
  .team {
    height: 1900px;
  }

  .team__header {
    margin-top: 50px;
  }
}
</style>
