<template>
<mdb-container class="padmid5 bg_eee" fluid>
  <mdb-container>
         <h3 class="c_blue">Transfiere de forma sencilla</h3>
                   <p class="padmid">Envia dinero al extrangero desde cualquier lugar, en cualquier momento y desde cualquier dispositivo</p>
            <mdb-row>            
            <mdb-col md="2dot4">                
                <img src="images/moneda1.png" class="img-fluid" alt="">
                <p class="c_blue fw_600 padmid">Transferencia en el <br/>menor tiempo</p>           
            </mdb-col >
            <mdb-col md="2dot4">              
                <img src="images/moneda2.png" class="img-fluid" alt="">
                <p class="c_blue fw_600 padmid">Nuestro servicio de <br/>giros 24/7</p>
             
            </mdb-col>
            <mdb-col md="2dot4">              
                 <img src="images/moneda3.png" class="img-fluid" alt="">
                <p class="c_blue fw_600 padmid">Desde cualquier <br/>dispositivo</p>
             
            </mdb-col>
            <mdb-col md="2dot4">
                
                  <img src="images/moneda4.png" class="img-fluid" alt="">
                 <p class="c_blue fw_600 padmid">Seguridad y <br/>confianza</p>
             
            </mdb-col>
             <mdb-col md="2dot4">
             
                  <img src="images/moneda5.png" class="img-fluid" alt="">
                <p class="c_blue fw_600 padmid">Mas economia, <br/>mas beneficios</p>
               
            </mdb-col>
               </mdb-row>        
         </mdb-container>  
         </mdb-container>     
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