<template>
    <mdb-container class="padmid3 card_nosotros" fluid>               
        <mdb-container>    
       <mdb-row>
        <mdb-col sm="4">
	<mdb-card class="pt-3 clearmarpad hoverable">
    <mdb-card-image src="images/iconoN1.png" alt="Card image cap"></mdb-card-image>
    <mdb-card-body>
      <mdb-card-title>Datos en tiempo real, cuentas claras</mdb-card-title>
      <mdb-card-text  class="text-justify" >Transferencias internacionales, giros y remesas rápidas, transparentes y hasta 8 veces más económicas que la competencia.</mdb-card-text>
    </mdb-card-body>
  </mdb-card>
			</mdb-col>
                    <mdb-col sm="4">
			<mdb-card class="pt-3 clearmarpad hoverable">
    <mdb-card-image src="images/iconoN2.png" alt="Card image cap"></mdb-card-image>
    <mdb-card-body>
      <mdb-card-title>El cliente es lo mas importante</mdb-card-title>
      <mdb-card-text class="text-justify">Estamos para ti siempre que nos necesites. Resolveremos tus dudas y problemas en el momento.</mdb-card-text>
    </mdb-card-body>
  </mdb-card>
			</mdb-col>
                        <mdb-col sm="4">
			<mdb-card class="pt-3 clearmarpad hoverable">
    <mdb-card-image src="images/iconoN3.png" alt="Card image cap"></mdb-card-image>
    <mdb-card-body>
      <mdb-card-title>Costos mas bajos del mercado</mdb-card-title>
      <mdb-card-text class="text-justify">Estamos para ti siempre que nos necesites. Resolveremos tus dudas y problemas en el momento.</mdb-card-text>
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