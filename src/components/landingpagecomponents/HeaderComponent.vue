<script>
export default{
    name:'headercomponent',
    data() {
        return {
            
        };
    },
    methods: {
        openMenu() {
            document.getElementById('nav').classList.add('visible');
        },
        closeMenu() {
            document.getElementById('nav').classList.remove('visible');
        }
    }
    
}
</script>
<template>
    <pv-toolbar class="Toolbarcontainer">
        <template #start app >
            
           
            <pv-button class="menu-button" icon="pi pi-plus" severity="help" aria-label="Favorite" @click="openMenu"></pv-button>
           

            <div class="logo">
                
                <RouterLink to="/">
                    <img src="./png/LogoRedcorp.png" width="160" height="80" alt="Logo" />
                </RouterLink>
            </div>
        
            <nav  class="nav"  id="nav">
                
                <ul class="nav-list">
                    <li><pv-button  class="cerrar-menu" id="cerrar" icon="pi pi-times" severity="danger" aria-label="Cancel" @click="closeMenu"></pv-button></li>
                    <li><RouterLink to="/"><pv-button label="Inicio"  class="mr-2"></pv-button></RouterLink></li>
                    <li><RouterLink to="/servicios"><pv-button label="¿Qué es Redcorp? y nuestros servicios"  class="mr-2"></pv-button></RouterLink></li>
                    <li><RouterLink to="/blog"><pv-button label="Blog"  class="mr-2"></pv-button></RouterLink></li>
                    <li><RouterLink to="/conocenos"><pv-button label="Conócenos"  class="mr-2"></pv-button></RouterLink></li>
                    <li><RouterLink to="/planes"><pv-button label="Precios y planes"  class="mr-2"></pv-button></RouterLink></li>
                    <li><RouterLink to="/contacto"><pv-button label="Contacto"  class="mr-2"></pv-button></RouterLink></li>
                    <li><RouterLink to="/login"><pv-button label="Log in"  class="mr-2"></pv-button></RouterLink></li>
                    <li><RouterLink to="/register"><pv-button label="Sign up"  class="mr-2"></pv-button></RouterLink></li>
                </ul>
            </nav>

        </template>
        
        

    </pv-toolbar>
</template> 

<style>
.p-toolbar {
  background: #791da3;
  border: 0px solid #dee2e6;
}

.Toolbarcontainer
{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;

}

.nav-list
{
    display: flex;
    list-style-type:none;
    gap:1rem;
}
.menu-button
{
    opacity: 0;
}
.cerrar-menu
{
    opacity: 0;
}


@media screen and (max-width:1540px)
{
    .menu-button,
    .cerrar-menu{
        opacity: 1;
    }

    .nav{
        opacity: 0;
        visibility: hidden;
        display: flex;
        flex-direction: column;
        align-items: end;
        gap:1rem;
        top:0;
        left: 0;
        bottom:0;
        position: absolute;
        background-color: whitesmoke;
        padding: 2rem;
        box-shadow: 0 0 0 100vmax rgba(0, 0, 0,.5);
    }
    .nav.visible{
        opacity: 1;
        visibility: visible;
    }


    .nav-list{
        flex-direction: column;
        align-items: end;
    }

    .nav-list li a{
        color:#ececec
    }
}

</style>