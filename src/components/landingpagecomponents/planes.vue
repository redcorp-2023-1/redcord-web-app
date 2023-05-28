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
            <h1><span>Los mejores precios para tu empresa</span></h1>
            <br />
            <p>Impulsa el trabajo en equipo, optimiza la organización y gestión de tu empresa.</p>
        </div>
    </section>

    <section id="contenedor_precios">
        <div class="container__planes">
            <div class="planes">
                <div class="texto">
                    <h1>Precios y planes</h1>
                </div>

                <div class="contenedor">
                    <div class="tabla">
                        <h2>Por expansión de espacio y servidores para el plan anual</h2>
                        <p>Membresía</p>
                        <img src="png/2.png" alt="" />
                        <h3><sup>S/. </sup>5,000</h3>
                        <a href="" class="boton">Elegir plan</a>
                    </div>
                    <div class="tabla hover">
                        <h2>Mantenimiento y Actualizaciones (cada 6 meses)</h2>
                        <p>Membresía</p>
                        <img src="png/3.png" alt="" />
                        <h3><sup>S/. </sup>6,000</h3>
                        <a href="" class="boton">Elegir plan</a>
                    </div>
                    <div class="tabla">
                        <h2>Servicio de suscripción anual</h2>
                        <p>Membresía</p>
                        <img src="png/1.png" alt="" />
                        <h3><sup>S/. </sup>90,000</h3>
                        <a href="" class="boton">Elegir plan</a>
                    </div>
                </div>

                <div class="texto">
                    <h1>Para nuestros usuarios</h1>
                </div>

                <div class="contenedor">
                    <div class="tabla">
                        <h2>Suscripción para un usuario</h2>
                        <p>Premiun</p>
                        <img src="png/2.png" alt="" />
                        <h3><sup>S/. </sup>39</h3>
                        <a href="" class="boton">Elegir plan</a>
                    </div>
                    <div class="tabla hover">
                        <h2>Para sección de 10 usuarios</h2>
                        <p>Premiun</p>
                        <img src="png/3.png" alt="" />
                        <h3><sup>S/. </sup>320</h3>
                        <a href="" class="boton">Elegir plan</a>
                    </div>
                    <div class="tabla">
                        <h2>Para sección de 20 usuarios</h2>
                        <p>Premiun</p>
                        <img src="png/1.png" alt="" />
                        <h3><sup>S/. </sup>599</h3>
                        <a href="" class="boton">Elegir plan</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="pregunta">
        <div class="container__pregunta">
            <div class="planes">
                <div class="texto2">
                    <h1>¿Tienes alguna pregunta?</h1>
                </div>

                <div class="bot">
                    <a href="contacto.html">
                        <input type="button" value="Contáctanos" />
                    </a>
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