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
          <h1>Te ayudamos a gestionar las labores de tu empresa de forma productiva</h1>

          <p>
            Brindamos la planificación diaria con diversas herramientas de gestión de proyectos en
            unos simples pasos para ayudar internamente a la compañía de nuestros usuarios.
          </p>
          <a href="planes.html">
            <input type="button" value="Empieza ahora" />
          </a>

          <div class="avatars">
            <img src="./png/avatars.png" width="200" height="96" alt="avatars" />
          </div>
          <div class="textopequeño">Más de 1,5 mil personas se han unido</div>
        </div>
        <div class="svg">
          <img src="./png/imagentask2.png" alt="" />
        </div>
      </div>
      <div class="apps">
        <img src="./png/apps.png" alt="avatars" />
      </div>
    </div>
  </main>

  <section>
    <div class="container__banner">
      <div class="banner">
        <div class="text">
          <h1>
            ¡Podrás iniciar sesión o registrarte eligiendo su cargo de la empresa para disfrutar de
            todas las funcionalidades que tenemos para tí y lograr facilitar las labores sociales en
            unos simples clicks!
          </h1>
        </div>
      </div>
      <div class="task">
        <img src="./jpg/image1.jpg" alt="" />
      </div>

      <div class="boton2">
        <a href="planes.html">
          <input type="button" value="Ver Planes" />
        </a>
      </div>
    </div>
  </section>

  <section>
    <div class="container__banner2">
      <div class="banner2">
        <div class="text2">
          <h1>¡Las funciones necesarias para facilitar las ocupaciones de trabajo en una app!</h1>
        </div>
      </div>
      <div class="task2">
        <img src="./jpg/image2.jpg" alt="" />
      </div>

      <div class="boton3">
        <a href="servicios.html">
          <input type="button" value="Nuestros servicios" />
        </a>
      </div>
    </div>
  </section>

  <section>
    <div class="container__banner3">
      <div class="banner3">
        <div class="text3">
          <h1>
            ¡Podrás realizar videollamadas estés donde estés con tus compañeros de trabajo, recibir
            notificaciones, realizar la edición de tus perfil profesional, enviar documentos
            importantes, entre otras más funciones en Redcorp!
          </h1>
        </div>
      </div>
      <div class="task3">
        <img src="./jpg/image12.jpg" alt="" />
      </div>
    </div>
  </section>

  <section>
    <div class="container__banner4">
      <div class="banner4">
        <div class="text4">
          <h1>¡No te olvides que también podrás disfrutar de todos nuestros servicios vía web!</h1>
        </div>
      </div>
      <div class="task4">
        <img src="./jpg/pc2.jpg" alt="" />
      </div>
    </div>
  </section>

  <section class="testimonios">
    <div class="testimonios__header">
      <h2>Testimonios</h2>
    </div>

    <!--Testimonios-->
    <div class="testimonios__contenedor">
      <div class="testimonios__caja">
        <div class="caja-top">
          <div class="perfil">
            <div class="perfil-img">
              <img src="./png/testimonio1.png" />
            </div>

            <div class="name-user">
              <strong>Leslie Alexander</strong>
              <span>Gerente Administrativa de Claro</span>
            </div>
          </div>
        </div>

        <div class="comentarios__clientes">
          <p>
            Realmense útil! He tenido resultados progresivos y eficientes en mi empresa con esta
            plataforma web. La recomiendo!
          </p>
        </div>
      </div>

      <div class="testimonios__caja">
        <div class="caja-top">
          <div class="perfil">
            <div class="perfil-img">
              <img src="./png/testimonio2.png" />
            </div>

            <div class="name-user">
              <strong>Robert Fox</strong>
              <span>Jefe de proyecto de Marketing</span>
            </div>
          </div>
        </div>

        <div class="comentarios__clientes">
          <p>
            No estaba convencido sobre las herramientas digitales para mi empresa. No obstante, opté
            por contratar este servicio y me ha ido de maravilla!
          </p>
        </div>
      </div>

      <div class="testimonios__caja">
        <div class="caja-top">
          <div class="perfil">
            <div class="perfil-img">
              <img src="./png/testimonio3.png" />
            </div>

            <div class="name-user">
              <strong>Cody Fisher</strong>
              <span>Gerente Administrativo de H&S</span>
            </div>
          </div>
        </div>

        <div class="comentarios__clientes">
          <p>
            Esta plataforma deben conocerla todos los empresarios! Agradezco que exista una
            aplicación como la que es Redcorp.
          </p>
        </div>
      </div>
    </div>
  </section>
  <footer>
    <FooterComponent></FooterComponent>
  </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Roboto+Flex:opsz@8..144&family=Roboto+Slab:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

/*COVER*/

.container__cover {
  width: 100%;
  height: 920px;
  background-image: url(./jpg/fondo2.jpg);
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

.container__cover .text {
  max-width: 600px;
  margin-top: 90px;
}

.container__cover .text h1 {
  font-size: 42px;
  font-family: 'Roboto Slab', sans-serif;
  color: white;
}

.container__cover .text p {
  font-size: 16px;
  font-family: 'Roboto Flex', sans-serif;
  color: white;
  margin-top: 40px;
  line-height: 25px;
}

.container__cover .text input {
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

.container__cover .text input:hover {
  background-color: #22242e;
  color: white;
  border: 0px solid #22242e;
  cursor: pointer;
}

.container__cover .svg img {
  width: 380px;
  margin-top: 50px;
  animation: move-vector 4s linear infinite;
}

.container__cover .apps {
  justify-content: center;
  align-items: center;

  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  margin-top: -80px;
}

.container__cover .apps img {
  width: 400px;
}

.avatars img {
  width: 210px;
}

.textopequeño {
  font-size: 16px;
  width: 160px;
  font-family: 'Roboto Condensed', sans-serif;
  color: white;
  line-height: 25px;

  margin-left: 220px;
}

/*Banner*/
.container__banner {
  width: 100%;
  height: 850px;
  background-image: url(./jpg/banner.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 40px;
}

.banner {
  max-width: 800px;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.container__banner .text {
  max-width: 1900px;
  margin-top: 90px;
}

.container__banner .text h1 {
  font-size: 25px;
  font-family: 'Roboto Slab', sans-serif;
  color: white;
  text-align: center;
}

.container__banner .task img {
  width: 680px;
  align-content: center;
  justify-content: center;
  display: flex;
  margin: auto;
  margin-top: -500px;
  border-radius: 50px;
}

.container__banner .boton2 {
  margin: 50px 0px;
  margin-left: 40px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container__banner .boton2 input {
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

.container__banner input:hover {
  background-color: #22242e;
  color: white;
  border: 0px solid #22242e;
  cursor: pointer;
}

.container__banner2 {
  width: 100%;
  height: 850px;
  background-image: url(./jpg/banner.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 40px;
}

.banner2 {
  max-width: 800px;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.container__banner2 .text2 {
  max-width: 1900px;
  margin-top: 90px;
}

.container__banner2 .text2 h1 {
  font-size: 25px;
  font-family: 'Roboto Slab', sans-serif;
  color: white;
  text-align: center;
}

.container__banner2 .task2 img {
  width: 580px;
  align-content: center;
  justify-content: center;
  display: flex;
  margin: auto;
  margin-top: -500px;
  border-radius: 50px;
}

.container__banner2 .boton3 {
  margin: 50px 0px;
  margin-left: 40px;
  padding: 5px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container__banner2 .boton3 input {
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
  padding: 21px 9px;
}

.container__banner2 input:hover {
  background-color: #22242e;
  color: white;
  border: 0px solid #22242e;
  cursor: pointer;
}

.container__banner3 {
  width: 100%;
  height: 850px;
  background-image: url(./jpg/banner.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 40px;
}

.banner3 {
  max-width: 800px;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.container__banner3 .text3 {
  max-width: 1900px;
  margin-top: 90px;
}

.container__banner3 .text3 h1 {
  font-size: 25px;
  font-family: 'Roboto Slab', sans-serif;
  color: white;
  text-align: center;
}

.container__banner3 .task3 img {
  width: 850px;
  align-content: center;
  justify-content: center;
  display: flex;
  margin: auto;
  margin-top: -480px;
  border-radius: 10px;
}

.container__banner3 .boton4 {
  margin: 15px 0px;
  margin-left: 40px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container__banner3 .boton4 input {
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

.container__banner3 input:hover {
  background-color: #22242e;
  color: white;
  border: 0px solid #22242e;
  cursor: pointer;
}

.container__banner4 {
  width: 100%;
  height: 1150px;
  background-image: url(./jpg/banner.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 40px;
}

.banner4 {
  max-width: 800px;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.container__banner4 .text4 {
  max-width: 1900px;
  margin-top: 90px;
}

.container__banner4 .text4 h1 {
  font-size: 25px;
  font-family: 'Roboto Slab', sans-serif;
  color: white;
  text-align: center;
}

.container__banner4 .task4 img {
  width: 700px;
  align-content: center;
  justify-content: center;
  display: flex;
  margin: auto;
  margin-top: -720px;
  border-radius: 50px;
}

.container__banner4 .boton5 {
  margin: 15px 0px;
  margin-left: 40px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container__banner4 .boton5 input {
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

.container__banner4 input:hover {
  background-color: #22242e;
  color: white;
  border: 0px solid #22242e;
  cursor: pointer;
}

.testimonios {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 800px;
  background-image: url(./jpg/fondo.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.testimonios__header {
  margin: 50px 0px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.testimonios__header h2 {
  font-size: 39px;
  font-family: 'Roboto Slab', sans-serif;
  color: white;
}

.testimonios__contenedor {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
}

.testimonios__caja {
  width: 500px;
  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.5);
  background-color: white;
  padding: 20px;
  margin: 15px;
  cursor: pointer;
}

.perfil-img {
  width: 50px;
  height: 50px;
  overflow: hidden;
  margin-right: 30px;
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

.reseñas {
  color: yellow;
}

.caja-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.comentarios__clientes {
  color: rgb(0, 0, 0);
  font-family: 'Roboto Flex';
  font-size: 16px;
}

footer {
  background: #22242e;
  color: #22242e;
}

@media screen and (max-width: 1060px) {
  .testimonios{
    height: 1050px;
    min-height: 950px;
  }
}

@media screen and (max-width: 1000px) {
  #testimonios .text {
    max-width: 100%;
    text-align: center;
    align-items: center;
  }

}

@media screen and (max-width: 900px) {
  #testimonios .text {
    max-width: 100%;
    text-align: center;
    align-items: center;
  }
  .container__banner3 .task3{
    padding-top: 130px;
  }
  .container__banner3 .task3 img {
    
    width: 750px;
    height: 400px;
  }
  .svg{
    display: none;
  }

  .container__banner4 .task4 img {
    width: 750px;
    height: 600px;
  }
}

@media screen and (max-width: 820px) {
  #testimonios .text {
    max-width: 100%;
    text-align: center;
  }

  .container__banner3 .task3 img {
    width: 650px;
    height: 350px;
  }

  .container__banner4 .task4 img {
    width: 650px;
    height: 590px;
  }
}

@media screen and (max-width: 737px) {
  .container__banner .task img {
    width: 500px;
    height: 380px;
  }

}

@media screen and (max-width: 693px) {
  .container__banner4 .task4 img {
    width: 590px;
    height: 540px;
  }
}

@media screen and (max-width: 687px) {
  .container__banner3 .task3 img {
    width: 550px;
    height: 250px;
  }

}



@media screen and (max-width: 656px) {
  .container__banner4 .task4 img {
    width: 590px;
    height: 540px;
  }

  .container__banner2 .task2 img {
    width: 500px;
    height: 380px;
  }
}

@media screen and (max-width: 647px) {
  #testimonios .text {
    max-width: 100%;
    text-align: center;
    align-items: center;
  }

  .container__banner3 .task3 img {
    width: 550px;
    height: 250px;
  }

  .container__banner4 .task4 img {
    width: 560px;
    height: 530px;
  }
}

@media screen and (max-width: 612px) {
  .container__banner4 .task4 img {
    width: 540px;
    height: 520px;
  }
  .textopequeño{
    display: none;
  }
}

@media screen and (max-width: 600px) {
  .container__banner3 .task3 img {
    width: 450px;
    height: 200px;
  }

  .container__banner4 .task4 img {
    width: 520px;
    height: 500px;
  }
  .container__cover .apps{
    display: none;
  }
}

@media screen and (max-width: 572px) {
  .container__banner4 .task4 img {
    width: 500px;
    height: 470px;
  }
}

@media screen and (max-width: 572px) {
  .container__banner4 .task4 img {
    width: 450px;
    height: 470px;
  }
}

@media screen and (max-width: 559px) {
  .container__banner .text h1 {
    font-size: 20px;
  }
}

@media screen and (max-width: 552px) {
  .container__banner3 .text3 h1 {
    font-size: 20px;
  }
}

@media screen and (max-width: 560px) {
  .container__banner .task img {
    width: 470px;
    height: 380px;
  }

  .container__banner2 .task2 img {
    width: 450px;
    height: 370px;
  }
}

@media screen and (max-width: 537px) {
  .container__banner .task img {
    width: 450px;
    height: 300px;
  }
}
@media screen and (max-width: 504px) {
  .container__banner3 .text3 {
    margin-bottom: 50px;
  }

  .container__banner3 .task3 img {
    width: 420px;
    height: 200px;
  }

  .container__banner4 .task4 img {
    width: 400px;
    height: 350px;
    align-content: center;
  }
}

@media screen and (max-width: 515px) {
  .container__banner .task img {
    width: 400px;
    height: 300px;
  }
  .container__cover .text input{
    margin-top: 10px;
  }
}

@media screen and (max-width: 504px) {
  .container__banner2 .task2 img {
    width: 390px;
    height: 300px;
  }
}

@media screen and (max-width: 496px) {
  .container__banner2 .task2 img {
    width: 390px;
    height: 290px;
  }
}

@media screen and (max-width: 459px) {
  .container__banner3 .task3 img {
    width: 100px;
    height: 200px;
  }
}
@media screen and (max-width: 463px) {
  .container__banner .task img {
    width: 250px;
    height: 230px;
  }

  .container__banner3 .task3 img {
    width: 450px;
    height: 250px;
  }
}

@media screen and (max-width: 433px) {
  .container__banner .task img {
    padding-top: 30px;
    width: 250px;
    height: 230px;
  }
}

@media screen and (max-width: 428px) {
  .container__cover .apps img {
    margin-top: 30px;
    width: 300px;
  }
  .container__cover .text h1
  {
    font-size: 30px;
  }
}

@media screen and (max-width: 428px) {
  .container__banner2 .task2 img {
    width: 350px;
    height: 300px;
  }

  .container__banner3 .task3 img {
    width: 340px;
    height: 200px;
  }

  .container__banner4 .task4 img {
    width: 340px;
    height: 350px;
  }
  .testimonios{
    height: 1150px;
  }
}

@media screen and (max-width: 390px) {
  .container__banner .text h1 {
    font-size: 18px;
  }
  .container__banner .task img {
    width: 250px;
    height: 230px;
  }
  .container__banner4 .task4 img{
    width: 300px;
    height: 300px;
  }

}

@media screen and (max-width: 360px){
 
  
  .container__banner2 .banner2{
    height: 800px;
  }
  .container__banner2 .task2 img{
    width: 250px;
    height: 200px;
    margin-bottom: none;
  }

  .container__banner3 .task3 img{
    width: 300px;
    height: 200px;
  }
  .container__banner4 .task4 img{
    width: 300px;
    height: 300px;
  }
}

</style>
