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
        <mdb-row class="ml-5 mr-3 mt-5 mb-5  d-xl-flex  d-none" >
                <div class="input-group ">
                    <input type="text" class="form-control" placeholder="BUSCAR TRANSFERENCIA" aria-label="Username" aria-describedby="basic-addon">
                    <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon">
                     <mdb-icon icon="search" />
                    </span>
                    </div>
                    
                </div>
        </mdb-row>

        <mdb-row class="d-xl-flex  d-none">
            <div class="serv-card  w-100">
                <h4 class="azul text-left ml-4">Resumen</h4>
                <mdb-row class="mb-5"> 
                    <mdb-col xl="10" offsetXl="1" class="border-bottom border-dark  ">
                    <p class="text-dark">NO SE HAN AGREGADO CONTENIDOS</p>
                    </mdb-col>
                </mdb-row>
              


            </div>
            <mdb-row class="mt-n4 d-xl-flex  d-none ">
                  <mdb-col xl="6" offsetXl="3" >
                    <div class="textbox ml-4 bg-azul">
                        <mdb-row>
                        <mdb-col col="5" class="align-self-center">
                            <p class="lp ml-3 mt-2 light">Total pagado</p>
                        </mdb-col>
                        <mdb-col col="7" class="text-left align-self-center ml-n3">
                        <p class="mt-2">$00000 COP</p>
                        </mdb-col>
                        </mdb-row>
                    </div>
            </mdb-col>
              </mdb-row>
               
        </mdb-row>
        <mdb-row>
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