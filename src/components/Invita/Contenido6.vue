<template>
    <div class="ci6">
        <div class="titulo5">
            <h4>Enviar dinero y realizar el seguimiento de transacciones desde cualquier lugar</h4>
        </div>
        <mdb-container fluid>
        <mdb-row>
            <mdb-col xl="6" lg="6" md="12" sm="12" col="12">
                <div class="card" id="card1">
                    <div class="CardImage">
                        <img src="images/iconoCard1fijo.png" alt="">
                    </div>
                    <div class="message5">
                        <h5>Mas facil y rapido</h5>
                        <p>
                            Envía dinero a Colombia y da seguimiento a tus transacciones directamente desde el teléfono. 
                            La App móvil de Xoom está equipada con un inicio de sesión biométrico y cuenta con nuestra tecnología
                        </p>
                    </div>
                    <div class="boton">
                        <button>
                            ¡ Hacer un giro !
                        </button>
                    </div>

                </div>
            </mdb-col>
            <mdb-col xl="6" lg="6" md="12" sm="12" col="12">
                <div class="card mb-sm-5 mb-5" id="card2">
                     <div class="CardImage">
                        <img src="images/iconoCard2.png" alt="">
                    </div>
                     <div class="message5">
                        <h5>Garantia de devolucion</h5>
                        <p>
                            Garantizamos que tus fondos serán recibidos o reembolsaremos el total de tu transacción. 
                            ¿Tienes preguntas? Ponte en contacto con nosotros en cualquier momento.
                        </p>
                    </div>
                    <div class="boton">
                        <button>
                            ¡ Hacer un giro !
                        </button>
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