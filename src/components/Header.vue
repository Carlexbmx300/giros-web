
<template>
<mdb-navbar expand="large" position="top" class="justify-content-between clearmarpad">
  <mdb-navbar-brand href="#">
    <img src="images/logoweb.png" alt="Giros Express" class='w-50 marginlogo' />
  </mdb-navbar-brand>
  <mdb-navbar-toggler class='h-100'>
    <mdb-navbar-nav class='h-100' right>
      <div class="menu navbar-nav ">
        <mdb-nav-item :to="{name:'home'}" exact>Inicio</mdb-nav-item>

        <mdb-dropdown tag="li" class="nav-item align-middle">
          <mdb-dropdown-toggle tag="a" navLink color="success-color-dark" slot="toggle" waves-fixed>Giros Express</mdb-dropdown-toggle>
          <mdb-dropdown-menu>
            <mdb-dropdown-item :to="{name:'nosotros'}">Nuestra empresa</mdb-dropdown-item>
            <mdb-dropdown-item :to="{name:'preguntas'}">Preguntas frecuentes</mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
        <mdb-nav-item :to="{name:'invita'}">Invita y Gana</mdb-nav-item>
        <mdb-nav-item href="#">Blog</mdb-nav-item>

      </div>
      <div class="menu2 navbar-nav d-flex justify-content-start">
        <mdb-nav-item href="/recarga" class="adoble"><img src="images/iconoMenu3.png" class="icono" alt=""><span>Realiza un<br /> Giro</span></mdb-nav-item>
        <mdb-nav-item href="/recarga" class="adoble"> <img src="images/iconoMenu1.png" class="icono" alt=""><span>Recarga tu <br />Telefono</span></mdb-nav-item>
        <mdb-nav-item href="/recarga" class="asimple"><img src="images/iconoMenu2.png" class="icono d-flex justify-content-center" alt="">
          <span span class="">Registrarse</span>
        </mdb-nav-item>
        <mdb-nav-item href="/recarga" class="asimple"><img src="images/iconoMenu3.png" class="icono" alt=""><span>Iniciar Sesion</span></mdb-nav-item>
        <!--anadido comentario anadimos mas-->
      </div>

    </mdb-navbar-nav>
  </mdb-navbar-toggler>
</mdb-navbar>
</template>

<script>
import {
  mdbDropdown,
  mdbDropdownToggle,
  mdbDropdownMenu,
  mdbDropdownItem,
  mdbContainer,
  mdbNavbar,
  mdbNavbarBrand,
  mdbNavbarToggler,
  mdbNavbarNav,
  mdbNavItem,
  mdbIcon
}
from 'mdbvue';
export default {
  name: 'Header',
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
    mdbContainer,
    mdbDropdown,
    mdbDropdownToggle,
    mdbDropdownMenu,
    mdbDropdownItem,
    mdbIcon
  }
}
</script>
