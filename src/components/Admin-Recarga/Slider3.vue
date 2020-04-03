<template>
<div class="slider">
    <mdb-container fluid>
        <mdb-row>
            <mdb-col xl="8" class="text-left">
                <h5 class="mt-5">Bienvenido a su</h5>
                <h3 class="mt-n2">DASHBOARD</h3>
            </mdb-col>
            <mdb-col xl="4" class="align-self-end">
                 <img class="logo" src="images/LogoW.png" alt="">
            </mdb-col>
        </mdb-row>
        <mdb-row class="ml-5 mr-3 mt-5 mb-5" >
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
            <div class="serv-card  w-100">
                <h4 class="azul text-left ml-4">Resumen</h4>
                <mdb-row>
                    <mdb-col xl="10" offsetXl="1" class="border-bottom border-dark">
                    <p class="text-dark">NO SE HAN AGREGADO CONTENIDOS</p>
                    </mdb-col>
                </mdb-row>


            </div>
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