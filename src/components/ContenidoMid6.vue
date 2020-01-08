<template>
    <div class="mid6">
        <div class="contenido6">
        <div class="titulo6 mt-n5">
            <h1 class="h1-responsive">¡ AHORRAR ES GANAR !</h1>
        </div>
        <div class="message6 mt-n4">
            <p>
                El cobro mas economico del mercado, su giro tiene la menos 
                cantidad de deducibles que otras plataformas
            </p>
        </div>
        <div class="images6 mt-n2">
            <mdb-container>
                <mdb-row>
                   <mdb-col xl="3" md="3" col="3">
                        <div class="logo">
                        <img class="logo1" src="images/MONEY.png" alt="">
                        </div>
                   </mdb-col>
                   <mdb-col xl="3" md="3" col="3" >
                        <div class="logo">
                        <img  class="logo2" src="images/MONEYGRAM.png" alt="">
                        </div>
                   </mdb-col>
                   <mdb-col xl="3" md="3" col="3">

                        <div class="logo">
                        <img class="logo3" src="images/MORE.png" alt="">
                        </div>
                   </mdb-col>
                   <mdb-col xl="3" md="3" col="3">
                        <div class="logo">
                        <img class="logo4" src="images/VIGO.png" alt="">
                        </div>
                   </mdb-col>
                </mdb-row>
            </mdb-container>
            
             
             
        </div>
        <div class="boton">
            <button>¡Quiero hacer un <span>GIRO HOY!</span></button>
        </div>
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