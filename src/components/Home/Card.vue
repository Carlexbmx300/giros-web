<template>
    <mdb-container class="padmid3 bg_eee card_home" fluid>               
        <mdb-container>    
         <h3 class="c_blue">Enviar dinero y realizar el seguimiento de transacciones desde cualquier lugar</h3>
        <mdb-row>
        <mdb-col sm="6">
	<mdb-card>
    <mdb-card-image src="images/iconoCard1.png" alt="Card image cap"></mdb-card-image>
    <mdb-card-body>
      <mdb-card-title>Mas facil y rapido</mdb-card-title>
      <mdb-card-text >  Envía dinero a Colombia y da seguimiento a tus transacciones directamente desde el teléfono. 
                            La App móvil de Xoom está equipada con un inicio de sesión biométrico y cuenta con nuestra tecnología</mdb-card-text>
      <mdb-btn>¡ Hacer un giro !</mdb-btn>
    </mdb-card-body>
  </mdb-card>
			</mdb-col>
                    <mdb-col sm="6">
			<mdb-card>
    <mdb-card-image src="images/iconoCard2.png" alt="Card image cap"></mdb-card-image>
    <mdb-card-body>
      <mdb-card-title>Garantia de devolucion</mdb-card-title>
      <mdb-card-text> Garantizamos que tus fondos serán recibidos o reembolsaremos el total de tu transacción. 
                            ¿Tienes preguntas? Ponte en contacto con nosotros en cualquier momento.</mdb-card-text>
      <mdb-btn>¡ Hacer un giro !</mdb-btn>
    </mdb-card-body>
  </mdb-card>
			</mdb-col>
           
        </mdb-row>
        </mdb-container>
        
    </mdb-container>

</template>
<script>
	import { mdbCard,mdbContainer, mdbRow, mdbCol, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardText, mdbBtn } from 'mdbvue';
	export default {
		name: 'CardPage',
		components: {
            mdbContainer,
      mdbRow,
      mdbCol,
			mdbCard,
			mdbCardImage,
			mdbCardBody,
			mdbCardTitle,
			mdbCardText,
			mdbBtn
		}
	}
</script>