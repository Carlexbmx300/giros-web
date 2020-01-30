<template>
    <div class="cn5">
        <mdb-container >
            <mdb-row class="mb-5 pt-5">
                <mdb-col xl="12">
                <h4 class=" titulo text-center">Transfiere de forma sencilla</h4>
                 <p>Envia dinero al extrangero desde cualquier lugar, en cualquier momento y desde cualquier dispositivo</p>
                </mdb-col>
            </mdb-row>
            <mdb-row class=" pt-5 pb-5">
                <mdb-col class=" text-xl-center">
                      
                <img src="images/moneda1.png" alt="">
                <p class="">Transferencia en el menor tiempo</p>
                </mdb-col>
                <mdb-col>
                      
                <img src="images/moneda2.png" alt="">
                <p class="">Nuestro servicio de giros es 24/7</p>
                </mdb-col>
                <mdb-col>
                      
                <img src="images/moneda3.png" alt="">
                <p class="">Desde cualquier dispositivo</p>
                </mdb-col>
                <mdb-col>
                      
                <img src="images/moneda3.png" alt="">
                <p class="">Seguridad y confianza</p>
                </mdb-col>
                <mdb-col>
                      
                <img src="images/moneda4.png" alt="">
                <p class=""> Más economia, más beneficios</p>
                </mdb-col>
            </mdb-row>
        </mdb-container>
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