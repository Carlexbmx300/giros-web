<template>
        <mdb-container>
             <mdb-row class='padmid3'>
            <mdb-col class="d-flex align-items-center" col="3">
                <img  class="img-fluid mx-auto shoppic" src="images/iconoC4.png" alt="">
            </mdb-col>
            <mdb-col class="text-left" col="9">            
                <h3>Más beneficios para tí</h3>
                <p>Elige pago en ventanilla y tu dinero llegará normalmente en minutos a un gran número de lugares en Colombia. Selecciona depósito bancario y tu dinero normalmente llegará en unas horas a todos los bancos de Colombia</p>
            </mdb-col>
        </mdb-row>
        </div>
        <mdb-row class='padmid'> 
            <mdb-col class="d-flex align-items-center" col="3">
                <img class="img-fluid mx-auto shoppic"src="images/iconoC3.gif" alt="">
            </mdb-col>
            <mdb-col class="text-left" col="9">
                <h3>Estamos aquí para ayudarte</h3>
                <p>Obtén apoyo humano cuando realmente lo necesites de personas a las que les importa. Contamos con centros de atención al cliente en varios continentes con soporte en varios idiomas. Simplemente contáctanos o visits nuestro Centro de ayuda para asistencia e información. Por último, pero no menos importante, te garantizamos que recibirán tu dinero o te reembolsoremos el total de tu pago.</p>
            </mdb-col>
        </mdb-row>
       
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