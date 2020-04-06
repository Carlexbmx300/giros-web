<template>
<div class="slider">
    <mdb-container fluid>
        <mdb-row class="d-xl-flex d-none">
            <mdb-col xl="8" class="text-left">
                <a href="/dashboard"><h5 class="mt-5">Bienvenido a su</h5>
                <h3 class="mt-n2">DASHBOARD</h3></a>
            </mdb-col>
            <mdb-col xl="4" class="align-self-end">
                 <img class="logo" src="images/LogoW.png" alt="">
            </mdb-col>
        </mdb-row>
        <mdb-row class="ml-5 mr-3 mt-5 mb-3  d-xl-flex  d-none" >
                <div class="input-group ">
                    <input type="text" class="form-control" placeholder="BUSCAR TRANSFERENCIA" aria-label="Username" aria-describedby="basic-addon">
                    <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon">
                     <mdb-icon icon="search" />
                    </span>
                    </div>
                    
                </div>
        </mdb-row>
        

       <mdb-row>
            <mdb-col xl="9" class="ml-5 rd rdx d-xl-block d-none">
          
            <mdb-row class="mt-1">
                <mdb-col col="10" offset="1" class="mt-2 pt-4">
                    <h4 class="mt-2">Realiza tu recarga con nosotros</h4>
                </mdb-col>
            </mdb-row>
            <mdb-row>
                <mdb-col xl="8" offsetXl='2' class="text-center mt-3">
                     <p class="text-white">
                         Recargar nunca a sido 
                        mas fácil, desde tu 
                        celular o computadora 
                        personal
                    </p>
                </mdb-col>
            </mdb-row>
           <mdb-row>
               <mdb-col col="12" class="mt-4 mb-5">
                    <img class="btn_rec" src="images/btngrecargaB.png" alt="">
                    <button class="button_yellow  mt-4">¡Quiero hacer una RECARGA!</button>
               </mdb-col>
           </mdb-row>
            <mdb-row class="mt-5 pt-1">
                <mdb-col col='12' class="mt-n2">
                      <img class="pareja" src="images/lineasR.png" alt="">
                </mdb-col>
            </mdb-row>
         
            
        </mdb-col>
       </mdb-row>
<mdb-row class="d-xl-none d-block">
                <mdb-col xl="12">
                <div class="serv-card w-100 mt-5">
                      <mdb-row>
                     
                      <mdb-col col="2" class="ml-2 align-self-center">
                        <img src="images/IconD4.png " alt="">
                      </mdb-col>
                      <mdb-col col="10" class="ml-n2">
                        <p class="mt-3 text-left ml-3">Recibir Envio</p>
                        <p class="contenido mt-n3 text-left ml-3 w-75   ">Aprende como realizar una transferencia con nuestra plataforma </p>
                      </mdb-col>
                   
                    </mdb-row>


                  </div>
                     </mdb-col>
            </mdb-row>


    
   






      
    </mdb-container>




   
</div>
</template>

<script>
 import { mdbContainer, mdbRow, mdbCol,mdbIcon } from 'mdbvue';

export default {
    

    name: 'CarouselPage',
    components: {
      
       mdbContainer, 
       mdbRow, 
       mdbCol,
       mdbIcon,
      
    }
}
</script>