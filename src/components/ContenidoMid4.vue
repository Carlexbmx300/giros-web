<template>
    <div class="mid4">
        <div class="titulo4">
                <h4>Transfiere de forma sencilla</h4>
        </div>
        <div class="message4">
            <p>Envia dinero al extrangero desde cualquier lugar, en cualquier momento y desde cualquier dispositivo</p>
        </div>
        
        <div class="images4">
            <mdb-container fluid>
        <mdb-row>
            
            <mdb-col xl="2" md="6" sm="12">
                
                <img src="images/moneda1.png" alt="">
                <p>Transferencia en el menor tiempo</p>
           
            </mdb-col >
            <mdb-col xl="2" md="6" sm="12">
              
                <img src="images/moneda2.png" alt="">
                <p>Nuestro servicio de giros 24/7</p>
             
            </mdb-col>
            <mdb-col  xl="2" md="6" sm="12">
              
                 <img src="images/moneda3.png" alt="">
                <p>Desde cualquier dispositivo</p>
             
            </mdb-col>
            <mdb-col xl="2" md="6" sm="12">
                
                  <img class="float-xl-none float-md-none float-sm-none" src="images/moneda4.png" alt="">
                 <p class="float-sm-none">Seguridad y confianza</p>
             
            </mdb-col>
             <mdb-col xl="2" md="6" sm="12">
             
                  <img src="images/moneda5.png" alt="">
                <p>Mas economia, mas beneficios</p>
               
            </mdb-col>
          
         
            
           
          
           </mdb-row>
         </mdb-container>  
        </div>
        
    </div>
</template>

<script>
  import {mdbContainer, mdbRow, mdbCol} from 'mdbvue';
  export default {
    components: {
      mdbContainer,
      mdbRow,
      mdbCol
    }
  }
</script>