<template>
    <mdb-container class="pt-5 bg_eee" fluid>
            <mdb-row>
                
                <mdb-col class="d-flex align-items-end" sm="6">
                    <img src="images/fondoSilueta1.png" class="img-fluid" alt="Tablet Giros Express">
                </mdb-col>
                <mdb-col class="d-flex align-items-center" sm="6" >
                  <mdb-container>
                    <h1 class="c_blue text-left font-weight-bold">CONOCE NUESTRO PLANES</h1>
                     <h3 class="black-text text-left">Tenemos para ti los mejores incentivos</h3>
                          <mdb-container>
             <mdb-row class='padmid'>
            <mdb-col class="d-flex align-items-center" col="3">
                <img  class="img-fluid mx-auto shoppic" src="images/iconoC7.png" alt="">
            </mdb-col>
            <mdb-col class="text-left" col="9">            
                <h3 class="c_blue">PROYECIÓN</h3>
                <p>Envía dinero a los principales puntos de pago en ventanilla y a los bancos de Colombia, como Éxito y Bancolombia. Haz depósitos bancarios a todos los bancos, incluidos Bancolombia y DAVIVIENDA.</p>
            </mdb-col>
        </mdb-row>
        <mdb-row class='padmid'> 
            <mdb-col class="d-flex align-items-center" col="3">
                <img class="img-fluid mx-auto shoppic"src="images/iconoC8.png" alt="">
            </mdb-col>
            <mdb-col class="text-left" col="9">
                <h3 class="c_blue">FIDELIZACIÓN</h3>
                <p>Envía dinero a los principales puntos de pago en ventanilla y a los bancos de Colombia, como Éxito y Bancolombia. Haz depósitos bancarios a todos los bancos, incluidos Bancolombia y DAVIVIENDA.</p>
            </mdb-col>
        </mdb-row>
         <mdb-row class='padmid'> 
         <div class="button_yellow_container padmid text-left">
                <mdb-btn class="black-text">CONOCE MÁS</mdb-btn>
                 </div>
                  </mdb-row>
        </mdb-container>  
                       </mdb-container>
                </mdb-col>
                
            </mdb-row>
         </mdb-container>

</template>
<script>
  import {mdbContainer, mdbRow, mdbCol, mdbBtn } from 'mdbvue';
  export default {
    name: "Input",
    components: {
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbBtn
    },
    data() {
      return {
        value: ''
        
      };
    }
  }
</script>