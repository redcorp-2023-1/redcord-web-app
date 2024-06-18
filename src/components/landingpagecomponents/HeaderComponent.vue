<script>
export default {
  name: 'headercomponent',
  data() {
    return {};
  },
  methods: {
    openMenu() {
      document.getElementById('nav').classList.add('visible');
    },
    closeMenu() {
      document.getElementById('nav').classList.remove('visible');
    },
  },
};
</script>
<template>
  <pv-toolbar class="Toolbarcontainer">
    <template #start app>
      <pv-button
        class="menu-button"
        icon="pi pi-bars"
        severity="help"
        aria-label="Favorite"
        @click="openMenu"
      ></pv-button>
      <div class="logo">
        <RouterLink to="/">
          <img src="./png/LogoRedcorp.png" width="160" height="80" alt="Logo" />
        </RouterLink>
      </div>
      <nav class="nav" id="nav">
        <ul class="nav-list">
          <li>
            <pv-button
              class="cerrar-menu"
              id="cerrar"
              icon="pi pi-bars"
              severity="danger"
              aria-label="Cancel"
              @click="closeMenu"
            ></pv-button>
          </li>
          <li><pv-divider class="divider" /></li>
          <li>
            <RouterLink to="/"
              ><pv-button label="Inicio" class="mr-2" icon="pi pi-home"></pv-button
            ></RouterLink>
          </li>
          <li><pv-divider class="divider" /></li>
          <li>
            <RouterLink to="/servicios"
              ><pv-button label="Servicios" class="mr-2" icon="pi pi-info-circle"></pv-button
            ></RouterLink>
          </li>
          <li><pv-divider class="divider" /></li>
          <li>
            <RouterLink to="/blog"
              ><pv-button label="Blog" class="mr-2" icon="pi pi-book"></pv-button
            ></RouterLink>
          </li>
          <li><pv-divider class="divider" /></li>
          <li>
            <RouterLink to="/conocenos"
              ><pv-button label="Conócenos" class="mr-2" icon="pi pi-users"></pv-button
            ></RouterLink>
          </li>
          <li><pv-divider class="divider" /></li>
          <li>
            <RouterLink to="/planes"
              ><pv-button label="Precios y planes"  icon="pi pi-money-bill"></pv-button
            ></RouterLink>
          </li>
          <li><pv-divider class="divider" /></li>
          <li>
            <RouterLink to="/contacto"
              ><pv-button label="Contacto" class="mr-2" icon="pi pi-envelope"></pv-button
            ></RouterLink>
          </li>
          <li><pv-divider class="divider" /></li>
          <li>
            <RouterLink to="/login"
              ><pv-button label="Log in" class="mr-2" icon="pi pi-sign-in"></pv-button
            ></RouterLink>
          </li>
          <li><pv-divider class="divider" /></li>
          <li>
            <RouterLink to="/register"
              ><pv-button label="Sign up" class="mr-2" icon="pi pi-user-edit"></pv-button
            ></RouterLink>
          </li>
        </ul>
      </nav>
    </template>
  </pv-toolbar>
</template>

<style>
.Toolbarcontainer {
  background: linear-gradient(to right, #bba9c4, #4338ca) !important;
}
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}

.logo img {
  max-width: 90%;
  height: auto;
} 
.nav-list {
  display: flex;
  list-style-type: none;
  gap: 1rem;
  padding: 0;
  margin: 0px;
  position: relative;
  flex-direction: row;
  align-items: end;
  justify-content: center;
  gap: normal !important;
}
.divider {
  margin-top: 0.95rem !important; /* Reduce el espacio superior del divider */
  margin-bottom: 0.95rem !important; /* Reduce el espacio inferior del divider */
}
.menu-button {
  opacity: 0;
}
.cerrar-menu {
  opacity: 0;
}
pv-button {
  width: 200px !important;
  height: 50px !important;
  border-radius: 25px;
  box-shadow: 0 4px 6px rgba(155, 49, 49, 0.1);
  transition: transform 0.3s, box-shadow 0.3s !important;
}

pv-button:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

@media screen and (max-width: 1540px) {
  .menu-button,
  .cerrar-menu {
    opacity: 1;
  }

  .nav {
    opacity: 0;
    visibility: hidden;
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 1rem;
    top: 0;
    left: 0;
    bottom: 0;
    position: absolute;
    background: linear-gradient(to right, #791da3, #4338ca);
    padding: 2rem;
    box-shadow: 0 0 0 100vmax rgba(0, 0, 0, 0.5);
  }
  .nav.visible {
    opacity: 1;
    visibility: visible;
  }

  .nav-list {
    flex-direction: column;
    align-items: initial;
  }

  .nav-list li {
    margin: 0;
    padding: 0;
  }
}
</style>
