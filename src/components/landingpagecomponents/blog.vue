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
                <img src="png/Rectangle 79.png" />
              </figure>
              <div class="contenido-card">
                <h3>Rediseñando el propósito del trabajo</h3>
                <a href="#">Leer Màs</a>
              </div>
            </div>

            <div class="card">
              <figure>
                <img src="png/Rectangle 81.png" />
              </figure>
              <div class="contenido-card">
                <h3>Mantener el "foco" en momentos de distracción</h3>
                <a href="#">Leer Màs</a>
              </div>
            </div>

            <div class="card">
              <figure>
                <img src="png/Rectangle 82.png" />
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
              Se habla de tantas cualidades del liderazgo: desde resiliencia y agilidad hasta visión
              e integridad…; pero, ¿cuál de ellas es la que más a menudo escasea en los directivos?
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
            <img src="png/Rectangle 170.png" alt="" />
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
              ¿Por qué los concursos de ideas no generan las mejores ideas dentro de la
              organización? O, peor aún, ¿por qué incluso pueden llegar a ahogar la creatividad? El
              éxito de la innovación se debe, en gran medida, a la existencia de propuestas de valor
              que resuenen en los clientes y modelos de negocio que sean escalables y rentables. Sin
              embargo, contar con ideas rompedoras es un ingrediente importante del proceso de
              innovación. Para impulsar la innovación transformadora, es necesario contar con
              personas que puedan pensar fuera de la caja del negocio existente. Cuanto más
              rompedoras sean sus ideas, mejor.
            </p>

            <a href="#">
              <input type="button" value="Leer más" />
            </a>
          </div>
          <div class="svg">
            <img src="png/Rectangle 172.png" alt="" />
          </div>
        </div>
      </div>
    </main>
    <footer>
        <FooterComponent></FooterComponent>
    </footer>
</template>

<style>
</style>