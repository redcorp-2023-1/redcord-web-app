<script setup>
import FooterComponent from './FooterComponent.vue';
import HeaderComponent from './HeaderComponent.vue';


</script>
<template>
    <header>
        <HeaderComponent></HeaderComponent>
    </header>
    <section id="banner">
        <div class="contenido-bannerplanes">
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

                <div class="contenedor_planes">
                    <div class="tabla">
                        <h2>Por expansión de espacio y servidores para el plan anual</h2>
                        <p>Membresía</p>
                        <img src="./png/2.png" alt="" />
                        <h3><sup>S/. </sup>5,000</h3>
                        <a href="" class="boton">Elegir plan</a>
                    </div>
                    <div class="tabla hover">
                        <h2>Mantenimiento y Actualizaciones (cada 6 meses)</h2>
                        <p>Membresía</p>
                        <img src="./png/3.png" alt="" />
                        <h3><sup>S/. </sup>6,000</h3>
                        <a href="" class="boton">Elegir plan</a>
                    </div>
                    <div class="tabla">
                        <h2>Servicio de suscripción anual</h2>
                        <p>Membresía</p>
                        <img src="./png/1.png" alt="" />
                        <h3><sup>S/. </sup>90,000</h3>
                        <a href="" class="boton">Elegir plan</a>
                    </div>
                </div>

                <div class="texto">
                    <h1>Para nuestros usuarios</h1>
                </div>

                <div class="contenedor_planes">
                    <div class="tabla">
                        <h2>Suscripción para un usuario</h2>
                        <p>Premiun</p>
                        <img src="./png/2.png" alt="" />
                        <h3><sup>S/. </sup>39</h3>
                        <a href="" class="boton">Elegir plan</a>
                    </div>
                    <div class="tabla hover">
                        <h2>Para sección de 10 usuarios</h2>
                        <p>Premiun</p>
                        <img src="./png/3.png" alt="" />
                        <h3><sup>S/. </sup>320</h3>
                        <a href="" class="boton">Elegir plan</a>
                    </div>
                    <div class="tabla">
                        <h2>Para sección de 20 usuarios</h2>
                        <p>Premiun</p>
                        <img src="./png/1.png" alt="" />
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
                    <RouterLink to="/contacto">
                        <input type="button" value="Contáctanos" />
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
    padding: 0 50px;
    background-image: url(./jpg/fondoPrecios.jpg);
    height: 55vh;
    background-size: cover;
    background-position: center;
}

.contenido-bannerplanes {
    
    color: #fff;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}

.contenido-bannerplanes h1 {
    font-size: 42px;
    font-weight: 400;
    padding: 10px 0px;
    font-weight: bold;
    font-family: 'Roboto Slab', sans-serif;
}

.contenido-bannerplanes p {
    font-size: 20px;
    font-weight: 400;
    padding: 10px 0px;
    font-family: 'Roboto Flex', sans-serif;
}

.contenido-bannerplanes h3 span {
    font-weight: 600;
    line-height: 25px;
}



.texto {
    margin-top: 50px;
    text-align: center;
    font-family: 'Roboto Slab', sans-serif;
    font-size: 30px;
    margin-bottom: 50px;
}

.contenedor_planes {
    width: 90%;
    max-width: 900px;
    margin: auto;
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    
    padding-bottom: 100px;
    position: relative;
}

.tabla {
    width: 33%;
    height: 550px;
    margin: auto;
    border: none;
    border-radius: 4px;
    box-shadow: 0px 0px 4px 0px #665075;
    padding: 60px;
    text-align: center;
    flex-grow: 1;
    color: #665075;
}

.tabla > h2 {
    font-family: 'Roboto Slab';
    font-size: 25px;
    margin-bottom: 35px;

    text-align: center;
}

.tabla img {
    width: 64px;
    margin-bottom: 35px;
}

.tabla > h3 {
    font-size: 30px;
    margin-bottom: 1px;
}

.tabla > p {
    display: block;
    margin-bottom: 20px;
}

.boton {
    display: inline-block;
    font-family: 'Roboto Condensed';
    width: 150px;
    padding: 12px;
    background: #c9725b;
    text-decoration: none;
    color: white;
    border-radius: 100px;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    margin: auto;
}

.tabla:hover {
    background: #665075;
    color: #f1f1f2;
    transition: 0.5s all;
    transform: scale(1.1);
    cursor: pointer;
    border: none;
}

#pregunta {
    height: 300px;
}

.container__pregunta {
    align-content: center;
    justify-content: center;
}

.texto2 {
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



@media screen and (max-width: 1300px) {
    
}

@media screen and (max-width: 1200px) {



    .container__banner .text {
        max-width: 100%;
        text-align: center;
        align-items: center;
    }






}
@media screen and (max-width: 507px) {
    .contenido-bannerplanes h1 {
        margin-top: 100px;
        font-size: 30px;
    }

    .contenido-bannerplanes p {
        font-size: 15px;
    }


}

</style>