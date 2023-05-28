<script setup>
    
import FooterComponent from './FooterComponent.vue';
import HeaderComponent from './HeaderComponent.vue';
</script>
<template>
    <header>
        <HeaderComponent></HeaderComponent>
    </header>
    <main>
      <div class="container__cover">
        <div class="cover">
          <div class="text">
            <h1>Conócenos</h1>

            <p>
              Nuestro equipo tiene como misión generar un mejor ambiente de apoyo y comunidad entre
              los trabajadores de una empresa a la que brindamos nuestro servicio, fomentando una
              eficaz gestión de trabajo y desarrollo profesional. Nuestra visión es la del
              reconocimiento de parte de las empresas como la plataforma digital social de
              excelencia para la comunicación y desarrollo profesional entre miembros de la empresa.
            </p>
          </div>
          <div class="svg">
            <img src="jpg/imgGroup.jpg" alt="" />
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
                <!-- <img src="png/N.png" /> -->
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
                <!-- <img src="png/A.png" /> -->
              </div>

              <div class="name-user">
                <strong>Jhonel Rios</strong>
                <span>Ingeniero de Software</span>
              </div>
            </div>
          </div>
        </div>

        <div class="team__caja">
          <div class="caja-top">
            <div class="perfil">
              <div class="perfil-img">
                <!-- <img src="png/F2.png" /> -->
              </div>

              <div class="name-user">
                <strong> Richar Romero </strong>
                <span>Ingeniero de Software</span>
              </div>
            </div>
          </div>
        </div>

        <div class="team__caja">
          <div class="caja-top">
            <div class="perfil">
              <div class="perfil-img">
                <!-- <img src="png/F.png" /> -->
              </div>

              <div class="name-user">
                <strong>Edwin Lopez</strong>
                <span>Ingeniero de Software</span>
              </div>
            </div>
          </div>
        </div>

        <div class="team__caja">
          <div class="caja-top">
            <div class="perfil">
              <div class="perfil-img">
                <!-- <img src="png/F.png" /> -->
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
</style>