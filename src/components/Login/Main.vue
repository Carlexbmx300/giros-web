<template>
<mdb-container class="bg_slider_login" fluid>
  <mdb-container class="h-100" fluid>
  <mdb-row class="container_slider h-100">
    <mdb-col sm="6">
      </mdb-col>
    <mdb-col id="main_slider" class="d-flex align-items-md-center card_round_border h-100" sm="6">
      <mdb-card class="clearmarpad rounded-lg">
    <mdb-card-body class="d-flex align-items-center justify-content-center bg_eee">
      <img  class="img-fluid" src="images/IconL.png" alt="">
      <h3 class="c_blue">INGRESO DE USUARIO</h3>
    </mdb-card-body>
    <mdb-card-body>
       <mdb-input type="text" class="blue__mdbinput" size="lg" label="Nombre de Usuario" outline />
       <mdb-input type="password" class="blue__mdbinput" size="lg" label="Su clave" outline />
<mdb-btn class="w-100 m-0 mb-3 blue_form_button" color="white">INGRESAR <img  class="img-fluid mx-auto shoppic" src="images/button_login.png" alt=""></mdb-btn>
      <mdb-card-text class="text-center"><span class="c_blue font-weight-bold">*</span> Si no tiene una cuenta es momento de <br/> registrarse  con nosotros <span class="c_blue font-weight-bold">REGISTRATE AQUI</span></mdb-card-text>
      <mdb-card-text class="text-center"><span class="c_blue font-weight-bold">*</span> ¡UPPS! olvide mi clave de acceso, <br/> <span class="c_blue font-weight-bold">RECORDAR CONTRASENA</span></mdb-card-text>
      
    </mdb-card-body>
  </mdb-card>
 
    </mdb-col>
  </mdb-row>
</mdb-container>
</mdb-container>
</template>
<script>
import { mdbContainer, mdbRow, mdbCol, mdbCard, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardText, mdbBtn, mdbInput  } from 'mdbvue';
export default {
  name: "Main",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
			mdbCardImage,
			mdbCardBody,
			mdbCardTitle,
			mdbCardText,
      mdbBtn,
      mdbInput
  },
  data() {
    return {
      value: ''

    };
  }
}
</script>
