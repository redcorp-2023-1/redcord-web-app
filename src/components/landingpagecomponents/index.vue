<script setup></script>

<template>
  <header>
    <div class="container__menu">
      <div class="logo">
        <a href="index.html"
          ><img src="./png/LogoRedcorp.png" width="160" height="80" alt="Logo" />
        </a>
      </div>
      <div class="menu">
        <i class="fas fa-bars" id="btn_menu"></i>
        <div id="back_menu"></div>
        <nav id="nav">
          <img src="./png/LogoRedcorp2.png" alt="" />
          <ul>
            <li><a>Inicio</a></li>
            <li><a>¿Qué es Redcorp? y nuestros servicios</a></li>
            <li><a>Blog</a></li>
            <li><a>Conócenos</a></li>
            <li><a>Precios y planes</a></li>
            <li><a>Contacto</a></li>
            <li><a>Iniciar sesión</a></li>
            <li><a>Registrarse</a></li>
          </ul>
        </nav>
      </div>
    </div>
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
        <img src="./jpg/image1.JPG" alt="" />
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
        <img src="./jpg/image2.JPG" alt="" />
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
        <img src="./jpg/image12.JPG" alt="" />
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
        <img src="./jpg/pc2.JPG" alt="" />
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
    <div class="container-footer-all">
      <div class="container-body">
        <div class="colum1">
          <h1>Mas informacion</h1>
          <p>Síguenos en nuestras redes sociales</p>
          <div class="row">
            <a href="https://www.facebook.com/" target="_blank">
              <img src="./png/iconFacebook.png" width="32" height="30" alt="facebook" />
            </a>
            <label>Facebook</label>
          </div>
          <div class="row">
            <a href="https://www.instagram.com/" target="_blank">
              <img src="./png/iconInstagram.png" width="43" height="60" alt="facebook" />
            </a>
            <label>Instagram</label>
          </div>
        </div>

        <div class="colum2">
          <h1>Navegación</h1>

          <div class="row">
            <li><a class="Inicio" href="index.html">Inicio</a></li>
          </div>
          <div class="row">
            <li><a class="Blog" href="blog.html">Blog</a></li>
          </div>
          <div class="row">
            <li><a class="Conócenos" href="conocenos.html">Conócenos</a></li>
          </div>
          <div class="row">
            <li><a class="Servicios" href="servicios.html">Servicios</a></li>
          </div>
        </div>

        <div class="colum3">
          <h1>Contáctanos</h1>

          <div class="row2">
            <a href="https://goo.gl/maps/7U3YVLgyQSRCME5B6" target="_blank">
              <img src="./png/iconMap.png" width="32" height="30" alt="map" />
            </a>
            <label>Lima, Perú</label>
          </div>

          <div class="row2">
            <a href="https://outlook.live.com/" target="_blank">
              <img src="./png/iconMail.png" width="33" height="30" alt="mail" />
            </a>
            <label>redcorp@corporation.com</label>
          </div>

          <div>
            <form action="">
              <input type="text" placeholder="Ingrese su correo" />
              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="container-footer">
      <div class="footer">
        <div class="copyright">© 2022 Todos los Derechos Reservados | <a href="">Redcorp</a></div>

        <div class="information">
          <a href="">Informacion Compañia</a> | <a href="">Privacion y Politica</a> |
          <a href="">Terminos y Condiciones</a>
        </div>

        <div class="col-md-3 mb-2">
          <h6 class="text-uppercase font-weight-bold">
            <label>Idioma</label>
            <select name="idioma" id="idioma">
              <option value="Español">Español</option>
              <option value="Inglés">Inglés</option>
            </select>
          </h6>
        </div>
      </div>
    </div>
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

header {
  width: 100%;
  height: 80px;
  margin-top: 40px;
  position: absolute;
  z-index: 1;
  padding: 40px;
}

.container__menu {
  max-width: 1200px;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
}

.logo {
  height: 100%;
  display: flex;
  align-items: center;
}

.logo img {
  width: 160px;
  height: 75px;
}

.menu {
  display: flex;
  align-items: center;
}

.menu ul {
  display: flex;
  gap: 40px;
  align-items: center;
}

.menu ul li {
  list-style: none;
  text-align: center;
}

.menu ul li a {
  text-decoration: none;
  font-size: 16px;
  color: #fff;
  font-family: 'Roboto Condensed', sans-serif;
}

nav ul li a:hover {
  position: static;
  border: 0px solid #6a5dc4;
  color: white;
  text-decoration: none;
  background: #c9725b;
}

.menu nav img {
  display: none;
}

.menu #btn_menu {
  display: none;
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
  background-image: url(./jpg/banner.JPG);
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
  background-image: url(./jpg/banner.JPG);
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
  background-image: url(./jpg/banner.JPG);
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
  background-image: url(./jpg/banner.JPG);
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
  width: 750px;
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
  width: 100%;
  background: #22242e;
  color: #22242e;
}

.container-footer-all {
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 150px;
  background-color: #22242e;
}

.container-body {
  display: flex;
  margin-top: 50px;
  justify-content: space-between;
  background-color: #22242e;
}

.colum1 {
  max-width: 400px;
  color: white;
}

.colum1 h1 {
  font-family: 'Roboto Slab';
  color: white;
  font-size: 20px;
}

.colum1 p {
  font-family: 'Roboto Condensed';
  color: white;
  font-size: 17px;
  margin-top: 20px;
}

.colum2 {
  max-width: 400px;
}

.colum2 h1 {
  font-family: 'Roboto Slab';
  color: white;
  font-size: 20px;
}

.row {
  margin-top: 20px;
  display: flex;
  font-family: 'Roboto Condensed';
  color: white;
  font-size: 17px;
}

.Inicio {
  color: white;
  text-decoration: none;
}
.Inicio:hover {
  color: #c9725b;
  text-decoration: none;
}

.Blog {
  color: white;
  text-decoration: none;
}

.Blog:hover {
  color: #c9725b;
  text-decoration: none;
}
.Conócenos {
  color: white;
  text-decoration: none;
}

.Conócenos:hover {
  color: #c9725b;
  text-decoration: none;
}
.Servicios {
  color: white;
  text-decoration: none;
}
.Servicios:hover {
  color: #c9725b;
  text-decoration: none;
}

.row img {
  width: 36px;
  height: 36px;
}

.row label {
  margin-top: 10px;
  margin-left: 15px;
  color: white;
}

.colum3 {
  max-width: 400px;
}

.colum3 h1 {
  font-family: 'Roboto Slab';
  color: white;
  font-size: 20px;
}

.row2 {
  text-decoration: none;
  margin-top: 15px;
  display: flex;
  font-family: 'Roboto Condensed';
  color: white;
  font-size: 17px;
}

.row2 img {
  width: 36px;
  height: 36px;
}

.row2 label {
  margin-top: 10px;
  margin-left: 20px;
  max-width: 140px;
}

form {
  width: 230px;
  height: 200px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  margin-top: 15px;
}

input {
  padding: 10px 10px;
  width: 265px;
}

button {
  position: absolute;
  text-decoration: none;
  color: white;
  width: 200px;
  font-family: 'Roboto Condensed';
  font-size: 18px;
  text-align: center;
  background-color: #c9725b;
  border-radius: 100px;
  border: none;
  padding: 15px 15px;
  margin-top: 55px;
  margin-left: 0px;
  cursor: pointer;
}

button:hover {
  background-color: #22242e;
  color: white;
  border: 2px solid #22242e;
  cursor: pointer;
  border: solid white;
}

.container-footer {
  width: 100%;
  background-color: #22242e;
  font-family: 'Roboto Slab';
  color: white;
  font-size: 16px;
}

.footer {
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  padding: 40px;
  background-color: #22242e;
}

.copyright {
  color: #c7c7c7;
}

.copyright a {
  text-decoration: none;
  color: white;
  font-weight: bold;
}

.information a {
  text-decoration: none;
  color: #c7c7c7;
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
  .container__cover {
    background-position: 50%;
    background-image: url(./jpg/fondo2.JPG);
  }
}

@media screen and (max-width: 1300px) {
  header {
    width: 1200px;
  }

  .menu nav {
    position: fixed;
    top: 0;
    right: -250px;
    background: white;
    width: 250px;
    height: 100vh;
    padding: 40px;
    z-index: 1;
    transition: all 300ms;
  }

  .menu ul {
    flex-direction: column;
    margin-top: 40px;
  }

  .menu ul li {
    margin-top: 30px;
    margin-left: 0;
  }

  .menu ul li a {
    color: #bebebe;
  }

  #selected {
    background: none;
    padding: 0px;
    border-radius: none;
    color: #f6615d;
  }

  .menu nav img {
    display: block;
    width: 60px;
  }

  #back_menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: none;
  }

  .menu #btn_menu {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0.1);
    font-size: 24px;
    border-radius: 50px;
    cursor: pointer;
    transition: all 300ms;
  }

  .menu #btn_menu:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  #testimonios .text {
    max-width: 100%;
    text-align: center;
    align-items: center;
  }
}

@media screen and (max-width: 1250px) {
  .container__cover {
    background-image: url(./jpg/fondo2.JPG);
  }

  header {
    width: 1100px;
  }

  .container__cover {
    background-position: 0px;
  }

  .container__cover .svg img {
    width: 500px;
  }

  .testimonios {
    height: 1000px;
  }
}

@media screen and (max-width: 1200px) {
  .container__cover {
    background-image: url(./jpg/fondo2.JPG);
  }

  header {
    width: 900px;
  }

  .container__cover .svg img {
    display: none;
  }

  .container__cover .text {
    max-width: 100%;
    text-align: center;
    align-items: center;
  }

  .container__banner .text {
    max-width: 100%;
    text-align: center;
    align-items: center;
  }

  .container__cover .text .avatars img {
    display: none;
  }

  .container__cover .text .textopequeño {
    display: none;
  }

  #testimonios .text {
    max-width: 100%;
    text-align: center;
    align-items: center;
  }

  .container-body {
    flex-wrap: wrap;
  }

  .colum1 {
    max-width: 100%;
  }
}

@media screen and (max-width: 1000px) {
  #testimonios .text {
    max-width: 100%;
    text-align: center;
    align-items: center;
  }
  header {
    width: 750px;
  }
}

@media screen and (max-width: 900px) {
  #testimonios .text {
    max-width: 100%;
    text-align: center;
    align-items: center;
  }

  .container__banner3 .task3 img {
    width: 750px;
    height: 400px;
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
  header {
    width: 650px;
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
  header {
    width: 590px;
  }
}

@media screen and (max-width: 670px) {
  .colum2 {
    margin-top: 30px;
  }

  .colum3 {
    margin-top: 30px;
  }
  header {
    width: 530px;
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
    width: 250px;
    height: 230px;
  }
}

@media screen and (max-width: 414px) {
  .container__cover .apps img {
    margin-top: 30px;
    width: 300px;
  }
}

@media screen and (max-width: 415px) {
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
}

@media screen and (max-width: 390px) {
  .container__banner .text h1 {
    font-size: 35px;
  }
  .container__banner .task img {
    width: 250px;
    height: 230px;
  }
}
</style>
