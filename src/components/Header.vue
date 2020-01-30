
<template>
  <mdb-navbar expand="large" position="top" transparent scrolling>
    <mdb-navbar-brand href="#">
      <img src="images/logoweb.png" alt="">
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav right>
        <div class="menu navbar-nav">
        <mdb-nav-item href="#">Inicio</mdb-nav-item>
   
        <mdb-dropdown tag="li" class="nav-item">
            <mdb-dropdown-toggle tag="a" navLink color="success-color-dark" slot="toggle" waves-fixed>Giros Express</mdb-dropdown-toggle>
            <mdb-dropdown-menu>
              <mdb-dropdown-item to="/nosotros">Nuestra empresa</mdb-dropdown-item>
              <mdb-dropdown-item to="/preguntas">Preguntas frecuentes</mdb-dropdown-item>
            
            </mdb-dropdown-menu>
          </mdb-dropdown>
        <mdb-nav-item href="#">Invita y Gana</mdb-nav-item>
         <mdb-nav-item href="#">Blog</mdb-nav-item>

      </div>
      <div class="menu2 navbar-nav">
         <mdb-nav-item href="#"> <img src="images/iconoMenu1.png" class="icono" alt=""> Recarga tu Telefono</mdb-nav-item>
          <mdb-nav-item href="#" class="linea"><img src="images/iconoMenu2.png" class="icono2" alt="">Registrarse</mdb-nav-item>
           <mdb-nav-item href="#" class="linea"><img src="images/iconoMenu3.png" class="icono3" alt="">Iniciar Sesion</mdb-nav-item>
           <!--anadido comentario anadimos mas-->
       </div>
          
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<script>
  import { mdbDropdown, mdbDropdownToggle, mdbDropdownMenu, mdbDropdownItem, mdbContainer, mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbIcon } from 'mdbvue';
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