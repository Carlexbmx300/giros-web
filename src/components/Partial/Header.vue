
<template>
<mdb-navbar expand="large" class="justify-content-between clearmarpad">
  <mdb-navbar-brand :to="{name:'home'}" >
    <img src="images/logoweb.png" alt="Giros Express" class='w-50 marginlogo' />
  </mdb-navbar-brand>
  <mdb-navbar-toggler class='h-100'>
    <mdb-navbar-nav class='h-100' right>
      <div class="menu navbar-nav ">
        <mdb-nav-item :to="{name:'nosotros'}" >Nosotros</mdb-nav-item>
        <mdb-nav-item :to="{name:'caracteristicas'}" >Caracteristicas</mdb-nav-item>
        <mdb-nav-item :to="{name:'recarga'}">Nuestra empresa</mdb-nav-item>
        <mdb-nav-item :to="{name:'invita'}">Invita y Gana</mdb-nav-item>
        <mdb-nav-item :to="{name:'preguntas'}">Preguntas frecuentes</mdb-nav-item>

      </div>
      <div class="menu2 navbar-nav d-flex justify-content-start">
        <mdb-nav-item :to="{name:'#'}" class="adoble"><img src="images/iconoMenu3.png" class="icono" alt=""><span>Realiza un<br /> Giro</span></mdb-nav-item>
        <mdb-nav-item :to="{name:'#'}" class="adoble"> <img src="images/iconoMenu1.png" class="icono" alt=""><span>Recarga tu <br />Telefono</span></mdb-nav-item>
        <mdb-nav-item href="recarga" class="asimple"><img src="images/iconoMenu2.png" class="icono d-flex justify-content-center" alt="">
          <span span class="">Registrarse</span>
        </mdb-nav-item>
        <mdb-nav-item :to="{name:'#'}" class="asimple"><img src="images/iconoMenu3.png" class="icono" alt=""><span>Iniciar Sesion</span></mdb-nav-item>
        <!--anadido comentario anadimos mas-->
      </div>

    </mdb-navbar-nav>
  </mdb-navbar-toggler>
</mdb-navbar>
</template>

<script>
import {
  mdbDropdownMenu,
  mdbDropdownItem,
  mdbNavbar,
  mdbNavbarBrand,
  mdbNavbarToggler,
  mdbNavbarNav,
  mdbNavItem
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
    mdbDropdownMenu,
    mdbDropdownItem
  }
}
</script>
