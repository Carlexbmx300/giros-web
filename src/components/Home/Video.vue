<template>
      <mdb-container class="bg_mid3 padmid3" fluid>
        <mdb-row >
            <mdb-col sm="6">
              <img  class="img-fluid" src="images/Screenshot_1.jpg" alt="">
            </mdb-col>
            <mdb-col class="d-flex align-items-center" sm="6">   
            <div>          
                    <h2 class="c_yellow text-left">4 Pasos para un giro</h2>            
                    <h3 class="c_white text-left ">COMPLETA DATOS</h3>
                    <div class="c_white text-left padmid w-responsive">
                        Realizar un giro nunca a sido tan facil,
                        mira el video y aprende como en 4 sencillos pasos puedes enviar dinero
                     </div>
                            <button class='button_yellow'>Conoce mas</button>
                             </div>
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