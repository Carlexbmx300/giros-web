<template>
<div class="Navbar">

    <div class="menubar mt-3">
        <p  >Menu</p>
        <button   class="menu_bar" @click="salir= !salir">  <mdb-icon   icon="bars" /></button>

      
    </div>

    
  <div class="aside" v-bind:class="{open_menu:salir}">
    <div class="profile " >
        <img class="img_dash" src="images/profile.png" alt="">
        <h5>Sara Rendon</h5>
        <a href="/controlpanel" >Actualizar Datos</a>
    </div>
   
<div class="MenuDashboard" >

    
    <div class="pestanas ">
        <img src="images/IconoD1.png" class="IcoP" alt="" srcset="">
    <h5><a href="/admin-recarga">Realizar Recargas</a>
            
            </h5>
       
        
        <div class="triangle-right"></div>
        <div class="triangle-bottom"></div>
      
</div>
    
    
     <div class="pestanas">
              <img src="images/IconoD2.png" class="IcoP" alt="" srcset="">
         <h5><a href="/admin-giro"> Giros Internacionales</a></h5>
        <div class="triangle-right"></div>
        <div class="triangle-bottom"></div>
</div>    

<div class="menu-items">
    <li>      <img src="images/IconoD3.png" class="IcoM" alt="" srcset="">Recarga de celular</li>
    <li> <img src="images/IconoD4.png" class="IcoM" alt="" srcset="">Transferencias Enviadas</li>
    <li> <img src="images/IconoD5.png" class="IcoM" alt="" srcset="">Transferecias Recibidas</li>
    <li> <img src="images/IconoD6.png" class="IcoM" alt="" srcset=""><a href="/beneficiarios">Beneficiarios</a></li>
    <li> <img src="images/IconoD7.png" class="IcoM" alt="" srcset=""><a href="/comparte">Comparte y gana</a></li>
</div>

<div class="soporte">
    <img src="images/IconoD8.png" alt="">
    <h5>SOPORTE</h5>
</div>
 </div>   
 
</div>  

</div>  
</template>
<script>
  import {mdbContainer, mdbRow, mdbCol, mdbIcon} from 'mdbvue';
  export default {
  
    components: {
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbIcon
    },
    data(){
        return{
        
            
        salir:false,
      
        };
    }
  }
</script>