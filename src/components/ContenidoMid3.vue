<template>
    <div class="mid3">
      <mdb-container fluid>
        <mdb-row>
            <mdb-col xl="6" md="6" sm="6" col="12">
              <img  class="mb-col-n5" src="images/Screenshot_1.jpg" alt="">
            </mdb-col>
            <mdb-col xl="6" md="6" sm="6" col="12">
                 <div class="contenido3 mt-xl-5 mt-sm-5 mt-n5"  >
                    <div class="titulo3">
                    <h2 >4 Pasos para un giro</h2>
                    </div>
                    <div class="subtitulo">
                    <h4>COMPLETA DATOS</h4>
                    </div>
                    <div class="message3">
                    <p>
                        Realizar un giro nunca a sido tan facil,
                        mira el video y aprende como en 4 sencillos pasos puedes enviar dinero
                    </p>
                    </div>
                    <div class="button">
                        <button>CONOCE MAS</button>
                    </div>
               </div> 
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