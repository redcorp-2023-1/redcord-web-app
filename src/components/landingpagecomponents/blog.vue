<script setup>
import FooterComponent from './FooterComponent.vue';
import HeaderComponent from './HeaderComponent.vue';
</script>
<template>
  <header>
    <HeaderComponent></HeaderComponent>
  </header>

  <section id="banner2">
    <div class="contenido_banner">
      <h1><span>Las mejores novedadades empresariales</span></h1>
      <br />
      <p>Encuentra los importantes temas ejecutivas que debes saber.</p>
    </div>
  </section>

  <section id="contenedor_precios">
    <div class="container__planes">
      <div class="planes">
        <div class="texto">
          <h1>Noticias</h1>
        </div>

        <div class="container-card">
          <div class="card">
            <figure>
              <img src="./png/Rectangle79.png" />
            </figure>
            <div class="contenido-card">
              <h3>Rediseñando el propósito del trabajo</h3>
              <a href="#">Leer Màs</a>
            </div>
          </div>

          <div class="card">
            <figure>
              <img src="./png/Rectangle81.png" />
            </figure>
            <div class="contenido-card">
              <h3>Mantener el "foco" en momentos de distracción</h3>
              <a href="#">Leer Màs</a>
            </div>
          </div>

          <div class="card">
            <figure>
              <img src="./png/Rectangle82.png" />
            </figure>
            <div class="contenido-card">
              <h3>Nuevos tiempos, nuevos compromisos</h3>
              <a href="#">Leer Màs</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <main>
    <div class="container__cover">
      <div class="cover">
        <div class="text">
          <h1>Mejorando el rendimiento de los líderes</h1>

          <p>
            Se habla de tantas cualidades del liderazgo: desde resiliencia y agilidad hasta visión e
            integridad…; pero, ¿cuál de ellas es la que más a menudo escasea en los directivos?
            ¿Cómo pueden aprovechar al máximo su potencial para tener impacto? En un momento en el
            que el rendimiento reemplaza a la supervivencia como preocupación principal, ¿cómo son
            los líderes que necesitan las organizaciones? ¿Cómo pueden mejorar su propia
            performance?
          </p>
          <a href="#">
            <input type="button" value="Leer más" />
          </a>
        </div>
        <div class="svg">
          <img src="./png/Rectangle170.png" alt="" />
        </div>
      </div>
    </div>
  </main>

  <main>
    <div class="container__cover">
      <div class="cover">
        <div class="text">
          <h1>La ineficacia de los concursos de ideas</h1>

          <p>
            ¿Por qué los concursos de ideas no generan las mejores ideas dentro de la organización?
            O, peor aún, ¿por qué incluso pueden llegar a ahogar la creatividad? El éxito de la
            innovación se debe, en gran medida, a la existencia de propuestas de valor que resuenen
            en los clientes y modelos de negocio que sean escalables y rentables. Sin embargo,
            contar con ideas rompedoras es un ingrediente importante del proceso de innovación. Para
            impulsar la innovación transformadora, es necesario contar con personas que puedan
            pensar fuera de la caja del negocio existente. Cuanto más rompedoras sean sus ideas,
            mejor.
          </p>

          <a href="#">
            <input type="button" value="Leer más" />
          </a>
        </div>
        <div class="svg">
          <img src="./png/Rectangle172.png" alt="" />
        </div>
      </div>
    </div>
  </main>
  <footer>
    <FooterComponent></FooterComponent>
  </footer>
</template>

<style>
#banner2 {
  padding: 0 50px;
  background-image: url(./png/Rectangle70.png);
  height: 70vh;
  background-size: cover;
  background-position: center;
}

.contenido_banner {
  color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-image: url(./png/Rectangle70.png);
  background-size: cover;
}

.contenido_banner h1 {
  font-size: 42px;
  font-weight: 400;
  padding: 10px 0px;
  font-weight: bold;
  font-family: 'Roboto Slab', sans-serif;
  background-color: rgba(48, 47, 47, 0.8);
}

.contenido_banner p {
  font-size: 20px;
  font-weight: 400;
  padding: 10px 0px;
  font-family: 'Roboto Flex', sans-serif;
  background-color: rgba(48, 47, 47, 0.8);
}

.contenido_banner h3 span {
  font-weight: 600;
  line-height: 25px;
}

.texto {
  margin-top: 50px;
  text-align: center;
  font-family: 'Roboto Slab', sans-serif;
  font-size: 30px;
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
  font-family: 'Roboto Slab', sans-serif;
  font-size: 16px;
}

.card .contenido-card a {
  display: inline-block;
  padding: 10px;
  margin-top: 10px;
  text-decoration: none;
  color: #7da4ca;
  border: 1px solid #7da4ca;
  border-radius: 4px;
  transition: all 400ms ease;
  margin-bottom: 5px;
}
.card .contenido-card a:hover {
  background: #7da4ca;
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

.container__cover {
  width: 100%;
  height: 620px;

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
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 37px;

  color: #665075;
}

.container__cover .text p {
  font-size: 16px;
  font-family: 'Roboto Flex', sans-serif;
  color: black;
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
  margin-bottom: 80px;
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
  width: 580px;
  margin-top: 50px;
  margin-right: -30px;
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

#blog2 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px;
  border-bottom: 1px solid black;
}

.blog-head {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.blog-head span {
  color: #6a5dc4;
}

.blog-head h3 {
  font-size: 2.4rem;
  color: #22242e;
  font-weight: 600;
}

.blog-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0px;
  flex-wrap: wrap;
}

.blog-box {
  width: 350px;
  background-color: #fff;
  border: 1px solid whitesmoke;
  margin: 20px;
}

.blog-img {
  width: 100%;
  height: auto;
}

.blog-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.blog-text {
  padding: 30px;
  display: flex;
  flex-direction: column;
}

.blog-text span {
  color: #c9725b;
  font-size: 0.9rem;
}

.blog-text .blog-title {
  font-size: 1.3rem;
  font-weight: 500;
  color: #22242e;
}

.blog-text .blog-title:hover {
  color: #263db4;
  transition: all ease 0.3s;
}

.blog-text p {
  color: #263db4;
  font-size: 0.9rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 20px 0px;
}

.blog-text a {
  color: #000000;
}

.blog-text a:hover {
  color: #6a5dc4;
  transition: all ease 0.3s;
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
    margin-top: 600px;
  }
  .container__cover {
    height: 1000px;
  }

  .container__cover .text h1 {
    padding-top: 100px;
  }
}

@media screen and (max-width: 700px) {
  .tabla {
    width: 45%;
    padding: 30px;
  }
  .tabla > h2 {
    margin-top: 40px;
  }
}

@media screen and (max-width: 550px) {
  .tabla {
    width: 85%;
    padding: 20px;
  }

  .texto2 {
    margin-top: 1300px;
  }
}

@media screen and (max-width: 1700px) {
  .container__cover {
    background-position: 50%;
    background-image: url(./jpg/fondo2.JPG);
  }
}

@media screen and (max-width: 1250px) {
  .container__cover {
    background-image: url(./jpg/fondo2.JPG);
  }

  .container__cover {
    background-position: 0px;
  }

  .container__cover .svg img {
    width: 500px;
  }
}

@media screen and (max-width: 1200px) {
  .container__cover {
    background-image: url(./jpg/fondo2.JPG);
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
}
</style>
