<template>
        <mdb-container>
             <mdb-row class='padmid3'>
            <mdb-col class="d-flex align-items-center" col="2">
                <img  class="img-fluid mx-auto shoppic" src="images/iconoP.png" alt="">
            </mdb-col>
            <mdb-col class="text-left" col="10">            
                <h3>¿Qué tan rápido llegará mi dinero a Colombia?</h3>
                <p>Envía dinero a los principales puntos de pago en ventanilla y a los bancos de Colombia, 
                    como Éxito y Bancolombia. Haz depósitos bancarios a todos los bancos, incluidos Bancolombia y DAVIVIENDA.</p>
            </mdb-col>
        </mdb-row>
        </mdb-container>
</template>
<script>
  import {mdbContainer, mdbRow, mdbCol} from 'mdbvue';
  export default {
       name: "Lista",
    components: {
      mdbContainer,
      mdbRow,
      mdbCol
    }
  }
</script>