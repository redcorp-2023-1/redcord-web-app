
<script >
import { RouterLink } from 'vue-router';

export default({
    name: "footercomponent",
    components: { RouterLink }
})
</script>

<template>
    <footer>
    <div class="container-footer-all">
      <div class="container-body">
        
        <div class="colum1">
          <h1>Mas información</h1>
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
            <li><RouterLink to="/" class="Inicio" href="index.html">Inicio</RouterLink></li>
          </div>
          <div class="row">
            <li><RouterLink to="/blog" class="Blog" href="blog.html">Blog</RouterLink></li>
          </div>
          <div class="row">
            <li><RouterLink to="conocenos" class="Conócenos" href="conocenos.html">Conócenos</RouterLink></li>
          </div>
          <div class="row">
            <li><RouterLink to="servicios" class="Servicios" href="servicios.html">Servicios</RouterLink></li>
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
              <button class="button" type="submit">Enviar</button>
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

        <div class="idiomas">
          <h6 >
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

<style>





.container-footer-all {
  width: 100%;
  
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

.button {
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

.button:hover {
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
  align-items: center;
  
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

@media screen and (max-width:1000px)
{
  .container-body{
    flex-direction: column;
    align-items: center;
  }

  .colum1,.colum2,.colum3{
    padding-bottom: 100px;
  }
}

@media screen and (max-width:500px)
{
  input{
    width: 200px;
  }
}

</style>