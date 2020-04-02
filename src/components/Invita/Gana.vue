<template>
    <mdb-container class="padmid3 card_home" fluid>               
        <mdb-container>    
         <h3 class="c_blue">Gana con Giros Express</h3>
        <mdb-row>
        <mdb-col sm="6">
             <mdb-row class='padmid3'>
            <mdb-col class="d-flex align-items-center" col="3">
                <img  class="img-fluid mx-auto shoppic" src="images/iconoC5.png" alt="">
            </mdb-col>
            <mdb-col class="text-left" col="9">            
                <h3 class="c_blue">Recarga y gana</h3>
                <p>Envía dinero a los principales puntos de pago en ventanilla y a los bancos de Colombia, como Éxito y Bancolombia. Haz depósitos bancarios a todos los bancos, incluidos Bancolombia y DAVIVIENDA.</p>
            </mdb-col>
        </mdb-row>
			</mdb-col>
                    <mdb-col sm="6">
			<mdb-row class='padmid3'>
            <mdb-col class="d-flex align-items-center" col="3">
                <img  class="img-fluid mx-auto shoppic" src="images/iconoC6.png" alt="">
            </mdb-col>
            <mdb-col class="text-left" col="9">            
                <h3 class="c_blue">Ahorrar es Ganar</h3>
                <p>Envía dinero a los principales puntos de pago en ventanilla y a los bancos de Colombia, como Éxito y Bancolombia. Haz depósitos bancarios a todos los bancos, incluidos Bancolombia y DAVIVIENDA.</p>
            </mdb-col>
        </mdb-row>
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